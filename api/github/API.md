# 🔌 GitHub API Documentation

## Service de Procuration (Proxy) GitHub API

Ce document décrit les endpoints API disponibles sur le serveur backend Express pour accéder aux données GitHub.

---

## 📌 Vue d'ensemble

**Base URL**: `https://portfolio-richard.vercel.app/api`

**Service**: GitHub API Proxy avec cache local  
**Authentification**: GitHub Token (optionnel, depuis env vars)  
**Rate Limiting**: Cache 10 minutes par endpoint  
**Format Response**: JSON

### Features

- ✅ Cache local pour éviter rate limits
- ✅ Récupération paginer repos
- ✅ Calcul statiques activité
- ✅ Agrégation données utilisateur
- ✅ Fallback gracieux sans token

---

## 🔐 Authentification

### Setup Optional GitHub Token

Pour maximiser les limites d'appels API GitHub (100 vs 60 par heure):

1. Créer Personal Access Token sur GitHub
   - Aller sur https://github.com/settings/tokens
   - Créer token `repo:read` scope

2. Ajouter à `.env`:

   ```
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxx
   ```

3. Redémarrer serveur
   ```bash
   npm start
   ```

---

## 📡 Endpoints Disponibles

### 1. Dashboard Utilisateur GitHub

**Endpoint**:

```
GET /api/github/dashboard
```

**Description**: Récupère les statistiques complètes du profil GitHub

**Params**: Aucun

**Response** (200 OK):

```json
{
  "user": {
    "login": "NGOUBADJAMBO-Richard",
    "name": "Richard NGOUBADJAMBO",
    "bio": "Ingénieur Fullstack & Mobile",
    "followers": 42,
    "following": 15,
    "public_repos": 25,
    "avatar_url": "https://avatars.githubusercontent.com/u/xxxxx?v=4",
    "blog": "https://portfolio-richard.vercel.app",
    "location": "Afrique",
    "company": "M.G.N CodeWave",
    "twitter_username": "ngoubadjambo"
  },
  "repos": [
    {
      "name": "Portfolio-Richard",
      "description": "Portfolio professionnel avec GitHub dashboard",
      "url": "https://github.com/NGOUBADJAMBO-Richard/Portfolio-Richard",
      "language": "JavaScript",
      "stars": 15,
      "forks": 3,
      "watchers": 2,
      "updated_at": "2024-04-12T10:30:00Z",
      "is_fork": false,
      "topics": ["portfolio", "fullstack", "javascript"]
    }
  ],
  "stats": {
    "total_repositories": 25,
    "total_stars": 156,
    "total_forks": 42,
    "languages": {
      "JavaScript": 35,
      "Python": 20,
      "Dart": 15,
      "HTML": 10,
      "CSS": 10,
      "Other": 10
    },
    "most_used_language": "JavaScript",
    "recent_activity_count": 47,
    "active_repos_30_days": 3
  },
  "lastSync": "2024-04-12T10:30:00Z",
  "cacheInfo": {
    "cached": true,
    "ttl_remaining": 540,
    "ttl_total": 600
  }
}
```

**Headers Response**:

```
Content-Type: application/json
Cache-Control: public, max-age=600
```

---

### 2. Activité GitHub (14 derniers jours)

**Endpoint**:

```
GET /api/github/activity
```

**Description**: Récupère les événements GitHub des 14 derniers jours

**Params**:

- `days` (optionnel): Nombre de jours à récupérer (défaut: 14)

**Query Example**:

```
GET /api/github/activity?days=7
```

**Response** (200 OK):

```json
{
  "events": [
    {
      "type": "PushEvent",
      "repo": "NGOUBADJAMBO-Richard/Portfolio-Richard",
      "timestamp": "2024-04-12T10:30:00Z",
      "action": "Pushed 3 commits",
      "details": "Update SEO metadata and documentation"
    },
    {
      "type": "PullRequestEvent",
      "repo": "NGOUBADJAMBO-Richard/flutter-app",
      "timestamp": "2024-04-11T15:45:00Z",
      "action": "Opened PR",
      "details": "#42: Add dark mode support"
    }
  ],
  "summary": {
    "total_events": 47,
    "pushes": 24,
    "pull_requests": 12,
    "issues": 8,
    "other": 3,
    "date_range": {
      "start": "2024-03-29",
      "end": "2024-04-12"
    }
  },
  "lastSync": "2024-04-12T10:30:00Z"
}
```

---

### 3. Repos Spécifique

**Endpoint**:

```
GET /api/github/repos/:owner/:repo
```

**Description**: Obtient les détails d'un repo spécifique

**Params**:

- `owner` (string): Propriétaire du repo
- `repo` (string): Nom du repo

**Example**:

```
GET /api/github/repos/NGOUBADJAMBO-Richard/Portfolio-Richard
```

**Response** (200 OK):

```json
{
  "name": "Portfolio-Richard",
  "owner": "NGOUBADJAMBO-Richard",
  "url": "https://github.com/NGOUBADJAMBO-Richard/Portfolio-Richard",
  "description": "Portfolio professionnel avec GitHub dashboard",
  "language": "JavaScript",
  "stars": 15,
  "forks": 3,
  "watchers": 2,
  "open_issues": 0,
  "created_at": "2024-01-15T08:00:00Z",
  "updated_at": "2024-04-12T10:30:00Z",
  "last_push": "2024-04-12T09:15:00Z",
  "size_kb": 250,
  "is_private": false,
  "is_fork": false,
  "is_archived": false,
  "is_template": false,
  "homepage": "https://portfolio-richard.vercel.app",
  "topics": ["portfolio", "fullstack", "javascript"],
  "README": "Texte du README.md",
  "contributing": true,
  "license": "MIT"
}
```

