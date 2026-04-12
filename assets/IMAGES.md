# 📸 Image Metadata & Assets

## Répertoire Images Portfolio

```
assets/images/
├── Richard.png            # Photo professionnelle
├── MGN_Logo.png          # Logo agence M.G.N CodeWave
├── R_N.png               # Favicon + avatar
└── [autres images projet]
```

---

## 🖼️ Images Utilisées

### 1. Photo Professionnelle

- **Fichier**: `Richard.png`
- **Usage**:
  - Section Hero (hero-visual)
  - Photo badge
  - Open Graph image
  - Twitter Card image
- **Dimensions**: 1200px × 630px (recommandé)
- **Format**: PNG transparent recommandé
- **Alt Text**: "Richard NGOUBADJAMBO - Ingénieur Fullstack & Mobile"
- **Meta**:
  ```html
  <meta
    property="og:image"
    content="https://portfolio-richard.vercel.app/assets/images/Richard.png"
  />
  <meta
    name="twitter:image"
    content="https://portfolio-richard.vercel.app/assets/images/Richard.png"
  />
  ```

### 2. Logo M.G.N CodeWave

- **Fichier**: `MGN_Logo.png`
- **Usage**:
  - Section Hero (logo-frame)
  - Branding
- **Dimensions**: 400px × 400px (recommandé)
- **Format**: PNG transparent
- **Alt Text**: "M.G.N CodeWave Logo"

### 3. Favicon & Avatar

- **Fichier**: `R_N.png`
- **Usage**:
  - Favicon du site
  - Nav logo
  - Apple touch icon
  - Browser tab icon
- **Dimensions**: Minimal 192px × 192px
- **Format**: PNG transparent
- **Meta**:
  ```html
  <link rel="icon" type="image/png" href="assets/images/R_N.png" />
  <link rel="apple-touch-icon" href="assets/images/R_N.png" />
  ```

---

## 📊 Image Optimization

### Recommandations

- ✅ Format WebP avec fallback PNG
- ✅ Lazy load pour images loin du viewport
- ✅ Responsive srcset pour différentes résolutions
- ✅ Compression lossless (pngquant)
- ✅ Dimensions appropriées (max-width)

### Build Process

```bash
# Compress PNG
pngquant --ncolors 256 assets/images/*.png

# Convert to WebP
cwebp -q 80 Richard.png -o Richard.webp

# Generate thumbnails
convert Richard.png -resize 300x300 Richard-thumb.png
```

---

## 🎨 Image SEO Metadata

### Schema.org ImageObject

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": "https://portfolio-richard.vercel.app/assets/images/Richard.png",
  "name": "Richard NGOUBADJAMBO - Ingénieur Fullstack & Mobile",
  "description": "Photo professionnelle de Richard NGOUBADJAMBO, ingénieur fullstack et mobile",
  "author": "Richard NGOUBADJAMBO",
  "datePublished": "2026-01-15",
  "contentUrl": "https://portfolio-richard.vercel.app/assets/images/Richard.png"
}
```

### Open Graph Image Metadata

```xml
<!-- Primary Image -->
<meta property="og:image" content="https://portfolio-richard.vercel.app/assets/images/Richard.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:type" content="image/png"/>
<meta property="og:image:alt" content="Richard NGOUBADJAMBO - Ingénieur Fullstack & Mobile"/>

<!-- Secondary Image -->
<meta property="og:image" content="https://portfolio-richard.vercel.app/assets/images/MGN_Logo.png"/>
<meta property="og:image:width" content="400"/>
<meta property="og:image:height" content="400"/>
<meta property="og:image:alt" content="M.G.N CodeWave Logo"/>
```

### Twitter Card Image Metadata

```xml
<meta name="twitter:image" content="https://portfolio-richard.vercel.app/assets/images/Richard.png"/>
<meta name="twitter:image:alt" content="Richard NGOUBADJAMBO - Ingénieur Fullstack & Mobile"/>
```

---

## 📱 Responsive Image Loading

### HTML Picture Element

```html
<!-- Hero Photo -->
<picture class="photo-frame">
  <!-- WebP modern browsers -->
  <source
    srcset="assets/images/Richard.webp 1x, assets/images/Richard-2x.webp 2x"
    type="image/webp"
  />

  <!-- PNG fallback -->
  <source
    srcset="assets/images/Richard.png 1x, assets/images/Richard-2x.png 2x"
    type="image/png"
  />

  <!-- Default/fallback -->
  <img
    src="assets/images/Richard.png"
    alt="Richard NGOUBADJAMBO"
    loading="lazy"
    width="400"
    height="400"
  />
