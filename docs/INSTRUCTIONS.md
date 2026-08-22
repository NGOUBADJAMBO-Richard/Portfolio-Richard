# Instructions Portfolio - Richard NGOUBADJAMBO

## 📁 Structure du Projet

```
Portfolio/
├── index.html              # Fichier principal
├── css/
│   └── style.css          # Tous les styles
├── js/
│   └── main.js            # Toute la logique JavaScript
├── assets/
│   └── img/               # Dossier pour les images
│       ├── logo.png       # Logo M.G.N CodeWave (À ajouter)
│       ├── richard.jpg    # Votre photo (À ajouter)
│       └── ...autres images
├── INSTRUCTIONS.md         # Ce fichier
├── COLOR_PALETTE.md       # Palette de couleurs
└── README.md
```

## 🖼️ Comment Ajouter Votre Photo

### Option 1 : Remplacer l'Icône par une Image

1. **Créez un dossier `assets/img/`** dans le répertoire du portfolio
2. **Placez votre photo** dans ce dossier (ex: `assets/img/richard.jpg`)
3. **Modifiez le fichier `index.html`** ligne ~100 (section About):

**Avant :**

```html
<div class="profile-image">
  <i class="fas fa-user-circle"></i>
  <p class="image-placeholder">Ajoutez votre photo ici</p>
</div>
```

**Après :**

```html
<div class="profile-image">
  <img
    src="assets/img/richard.jpg"
    alt="Richard NGOUBADJAMBO"
    class="profile-photo"
  />
</div>
```

### Option 2 : Ajouter du CSS pour l'Image

Ajoutez ceci au fichier `css/style.css` :

```css
.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}
```

## ✨ Nouvelles Sections Ajoutées

### 1. **Section Image/Photo** (À propos)

- Affiche votre photo professionnelle
- Design moderne avec dégradé
- Responsive sur mobile

### 2. **Section Statistiques**

- 5+ années d'expérience
- 15+ projets réalisés
- 10+ technologies maîtrisées
- 100% satisfaction client

### 3. **Navigation Mise à Jour**

- Lien "Statistiques" ajouté au menu

### 4. **Services Améliorés**

- Descriptions plus détaillées
- Tags catégoriques pour chaque service

## 🎨 Format Recommandé pour la Photo

- **Taille** : 400x500px minimum
- **Format** : JPG ou PNG
- **Ratio** : Portrait (3:4)
- **Style** : Professionnel, bien éclairé

## � Réseaux Sociaux

Les réseaux sociaux suivants sont intégrés :

| Réseau        | URL                                                         |
| ------------- | ----------------------------------------------------------- |
| **Facebook**  | https://www.facebook.com/share/1ChamR4xqL/                  |
| **Instagram** | https://www.instagram.com/ngoubadjambo_richard              |
| **GitHub**    | https://github.com/NGOUBADJAMBO-Richard                     |
| **LinkedIn**  | https://www.linkedin.com/in/richard-ngoubadjambo-239244325/ |
| **WhatsApp**  | https://wa.me/241074676741                                  |

Les réseaux sociaux apparaissent dans :

- **Section Contact** : Visible dans les informations de contact
- **Footer** : Présents en bas de page pour accès facile

**Comment modifier les URLs :**
Cherchez dans `index.html` les lignes avec `href="https://..."` dans les sections Footer et Contact, et remplacez-les par vos URLs.

## �🌓 Dark Mode

Tous les éléments supportent le dark mode automatiquement !

## 📱 Responsive

Le portfolio est 100% responsive :

- Desktop
- Tablet
- Mobile

## 🚀 Déploiement

Pour déployer sur GitHub Pages :

1. Créez un repository `Portfolio-Richard`
2. Poussez les fichiers
3. Activez GitHub Pages dans les paramètres

---

**Dernière mise à jour** : Janvier 2026
