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
  title: "Cena podlahového topení pod dlažbu 2026 | OBK Ostrava",
  description:
    "Ceník elektrického podlahového topení pod dlažbu v Ostravě 2026. Devi Flex, Fenix, Heatfloor. Montáž 450–700 Kč/m², kompletní s termostatem od 1 100 Kč/m².",
  alternates: { canonical: "https://obklady-ostrava.cz/cenik/podlahove-topeni" },
};

const breadcrumbs = [
  { label: "Ceník", href: "/cenik" },
  { label: "Podlahové topení" },
];

const faqItems = [
  {
    question: "Elektrické nebo teplovodní topení do koupelny?",
    answer:
      "Do koupelny do 6 m² jednoznačně elektrické — Devi Flex, Fenix nebo Heatfloor. Instalace 1 den, žádný zásah do otopné soustavy bytu. Teplovodní má smysl jen u kompletní rekonstrukce vytápění celého domu nebo u podlahy nad 15 m².",
  },
  {
    question: "Kolik m² topné rohože potřebuju do 4 m² koupelny?",
    answer:
      "3,5 m² topné plochy. Pod vanou, sprchovým koutem a WC topení nedáváme — odečtěte cca 0,5 m². Účinnost 130–160 W/m². Spotřeba na vytopení koupelny ráno 30 minut: cca 0,5 kWh = 3 Kč.",
  },
  {
    question: "Co je v ceně 1 100 Kč/m² kompletního systému?",
    answer:
      "Topná rohož Devi Flex 18T (160 W/m²) — 750 Kč/m², digitální termostat Devi Touch s týdenním programem — 3 500 Kč fix, montáž rohože pod stěrku — 250 Kč/m², zapojení termostatu — 800 Kč fix. Vše s 5 lety záruky výrobce + 60 měsíců naší.",
  },
  {
    question: "Lze topení pod velkoformátovou dlažbu 120×120?",
    answer:
      "Ano, je to dokonce ideální. Velkoformát drží teplo rovnoměrněji než mozaika — méně spár, lepší vedení. Důležité: lepidlo musí být C2TE S1 flexibilní (Mapei Keraflex Maxi S1) a topení nesmíte zapnout dříve než 14 dní po pokládce.",
  },
  {
    question: "Jak hluboko musí být topení pod dlažbou?",
    answer:
      "Topná rohož je tlustá 4 mm. Pod ní musí být 3–5 mm samonivelační stěrky, na ní lepidlo 5 mm, dlažba 9–10 mm. Celkem 22–25 mm. V panelácích to znamená sázku — pod původní dlažbu se topení nevejde, je nutné odbourat.",
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
      name: "Podlahové topení pod dlažbu Ostrava",
      description:
        "Montáž elektrického podlahového topení pod dlažbu v Ostravě. Devi, Fenix, Heatfloor. Kompletně s termostatem.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        lowPrice: "450",
        highPrice: "1500",
        priceSpecification: { "@type": "UnitPriceSpecification", unitCode: "MTK" },
      },
    },
  ],
};

export default function PodlahoveTopeniCenikPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Cena podlahového topení 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Elektrické podlahové topení pod dlažbu v koupelnách a chodbách.
          Devi Flex, Fenix Ecofloor, Heatfloor. Montáž v jeden den —
          ranní teplo do 6 minut po probuzení. Záruka 60 měsíců na práci,
          5 let na rohož.
        </p>

        <PriceTable
          headers={["Položka", "Cena", "Poznámka"]}
          rows={[
            ["Montáž topné rohože", "450–700 Kč/m²", "Pokládka pod stěrku, zapojení"],
            ["Topná rohož Devi Flex 18T", "650–850 Kč/m²", "160 W/m², záruka 5 let"],
            ["Topná rohož Fenix Ecofloor", "550–750 Kč/m²", "150 W/m², dobrý poměr cena/výkon"],
            ["Topná rohož Heatfloor 160", "500–700 Kč/m²", "Nejdostupnější varianta"],
            ["Termostat digitální Devi Touch", "3 500 Kč fix", "Týdenní program, dotykový"],
            ["Termostat Fenix TFT", "2 200 Kč fix", "Týdenní program, mechanický"],
            ["Termostat WiFi Heatit Z-Trm6", "5 800 Kč fix", "Aplikace, hlasové ovládání"],
            ["Zapojení termostatu + revize", "800–1 200 Kč", "Včetně revizní zprávy"],
            ["Samonivelační stěrka pod topení", "200–300 Kč/m²", "Mapei Ultraplan 3–5 mm"],
            ["Kompletní systém (4–6 m²)", "od 1 100 Kč/m²", "Rohož + termostat + montáž + stěrka"],
          ]}
          caption="Ceny orientační, bez DPH. Platné pro Ostravu a okolí. Kalkulaci konkrétní místnosti zdarma do 24 hodin."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Které značky používáme a proč
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          <strong>Devi Flex 18T</strong> — dánská kvalita, nejtenčí rohož
          na trhu (4 mm). Záruka 5 let. Doporučujeme do koupelen, kde se
          počítá s pokládkou velkoformátu — minimální výška skladby.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          <strong>Fenix Ecofloor</strong> — český výrobce z Jeseníku.
          Dobrá kvalita, levnější o 100–150 Kč/m². Servis dostupný v ČR
          do 48 hodin. Volba pro většinu zakázek v Moravskoslezském kraji.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          <strong>Heatfloor 160</strong> — bazická rohož pro malé plochy
          (chodba, předsíň, WC). Cena nejnižší, výkon 160 W/m². Vhodná
          tam, kde topení slouží jen k temperování (ne hlavnímu vytápění).
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Skladba podlahy s topením — milimetr po milimetru
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Podklad (beton, anhydrit) → penetrace 0,1 mm → samonivelační
          stěrka 3–5 mm → topná rohož 4 mm → flexibilní lepidlo 5 mm →
          dlažba 9–10 mm. Celková výška 22–25 mm.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          V panelákových koupelnách v Porubě a Hrabůvce je nutné
          odbourat starou dlažbu i s lepidlem (cca 15 mm) — jinak se
          nová skladba s topením do dveřního otvoru nevejde.
        </p>

        <PracticeExample
          text="Koupelna 4,2 m² v paneláku Ostrava-Poruba, ul. Vřesinská. Topná plocha po odečtu vany a WC: 3,5 m². Položena rohož Devi Flex 18T (3,5 m²), termostat Devi Touch s týdenním programem na stěně 1,4 m od podlahy. Před pokládkou samonivelační stěrka Mapei Ultraplan (průměr 4 mm). Po 24 hodinách pokládka dlažby RAKO Extra 60×60 (antracit) flexibilním lepidlem Mapei Keraflex Maxi S1. První zapnutí topení až 14 dní po pokládce — postupné zahřívání 2 °C/den. Spotřeba: ranní vytopení na 26 °C trvá 18 minut, spotřeba 0,4 kWh = 2,40 Kč. Cena: rohož 2 800 Kč, termostat 3 500 Kč, montáž 1 700 Kč, stěrka 1 050 Kč, revize 800 Kč. Celkem 9 850 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Plánujete podlahové topení?"
          description="Spočítáme přesnou plochu, doporučíme rohož a termostat podle potřeb. Návrh systému + cenovou nabídku do 24 hodin. Zaměření zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Podlahové topení — služba", href: "/sluzby/podlahove-topeni" },
            { title: "Ceník dlažby", href: "/cenik/dlazby" },
            { title: "Ceník velkoformátových obkladů", href: "/cenik/velkoformatove-obklady" },
            { title: "Ceník rekonstrukce koupelny", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Přehled ceníku", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
