import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { PriceTable } from "@/components/content/PriceTable";
import { CTASection } from "@/components/content/CTASection";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { FAQSection } from "@/components/content/FAQSection";
import { faqJsonLd } from "@/lib/schema-helpers";
import { PracticeExample } from "@/components/content/PracticeExample";

export const metadata: Metadata = {
  title: "Cena pokládky dlažby za m² 2026 | OBK Ostrava",
  description:
    "Ceník pokládky dlažby v Ostravě 2026. Standardní dlažba 550–800 Kč/m², velkoformát 800–1 200 Kč/m², terasa 650–950 Kč/m². Včetně vyrovnání podkladu.",
  alternates: { canonical: "https://obklady-ostrava.cz/cenik/dlazby" },
};

const breadcrumbs = [
  { label: "Ceník", href: "/cenik" },
  { label: "Dlažby" },
];

const faqItems = [
  {
    question: "Musí se starý podlahový beton vyrovnávat?",
    answer:
      "Záleží na stavu. Měříme odchylku latí 2 m. Do 3 mm stačí flexibilní lepidlo. Nad 3 mm vyrovnáváme samonivelační stěrkou — Mapei Ultraplan nebo Ceresit CN 68. Stěrka schne 4–24 hodin podle tloušťky.",
  },
  {
    question: "Jaký formát dlažby je nejlepší do chodby v paneláku?",
    answer:
      "Pro chodbu 1,2×4 m doporučujeme dlažbu 30×60 cm nebo 45×45 cm. Velkoformát 60×120 se do úzké chodby nevyplatí — mnoho řezů a odpad. RAKO Extra má skvělé protiskluzové dlažby R10 od 320 Kč/m².",
  },
  {
    question: "Děláte pokládku dlažby na podlahové topení?",
    answer:
      "Ano. Na podlahové topení používáme výhradně flexibilní lepidlo Ceresit CM 17 nebo Mapei Keraflex. Před pokládkou musí proběhnout topná zkouška a podlaha musí být temperovaná 14 dní. Cena je stejná jako standardní pokládka.",
  },
  {
    question: "Jak dlouho trvá pokládka dlažby v chodbě 12 m²?",
    answer:
      "Samotná pokládka standardní dlažby 30×60 trvá 1,5–2 dny. Pokud je potřeba vyrovnání stěrkou, přidejte 1 den na stěrku + schnutí. Spárování a úklid další půlden. Celkem 2,5–3,5 pracovního dne.",
  },
  {
    question: "Je v ceně řezání dlažby u zárubní a trubek?",
    answer:
      "Ano. Cena za m² zahrnuje rovné řezy, obrysové řezy kolem zárubní a výřezy pro trubky topení. Používáme mokrou řezačku a diamantové korunky. Jediný příplatek je za pokládku se soklem — ten účtujeme 150–250 Kč/bm.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Service",
      provider: { "@id": "https://obklady-ostrava.cz/#organization" },
      name: "Pokládka dlažby Ostrava",
      areaServed: { "@type": "City", name: "Ostrava" },
    },
  ],
};

