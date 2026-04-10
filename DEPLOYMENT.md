# 🚀 Configuration Hybride : GitHub Pages + API Vercel

## Architecture

```
┌─────────────────────────────────────────────────────┐
│         GitHub Pages (Frontend Statique)             │
│  - HTML, CSS, JS                                      │
│  - Auto-déployé via GitHub Actions                   │
│  - Domaine: https://NGOUBADJAMBO-Richard.github.io   │
└──────────────────────┬──────────────────────────────┘
                       │
         API Call (fetch)
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│        Vercel Serverless (API Backend)               │
│  - /api/github/dashboard.js                          │
│  - GitHub token en variable d'environnement          │
│  - CORS activé pour tous les domaines                │
│  - Domaine: https://portfolio-richard.vercel.app     │
└─────────────────────────────────────────────────────┘
```

## 📋 Prérequis

1. **Repository GitHub public** : NGOUBADJAMBO-Richard/Portfolio-Richard
2. **Compte Vercel** : Lié au repository GitHub
3. **GitHub Token** : Créé avec scopes `public_repo` + `user`
4. **Domaine Vercel** : `portfolio-richard.vercel.app` (ou custom)

## ⚙️ Étape 1 : Configurer GitHub Pages

### 1.1 Paramètres du Repository

```
Settings → Pages → Build and deployment
├─ Source: Deploy from a branch
├─ Branch: main
├─ Folder: / (root)
└─ Enforce HTTPS: ✓ ON
```

### 1.2 Vérifier le workflow GitHub Actions

Le fichier `.github/workflows/deploy.yml` :

- ✅ Déclenche automatiquement à chaque `push` sur `main`
- ✅ Déploie les fichiers statiques (HTML, CSS, JS)
- ✅ Active GitHub Pages
- ✅ Génère URL: `https://NGOUBADJAMBO-Richard.github.io/Portfolio-Richard`

### 1.3 Vérifier `js/env.js`

```javascript
// Détection automatique :
// - localhost → API locale (vide apiBaseUrl)
// - GitHub Pages → API Vercel (apiBaseUrl = https://portfolio-richard.vercel.app)
```

## ⚙️ Étape 2 : Configurer Vercel

### 2.1 Créer un nouveau projet Vercel

```bash
# Connecter le repo GitHub dans Vercel Dashboard
# https://vercel.com/dashboard
```

**Configuration recommandée** :

- **Project Name**: `portfolio-richard`
- **Framework Preset**: Other (static)
- **Root Directory**: `.` (racine)
- **Build Command**: (vide, pas de build)
- **Output Directory**: (vide, la racine est servie)

### 2.2 Ajouter les variables d'environnement

Dans **Vercel Dashboard → Settings → Environment Variables** :

```
GITHUB_TOKEN = ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_USER = NGOUBADJAMBO-Richard
```

⚠️ **Important** : Ces variables ne doivent être disponibles que pour les **Serverless Functions** (`/api/**`), pas pour le frontend statique.

### 2.3 Vérifier `vercel.json`

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/api/github/dashboard",
      "dest": "/api/github/dashboard.js",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

- ✅ Route `/api/github/dashboard` → déclenchée la fonction serverless
- ✅ CORS headers : permettent les appels since GitHub Pages
- ✅ Autres routes → `index.html` (SPA routing)

### 2.4 Vérifier `api/github/dashboard.js`

La fonction accepte les requêtes CORS :

```javascript
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");

if (req.method === "OPTIONS") {
  res.status(200).end();
  return;
}
```

## 📱 Tests

### Test 1 : Développement Local

```bash
# Terminal 1 : Lancer le serveur Express
npm start
# → http://localhost:3000 (ou 3001+ si port occupé)

# Le dashboard devrait afficher les données GitHub
```

### Test 2 : After GitHub Push

```bash
# 1. Push sur main
git add .
git commit -m "Hybrid deployment setup"
git push origin main

# 2. Vérifier GitHub Actions
# → https://github.com/NGOUBADJAMBO-Richard/Portfolio-Richard/actions

# 3. Accéder au site
# → https://NGOUBADJAMBO-Richard.github.io/Portfolio-Richard

# (Peut prendre 1-2 minutes)
```

### Test 3 : Vérifier l'URL de l'API

Oter `localhost:XXXX` (ou GitHub Pages URL) dans la console :

```javascript
// Depuis GitHub Pages:
console.log(window.__PORTFOLIO_CONFIG__.apiBaseUrl);
// → "https://portfolio-richard.vercel.app"

fetch(
  "https://portfolio-richard.vercel.app/api/github/dashboard?user=NGOUBADJAMBO-Richard",
)
  .then((r) => r.json())
  .then((data) => console.log(data));
```

## 🔑 Secrets & Sécurité

✅ **GitHub Token** : Stocké dans Vercel (variables d'environnement)
✅ **Jamais commité** : `.env` dans `.gitignore`
✅ **CORS ouvert** : Frontend sur GitHub Pages, API sur Vercel (domaines différents)

## 🌍 Domaines Finaux

| Composant    | URL                                                       |
| ------------ | --------------------------------------------------------- |
| **Frontend** | https://NGOUBADJAMBO-Richard.github.io/Portfolio-Richard  |
| **API**      | https://portfolio-richard.vercel.app/api/github/dashboard |

## 🔄 Mise à Jour Continue

Après chaque modification locale :

```bash
git add .
git commit -m "Description des changements"
git push origin main
```

→ GitHub Pages redéploie automatiquement (1-2 min)
→ Vercel ne change pas (sauf variables d'env)

## ❌ Dépannage

| Problème                          | Solution                                                     |
| --------------------------------- | ------------------------------------------------------------ |
| Dashboard vide                    | Vérifier `GITHUB_TOKEN` dans Vercel env vars                 |
| Erreur CORS                       | Vérifier headers dans `api/github/dashboard.js`              |
| API non trouvée                   | Vérifier la route `/api/github/dashboard` dans `vercel.json` |
| GitHub Pages ne se met pas à jour | Attendre 2-3 min + hard refresh (Ctrl+Shift+R)               |
| Ancien domaine affiché            | Vider le cache du navigateur ou incognito                    |

## 📞 Prochaines Étapes

1. ✅ Créer un nouveau **GitHub Token** (l'ancien a been public)
2. ✅ Ajouter envars dans **Vercel Dashboard**
3. ✅ Pusher les modifications
4. ✅ Tester sur GitHub Pages + Vercel
5. ✅ Configurer opcional **domaine custom** (dans Vercel)
