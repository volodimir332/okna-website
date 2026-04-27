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
  title: "Travertin Ostrava — pokládka, prodej, ceny 2026 | OBK",
  description:
    "Travertin v Ostravě — prodej, pokládka, výroba na míru. Italský, turecký, íránský. Cena materiálu 1 200–3 500 Kč/m², pokládka od 1 500 Kč/m². Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/svet-kamene/travertin" },
};

const breadcrumbs = [
  { label: "Svět Kamene", href: "/svet-kamene" },
  { label: "Travertin" },
];

const faqItems = [
  {
    question: "Travertin do koupelny — vydrží?",
    answer:
      "Vydrží 30+ let, pokud je správně impregnovaný. Travertin je pórovitý vápenec — bez impregnace se do dutinek dostane voda a špína. Před pokládkou desku impregnujeme Fila MP90 (pre-seal), po spárování ještě jednou. Reimpregnace každé 2 roky — cca 500 Kč v DIY (Fila Hydrorep).",
  },
  {
    question: "Italský, turecký nebo íránský travertin?",
    answer:
      "Italský (Rapolano, Tivoli) — nejprestižnější, jednotná barva, vyšší cena 2 400–3 500 Kč/m². Turecký (Denizli) — dobrý poměr cena/kvalita, 1 200–2 000 Kč/m², nejprodávanější. Íránský — nejlevnější (900–1 400 Kč), ale větší rozdíly mezi deskami, doporučujeme jen na malé plochy.",
  },
  {
    question: "Lze travertin do sprchového koutu?",
    answer:
      "Ano, ale jen broušený nebo matný — leštěný kámen je v mokru kluzký (R8). Broušený travertin má protiskluz R10, štípaný R11. Před pokládkou nutná dvouvrstvá hydroizolace Mapei Mapelastic + bandáž rohů. Klienti v Ostravě toto řešení milují — vypadá jako spa hotel.",
  },
  {
    question: "Otevřené nebo zatmelené dutinky travertinu?",
    answer:
      "Estetická otázka. Otevřené dutinky = autentický rustikální vzhled, ale špína se v nich drží. Zatmelené dutinky (epoxidem před pokládkou) = hladký moderní povrch, snadný úklid. V koupelnách doporučujeme zatmelené, do interiéru u krbu spíš otevřené.",
  },
  {
    question: "Lze travertin pod podlahové topení?",
    answer:
      "Ano, dokonce ideálně. Travertin drží teplo rovnoměrně, na rozdíl od keramiky vyzařuje i po vypnutí topení. Tloušťka desky 15–20 mm. Lepidlo C2TE S1 (Mapei Keraflex Maxi S1), první zapnutí topení až 14 dní po pokládce, postupné zahřívání 2 °C/den.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Product",
      name: "Travertin — přírodní kámen",
      description:
        "Italský, turecký a íránský travertin pro koupelny, podlahy, fasády a krby. Pokládka v Ostravě a okolí.",
      brand: { "@type": "Brand", name: "OBK Obklady Ostrava" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        lowPrice: "1200",
        highPrice: "3500",
        availability: "https://schema.org/InStock",
        priceSpecification: { "@type": "UnitPriceSpecification", unitCode: "MTK" },
      },
    },
  ],
};

