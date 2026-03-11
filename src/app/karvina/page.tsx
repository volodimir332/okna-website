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
  title: "Obkladač Karviná | Obkladačské práce | OBK",
  description:
    "Obkladač v Karviné. Rekonstrukce koupelen v panelových domech. Pokládka obkladů a dlažeb. Dojezd z Ostravy 20 km. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/karvina" },
};

const breadcrumbs = [{ label: "Karviná" }];

const faqItems = [
  {
    question: "Kolik stojí dojezd z Ostravy do Karviné?",
    answer:
      "Dojezd do Karviné neúčtujeme. 20 km po I/59, cca 25 minut. Ceny prací jsou stejné jako v Ostravě. Zaměření v Karviné provádíme zdarma.",
  },
  {
    question: "Jaké panelové domy jsou v Karviné?",
    answer:
      "V Karviné-Hranicích a Karviné-Novém Městě převažují panelové domy T06B a T08B z 70.-80. let. V Karviné-Darkově jsou starší cihlové domy. V Karviné-Mizerově paneláky z 60. let.",
  },
  {
    question: "Má poddolování vliv na obkládání?",
    answer:
      "V některých částech Karviné (Darkov, Staré Město) je poddolované území. U panelových domů na Hranicích nebo Novém Městě to problém není. Pokud máte trhliny ve zdech od poddolování, před obkládáním zdivo stabilizujeme a použijeme pružnější lepidlo.",
  },
  {
    question: "Kolik trvá rekonstrukce koupelny v Karviné?",
    answer:
      "Stejně jako v Ostravě: malá koupelna přibližně 8–10 dní, koupelna + WC přibližně 12–15 dní. Dojíždíme každý den, práce probíhají bez přerušení.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "LocalBusiness",
      name: "OBK Obkladač Ostrava",
      telephone: "+420737540605",
      url: "https://obklady-ostrava.cz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "City",
        name: "Karviná",
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function KarvinaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Karviné
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Karviná — hornické město 20 km východně od Ostravy. Přes 50 000
          obyvatel, velký podíl panelové zástavby. Karviná-Hranice,
          Nové Město, Mizerov — všude paneláky T06B a T08B s umakartovými
          jádry. Jezdíme sem pravidelně, ceny máme stejné jako v Ostravě,
          dojezd neúčtujeme.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Karviné pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Karviná-Hranice</strong> (ul. Slovenská, Borovského,
            Závodní) — největší část Karviné. Panelové domy T06B a T08B
            z 70.-80. let. Hodně bytů 2+1 a 3+1. Umakartová jádra
            standardních rozměrů.
          </p>
          <p>
            <strong>Karviná-Nové Město</strong> (ul. Havířská, Cihelní,
            Zakladatelská) — panelové domy z konce 70. let. Větší byty,
            jádra 1800 x 2400 mm s odděleným WC. SVJ zde často
            koordinují výměny stoupaček.
          </p>
          <p>
            <strong>Karviná-Mizerov</strong> (ul. Na Kopci, Rudé armády)
            — starší paneláky z 60. let. Menší byty, menší koupelny.
            Jádra v horším stavu.
          </p>
          <p>
            <strong>Karviná-Darkov</strong> — převážně cihlové domy a rodinné
            domy. Poddolované území — před obkládáním kontrolujeme stav
            zdiva a případné trhliny.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Specifika Karviné
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>
            Karviná leží na poddolovaném území. U panelových domů na
            Hranicích a Novém Městě se poddolování neprojevuje. V Darkově
            a Starém Městě občas řešíme trhliny v nosných stěnách.
            V takovém případě používáme C2 flexibilní lepidlo (Mapei
            Keraflex Maxi S1) a pružný spárovací tmel.
          </p>
          <p>
            Voda v Karviné je tvrdší než v Ostravě. U sprchových koutů
            doporučujeme nanoimpregnaci skla — snazší údržba, méně vodního
            kamene.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Lepidlo + spárování"],
            ["Velkoformátové obklady (nad 60×60 cm)", "850–1 250 Kč/m²", "Nivelace, buttering-floating"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání"],
            ["Velkoformátová dlažba (nad 60×60 cm)", "800–1 200 Kč/m²", "Nivelace, buttering-floating"],
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Včetně přípravy podkladu"],
            ["Odvoz suti", "4 500–6 000 Kč", "Kontejner + odvoz na skládku"],
            ["Vyzdění YTONG", "15 000–22 000 Kč", "100mm příčkovky"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá stěrka + bandáž"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Panelák v Karviné-Hranicích, ul. Slovenská. Dům T08B z roku 1977. Byt 3+1, bytové jádro 1800 x 2400 mm — koupelna s vanou + oddělené WC (cca 5,5 m²). Bourání umakartového jádra 1 den, vyzdění YTONGem 2 dny, nové PPR rozvody 1 den, elektroinstalace 0,5 dne, hydroizolace Mapei Mapelastic 1 den, obklady RAKO Majolika 20x60 cm (světle šedá) 3 dny, dlažba RAKO Extra 60x60 cm (antracit) 1 den, montáž sanity 1,5 dne. Sprchový kout Walk-in Ravak 100x80 cm, závěsné WC Laufen Pro S, umyvadlo Laufen Base 65 cm, zrcadlová skříňka. Celkem přibližně 12–14 pracovních dní. Cena prací: přibližně 88 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Karviné — zaměření zdarma"
          description="Do Karviné to máme 25 minut. Přijedeme na zaměření zdarma do Hranic, Nového Města i Mizerova. Zavolejte a domluvíme termín."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Havířov", href: "/havirov" },
            { title: "Obkladač Frýdek-Místek", href: "/frydek-mistek" },
            { title: "Rekonstrukce koupelny — ceník", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
