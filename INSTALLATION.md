# 🚀 Installation & Setup Guide

## Portfolio Richard NGOUBADJAMBO

**Version**: 1.0.0 | **Status**: ✅ Production Ready

---

## 📋 Prérequis

### Obligatoire

- **Node.js**: v16.0 ou supérieur
  - Download: https://nodejs.org
  - Vérification: `node --version`
- **npm**: v7.0 ou supérieur
  - Inclus avec Node.js
  - Vérification: `npm --version`
- **Git**: v2.0 ou supérieur
  - Download: https://git-scm.com
  - Vérification: `git --version`

### Recommandé

- **VS Code**: Code editor
- **GitHub Account**: Pour fork et contributions
- **Terminal**: PowerShell, Bash, ou Zsh

---

## 🛠️ Installation Locale

### Étape 1: Cloner le Repository

```bash
# HTTPS (par défaut)
git clone https://github.com/NGOUBADJAMBO-Richard/Portfolio-Richard.git

# SSH (si configuré SSH key)
git clone git@github.com:NGOUBADJAMBO-Richard/Portfolio-Richard.git

# Aller dans le dossier
cd Portfolio-Richard
```

### Étape 2: Installer les Dépendances

```bash
# Avec npm
npm install

# Ou avec yarn
yarn install

# Ou avec pnpm
pnpm install
```

**Output attendu**:

```
added 50 packages in 15s
```

### Étape 3: Configuration Environnement

```bash
# Copier template
cp js/env.example.js js/env.js

# Ou sur Windows:
copy js\env.example.js js\env.js
```

**Éditer `js/env.js`** et ajouter:

```javascript
// Configuration de base (optionnel)
const config = {
  apiBase: "http://localhost:3000/api",
  githubUser: "NGOUBADJAMBO-Richard",
  cacheTTL: 600000,
};
```

### Étape 4: Démarrer le Serveur Local

```bash
# Start development server
npm start

# Output:
# Server running at http://localhost:3000
# Press Ctrl+C to stop
```

### Étape 5: Ouvrir dans le Navigateur

```
http://localhost:3000
```

**Vérifications**:

- ✅ Page se charge correctement
- ✅ Navigation fonctionne
- ✅ Theme toggle marche (mode clair/sombre)
- ✅ Language toggle marche (FR/EN)
- ✅ GitHub Dashboard charge
- ✅ Forms interactif

---

## 🔐 GitHub Token Setup (Optional mais Recommandé)

### Pourquoi?

- Sans token: 60 requêtes/heure
- Avec token: 5000 requêtes/heure
- Recommandé pour éviter rate limiting

### Steps

#### 1. Créer Personal Access Token

1. Aller sur https://github.com/settings/tokens
2. Cliquer "Generate new token"
3. Sélectionner scopes:
   - `repo` → Accès repos publics
   - `read:user` → Profil public
4. Copier le token généré (apparaît une seule fois!)

#### 2. Configurer Localement

```bash
# Créer fichier .env local
cat > .env << EOF
GITHUB_USER=NGOUBADJAMBO-Richard
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxx
PORT=3000
NODE_ENV=development
EOF
```

#### 3. Redémarrer Serveur

```bash
npm start
```

#### 4. Vérifier dans Logs

```
Server running with GitHub Token authentication
```

---

## 🧪 Tests & Développement

### Vérifier Installation

```bash
# Check Node version
node -v  # Should be v16+

# Check npm version
npm -v   # Should be v7+

# Check installed packages
npm list

# Check server health
curl http://localhost:3000
# Should return HTML page
```

### Mode Développement

Les changements fichiers sont auto-monitored:

```bash
# 1. Modifier un fichier (ex: css/styles.css)
# 2. Sauver (Ctrl+S)
# 3. Refresh navigateur (F5)
# 4. Changes visible immédiatement
```

### Console Browser DevTools

```javascript
// Tester i18n traductions
i18n.setLanguage("en");
document.querySelectorAll("[data-i18n]")[0].textContent;

// Tester theme toggle
localStorage.getItem("theme");

// Tester GitHub API
fetch("/api/github/dashboard")
  .then((r) => r.json())
  .then((data) => console.log(data));
```

---

## 🚀 Déploiement Vercel

### Prérequis