export default function TravertinPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Travertin v Ostravě — prodej a pokládka
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Travertin je teplý mediteránní kámen — typický pro luxusní
          hotely a spa. V Ostravě ho dovážíme z Itálie, Turecka a Íránu.
          Pokládáme do koupelen, na fasády, krby, schody i terasy.
          Vzorky můžete osobně prohlédnout v naší vzorkovně.
        </p>

        <PriceTable
          headers={["Položka", "Cena", "Poznámka"]}
          rows={[
            ["Travertin italský Rapolano", "2 400–3 500 Kč/m²", "Prémiová kvalita, jednotná barva"],
            ["Travertin italský Tivoli Classic", "2 200–3 000 Kč/m²", "Klasický římský odstín"],
            ["Travertin turecký Denizli", "1 200–2 000 Kč/m²", "Nejprodávanější, dobrý poměr"],
            ["Travertin íránský Yazd", "900–1 400 Kč/m²", "Levný, větší rozdíly mezi deskami"],
            ["Pokládka travertinu (rovná plocha)", "1 500–2 200 Kč/m²", "Včetně lepidla a spáry"],
            ["Pokládka v sprchovém koutu", "1 800–2 500 Kč/m²", "Hydroizolace + protiskluz"],
            ["Pokládka na fasádu", "1 800–2 800 Kč/m²", "Mrazuvzdorné lepidlo + kotvení"],
            ["Impregnace pre-seal (před pokládkou)", "150–250 Kč/m²", "Fila MP90, schne 4 hod"],
            ["Impregnace top-seal (po spárování)", "150–250 Kč/m²", "Fila Hydrorep, dlouhodobá"],
            ["Zatmelení dutinek epoxidem", "200–350 Kč/m²", "Před pokládkou, hladký povrch"],
            ["Výroba parapetu / desky na míru", "od 4 500 Kč/bm", "Řez na vodní řezačce, leštění hran"],
          ]}
          caption="Ceny orientační, bez DPH. Materiál + práce. Vzorek dovezeme zdarma kdekoli v Ostravě."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Tři typy povrchu travertinu — kam který hodí
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          <strong>Broušený (honed)</strong> — matný hladký povrch, hedvábný
          dotek. Protiskluz R10. Univerzální volba — koupelny, podlahy,
          obývací pokoje. Naše nejprodávanější varianta v Ostravě.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          <strong>Leštěný (polished)</strong> — vysoký lesk, vypadá luxusně,
          ale ve vlhku kluzký (R8). Doporučujeme jen na suché stěny —
          akcent v obývacím pokoji, kuchyňská deska, schody mimo koupelnu.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          <strong>Štípaný / antikovaný</strong> — drsný rustikální povrch.
          Protiskluz R11, ideál do exteriéru, sprchového koutu, terasy.
          Výhoda — kámen vypadá stárlý, drobné poškrábání zapadne.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Údržba travertinu — co nikdy nedělat
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Travertin je vápenec a kyselina ho rozpouští. <strong>Nikdy
          nepoužívejte:</strong> citron, ocet, WC čistič, prostředky
          s pH pod 6. Stopa po citronu během 30 sekund vyleptá matnou
          skvrnu, kterou nepůjde odstranit jinak než broušením.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          <strong>Bezpečné čisticí prostředky:</strong> Fila Cleaner,
          Lithofin KF Cleaner nebo prostá vlažná voda s několika kapkami
          jaru. Ne víc.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          <strong>Reimpregnace každé 2 roky.</strong> Fila Hydrorep nebo
          Lithofin Stainstop. Plocha 5 m² koupelny: 30 minut práce, jeden
          litr (cca 500 Kč) vystačí na 30 m².
        </p>

        <PracticeExample
          text="Koupelna 6,5 m² v rodinném domě Ostrava-Krásné Pole. Klient chtěl spa atmosféru. Travertin turecký Denizli Classic broušený, 60×30 cm, na podlaze i stěnách (32 m² celkem). Sprchový kout 90×120 z travertinu antikovaného (3 m²) — protiskluz R11. Před pokládkou všechny desky impregnovány Fila MP90 (pre-seal). Hydroizolace Mapei Mapelastic dvouvrstvá v koupelně, bandáž rohů. Pokládka lepidlem Mapei Keraflex Maxi S1, spára 2 mm Mapei Ultracolor Plus odstín Vanilla. Po spárování top-seal Fila Hydrorep. Práce 8 dní. Cena: travertin 51 200 Kč materiál (32 m² × 1 600 Kč), pokládka 49 000 Kč, impregnace 6 200 Kč, hydroizolace 4 500 Kč. Celkem 110 900 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Plánujete travertin do koupelny nebo na fasádu?"
          description="Přivezeme vzorky 4–6 typů travertinu domů v Ostravě. Probereme vhodný povrch, impregnaci a postup. Konzultace a zaměření zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Přehled — Svět Kamene", href: "/svet-kamene" },
            { title: "Přírodní kámen do koupelny — 7 typů", href: "/rady/prirodni-kamen-do-koupelny" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Cena rekonstrukce koupelny 2026", href: "/rady/cena-rekonstrukce-koupelny-ostrava-2026" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