---

## 🛡️ Gestion Erreurs

### Erreur 404 - Utilisateur/Repo non trouvé

```json
{
  "error": "User/Repository not found",
  "status": 404,
  "message": "The requested GitHub user or repository does not exist"
}
```

---

### Erreur 429 - Rate Limit Dépassé

```json
{
  "error": "GitHub API rate limit exceeded",
  "status": 429,
  "message": "Please try again later",
  "retry_after": 3600
}
```

---

### Erreur 500 - Erreur Serveur

```json
{
  "error": "Internal server error",
  "status": 500,
  "message": "GitHub API error 403: Forbidden - Bad credentials"
}
```

---

## 📊 Champ Response Détailés

### User Object

| Champ              | Type   | Description         |
| ------------------ | ------ | ------------------- |
| `login`            | string | Identifiant GitHub  |
| `name`             | string | Nom complet         |
| `bio`              | string | Bio du profil       |
| `followers`        | number | Nombre de followers |
| `following`        | number | Nombre de following |
| `public_repos`     | number | Repos publics       |
| `avatar_url`       | string | URL avatar          |
| `blog`             | string | Blog/Portfolio URL  |
| `location`         | string | Localisation        |
| `company`          | string | Entreprise          |
| `twitter_username` | string | Twitter handle      |

### Repo Object

| Champ         | Type      | Description          |
| ------------- | --------- | -------------------- |
| `name`        | string    | Nom du repo          |
| `description` | string    | Description          |
| `url`         | string    | GitHub URL           |
| `language`    | string    | Language primaire    |
| `stars`       | number    | Nombre de stars      |
| `forks`       | number    | Nombre de forks      |
| `watchers`    | number    | Watchers             |
| `updated_at`  | timestamp | Dernière mise à jour |
| `is_fork`     | boolean   | Is it a fork?        |
| `topics`      | array     | Topics/Tags          |

---

## ⚙️ Configuration Clients

### Variables d'Environnement Requises

**` .env`**:

```bash
# GitHub Configuration
GITHUB_USER=NGOUBADJAMBO-Richard
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxx (optionnel)

# Server Configuration
PORT=3000
NODE_ENV=production
```

---

## 💻 Exemples d'Utilisation

### JavaScript/Fetch

**Exemple 1**: Dashboard

```javascript
fetch("/api/github/dashboard")
  .then((res) => res.json())
  .then((data) => {
    console.log("Followers:", data.user.followers);
    console.log("Repos:", data.repos.length);
    console.log("Total Stars:", data.stats.total_stars);
  })
  .catch((err) => console.error("API Error:", err));
```

**Exemple 2**: Activity (7 derniers jours)

```javascript
fetch("/api/github/activity?days=7")
  .then((res) => res.json())
  .then((data) => {
    console.log("Total Events:", data.summary.total_events);
    console.log("Dates:", data.summary.date_range);
  });
```

**Exemple 3**: Repo Spécifique

```javascript
fetch("/api/github/repos/NGOUBADJAMBO-Richard/Portfolio-Richard")
  .then((res) => res.json())
  .then((repo) => {
    console.log(`${repo.name} - ${repo.stars} ⭐`);
  });
```

### async/await

```javascript
async function getGitHubStats() {
  try {
    const res = await fetch("/api/github/dashboard");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    return {
      followers: data.user.followers,
      repos: data.stats.total_repositories,
      stars: data.stats.total_stars,
      languages: data.stats.languages,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    return null;
  }
}
```

---

## 🔄 Cache & Performance

### Cache Strategy

**TTL**: 10 minutes (600 secondes)

**Stockage**: Map en mémoire (Node.js)

**Trigger**: Réinitialisation cache:

- Chaque appel passé TTL
- Redémarrage serveur
- Erreur GitHub API

### Cache Flow

```
Request → Check Cache
         ↓
      Fresh? YES → Return cached data
         ↓ NO
      Fetch GitHub API
         ↓
      Cache result (10min)
         ↓
      Return data
```

---

## 📊 Rate Limits GitHub

### Sans Token

- 60 requests/hour per IP
- Cache recommandé

### Avec GitHub Token

- 5000 requests/hour per user
- Auth header requis

**Token Configuration**:

```bash
# Generate on https://github.com/settings/tokens
GITHUB_TOKEN=ghp_your_token_here

# Server Headers:
Authorization: Bearer ghp_your_token_here
```

---

## 🚨 Monitoring & Logs

### Logs Console

Le serveur loggue:

- Requêtes API
- Cache hits/misses
- Erreurs GitHub API
- Performance metrics

```javascript
console.log(`[API] GET /github/dashboard`);
console.log(`[CACHE] Hit - TTL: ${ttl}s`);
console.log(`[ERROR] GitHub API 403: ${error}`);
```

---

## 📚 Ressources

### External APIs

- [GitHub API Docs](https://docs.github.com/en/rest)
- [GitHub GraphQL](https://docs.github.com/en/graphql)

### Related Files

- `server.js` - Main server logic
- `api/github/dashboard.js` - API implementation
- `.env` - Configuration

---

## 🔍 Troubleshooting

### Problème: "User not found"

**Solution**: Vérifier `GITHUB_USER` dans `.env`

### Problème: "Rate limit exceeded"

**Solution**: Ajouter `GITHUB_TOKEN` dans `.env`

### Problème: Cache not working

**Solution**: Vérifier `CACHE_TTL_MS` dans `server.js` (défaut: 10min)

### Problème: Données obsolètes

**Solution**: Attendre TTL ou redémarrer serveur

---

**Last Updated**: 12 April 2024  
**API Version**: v1  
**Status**: ✅ Production