- GitHub account
- Vercel account (https://vercel.com)
- Repository pushed to GitHub

### Steps

#### 1. Connecter à Vercel

1. Aller sur https://vercel.com/new
2. Connecter avec GitHub account
3. Sélectionner le repository `Portfolio-Richard`

#### 2. Configurer Build

```
Build Command:    npm install && npm start
Start Command:    npm start
Output Directory: (leave empty)
```

#### 3. Ajouter Environment Variables

1. Settings → Environment Variables
2. Ajouter chaque variable:
   - `GITHUB_USER` = `NGOUBADJAMBO-Richard`
   - `GITHUB_TOKEN` = `ghp_xxxxx...` (Token GitHub)
   - `NODE_ENV` = `production`
   - `PORT` = `3000` (Vercel assigne automatiquement)

#### 4. Deploy

```
Cliquer "Deploy"
Attendre build (2-3 min)
```

#### 5. Vérifier

1. Accès: https://portfolio-richard.vercel.app
2. Vérifier toutes sections se chargent
3. Vérifier GitHub Dashboard affiche data

---

## 📁 Structure Fichiers Important

```
Portfolio-Richard/
├── 📄 package.json        # Infos et scripts
├── 📄 server.js           # Express server
├── 📄 index.html          # Page HTML
├── 📄 README.md           # Documentation
├── 📄 METADATA.md         # Meta infos
├── 📄 metadata.json       # Meta JSON
├── 📄 vercel.json         # Config Vercel
├── 📄 robots.txt          # SEO robots
├── 📄 sitemap.xml         # SEO sitemap
│
├── 📁 api/
│   └── github/
│       ├── 📄 dashboard.js
│       └── 📄 API.md
│
├── 📁 assets/
│   ├── 📁 images/
│   │   ├── 📸 Richard.png
│   │   ├── 📸 MGN_Logo.png
│   │   └── 📸 R_N.png
│   └── 📄 IMAGES.md
│
├── 📁 css/
│   └── 📄 styles.css
│
└── 📁 js/
    ├── 📄 main.js
    ├── 📄 env.js
    └── 📄 env.example.js
```

---

## 🐛 Troubleshooting

### Problème: "Cannot find module 'express'"

**Solution**:

```bash
# Réinstaller dépendances
rm -rf node_modules package-lock.json
npm install
npm start
```

---

### Problème: "Port 3000 already in use"

**Solution Option 1**: Changer port

```bash
PORT=5000 npm start
```

**Solution Option 2**: Tuer process

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

---

### Problème: "GitHub API rate limit exceeded"

**Solution**:

1. Attendre 1 heure (rate limit reset)
2. Ou ajouter GITHUB_TOKEN (5000 req/h)

---

### Problème: "Cannot GET /"

**Solution**:

1. Vérifier serveur running: `npm start`
2. Vérifier port correct: http://localhost:3000
3. Check console pour errors

---

## 📊 Vérifier Installation

### Checklist

- ✅ Node.js v16+ installé
- ✅ npm v7+ installé
- ✅ Repository clonné
- ✅ `npm install` succès
- ✅ `npm start` serveur lance
- ✅ http://localhost:3000 répond
- ✅ HTML page charge
- ✅ CSS styles appliqués
- ✅ JavaScript functions work
- ✅ GitHub Dashboard data loads
- ✅ Theme toggle fonctionne
- ✅ Language toggle fonctionne

---

## 🔧 Configuration Avancée

### Custom Port

```bash
PORT=8080 npm start
```

### Debug Mode

```bash
DEBUG=* npm start
```

### Production Build

```bash
NODE_ENV=production npm start
```

---

## 📝 Scripts npm Disponibles

```bash
# Démarrer le serveur
npm start

# Installer dépendances
npm install

# Voir les packages installés
npm list

# Mettre à jour tous les packages
npm update

# Nettoyer cache npm
npm cache clean --force
```

---

## 🤝 Contribution

Pour contribuer au projet:

1. **Fork** le repository
2. **Clone** votre fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Portfolio-Richard.git
   ```
3. **Branch** feature:
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Commit** changes:
   ```bash
   git commit -m "Add: your feature"
   ```
5. **Push** à votre fork:
   ```bash
   git push origin feature/your-feature
   ```
6. **Pull Request** sur `main`

---

## 📞 Support

### Questions?

- 📧 Email: contact@mgncodewavedev.com
- 🐙 GitHub Issues: https://github.com/NGOUBADJAMBO-Richard/Portfolio-Richard/issues
- 💬 Twitter: @ngoubadjambo

---

## ✅ Prochaines Étapes

Après installation réussie:

1. ✅ Explorer code structure
2. ✅ Lire README.md & METADATA.md
3. ✅ Tester toutes sections
4. ✅ Passer en mode développement
5. ✅ Faire modifications
6. ✅ Pousser changements GitHub
7. ✅ Vercel auto-deploys

---

**Version**: 1.0.0  
**Last Updated**: 12 April 2024  
**Status**: ✅ Production Ready