export default function DlazbyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Cena pokládky dlažby v Ostravě 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Pokládka standardní dlažby do 60×60 stojí 550–800 Kč/m² bez materiálu.
          Velkoformát nad 60×60 vyjde na 800–1 200 Kč/m². Dlažba na terasu
          650–950 Kč/m². K tomu vyrovnání podkladu 200–350 Kč/m² podle stavu.
          Ceny platí pro Ostravu a okolí do 50 km.
        </p>

        {/* Typy dlažby a jejich ceny */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Typy dlažby a jejich ceny
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Nejčastěji pokládáme dlažbu 30×60 a 60×60 cm. Tyto formáty zvládne
          jeden obkladač s pomocníkem. Na velkoformát 60×120 nebo 80×80 cm
          potřebujete přísavky, nivelační klipy a lepení buttering-floating.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Dlažba imitující dřevo (formát 20×120 cm) je speciální kategorie.
          Pokládá se s přesazením 1/3 a spárou 2 mm. Cena odpovídá
          velkoformátu — 800–1 200 Kč/m². Oblíbená je Cersanit Sandwood a
          RAKO Board.
        </p>

        <PriceTable
          headers={["Typ pokládky", "Cena za m²", "Poznámka"]}
          rows={[
            ["Standardní dlažba (do 60×60)", "550–800 Kč", "Rovná pokládka, spára 2–3 mm"],
            ["Velkoformátová dlažba (nad 60×60)", "800–1 200 Kč", "Buttering-floating, nivelační klipy"],
            ["Dlažba na terasu (venkovní)", "650–950 Kč", "Mrazuvzdorná, drenážní lepidlo"],
            ["Sokl z dlažby (řezaný)", "150–250 Kč/bm", "Řez na mokré řezačce, lepení na stěnu"],
            ["Penetrace podkladu", "25–35 Kč", "Ceresit CT 17, vždy před stěrkou i lepením"],
            ["Vyrovnání stěrkou do 6 mm", "200–300 Kč", "Mapei Ultraplan, Ceresit CN 68"],
            ["Vyrovnání stěrkou do 10 mm", "250–350 Kč", "Ceresit CN 76, větší odchylky"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        {/* Příprava podkladu */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Příprava podkladu — základ úspěchu
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          V panelácích v Hrabůvce a na Dubině je podlahový beton z roku
          1975–1985. Typická odchylka je 5–15 mm na 2 m. Bez vyrovnání se
          dlažba 60×60 houpá a praská.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Vyrovnání děláme samonivelační stěrkou Mapei Ultraplan. Nalijete,
          rozstěrkujete a za 4 hodiny můžete lepit. Na tloušťky nad 10 mm
          používáme Ceresit CN 76 — ten zvládne až 50 mm v jedné vrstvě.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Pod stěrku vždy dáváme penetraci Ceresit CT 17. Bez penetrace stěrka
          nedrží. Penetrace schne 2–4 hodiny. Cena penetrace je 25–35 Kč/m².
        </p>

        {/* Formáty dlažby */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Formáty dlažby — co se kam hodí
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Chodba 1,2×4 m — ideální dlažba 30×60 cm, pokládka rovná podélně.
          Opticky prodlouží prostor. Prořez 5–8 %.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Koupelna 6 m² — dlažba 60×60 cm. Méně spár, jednodušší údržba.
          Na mokré plochy volte protiskluz R10. RAKO Extra Fineza má R10
          ve všech barvách.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Obývák 25 m² — velkoformát 60×120 cm vypadá nejlépe. Spáru volte
          1,5–2 mm. Nivelační klipy zajistí rovinnost. Počítejte s prořezem
          8–12 %.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Terasa — venkovní mrazuvzdorná dlažba 60×60 cm, lepená na drenážní
          lepidlo. Cena 650–950 Kč/m². Spáru děláme 4–5 mm kvůli dilataci.
        </p>

        <PracticeExample
          text="Chodba 12 m² v paneláku Ostrava-Hrabůvka, 4. patro. Stará PVC podlaha, pod ní betonový potěr s odchylkou 12 mm. Strhnutí PVC, penetrace, vyrovnání stěrkou Mapei Ultraplan (průměr 8 mm). Po zaschnutí pokládka dlažby RAKO Extra 30×60 (imitace betonu), spára 2 mm, spárovačka Ceresit CE 40 (šedá). Sokl řezaný z dlažby, výška 8 cm. Cena práce: 8 400 Kč (dlažba) + 3 600 Kč (stěrka) + 3 600 Kč (sokl 18 bm) = 15 600 Kč bez materiálu. Realizace: přibližně 3 pracovní dny."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete položit dlažbu?"
          description="Zaměříme podlahu, zkontrolujeme rovinnost a do 48 hodin pošleme cenovou nabídku. Zaměření je zdarma po celé Ostravě."
        />

        <RelatedLinks
          links={[
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
            { title: "Ceník rekonstrukce koupelny", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Ceník bouracích prací", href: "/cenik/bouraci-prace" },
            { title: "Přehled ceníku — všechny práce", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
