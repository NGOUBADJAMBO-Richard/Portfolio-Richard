#!/bin/bash
# ============================================
# Script de Test de Responsivité
# Vérifier la responsivité du portfolio
# ============================================

echo "🔍 Test de Responsivité - Portfolio-Richard"
echo "============================================"
echo ""

# Vérifications du HTML
echo "📄 Vérification du HTML..."
echo ""

if grep -q 'viewport' index.html; then
  echo "✅ Meta viewport présente"
else
  echo "❌ Meta viewport MANQUANTE"
fi

if grep -q 'responsive.css' index.html; then
  echo "✅ responsive.css inclus"
else
  echo "❌ responsive.css NON INCLUS"
fi

if grep -q 'style.css' index.html; then
  echo "✅ style.css inclus"
else
  echo "❌ style.css NON INCLUS"
fi

echo ""
echo "🎨 Vérification des fichiers CSS..."
echo ""

if [ -f "css/responsive.css" ]; then
  size=$(wc -c < css/responsive.css)
  lines=$(wc -l < css/responsive.css)
  echo "✅ responsive.css existe ($lines lignes, ${size} bytes)"
else
  echo "❌ responsive.css MANQUANT"
fi

if [ -f "css/style.css" ]; then
  size=$(wc -c < css/style.css)
  lines=$(wc -l < css/style.css)
  echo "✅ style.css existe ($lines lignes, ${size} bytes)"
else
  echo "❌ style.css MANQUANT"
fi

echo ""
echo "🔍 Vérification des media queries..."
echo ""

# Compter les media queries
tablet_count=$(grep -c "@media.*968px" css/responsive.css)
mobile_count=$(grep -c "@media.*576px" css/responsive.css)
small_count=$(grep -c "@media.*375px" css/responsive.css)

echo "✅ Breakpoints trouvés:"
echo "   - Tablettes (≤968px): $tablet_count"
echo "   - Mobiles (≤576px): $mobile_count"
echo "   - Petits écrans (≤375px): $small_count"

echo ""
echo "📱 Éléments vérifiés..."
echo ""

# Vérifier les éléments clés
echo "Responsive.css doit contenir:"
for element in ".nav-links" ".hero" ".hero-text" ".section-title" ".portfolio-grid" ".stats-grid"; do
  if grep -q "$element" css/responsive.css; then
    echo "  ✅ $element"
  else
    echo "  ❌ $element MANQUANT"
  fi
done

echo ""
echo "============================================"
echo "✨ Tests de responsivité terminés"
echo ""
echo "📋 Pour tester manuellement:"
echo "1. Ouvrir index.html dans un navigateur"
echo "2. F12 → Toggle Device Toolbar (Ctrl+Shift+M)"
echo "3. Tester ces dimensions:"
echo "   - iPhone SE: 375x667"
echo "   - iPhone 12: 390x844"
echo "   - iPad: 768x1024"
echo "   - Desktop: 1920x1080"
echo ""
echo "✅ À vérifier:"
echo "   ✓ Navbar fonctionnelle et visible"
echo "   ✓ Menu hamburger actif sur mobile"
echo "   ✓ Texte lisible sans zoom"
echo "   ✓ Images adaptées"
echo "   ✓ Pas de scroll horizontal"
echo "   ✓ Boutons cliquables"
echo "   ✓ Espacement cohérent"
echo "============================================"