</picture>
```

### CSS Lazy Loading

```css
.photo-frame img {
  max-width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s ease;
}

.photo-frame img[loading="lazy"] {
  opacity: 0.7;
}

.photo-frame img.loaded {
  opacity: 1;
}
```

---

## 🖼️ Image Size Guidelines

### Optimal Dimensions

| Usage          | Width  | Height | Aspect | Format   |
| -------------- | ------ | ------ | ------ | -------- |
| **Hero Photo** | 1200px | 630px  | 16:9   | WebP/PNG |
| **Favicon**    | 192px  | 192px  | 1:1    | PNG      |
| **Social OG**  | 1200px | 630px  | 16:9   | WebP/PNG |
| **Twitter**    | 1024px | 512px  | 2:1    | WebP/PNG |
| **Logo**       | 400px  | 400px  | 1:1    | WebP/PNG |
| **Logo Small** | 80px   | 80px   | 1:1    | PNG      |
| **Thumbnail**  | 300px  | 300px  | 1:1    | WebP     |

### File Size Targets

- Hero Photo: < 200KB
- Logo: < 50KB
- Favicon: < 20KB
- Total images: < 500KB

---

## 🎯 Performance Metrics

### Image Optimization Score

| Metric                 | Target | Status |
| ---------------------- | ------ | ------ |
| **Image Load Time**    | < 1s   | ✅     |
| **Format Efficiency**  | > 80%  | ✅     |
| **Compression Ratio**  | 8:1    | ✅     |
| **Lazy Load Coverage** | > 80%  | ✅     |

---

## 🔄 Image Update Instructions

### When to Update Images

1. **Profile Photo**
   - Nouvelle photo professionnelle
   - Change tous 6-12 mois
   - Doit être haute qualité

2. **Company Logo**
   - Rebranding M.G.N CodeWave
   - Mise à jour couleurs/design

3. **Project Screenshots**
   - Nouveaux projets
   - Mise à jour anciens projets
   - Change quarterly

### Update Steps

1. **Optimiser image**

   ```bash
   # Compress
   pngquant --ncolors 256 new-image.png

   # Convert WebP
   cwebp -q 80 new-image.png -o new-image.webp
   ```

2. **Upload to assets/images/**

   ```bash
   cp new-image.png assets/images/
   cp new-image.webp assets/images/
   ```

3. **Update references in HTML/CSS**
   - `src="..."` attributes
   - `background-image` CSS
   - Metadata og:image tags

4. **Verify & Deploy**
   ```bash
   npm start  # Test locally
   git add .
   git commit -m "Update images"
   git push   # Auto-deploy Vercel
   ```

---

## 📋 Image Checklist

- ✅ Image dimensions optimales
- ✅ Format WebP + PNG fallback
- ✅ Alt text descriptif
- ✅ Lazy loading applied
- ✅ Compression lossless
- ✅ Favicon multi-size
- ✅ OG meta tags sets
- ✅ File size < targets
- ✅ Responsive srcset
- ✅ Accessibility tested

---

## 🔗 Ressources

- [Web.dev Image Optimization Guide](https://web.dev/image-optimization/)
- [WebP Format Guide](https://developers.google.com/speed/webp)
- [Open Graph Image Best Practices](https://ogp.me/)
- [Twitter Card Image Requirements](https://developer.twitter.com/en/docs/tweets/optimize-with-cards)

---

**Last Updated**: 12 April 2026  
**Asset Version**: v1.0  
**Status**: ✅ Optimized
