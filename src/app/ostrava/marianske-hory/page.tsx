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
  title: "Obkladač Mariánské Hory a Hulváky — rekonstrukce koupelen | OBK",
  description:
    "Obkladač v Mariánských Horách a Hulvákách. Rekonstrukce koupelen v dělnických koloniích, cihlových činžácích i nových bytovkách. Vlastní tým, záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava/marianske-hory" },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Mariánské Hory a Hulváky" },
];

const faqItems = [
  {
    question: "Jaká je zástavba v Mariánských Horách?",
    answer:
      "Mix dělnických kolonií z 20.–30. let (Hulváky, Jungmannova), cihlových činžáků z přelomu století a několika panelových sídlišť z 60.–70. let. Typické koupelny: v dělnických domcích 2–4 m² (často přistavěné později), v činžácích 4–7 m².",
  },
  {
    question: "Rekonstrukce v dělnickém domku — na co si dát pozor?",
    answer:
      "Tři hlavní rizika: 1) slabé základy (nutná kontrola před přístavbou nebo větším bouráním), 2) vzlínající vlhkost (cca 60 % domů má problém — řešíme sanačními omítkami), 3) staré rozvody (litina/ocel, nutná kompletní výměna). Rekonstrukci zvládáme i v těchto podmínkách — máme zkušenosti.",
  },
  {
    question: "Kolik stojí rekonstrukce v Mariánských Horách?",
    answer:
      "Malá koupelna v domku (2–3 m²) — 55 000–80 000 Kč za práci. Střední v činžáku (4–6 m²) — 75 000–115 000 Kč. U dělnických kolonií připočteme cca 8 000–18 000 Kč za sanaci vlhkosti, pokud je problém.",
  },
  {
    question: "Lze v dělnickém domku udělat podlahové topení?",
    answer:
      "Ano, ale záleží na tloušťce podlahy. Pokud má dům sklep, lze topení instalovat shora (elektrický systém Devi Flex nebo teplovodní s mixovačem). V domcích bez sklepu může být problém s výškou — musí se přistoupit k odbourání stávající podlahy 8–12 cm.",
  },
  {
    question: "Kde v Mariánských Horách nejčastěji pracujete?",
    answer:
      "Ulice 28. října, Jungmannova, Novinářská, Přerovská, Gen. Hrušky, Výstavní, sídliště Fifejdy a okolí TJ Mariánské Hory. Přijedeme do jakékoli části, zaměření zdarma.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "LocalBusiness",
      name: "OBK Obkladač Mariánské Hory",
      telephone: "+420737540605",
      url: "https://obklady-ostrava.cz/ostrava/marianske-hory",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mariánské Hory",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Mariánské Hory a Hulváky",
        containedInPlace: { "@type": "City", name: "Ostrava" },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function MarianskeHoryPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Mariánských Horách a Hulvákách
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Mariánské Hory a Hulváky patří mezi nejstarší obvody Ostravy.
          Mix dělnických kolonií z 20.–30. let, cihlových činžáků
          a novějších panelových sídlišť. Rekonstruujeme tady koupelny
          všech typů — od malých v domcích po velké v činžácích.
          Pokládáme obklady, dlažby, velkoformátové obklady i přírodní
          kámen. Vlastní tým, záruka 60 měsíců.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Typická zástavba
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Dělnické kolonie</strong> (Hulváky, Jungmannova,
            Přerovská) — jednopatrové cihlové domky z 20.–30. let.
            Koupelny 2–4 m², často přistavěné k hlavnímu domu později.
            Typické problémy: vlhkost, staré rozvody, tenké zdi.
          </p>
          <p>
            <strong>Cihlové činžáky</strong> (28. října, Novinářská,
            Výstavní) — domy z let 1890–1939. Velké byty 3+1, 4+1
            s koupelnami 5–7 m². Vysoké stropy 3+ m, původní detaily.
          </p>
          <p>
            <strong>Paneláková sídliště</strong> (Fifejdy, okolí TJ) —
            kolem 60. let. Bytová jádra T06B 1300×1600 mm nebo T08B
            1800×2400 mm. Běžná rekonstrukce jako v Porubě.
          </p>
          <p>
            <strong>Novostavby</strong> — poslední desetiletí. Koupelny
            už bez umakartu, rovné stěny, moderní rozvody. Zaměřujeme
            se na velkoformátové obklady a design.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání malé koupelny", "6 000–12 000 Kč", "Domky, přístavby"],
            ["Sanace vlhkosti (injektáž + omítka)", "8 000–18 000 Kč", "Přízemní a podsklepené domy"],
            ["Výměna stoupaček (litina → PPR)", "12 000–25 000 Kč", "Činžáky, dělnické domy"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic + bandáž"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Standardní rozměr"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Moderní vzhled"],
            ["Dlažba + podlahové topení", "950–1 400 Kč/m²", "Devi Flex nebo teplovodní"],
            ["Přírodní kámen (travertin, břidlice)", "900–1 600 Kč/m²", "Spa vzhled"],
            ["Kompletní koupelna — malá (2–3 m²)", "55 000–80 000 Kč", "Dělnické domky"],
            ["Kompletní koupelna — střední (4–6 m²)", "75 000–115 000 Kč", "Činžáky, paneláky"],
          ]}
          caption="Ceny bez DPH, bez materiálu. Platí pro Mariánské Hory, Hulváky a okolí. Přesná kalkulace zdarma do 24 hodin."
        />

        <PracticeExample
          text="Dělnický domek v Hulvákách (ul. Jungmannova), koupelna 2,8 m². Dům z roku 1928, přízemí, vzlínající vlhkost do 40 cm, staré litinové rozvody, dlažba z 60. let. Injektáž cihel Schomburg Aquafin-F, sanační omítka Baumit SanovaPutz, kompletní výměna rozvodů za PPR, nové odpady HT, hydroizolace Mapelastic dvouvrstvá, obklady RAKO Board 30×60 cm (bílé matné, 16 m²), dlažba RAKO Stones 30×60 cm antracit (2,8 m²), sprchový kout Ravak Walk-in 90×90 cm s lineárním odtokem, umyvadlo Jika Cubito. Práce 11 pracovních dní, cena prací 68 000 Kč, materiál 38 000 Kč. Vlhkost od té doby (květen 2026) se neobjevila."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Rekonstrukci v Mariánských Horách a Hulvákách"
          description="Přijedeme na zaměření zdarma. Sanaci vlhkosti, výměnu rozvodů i moderní obklady — vše pod jednou střechou. Záruka 60 měsíců."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Moravská Ostrava", href: "/ostrava/moravska-ostrava" },
            { title: "Obkladač Slezská Ostrava", href: "/ostrava/slezska-ostrava" },
            { title: "Obkladač Ostrava-Poruba", href: "/ostrava/poruba" },
            { title: "Hydroizolace", href: "/sluzby/hydroizolace" },
            { title: "Rekonstrukce koupelny", href: "/sluzby/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
