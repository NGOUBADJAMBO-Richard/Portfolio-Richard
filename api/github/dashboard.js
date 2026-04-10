const CACHE_TTL_MS = 10 * 60 * 1000;
const dashboardCache = new Map();

const GITHUB_USER = process.env.GITHUB_USER || "NGOUBADJAMBO-Richard";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

const ghHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (GITHUB_TOKEN) {
  ghHeaders.Authorization = `Bearer ${GITHUB_TOKEN}`;
}

async function ghFetch(url) {
  const res = await fetch(url, { headers: ghHeaders });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API error ${res.status}: ${body}`);
  }
  return res.json();
}

async function fetchAllRepos(user) {
  const repos = [];

  for (let page = 1; page <= 10; page += 1) {
    const chunk = await ghFetch(
      `https://api.github.com/users/${user}/repos?per_page=100&type=owner&sort=updated&page=${page}`,
    );

    if (!Array.isArray(chunk) || chunk.length === 0) break;
    repos.push(...chunk);
    if (chunk.length < 100) break;
  }

  return repos;
}

function computeActivitySeries(events) {
  const map = new Map();
  const today = new Date();

  for (let i = 13; i >= 0; i -= 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    map.set(day.toISOString().slice(0, 10), 0);
  }

  events.forEach((event) => {
    const key = String(event.created_at || "").slice(0, 10);
    if (map.has(key)) map.set(key, map.get(key) + 1);
  });

  return Array.from(map.entries()).map(([date, value]) => ({ date, value }));
}

async function computeGlobalLanguages(repos) {
  const buckets = {};
  const results = await Promise.all(
    repos.map((repo) => ghFetch(repo.languages_url).catch(() => ({}))),
  );

  results.forEach((entry) => {
    Object.entries(entry).forEach(([language, bytes]) => {
      buckets[language] = (buckets[language] || 0) + bytes;
    });
  });

  const totalBytes = Object.values(buckets).reduce(
    (sum, value) => sum + value,
    0,
  );
  if (!totalBytes) {
    const fallback = {};
    repos.forEach((repo) => {
      if (!repo.language) return;
      fallback[repo.language] = (fallback[repo.language] || 0) + 1;
    });

    const fallbackTotal = Object.values(fallback).reduce(
      (sum, value) => sum + value,
      0,
    );
    return Object.entries(fallback)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => ({
        name,
        pct: Math.round((count / Math.max(fallbackTotal, 1)) * 100),
      }));
  }

  return Object.entries(buckets)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, bytes]) => ({
      name,
      pct: Math.round((bytes / totalBytes) * 100),
    }));
}

function detectTaxonomy(repos) {
  const toolKeywords = [
    "react",
    "next",
    "flutter",
    "firebase",
    "node",
    "express",
    "mongodb",
    "mysql",
    "typescript",
    "javascript",
    "tailwind",
    "bootstrap",
    "drupal",
    "wordpress",
    "docker",
    "python",
    "api",
    "jwt",
    "sql",
  ];
  const featureKeywords = [
    "dashboard",
    "auth",
    "authentication",
    "chat",
    "ecommerce",
    "portfolio",
    "cms",
    "analytics",
    "mobile",
    "web",
    "api",
    "payment",
    "admin",
    "seo",
    "automation",
    "realtime",
  ];

  const tools = {};
  const features = {};

  repos.forEach((repo) => {
    const bag =
      `${repo.name || ""} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
    toolKeywords.forEach((keyword) => {
      if (bag.includes(keyword)) tools[keyword] = (tools[keyword] || 0) + 1;
    });
    featureKeywords.forEach((keyword) => {
      if (bag.includes(keyword))
        features[keyword] = (features[keyword] || 0) + 1;
    });
  });

  const toList = (obj) =>
    Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .map(([name, count]) => ({ name, count }));

  return {
    tools: toList(tools),
    features: toList(features),
  };
}

function normalizeDashboardData(profile, repos, events, languages, taxonomy) {
  const now = new Date();
  const activeSince = new Date(now);
  activeSince.setDate(now.getDate() - 30);

  const allRepos = repos.map((repo) => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
    updatedAt: repo.pushed_at,
    topics: Array.isArray(repo.topics) ? repo.topics : [],
    archived: !!repo.archived,
  }));

  const topRepos = [...allRepos]
    .sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0))
    .slice(0, 6);

  const stars = allRepos.reduce((sum, repo) => sum + (repo.stars || 0), 0);
  const forks = allRepos.reduce((sum, repo) => sum + (repo.forks || 0), 0);
  const activeRepos = allRepos.filter(
    (repo) => repo.updatedAt && new Date(repo.updatedAt) >= activeSince,
  ).length;

  return {
    profile: {
      login: profile.login || GITHUB_USER,
      avatarUrl: profile.avatar_url || null,
      bio: profile.bio || "",
      followers: profile.followers || 0,
      publicReposCount: profile.public_repos || allRepos.length,
    },
    kpis: {
      stars,
      forks,
      activeRepos,
      events14: events.filter((event) => !!event?.type).length,
    },
    languages,
    activitySeries: computeActivitySeries(events),
    tools: taxonomy.tools,
    features: taxonomy.features,
    topRepos,
    allRepos,
    syncedAt: new Date().toISOString(),
  };
}

async function buildGithubDashboard(user) {
  const profile = await ghFetch(`https://api.github.com/users/${user}`);
  const repos = await fetchAllRepos(user);
  const events = await ghFetch(
    `https://api.github.com/users/${user}/events/public?per_page=100`,
  );
  const [languages, taxonomy] = await Promise.all([
    computeGlobalLanguages(repos),
    Promise.resolve(detectTaxonomy(repos)),
  ]);

  return normalizeDashboardData(profile, repos, events, languages, taxonomy);
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const user = req.query.user || GITHUB_USER;
  const cacheKey = user;
  const cached = dashboardCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    res.setHeader("Cache-Control", "public, max-age=600");
    return res.status(200).json(cached.payload);
  }

  try {
    const payload = await buildGithubDashboard(user);
    dashboardCache.set(cacheKey, { timestamp: Date.now(), payload });
    res.setHeader("Cache-Control", "public, max-age=600");
    return res.status(200).json(payload);
  } catch (error) {
    return res.status(502).json({
      error: "Unable to load GitHub data",
      message: error.message,
    });
  }
};
