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
  title: "Obkladač Ostrava-Poruba | OBK",
  description:
    "Obkladač v Ostravě-Porubě. Rekonstrukce koupelen v panelových domech T06B. Bourání umakartových jader, nové obklady a dlažby. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava/poruba" },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Poruba" },
];

const faqItems = [
  {
    question: "Jaké panelové domy jsou v Porubě?",
    answer:
      "V Porubě převažují panelové domy typu T06B z 60.-80. let. Starší zástavba kolem Hlavní třídy (1. až 4. obvod) má cihlové domy z 50. let. Novější sídliště (7. a 8. obvod) mají paneláky T06B s umakartovými jádry 1300 x 1600 mm.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v Porubě?",
    answer:
      "Malá koupelna v paneláku T06B (bytové jádro 1300 x 1600 mm) vychází přibližně na 45 000–65 000 Kč bez materiálu. Střední koupelna 4–6 m² obvykle 65 000–95 000 Kč. U cihlových domů na Hlavní třídě bývá koupelna větší, cena se odvíjí od plochy.",
  },
  {
    question: "Jak dlouho trvá rekonstrukce v paneláku v Porubě?",
    answer:
      "Samotná koupelna přibližně 8–10 pracovních dní. Koupelna + WC přibližně 12–15 dní. Před zahájením potřebujeme nahlásit bourací práce SVJ — to vyřídíme za vás.",
  },
  {
    question: "Řešíte i odvoz suti z panelového domu?",
    answer:
      "Ano. Přistavíme kontejner k domu, suť z bourání umakartového jádra (cca 200-300 kg) vyneseme a odvezeme na skládku. V ceně bourání je odvoz zahrnutý.",
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
        addressLocality: "Ostrava-Poruba",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Ostrava-Poruba",
        containedInPlace: {
          "@type": "City",
          name: "Ostrava",
        },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function PorubaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Ostravě-Porubě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Poruba je největší sídliště v Ostravě. Přes 65 000 obyvatel.
          Většina bytů vznikla v 60.-80. letech v panelových domech typu T06B.
          Bytová jádra mají rozměr 1300 x 1600 mm — umakart na dřevěné
          konstrukci. Po 40-50 letech provozu jsou typické problémy: odlepený
          umakart, plíseň za obkladem, nefunkční odvětrání, staré ocelové
          rozvody. Rekonstrukci těchto jader děláme každý měsíc.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Porubě pracujeme nejčastěji
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>7. a 8. obvod</strong> (ul. Vřesinská, Průběžná,
            Svojsíkova) — paneláky T06B z konce 70. let. Jádra 1300 x 1600 mm.
            Většina bytů 3+1 a 2+1. Sem jezdíme nejčastěji.
          </p>
          <p>
            <strong>5. a 6. obvod</strong> (ul. Opavská, Čs. exilu, Dělnická)
            — panelové domy z 60. let. Občas se vyskytne variant jádra
            s vanou pod oknem. Bourání i vyzdění standardní.
          </p>
          <p>
            <strong>Hlavní třída a okolí</strong> (1.-4. obvod) — socialistický
            realismus, cihlové domy z 50. let. Koupelny jsou větší (6-8 m²),
            ale rozvody jsou z litiny a oceli. Kompletní výměna rozvodů je
            nutná.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Typická rekonstrukce v Porubě
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>1. Bourání umakartového jádra (1 den)</p>
          <p>2. Odvoz suti, vyčištění prostoru (1 den)</p>
          <p>3. Vyzdění nových příček YTONG 100mm (1-2 dny)</p>
          <p>4. Nové rozvody vody PPR, odpady HT 40/50/110 (1 den)</p>
          <p>5. Elektroinstalace — nový rozvaděč, zásuvky, ventilátor (1 den)</p>
          <p>6. Hydroizolace — Mapei Mapelastic, dvě vrstvy, bandáž rohů (1 den)</p>
          <p>7. Obklady a dlažba (3-4 dny)</p>
          <p>8. Spárování, silikon, montáž sanity (1-2 dny)</p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Včetně přípravy podkladu"],
            ["Odvoz suti", "4 500–6 000 Kč", "Kontejner + odvoz na skládku"],
            ["Vyzdění příček YTONG", "15 000–22 000 Kč", "Příčkovky 100mm, jádro 1300x1600"],
            ["Rozvody vody + odpady", "12 000–18 000 Kč", "PPR, HT trubky"],
            ["Hydroizolace jednovrstvá", "250–400 Kč/m²", "Stěrka + bandáž rohů"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapei / Ceresit dvouvrstvá"],
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Včetně lepidla a spárování"],
            ["Velkoformátové obklady (nad 60×60 cm)", "850–1 250 Kč/m²", "Buttering-floating, nivelace"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání podkladu"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Byt 3+1 v Porubě, ul. Vřesinská. Panelový dům T06B z roku 1975. Umakartové jádro 1300 x 1600 mm — koupelna s vanou (cca 3,5 m²). Bourání starého jádra, vyzdění YTONGem 100mm, nové PPR rozvody, hydroizolace Mapei, obklady Cersanit Livi 25x75 cm (bílý lesk), dlažba Cersanit Grava 60x60 cm (šedá). Sprchový kout Ravak 10° 90x90 cm místo vany. Umyvadlo Ravak Chrome 65 cm. Práce přibližně 10–12 pracovních dní. Cena prací: přibližně 60 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Rekonstrukce koupelny v Porubě"
          description="Přijedeme na zaměření zdarma kamkoli v Porubě. Nabídku zpracujeme do 48 hodin. Zavolejte nebo napište."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Ostrava-Zábřeh", href: "/ostrava/zabreh" },
            { title: "Obkladač Ostrava-Dubina", href: "/ostrava/dubina" },
            { title: "Rekonstrukce koupelny — ceník", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Bourací práce — ceník", href: "/cenik/bouraci-prace" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
