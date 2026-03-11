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
  title: "Podlahové topení pod dlažbu Ostrava | OBK",
  description:
    "Podlahové topení pod dlažbu v Ostravě. Elektrické od 1 600 Kč/m², teplovodní od 1 100 Kč/m². Instalace pod obklady v koupelně. Záruka 60 měsíců.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/sluzby/podlahove-topeni",
  },
};

const breadcrumbs = [
  { label: "Služby", href: "/sluzby" },
  { label: "Podlahové topení" },
];

const faqItems = [
  {
    question: "Elektrické nebo teplovodní topení do koupelny?",
    answer:
      "Do koupelny doporučuji elektrické. Instalace je rychlejší (přibližně 1 den vs cca 3–5 dní), nezvedá podlahu tolik (3 mm vs 50–70 mm) a regulace reaguje do 20 minut. Teplovodní se vyplatí pro celý byt nebo dům.",
  },
  {
    question: "Kolik stojí provoz elektrického podlahového topení?",
    answer:
      "Koupelna 6 m² s výkonem 150 W/m² (900 W celkem) spotřebuje při provozu 4 hodiny denně cca 3,6 kWh. Při ceně 6 Kč/kWh to je 21,6 Kč/den neboli 650 Kč/měsíc. S termostatem a časovačem se dá srazit na 400–500 Kč/měsíc.",
  },
  {
    question: "Lze podlahové topení instalovat pod stávající dlažbu?",
    answer:
      "Ne. Topné kabely nebo rohože se pokládají pod novou dlažbu do lepidla. Stará dlažba se musí odstranit. Jedinou výjimkou jsou ultratenké rohože 3 mm — ty lze položit na starou dlažbu a přelepit novou. Zvýší podlahu o 12–15 mm.",
  },
  {
    question: "Jak rychle se podlahové topení zahřeje?",
    answer:
      "Elektrické rohože zahřejí povrch dlažby za 15–20 minut. Teplovodní systém potřebuje 1–2 hodiny. Proto má elektrické smysl i jen na ranní a večerní provoz.",
  },
  {
    question: "Potřebuji speciální dlažbu na podlahové topení?",
    answer:
      "Ne. Keramická dlažba a kamenný obklad vedou teplo dobře. Doporučuji formát 30x30 až 60x60 cm. Dřevěné podlahy nebo vinyl se nedoporučují — špatně vedou teplo a mohou se kroutit.",
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
        "Instalace elektrického a teplovodního podlahového topení pod dlažbu v koupelnách.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CZK",
        price: "1100",
        unitText: "m²",
      },
    },
  ],
};

