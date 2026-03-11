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
  title: "Obkladač Ostrava-Zábřeh | OBK",
  description:
    "Obkladač v Ostravě-Zábřehu. Rekonstrukce koupelen v panelových domech na sídlišti Výškovice a Zábřeh. Pokládka obkladů, dlažeb. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava/zabreh" },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Zábřeh" },
];

const faqItems = [
  {
    question: "Jaké typy paneláků jsou v Zábřehu?",
    answer:
      "V Zábřehu najdete převážně panelové domy T08B a OP 1.11 z 70.-80. let. Na sídlišti Výškovice jsou T06B. Bytová jádra mají rozměry 1300 x 1600 mm (malá) nebo 1800 x 2400 mm (větší varianta s odděleným WC).",
  },
  {
    question: "Musíme nahlásit rekonstrukci SVJ?",
    answer:
      "Ano. Bourací práce v paneláku je nutné nahlásit SVJ nebo správcovské firmě minimálně 14 dní předem. Pomůžeme vám s oznámením — máme připravený formulář, stačí ho podepsat.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny + WC v Zábřehu?",
    answer:
      "Koupelna + oddělené WC v paneláku T08B (jádro 1800 x 2400 mm) vychází přibližně na 85 000–120 000 Kč bez materiálu. Zahrnuje bourání, vyzdění, rozvody, hydroizolaci, obklady, dlažbu a montáž sanity.",
  },
  {
    question: "Jak řešíte parkování u panelového domu?",
    answer:
      "Kontejner na suť přistavíme k domu po dohodě se SVJ. Náš vůz parkujeme na běžných místech. V Zábřehu je parkování u většiny paneláků volné, problém nebývá.",
  },
  {
    question: "Lze předělat koupelnu s vanou na sprchový kout?",
    answer:
      "Ano, děláme to pravidelně. V jádře 1300 x 1600 mm se vejde sprchový kout 80x80 nebo 90x90 cm. U většího jádra 1800 x 2400 mm i Walk-in 90x120 cm. Odpad přesměrujeme v podlaze.",
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
        addressLocality: "Ostrava-Zábřeh",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Ostrava-Zábřeh",
        containedInPlace: {
          "@type": "City",
          name: "Ostrava",
        },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function ZabrehPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Ostravě-Zábřehu
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Zábřeh je jeden z největších obvodů Ostravy. Sídliště Výškovice,
          Zábřeh-jih, okolí ulice Kosmonautů — všude panelové domy z 70. a
          80. let. Typy T08B a OP 1.11 s bytovými jádry, která mají navrch
          40+ let. Umakart je prohnutý, rozvody korodované, odvětrání
          nefunkční. Přestavujeme je na moderní zděné koupelny s pořádnou
          hydroizolací.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Sídliště v Zábřehu — kde pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Výškovice</strong> (ul. Výškovická, Lumírova, Šperlínova)
            — paneláky T06B a T08B. Jádra 1300 x 1600 mm. Hodně bytů 2+1 a 3+1.
            Časté zakázky pro SVJ, které řeší rekonstrukce po celém domě.
          </p>
          <p>
            <strong>Zábřeh-jih</strong> (ul. Kosmonautů, Svazácká, Pavlovova)
            — panelové domy OP 1.11 z konce 70. let. Větší bytová jádra
            1800 x 2400 mm s odděleným WC. Rozvody z ocelových trubek — vždy
            kompletní výměna za PPR.
          </p>
          <p>
            <strong>Okolí ul. Závodní</strong> — starší cihlová zástavba,
            domy ze 60. let. Koupelny jsou větší, ale podlahy bývají nerovné.
            Nutné nivelační stěrky před pokládkou dlažby.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Co řešíme v Zábřehu nejčastěji
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>
            Bourání umakartového jádra a vyzdění nového z YTONG příčkovek 100mm.
            Nové rozvody vody (PPR) a odpadů (HT). Hydroizolace celé koupelny
            stěrkovou izolací Mapei nebo Ceresit. Obklady 30x60 cm nebo 25x75 cm.
            Dlažba 60x60 cm. Montáž sprchového koutu, umyvadla, WC.
          </p>
          <p>
            U SVJ zakázek koordinujeme práce tak, aby hlučné bourání probíhalo
            jen v pracovní dny 8:00-17:00.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Včetně přípravy podkladu"],
            ["Odvoz suti", "4 500–6 000 Kč", "Kontejner + odvoz na skládku"],
            ["Vyzdění YTONG", "15 000–22 000 Kč", "Příčkovky 100mm"],
            ["Rozvody vody + odpady", "12 000–18 000 Kč", "PPR + HT trubky"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapei / Ceresit dvouvrstvá"],
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Lepidlo + spárování"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Byt 3+1 v Zábřehu, ul. Kosmonautů. Panelový dům OP 1.11 z roku 1979. Bytové jádro 1800 x 2400 mm — koupelna s vanou + oddělené WC (cca 5,8 m²). Bourání umakartového jádra, vyzdění YTONGem, nové PPR rozvody, hydroizolace Ceresit CL 51, obklady RAKO Up 30x60 cm (šedý mat), dlažba RAKO Betonico 60x60 cm. Walk-in sprchový kout Ravak 100x80 cm, závěsné WC Laufen Pro, umyvadlo Laufen Val 65 cm. Práce přibližně 12–14 pracovních dní. Cena prací: přibližně 92 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Zábřehu — zaměření zdarma"
          description="Přijedeme na zaměření zdarma do Výškovic, na Kosmonautů i kamkoli v Zábřehu. Nabídku zpracujeme do 48 hodin."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Ostrava-Poruba", href: "/ostrava/poruba" },
            { title: "Obkladač Ostrava-Dubina", href: "/ostrava/dubina" },
            { title: "Obkladač Ostrava-Hrabůvka", href: "/ostrava/hrabuvka" },
            { title: "Rekonstrukce koupelny — ceník", href: "/cenik/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
