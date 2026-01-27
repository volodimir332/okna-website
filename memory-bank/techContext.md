# Tech Context: Technologie a nástroje

## Stack

| Kategorie | Technologie | Důvod |
|-----------|-------------|-------|
| Framework | Next.js 14 (App Router) | SEO, rychlost, React ekosystém |
| Styling | Tailwind CSS | Rychlý vývoj, konzistence |
| Animace | Framer Motion | Plynulé animace, gestures |
| Ikony | Lucide React | Moderní, lehké |
| Fonty | Google Fonts | Bezplatné, rychlé |
| Deployment | Vercel | Zero-config pro Next.js |

---

## Struktura projektu

```
sait/
├── memory-bank/           # Dokumentace projektu
│   ├── projectbrief.md
│   ├── productContext.md
│   ├── techContext.md
│   ├── systemPatterns.md
│   ├── designSystem.md
│   ├── activeContext.md
│   └── progress.md
│
├── public/
│   └── images/
│       ├── hero/          # Hero sekce
│       ├── gallery/       # Před/Po fotky
│       │   ├── pred/      # Fotky PŘED
│       │   └── po/        # Fotky PO
│       ├── packages/      # Ikony balíčků
│       └── logos/         # Logo, partneři
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/            # Základní komponenty
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   │
│   │   ├── layout/        # Layout komponenty
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   └── sections/      # Sekce stránky
│   │       ├── Hero.tsx
│   │       ├── AIDemo.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Quiz.tsx
│   │       ├── Packages.tsx
│   │       ├── Measurement.tsx
│   │       ├── Gallery.tsx
│   │       ├── WhyUs.tsx
│   │       ├── Locations.tsx
│   │       └── Contact.tsx
│   │
│   ├── lib/
│   │   └── utils.ts       # Pomocné funkce
│   │
│   └── data/
│       ├── packages.ts    # Data balíčků
│       ├── gallery.ts     # Data galerie
│       └── quiz.ts        # Otázky kvízu
│
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Klíčové závislosti

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.300.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

---

## Performance cíle

- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1
- **Lighthouse** > 90

### Optimalizace

- WebP obrázky
- Lazy loading (next/image)
- Font preload
- Component code splitting

---

## SEO

### Meta tags
- Title: "Rekonstrukce koupelny Ostrava | Na klíč od 39 000 Kč"
- Description: "Specialisté na rekonstrukce koupelen v Ostravě a okolí. Vlastní tým, pevná cena, hotovo v termínu. Záruka 36 měsíců."

### Lokální SEO stránky
- /ostrava
- /ostrava-poruba
- /ostrava-jih
- /havirov
- /karvina
- /frydek-mistek

---

## Kontaktní integrace

- Telefon: `tel:+420XXXXXXXXX`
- Email: `mailto:info@...`
- WhatsApp: `https://wa.me/420XXXXXXXXX`
