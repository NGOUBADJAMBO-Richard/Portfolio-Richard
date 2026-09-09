# 🚀 Portfolio Richard NGOUBADJAMBO

[![Vercel Deploy](https://vercel.com/button)](https://portfolio-richard.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D16.0-brightgreen)](https://nodejs.org/)

## 📋 Métadonnées du Projet

### Informations Générales

- **Titre**: Portfolio Richard NGOUBADJAMBO — Ingénieur Fullstack & Mobile
- **Description**: Portfolio professionnel interactif avec intégration GitHub Dashboard en temps réel
- **Auteur**: Richard NGOUBADJAMBO
- **Entreprise**: M.G.N CodeWave
- **Version**: 1.0.0
- **License**: MIT
- **URL**: https://portfolio-richard.vercel.app
- **Language**: FR/EN (Bilingue)
- **Theme**: Dark/Light Mode

### Mots-clés

`ingénieur fullstack`, `développeur mobile flutter`, `chef de projet IT`, `solutions digitales`, `backend`, `frontend react`, `firebase`, `drupal`, `wordpress`

### Auteur

- **Nom**: Richard NGOUBADJAMBO
- **Titre**: Ingénieur Fullstack & Mobile
- **Poste**: Fondateur M.G.N CodeWave
- **Formation**: Ingénieur d'État en Informatique & Réseaux (EMSI, Rabat)
- **Expérience**: 5+ ans

### SEO Metadata

| Meta Tag     | Valeur                                |
| ------------ | ------------------------------------- |
| Charset      | UTF-8                                 |
| Viewport     | width=device-width, initial-scale=1.0 |
| Language     | fr-FR                                 |
| Canonical    | https://portfolio-richard.vercel.app  |
| Robots       | index, follow                         |
| Theme Color  | #0a0e27                               |
| Color Scheme | dark light                            |

## 🏗️ Architecture du Projet

```
portfolio-richard/
├── index.html                 # Page HTML principale (Bilingue)
├── server.js                  # Serveur Express.js + GitHub API Proxy
├── package.json              # Dépendances Node.js
├── vercel.json               # Configuration Vercel
├── DEPLOYMENT.md             # Guide de déploiement
├── README.md                 # Ce fichier
├── api/
│   └── github/
│       └── dashboard.js      # Logique API GitHub
├── assets/
│   └── images/               # Logos, photos, icônes
├── css/
│   └── styles.css            # Styles (variables CSS, dark mode)
└── js/
    ├── main.js               # Logique principale (i18n, animations)
    ├── env.js                # Variables d'environnement
    └── env.example.js        # Template env

```

## 🛠️ Stack Technique

### Frontend

- **HTML5**: Structure sémantique
- **CSS3**: Variables CSS, Grid, Flexbox, animations
- **JavaScript (ES6+)**: i18n, theme management, Intersection Observer
- **Fonts**: Google Fonts (Syne, Space Grotesk)

### Backend

- **Runtime**: Node.js 16+
- **Framework**: Express.js 4.19+
- **Cache**: Map avec TTL 10min pour limiter GitHub API calls
- **Auth**: GitHub Token (optionnel)

### APIs Externes

- **GitHub API v3**: User, repos, events, stats

### Déploiement

- **Platform**: Vercel
- **Build**: `npm install && npm start`
- **Environment**: Production (Node.js)

## 🎨 Sections du Portfolio

| Section          | Contenu                                     | Status |
| ---------------- | ------------------------------------------- | ------ |
| Hero             | Présentation + CTA                          | ✅     |
| Stats            | KPIs (exp, projets, stack, agence)          | ✅     |
| À Propos         | Bio + timeline parcours et formation        | ✅     |
| Compétences      | Grid des stacks techniques                  | ✅     |
| Projets          | Portfolio filtrable (Web, Mobile, Branding) | ✅     |
| Mobile Showcase  | Case study Flutter @ LEBONWAZ            | ✅     |
| Services         | 6 offres M.G.N CodeWave                     | ✅     |
| GitHub Dashboard | Stats et repos temps réel                   | ✅     |
| Contact          | Formulaire + info                           | ✅     |
| Agence           | CTA vers M.G.N CodeWave                     | ✅     |

## 📱 Responsive Design

- **Desktop**: Layout 2+ colonnes
- **Tablet**: Adaptation moyenne résolution
- **Mobile**: Hamburger menu, stack vertical
- **Breakpoints**: CSS media queries

## 🌐 Internationalisation (i18n)

- **Langues**: Français (FR) et Anglais (EN)
- **Implémentation**:
  - Objet `i18n` en JavaScript avec clés hiérarchiques
  - Attributs `data-i18n` sur les éléments HTML
  - Bouton toggle langue EN/FR dans la navbar
  - LocalStorage pour persistance du choix

### Fichier de traduction

```javascript
const i18n = {
  fr: {
    /* Traductions FR */
  },
  en: {
    /* Traductions EN */
  },
};
```

## 🌙 Thème Clair/Sombre

- **Mode par défaut**: Dark
- **Stockage**: LocalStorage + attribut `data-theme` sur `<html>`
- **Variables CSS**: Utilisation de `--color-*`, `--surface`, `--accent`, etc.
- **Toggle**: Bouton ☀️ dans la navbar

## 🔌 Endpoints API Backend

### 1. GitHub Dashboard

```
GET /api/github/dashboard
```

Retourne les stats utilisateur GitHub:

- Followers, statistiques repos, langages top, activité

**Response**:

```json
{
  "user": {
    /* github user data */
  },
  "repos": [
    /* repos array */
  ],
  "stats": {
    /* statistiques */
  },
  "lastSync": "2024-04-12T10:30:00Z"
}
```

### 2. GitHub Activity

```
GET /api/github/activity
```

Événements récents (14 jours)

## 🚀 Installation & Lancement Local

### Prérequis

- Node.js 16+
- npm ou yarn

### Étapes

1. **Clone le repository**

   ```bash
   git clone https://github.com/NGOUBADJAMBO-Richard/Portfolio-Richard.git
   cd Portfolio-Richard
   ```

2. **Installe les dépendances**

   ```bash
   npm install
   ```

3. **Configure les variables d'environnement**

   ```bash
   cp js/env.example.js js/env.js
   # Édite js/env.js avec tes values
   ```

4. **Lance le serveur**

   ```bash
   npm start
   ```

5. **Ouvre dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📊 Métadonnées des Services

### Service 1: Développement Mobile Flutter

- **Cible**: iOS & Android
- **Stack**: Flutter, Firebase, Dart
- **Livraison**: MVP → App Store/Play Store
- **Coût**: 💰💰💰 (Sur devis)

### Service 2: Applications Web React/Next.js

- **Cible**: Web moderne
- **Stack**: React.js/Next.js, Tailwind CSS
- **SEO**: Core Web Vitals optimisés
- **Coût**: 💰💰 (Sur devis)

### Service 3: Backend & API Node.js

- **Architecture**: REST/GraphQL
- **Bases**: MySQL, MongoDB, Firebase Firestore
- **Sécurité**: JWT, CORS, rate limiting
- **Coût**: 💰💰 (Sur devis)

### Service 4: CMS (Drupal/WordPress)

- **Cible**: Sites corporate, e-commerce, blogs
- **SEO**: Optimisé technique & on-page
- **Coût**: 💰 (Sur devis)

### Service 5: Consulting & Gestion de Projet IT

- **Cadrage**: Specs, timeline, estimation
- **Agile**: Scrum/Kanban
- **Coût**: 💰💰💰 (Sur devis)

### Service 6: UI/UX & Branding Digital

- **Deliverables**: Wireframes, design system, identité visuelle
- **Tools**: Figma, Sketch
- **Coût**: 💰💰 (Sur devis)

## 📧 Contact & Social

- **Email**: [contact form sur le portfolio]
- **GitHub**: https://github.com/NGOUBADJAMBO-Richard
- **LinkedIn**: [À ajouter]
- **Twitter**: @ngoubadjambo
- **WhatsApp**: [Sur demande]

## 📝 Fichiers de Configuration

### package.json

```json
{
  "name": "portfolio-richard",
  "version": "1.0.0",
  "description": "Portfolio Richard NGOUBADJAMBO avec GitHub dashboard proxy backend",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  }
}
```

### vercel.json

Configuration Vercel pour déploiement automatique

### .env (Non versionné)

```
PORT=3000
GITHUB_USER=NGOUBADJAMBO-Richard
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxx
```

## 🔒 Sécurité

- ✅ HTTPS enforced (Vercel)
- ✅ CORS configuré
- ✅ GitHub Token en variable d'env
- ✅ Rate limiting GitHub API (cache)
- ✅ Validation input formulaire
- ✅ CSP headers (à vérifier)

## 📈 Performance

| Métrique                       | Target  | Status |
| ------------------------------ | ------- | ------ |
| LCP (Largest Contentful Paint) | < 2.5s  | ✅     |
| FID (First Input Delay)        | < 100ms | ✅     |
| CLS (Cumulative Layout Shift)  | < 0.1   | ✅     |
| Page Load                      | < 3s    | ✅     |
| Lighthouse Score               | > 90    | ✅     |

### Optimisations Appliquées

- Preconnect fonts.googleapis.com
- Lazy loading images
- CSS minifier
- Cache GitHub API (10min TTL)
- Compression Gzip (Vercel)

## 📱 Mobile Showcase - Flutter @ LEBONWAZ

**Project**: Application mobile iOS & Android

- **Timeline**: [Dates project]
- **Scope**:
  - Architecture : MVC / Provider pattern
  - Firebase Firestore pour données temps réel
  - Firebase Auth pour authentification
  - Firebase Storage pour médias
  - Push notifications
  - Analytics intégré

**KPIs**:

- 📊 [Users actifs]
- ⭐ [App Store rating]
- 📈 [Retention rate]

## 🎯 Objectifs & KPIs

| Métrique           | Objectif | Current |
| ------------------ | -------- | ------- |
| Visites mensuelles | 5000+    | TBD     |
| Conversion contact | 10%      | TBD     |
| GitHub stars       | 50+      | TBD     |
| Temps chargement   | < 2s     | ✅      |
| Mobile score       | 90+      | ✅      |

## 🔄 CI/CD & Déploiement

- **Version control**: Git/GitHub
- **CI/CD**: Vercel Connect (Auto-deploy on push)
- **Branch**: main (production)
- **Déploiement**: Automatique sur chaque commit `main`

## 📄 Licence

MIT License - Libre d'utilisation selon les conditions du fichier LICENSE

## 👤 À propos de l'auteur

**Richard NGOUBADJAMBO**

Ingénieur d'État en Informatique & Réseaux, passionné par la création de solutions digitales performantes.

- 🎓 Formation EMSI (Maroc)
- 💼 Chef de Projet IT @ LEBONWAZ (10 mois)
- 🚀 Fondateur M.G.N CodeWave
- 🌍 Vision: Transformer les marchés émergents africains via le digital

## 🙏 Remerciements

- Vercel pour l'hébergement
- GitHub pour l'API
- Google Fonts pour les typographies
- Tous les clients et collaborateurs

---

**Dernière mise à jour**: Avril 2024
**Statut**: ✅ Production Live
**Support**: contact via formulaire portfolio
