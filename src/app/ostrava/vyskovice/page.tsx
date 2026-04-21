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
  title: "Obkladač Ostrava-Výškovice — rekonstrukce koupelen v paneláku | OBK",
  description:
    "Obkladač ve Výškovicích. Rekonstrukce koupelen v panelácích T08B a OP 1.11. Větší bytová jádra 1800×2400 mm, standardní i velkoformátové obklady. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava/vyskovice" },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Výškovice" },
];

const faqItems = [
  {
    question: "Jaké jsou paneláky ve Výškovicích?",
    answer:
      "Převážně T08B (80 % sídliště) a OP 1.11 (novější část, 20 %). T08B má větší bytové jádro 1800×2400 mm — koupelna + WC společně 4,3 m². OP 1.11 už mívá zděné koupelny 5–7 m². Postaveno v 70.–80. letech.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny ve Výškovicích?",
    answer:
      "Střední koupelna v T08B (4,3 m²) — 75 000–110 000 Kč za práci bez materiálu. Větší v OP 1.11 (5–7 m²) — 95 000–140 000 Kč. S materiálem a sanitou typicky 135 000–220 000 Kč.",
  },
  {
    question: "Jak dlouho trvá rekonstrukce v panelové koupelně?",
    answer:
      "V T08B (koupelna + WC) 12–15 pracovních dní. V OP 1.11 (samostatná koupelna) 10–13 dní. Bourání umakartového jádra T08B trvá déle (více umakartu), vyzdění je stejně náročné.",
  },
  {
    question: "Řešíte i hydroizolaci balkonů a teras?",
    answer:
      "Ano. V OP 1.11 a T08B je balkon běžnou součástí bytu. Hydroizolace balkonu 4–6 m² stojí 8 000–15 000 Kč. Používáme pružnou stěrku odolnou vůči UV a mrazu (Mapei Mapelastic Smart nebo Baumacol ElastoProof).",
  },
  {
    question: "Kde ve Výškovicích nejčastěji pracujete?",
    answer:
      "Ulice Výškovická, Kosmonautů, Svazácká, Proskovická, U Hrušova, Petruškova, 29. dubna. Pracujeme i v přilehlé části Zábřehu (Bělský Les). Zaměření zdarma kdekoli ve Výškovicích.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "LocalBusiness",
      name: "OBK Obkladač Výškovice",
      telephone: "+420737540605",
      url: "https://obklady-ostrava.cz/ostrava/vyskovice",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava-Výškovice",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Ostrava-Výškovice",
        containedInPlace: { "@type": "City", name: "Ostrava" },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function VyskovicePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Ostravě-Výškovicích
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Výškovice jsou jedno z největších sídlišť v Ostravě — přes
          40 000 obyvatel. Paneláky typu T08B a OP 1.11 ze 70.–80. let.
          Rekonstruujeme tady koupelny každý měsíc — specializujeme se
          na bourání umakartových jader a moderní pokládku obkladů,
          dlažeb i velkoformátů. Pokládáme i přírodní kámen v luxusních
          provedeních.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Specifika Výškovic
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>T08B (80 % bytů)</strong> — bytové jádro 1800×2400 mm,
            koupelna + WC dohromady 4,3 m². Umakartové stěny na dřevěné
            konstrukci. Stoupačky uprostřed bytu. Rozvody měděné nebo
            ocelové. Typický problém: deformované umakartové panely po
            45+ letech.
          </p>
          <p>
            <strong>OP 1.11 (novější část)</strong> — zděné koupelny
            od začátku, bez umakartu. 5–7 m². Rozvody měděné nebo PPR.
            Rekonstrukce levnější o 15–25 % oproti T08B (nemusíme bourat
            jádro).
          </p>
          <p>
            <strong>Balkony</strong> — většina bytů má balkon 4–6 m².
            Hydroizolace balkonu při rekonstrukci koupelny dává smysl —
            ušetříte dovoz materiálu a koordinaci.
          </p>
          <p>
            <strong>SVJ a správce</strong> — většina domů má aktivní SVJ.
            Bourání je nutné nahlásit 7 dní předem. My zařídíme papírování.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra T08B", "10 000–18 000 Kč", "Více m² než T06B"],
            ["Odvoz suti (kontejner)", "4 500–7 000 Kč", "Cca 400 kg"],
            ["Vyzdění příček YTONG 100mm", "18 000–28 000 Kč", "Jádro T08B"],
            ["Rozvody voda + odpady", "12 000–22 000 Kč", "PPR + HT"],
            ["Elektroinstalace", "8 000–15 000 Kč", "Zásuvky IP44, ventilátor"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic + bandáž"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Standardní pokládka"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Buttering-floating"],
            ["Dlažba s podlahovým topením", "950–1 400 Kč/m²", "Devi Flex elektrický"],
            ["Hydroizolace balkonu 4–6 m²", "8 000–15 000 Kč", "Pružná UV-odolná stěrka"],
            ["Kompletní koupelna T08B (4,3 m²)", "75 000–110 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna OP 1.11 (5–7 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny orientační, bez DPH a bez materiálu. Platí pro Výškovice a okolí. Přesná kalkulace zdarma do 24 hodin."
        />

        <PracticeExample
          text="Byt 3+1 ve Výškovicích (ul. Výškovická), panelák T08B z roku 1978. Bytové jádro 1800×2400 mm — koupelna + WC dohromady 4,3 m². Klient chtěl sprchu místo vany a podlahové topení. Kompletní bourání umakartu, vyzdění YTONGem 100mm, nové rozvody PPR a HT, elektroinstalace s proudovým chráničem, hydroizolace Mapelastic dvouvrstvá, Devi Flex 300 W/m² elektrické podlahové topení, obklady RAKO Concept 30×60 cm šedobílý matný (24 m²), dlažba RAKO Extra 60×60 cm antracit (4,3 m²), sprchový kout Ravak Walk-in 90×110 cm s lineárním odtokem, umyvadlo Cersanit Lara 65 cm, WC závěsné Geberit Duofix. Práce 13 pracovních dní, cena prací 92 000 Kč, materiál 64 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Rekonstrukci koupelny ve Výškovicích"
          description="Přijedeme kamkoli ve Výškovicích na zaměření zdarma. Papíry na SVJ zařídíme. Kalkulace do 48 hodin, záruka 60 měsíců na všechny práce."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Ostrava-Zábřeh", href: "/ostrava/zabreh" },
            { title: "Obkladač Ostrava-Dubina", href: "/ostrava/dubina" },
            { title: "Obkladač Ostrava-Hrabůvka", href: "/ostrava/hrabuvka" },
            { title: "Rekonstrukce koupelny v paneláku", href: "/rady/rekonstrukce-koupelny-v-panelaku-ostrava" },
            { title: "Podlahové topení", href: "/sluzby/podlahove-topeni" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
