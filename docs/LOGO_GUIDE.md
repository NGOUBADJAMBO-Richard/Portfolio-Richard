# 🎯 Guide Logo M.G.N CodeWave

## 📍 Comment Utiliser le Logo dans le Portfolio

### Option 1 : Afficher le Logo M.G.N CodeWave (Recommandé)

1. **Sauvegardez votre logo** dans : `assets/img/logo.png`

2. **Modifiez le `index.html`** (ligne ~26) :

**De :**

```html
<div class="logo">
  <!-- Option 1: Utiliser le logo M.G.N CodeWave -->
  <!-- <img src="assets/img/logo.png" alt="M.G.N CodeWave" class="logo-image"> -->
  <!-- Option 2: Utiliser les initiales RN -->
  <span class="logo-text">RN</span>
</div>
```

**À :**

```html
<div class="logo">
  <img src="assets/img/logo.png" alt="M.G.N CodeWave" class="logo-image" />
</div>
```

3. **Commentez les initiales RN** (ou laissez juste l'image)

### Option 2 : Logo + Texte RN

```html
<div class="logo">
  <img src="assets/img/logo.png" alt="M.G.N CodeWave" class="logo-image" />
  <span class="logo-text">RN</span>
</div>
```

### Option 3 : Initiales RN Uniquement (Par Défaut)

```html
<div class="logo">
  <span class="logo-text">RN</span>
</div>
```

## 🎨 Format Recommandé pour le Logo

- **Taille** : 200x200px minimum (PNG ou SVG)
- **Format** : PNG transparent (recommandé) ou SVG
- **Ratio** : Carré (1:1) ou logo entier en haute résolution
- **Couleurs** : Complètes ou en blanc/gris selon vos préférences

## 📐 Dimensions dans le Header

Le logo affichera avec :

- **Hauteur** : 40px
- **Largeur** : Automatique (respecte les proportions)

Vous pouvez modifier la hauteur dans `css/style.css` :

```css
.logo-image {
  height: 40px; /* Changez cette valeur */
  width: auto;
  display: block;
}
```

## ✨ Avantages du Logo

✅ **Meilleur branding** - Identité visuelle cohérente
✅ **Professionnel** - Plus authentique qu'un texte
✅ **Reconnaissance** - Les visiteurs identifient vos services
✅ **Responsive** - S'adapte à tous les écrans

## 🔄 Changer Entre Logo et Texte

Pour **basculer rapidement** entre logo et initiales :

1. **Avec logo** : Décommentez la ligne `<img>` et commentez `<span>`
2. **Avec texte** : Commentez la ligne `<img>` et décommentez `<span>`

## 📝 Notes Importantes

- Le logo s'affichera avec le **dégradé bleu** de la marque
- En **dark mode**, les couleurs s'adapteront automatiquement
- Le logo est **responsive** sur mobile/tablet/desktop

---

**Besoin d'aide ?** Consultez `INSTRUCTIONS.md` ou `COLOR_PALETTE.md`
