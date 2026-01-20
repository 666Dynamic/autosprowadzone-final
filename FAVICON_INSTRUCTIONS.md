# 🎨 FAVICON & ICON CHECKLIST

## ⚠️ WYMAGANE przed wdrożeniem produkcyjnym

Aktualnie używane są **placeholder ikony**. Przed deployment musisz je zastąpić prawdziwym logo firmy.

---

## 📦 Wymagane pliki

### 1. Favicon (podstawowy)
**Plik**: `/public/favicon.ico`
- **Format**: ICO lub PNG
- **Rozmiar**: 32x32 px (lub multi-size: 16x16, 32x32, 48x48)
- **Użycie**: Domyślna ikona w zakładce przeglądarki

**Jak stworzyć**:
```bash
# Z PNG do ICO (użyj online tool):
# https://www.icoconverter.com/
# https://favicon.io/favicon-converter/
```

---

### 2. SVG Icon (nowoczesny favicon)
**Plik**: `/public/icon.svg`
- **Format**: SVG
- **Rozmiar**: Wektorowy (zalecany viewport: 512x512)
- **Użycie**: Nowoczesne przeglądarki (Chrome, Firefox, Safari)
- **Aktualnie**: Placeholder z zegarem (⏰)

**Przykład struktury**:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="128" fill="#f59e0b"/>
  <!-- Twoje logo tutaj -->
</svg>
```

**Kolory brandowe**:
- Primary: `#f59e0b` (Amber)
- Accent: `#0f172a` (Navy)
- White: `#ffffff`

---

### 3. Apple Touch Icon
**Plik**: `/public/apple-touch-icon.png`
- **Format**: PNG
- **Rozmiar**: 180x180 px
- **Użycie**: iOS home screen, Safari bookmark
- **Ważne**: 
  - Bez transparency (solid background)
  - Zaokrąglone rogi (iOS doda je automatycznie)
  - Padding ~10% wokół logo dla bezpieczeństwa

**Jak stworzyć**:
```bash
# Resize logo do 180x180:
# Photoshop, Figma, lub online tool
# https://realfavicongenerator.net/
```

---

### 4. PWA Icons (Progressive Web App)
**Pliki**: 
- `/public/icon-192.png` - **192x192 px**
- `/public/icon-512.png` - **512x512 px**

**Format**: PNG
**Użycie**: Android home screen, PWA manifest
**Purpose**: `maskable` (zaokrąglone przez system)

**Ważne dla maskable**:
- Logo musi być w **safe zone** (80% środka)
- Reszta to background color (można primary: #f59e0b)
- Test: https://maskable.app/editor

**Jak stworzyć**:
```bash
# Użyj PWA Asset Generator:
# https://github.com/elegantapp/pwa-asset-generator
npx pwa-asset-generator logo.svg ./public --icon-only
```

---

## 🛠️ Narzędzia Online (Rekomendowane)

### 1. **Favicon Generator** (All-in-one)
🔗 https://realfavicongenerator.net/

**Wgraj**: Twoje logo (PNG/SVG min. 512x512)
**Dostaniesz**: Wszystkie potrzebne formaty + kod HTML

**Wygeneruje**:
- ✅ favicon.ico
- ✅ apple-touch-icon.png
- ✅ icon-192.png
- ✅ icon-512.png
- ✅ Manifest.json (możesz porównać z obecnym)

---

### 2. **Maskable Icon Editor** (PWA)
🔗 https://maskable.app/editor

**Test**: Jak Twoje ikony będą wyglądać na różnych urządzeniach Android
**Podgląd**: Różne kształty (koło, squircle, zaokrąglony kwadrat)

---

### 3. **ICO Converter**
🔗 https://www.icoconverter.com/

**Konwersja**: PNG → ICO
**Rozmiary**: Multi-size (16, 32, 48 px w jednym pliku)

---

## 📐 Wymiary Reference

| Plik | Wymiar | Format | Uwagi |
|------|--------|--------|-------|
| `favicon.ico` | 32x32 | ICO | Multi-size recommended |
| `icon.svg` | Vector | SVG | Viewport 512x512 |
| `apple-touch-icon.png` | 180x180 | PNG | No transparency |
| `icon-192.png` | 192x192 | PNG | Maskable safe zone |
| `icon-512.png` | 512x512 | PNG | Maskable safe zone |

---

## 🎨 Design Guidelines

### Logo Composition
Dla najlepszego rezultatu na wszystkich platformach:

1. **Główny element**: Centrowany, wypełnia ~60-70% przestrzeni
2. **Padding**: Minimum 10% ze wszystkich stron
3. **Background**: Solid color (preferuj primary: #f59e0b)
4. **Contrast**: Logo musi być widoczne na background (używaj white dla primary bg)

### Color Palette (Branding)
```css
Primary:    #f59e0b  /* Amber 500 */
Primary-bg: #fef3c7  /* Amber 100 (dla light backgrounds) */
Navy:       #0f172a  /* Slate 900 (dla dark text/elements) */
White:      #ffffff  /* Dla logo na primary background */
```

---

## ✅ Checklist wdrożeniowy

Przed `git push` / deployment:

- [ ] Zastąpiono `/public/favicon.ico`
- [ ] Zastąpiono `/public/icon.svg`
- [ ] Zastąpiono `/public/apple-touch-icon.png`
- [ ] Dodano `/public/icon-192.png`
- [ ] Dodano `/public/icon-512.png`
- [ ] Przetestowano na iOS Safari (home screen)
- [ ] Przetestowano na Android Chrome (PWA install)
- [ ] Sprawdzono na https://realfavicongenerator.net/favicon_checker
- [ ] Manifest.json ma poprawne ścieżki

---

## 🧪 Testowanie

### Browser Testing
1. **Chrome**: DevTools → Application → Icons
2. **Firefox**: Right-click na tab → "Pin Tab" (test favicon)
3. **Safari iOS**: Add to Home Screen (test apple-touch-icon)
4. **Android**: Chrome → Menu → "Add to Home screen" (test PWA icons)

### Online Validators
- **Favicon Checker**: https://realfavicongenerator.net/favicon_checker
- **PWA Manifest**: https://manifest-validator.appspot.com/
- **Google Lighthouse**: Audit → PWA section

---

## 📝 Notatki

**Obecny stan** (20.01.2026):
- ✅ Manifest.json utworzony z placeholder paths
- ✅ HTML links dodane w layout.tsx
- ⚠️ Wszystkie ikony to placeholdery (zegar SVG)

**Czas na wymianę**: ~30-60 minut (z generowaniem wszystkich formatów)

**Priorytet**: 🔴 KRYTYCZNY (przed production deploy)

---

## 💡 Szybka instrukcja (5 minut)

Jeśli masz logo w PNG/SVG (min. 512x512):

1. Idź na: https://realfavicongenerator.net/
2. Upload logo
3. Dostosuj kolory jeśli potrzeba (Primary: #f59e0b)
4. Generate favicons
5. Download pakiet
6. Rozpakuj do `/public/`
7. Gotowe! 🎉

**HTML links już są dodane** w `app/layout.tsx` - tylko podmień pliki!
