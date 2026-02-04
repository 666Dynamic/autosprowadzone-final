# SprowadzoneAuto.pl 🚗

Profesjonalna platforma do importu samochodów z aukcji B2B (Niemcy, Europa). Projekt zbudowany w oparciu o Next.js 16, React 19, Tailwind CSS v4 i Framer Motion.

## 🚀 Technologie

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI + Radix UI
- **Animacje:** Framer Motion
- **Ikony:** Lucide React
- **Wydajność:** Next/Image, Next/Font (Geist)
- **Optymalizacja:** Static Site Generation (SSG)

## 🛠️ Uruchomienie lokalne

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom serwer deweloperski:
```bash
npm run dev
```

3. Otwórz [http://localhost:3000](http://localhost:3000)

## 📦 Budowanie wersji produkcyjnej

```bash
npm run build
```

Wynikowy build znajduje się w folderze `.next`. Aplikacja jest zoptymalizowana pod kątem statycznego eksportu lub uruchomienia Node.js.

## 🌍 Struktura Projektu

- `/app` - Strony i layouty (App Router)
- `/components` - Komponenty UI i sekcje strony
- `/components/ui` - Biblioteka komponentów (Buttony, Karty, Inputy)
- `/lib` - Logika biznesowa i dane (np. posty blogowe)
- `/public` - Zasoby statyczne (zdjęcia, wideo)

## ⚡ Optymalizacje (Styczeń 2026)

Projekt przeszedł gruntowną optymalizację pod kątem Core Web Vitals i SEO:
- Zoptymalizowano ładowanie obrazów (WebP/AVIF, Next/Image)
- Wdrożono `react-strict-mode` i kompresję
- Poprawiono Accessibility (ARIA labels, kontrast)
- Pełna responsywność (Mobile First)
- SEO: Meta tagi, Open Graph, Sitemap, JSON-LD Structured Data

## 🚢 Wdrożenie

Projekt jest gotowy do wdrożenia na Vercel, Netlify lub Cloudflare Pages.
Repozytorium: `https://github.com/666Dynamic/autosprowadzone-final`
