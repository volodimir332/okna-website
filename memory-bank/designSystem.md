# Design System: Vizuální identita

## Filozofie designu

**Inspirace:** Google Antigravity
**Styl:** Minimalistický, technologický, čistý, hodně "vzduchu"

> Web není katalog. Web je zážitek.

---

## Barevná paleta

### Světlé téma (primární)

```css
:root {
  /* Pozadí */
  --bg-primary: #FAFAFA;       /* Hlavní pozadí */
  --bg-secondary: #F5F5F5;     /* Sekce */
  --bg-card: #FFFFFF;          /* Karty */
  
  /* Text */
  --text-primary: #0A0A0A;     /* Nadpisy */
  --text-secondary: #525252;   /* Odstavce */
  --text-tertiary: #A3A3A3;    /* Pomocný text */
  
  /* Akcenty */
  --accent-blue: #3B82F6;      /* Modré tečky, linky */
  --accent-warm: #F97316;      /* CTA tlačítka */
  --accent-warm-hover: #EA580C;
  
  /* Rámečky */
  --border: #E5E5E5;
  --border-hover: #D4D4D4;
  
  /* Ostatní */
  --shadow: rgba(0, 0, 0, 0.06);
}
```

### Tmavé sekce

```css
.dark-section {
  --bg-dark: #0A0A0A;
  --bg-dark-secondary: #171717;
  --text-light: #FAFAFA;
  --text-light-secondary: #A3A3A3;
}
```

---

## Typografie

### Font Family

```css
/* Nadpisy - geometrický, moderní */
--font-heading: 'Plus Jakarta Sans', sans-serif;

/* Text - čitelný, neutrální */
--font-body: 'Inter', sans-serif;
```

### Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 64px / 4rem | 700 | 1.1 |
| H2 | 48px / 3rem | 600 | 1.2 |
| H3 | 32px / 2rem | 600 | 1.3 |
| H4 | 24px / 1.5rem | 600 | 1.4 |
| Body Large | 20px / 1.25rem | 400 | 1.6 |
| Body | 18px / 1.125rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 400 | 1.5 |
| Badge | 12px / 0.75rem | 500 | 1.4 |

### Mobile Scale

Na mobilu (< 768px) zmenšujeme:
- H1: 40px
- H2: 32px
- H3: 24px

---

## Spacing System

Používáme **8px grid**:

```css
--space-1: 4px;    /* 0.25rem */
--space-2: 8px;    /* 0.5rem */
--space-3: 12px;   /* 0.75rem */
--space-4: 16px;   /* 1rem */
--space-5: 20px;   /* 1.25rem */
--space-6: 24px;   /* 1.5rem */
--space-8: 32px;   /* 2rem */
--space-10: 40px;  /* 2.5rem */
--space-12: 48px;  /* 3rem */
--space-16: 64px;  /* 4rem */
--space-20: 80px;  /* 5rem */
--space-24: 96px;  /* 6rem */
--space-32: 128px; /* 8rem */
```

### Section Spacing

```css
/* Vertikální padding sekcí */
.section {
  padding-top: 96px;    /* space-24 */
  padding-bottom: 96px;
}

/* Na mobilu */
@media (max-width: 768px) {
  .section {
    padding-top: 64px;  /* space-16 */
    padding-bottom: 64px;
  }
}
```

---

## Border Radius

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### Použití

| Element | Radius |
|---------|--------|
| Tlačítka | 8px (sm) |
| Karty | 16px (lg) |
| Obrázky | 16px (lg) |
| Badges | 9999px (full) |
| Modaly | 24px (xl) |

---

## Shadows

```css
/* Jemný stín pro karty */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Standardní stín */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07),
             0 2px 4px -2px rgba(0, 0, 0, 0.05);

/* Výraznější stín (hover) */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08),
             0 4px 6px -4px rgba(0, 0, 0, 0.05);

/* Elevovaný element */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 8px 10px -6px rgba(0, 0, 0, 0.05);
```

---

## Komponenty

### Button

```
┌─────────────────────────────┐
│      Spočítat cenu          │  ← Primary (orange)
└─────────────────────────────┘

┌─────────────────────────────┐
│      Více informací         │  ← Secondary (outline)
└─────────────────────────────┘
```

**Primary:**
- Background: var(--accent-warm)
- Text: white
- Padding: 16px 32px
- Border-radius: 8px
- Hover: var(--accent-warm-hover)

**Secondary:**
- Background: transparent
- Border: 1px solid var(--border)
- Text: var(--text-primary)
- Hover: Background var(--bg-secondary)

### Card (Balíček)

```
┌────────────────────────────────┐
│  ┌──────────┐                  │
│  │ Badge    │                  │
│  └──────────┘                  │
│                                │
│  Název balíčku                 │
│  od XX XXX Kč                  │
│                                │
│  Popis...                      │
│                                │
│  ✓ Feature 1                   │
│  ✓ Feature 2                   │
│  ✓ Feature 3                   │
│                                │
│  ┌────────────────────────┐    │
│  │     Vybrat balíček     │    │
│  └────────────────────────┘    │
└────────────────────────────────┘
```

**Styling:**
- Background: white
- Border: 1px solid var(--border)
- Border-radius: 16px
- Padding: 32px
- Shadow: var(--shadow-md)
- Hover: Shadow var(--shadow-lg)

**Featured card (KOMFORT):**
- Border: 2px solid var(--accent-blue)
- Badge s "Nejprodávanější"

---

## Ikony

**Knihovna:** Lucide React

**Velikosti:**
- Small: 16px
- Medium: 20px
- Large: 24px
- XL: 32px

**Stroke width:** 1.5 - 2

---

## Animace

### Timing

```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Hover Effects

```css
/* Karty */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  transition: all var(--duration-normal) var(--ease-out);
}

/* Tlačítka */
.button:hover {
  transform: scale(1.02);
  transition: all var(--duration-fast) var(--ease-out);
}
```

### Scroll Animations

- Fade in from bottom (y: 20px → 0)
- Stagger delay: 100ms mezi elementy
- Viewport trigger: once

---

## Floating Particles (Antigravity style)

Na tmavých sekcích:
- 30-50 malých teček
- Barva: var(--accent-blue) s 40% opacity
- Velikost: 2-6px
- Pohyb: pomalý, náhodný, plující
- Speed: 0.3-0.8

---

## Responsive Design

### Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (max-width: 768px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

### Grid System

```
Desktop (lg+):   12 columns, 24px gap
Tablet (md):     8 columns, 20px gap
Mobile (sm):     4 columns, 16px gap
```