export default function PodlahoveTopeniPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Podlahové topení pod dlažbu v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Teplá podlaha v koupelně není luxus. Je to 650 Kč měsíčně za komfort
          na dalších 20 let. Instalujeme elektrické i teplovodní podlahové
          topení pod dlažbu. V Ostravě děláme 30–40 koupelen s topením ročně.
        </p>

        {/* Types comparison */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Elektrické vs teplovodní topení
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Dva systémy, každý jiné využití. Do koupelny elektrické. Pro celý
          byt nebo dům teplovodní.
        </p>

        <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-2">
          Elektrické podlahové topení
        </h3>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Topná rohož</strong> — síťovina s nalepeným kabelem.
            Výkon 150 W/m². Tloušťka 3 mm. Lepí se přímo do flexibilního
            lepidla pod dlažbu.
          </li>
          <li>
            <strong>Topný kabel</strong> — volný kabel fixovaný příchytkami.
            Výkon 10–20 W/bm. Pro nepravidelné tvary podlahy.
          </li>
          <li>
            Instalace za 1 den. Nezvedne podlahu. Regulace termostatem —
            zahřátí za 15–20 minut.
          </li>
          <li>
            Provoz koupelny 6 m²: cca 650 Kč/měsíc (4 h denně, 6 Kč/kWh).
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-2">
          Teplovodní podlahové topení
        </h3>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Trubky PEX nebo PERT</strong> — položené v systémové
            desce nebo v anhydritovém potěru. Výkon 40–80 W/m².
          </li>
          <li>
            Zvýší podlahu o 50–70 mm (izolace + trubky + potěr).
          </li>
          <li>
            Napojení na kotel nebo tepelné čerpadlo. Provoz 3–5x levnější
            než elektrické.
          </li>
          <li>
            Instalace 3–5 dní. Potěr schne 28 dní před pokládkou dlažby.
          </li>
          <li>
            Vyplatí se pro plochy nad 20 m². V paneláku v Porubě nebo na
            Dubině jen s povolením SVJ.
          </li>
        </ul>

        {/* Installation */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Postup instalace elektrického topení
        </h2>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Příprava podkladu</strong> — čistý, rovný podklad.
            Hydroizolace musí být hotová a suchá.
          </li>
          <li>
            <strong>Rozložení topné rohože</strong> — rohož se rozloží na
            podlahu, vynechají se místa pod vanou a WC (tam teplo nepotřebujete).
            Kabel nesmí křížit.
          </li>
          <li>
            <strong>Napojení termostatu</strong> — termostat na stěnu, čidlo
            podlahové teploty do trubky v podlaze. Elektrikář připojí na
            230 V.
          </li>
          <li>
            <strong>Měření odporu</strong> — před zalitím změříme odpor
            topného kabelu. Musí odpovídat údaji výrobce. Protokol měření
            je součást záruky.
          </li>
          <li>
            <strong>Pokládka dlažby</strong> — flexibilní lepidlo Mapei
            Keraflex Maxi S1 přímo na rohož. Hřebenový šíř. 10 mm. Dlažba
            rovnou na lepidlo.
          </li>
          <li>
            <strong>Aktivace</strong> — topení se smí zapnout až 28 dní
            po pokládce. Lepidlo musí plně vyzrát.
          </li>
        </ol>

        {/* Benefits */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Výhody podlahového topení v koupelně
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>Teplá podlaha ráno i večer. Konec studené dlažby.</li>
          <li>Podlaha schne rychleji — méně vlhkosti, méně plísní.</li>
          <li>Není vidět — žádný radiátor, více místa v koupelně.</li>
          <li>Regulace po místnostech — termostat + časovač.</li>
          <li>Životnost 20–30 let. Žádná údržba.</li>
        </ul>

        {/* Prices */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Ceník podlahového topení
        </h2>
        <PriceTable
          headers={["Typ", "Cena", "Poznámka"]}
          rows={[
            ["Elektrická topná rohož 150 W/m²", "od 1 600 Kč/m²", "Včetně rohože a pokládky"],
            ["Elektrický topný kabel", "od 1 350 Kč/m²", "Pro nepravidelné tvary"],
            ["Termostat s čidlem", "3 500–6 500 Kč", "Programovatelný, WiFi varianta dražší"],
            ["Teplovodní topení (trubky + pokládka)", "od 1 100 Kč/m²", "Bez kotle a rozdělovače"],
            ["Systémová deska pro teplovodní", "450–680 Kč/m²", "S izolací a výstupky"],
            ["Anhydritový potěr", "350–480 Kč/m²", "Tloušťka 35–50 mm"],
            ["Elektrikářské práce (připojení)", "2 800–5 500 Kč", "Termostat, čidlo, jistič"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample text="Koupelna 6 m² v novostavbě v Hrabůvce, Ostrava. Elektrická topná rohož Fenix LDTS 150 W/m² na ploše 4,2 m² (vynechaná plocha pod vanou a WC). Celkový výkon 630 W. Termostat Fenix TFT s WiFi. Čidlo v podlaze. Rohož položena na hotovou hydroizolaci, přelepena flexibilním lepidlem Mapei Keraflex Maxi, dlažba RAKO Extra 60x60. Spotřeba při 4 h provozu denně: cca 2,5 kWh = přibližně 15 Kč/den. Měsíční náklady: cca 450 Kč. Cena instalace: 12 500 Kč včetně materiálu a termostatu." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete teplou podlahu v koupelně?"
          description="Zavolejte a domluvíme zaměření. Poradíme, jestli se víc vyplatí elektrické nebo teplovodní. Rozpočet obvykle do 3 pracovních dnů."
        />

        <RelatedLinks
          links={[
            { title: "Rekonstrukce koupelny na klíč", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Hydroizolace koupelny", href: "/sluzby/hydroizolace" },
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
