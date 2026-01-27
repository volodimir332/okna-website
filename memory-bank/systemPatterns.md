# System Patterns: Architektura a vzory

## Architektura stránky

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│  [Logo]                              [Tel] [CTA Button]      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                        HERO                                  │
│           "Rekonstrukce koupelny v Ostravě"                 │
│                  [CTA] [CTA]                                │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                     AI NÁVRH DEMO                            │
│              [Před]  →  [Po]  animace                       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    JAK TO FUNGUJE                            │
│           [1]  →  [2]  →  [3]  kroky                        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                       KVÍZ                                   │
│              5 otázek → výsledek                             │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                      BALÍČKY                                 │
│         [START]    [KOMFORT]    [PREMIUM]                   │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                     ZAMĚŘENÍ                                 │
│              1 500 Kč (odečítá se)                          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    PŘED / PO                                 │
│              [Slider galerie]                               │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                     PROČ MY                                  │
│           [✓] [✓] [✓] [✓] výhody                           │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    LOKALITY                                  │
│              Ostrava, Havířov, ...                          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                     KONTAKT                                  │
│              Tel / Email / Form                              │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                        FOOTER                                │
│       [Velký Logo]    [Links]    [Legal]                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Patterns

### 1. Section Pattern

Každá sekce má stejnou strukturu:

```tsx
<Section 
  id="packages"
  theme="light" | "dark"
  className="optional"
>
  <SectionHeader
    badge="Nejprodávanější"
    title="Vyberte si balíček"
    subtitle="Popis..."
  />
  <SectionContent>
    {/* Obsah sekce */}
  </SectionContent>
</Section>
```

### 2. Card Pattern

```tsx
<Card variant="default" | "featured" | "dark">
  <CardHeader>
    <Badge>Label</Badge>
    <CardTitle>Název</CardTitle>
    <CardPrice>od XX Kč</CardPrice>
  </CardHeader>
  <CardContent>
    <FeatureList items={[...]} />
  </CardContent>
  <CardFooter>
    <Button>CTA</Button>
  </CardFooter>
</Card>
```

### 3. Button Variants

```tsx
// Primární (warm accent)
<Button variant="primary">Spočítat cenu</Button>

// Sekundární (outline)
<Button variant="secondary">Více info</Button>

// Ghost (text only)
<Button variant="ghost">Zpět</Button>
```

---

## Animation Patterns

### 1. Scroll Reveal

Elementy se objevují při scrollu:

```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}
```

### 2. Stagger Children

Elementy se objevují postupně:

```tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### 3. Floating Particles

Na tmavých sekcích - plující modré tečky (jako Google Antigravity):

```tsx
<ParticlesBackground 
  count={50}
  color="#3B82F6"
  speed={0.5}
/>
```

---

## Data Flow

```
┌──────────────┐
│  data/*.ts   │  ← Statická data (balíčky, galerie, kvíz)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  components/ │  ← UI komponenty
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   page.tsx   │  ← Hlavní stránka
└──────────────┘
```

---

## Responsive Breakpoints

```css
/* Tailwind defaults */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile-first approach

```tsx
// Příklad
<div className="
  grid 
  grid-cols-1       /* Mobile: 1 sloupec */
  md:grid-cols-2    /* Tablet: 2 sloupce */
  lg:grid-cols-3    /* Desktop: 3 sloupce */
  gap-6
">
```

---

## State Management

Pro tento projekt **nepotřebujeme** složitý state management.

Používáme:
- `useState` pro lokální stav (kvíz, modal)
- Props drilling pro jednoduché předávání
- URL params pro sdílení stavu (volitelně)

---

## Naming Conventions

### Soubory
- Komponenty: `PascalCase.tsx` (Hero.tsx)
- Utility: `camelCase.ts` (utils.ts)
- Data: `camelCase.ts` (packages.ts)

### CSS Classes
- Tailwind utility classes
- Vlastní třídy: `kebab-case` (floating-particle)

### Konstanty
- `UPPER_SNAKE_CASE` (PACKAGES_DATA)
