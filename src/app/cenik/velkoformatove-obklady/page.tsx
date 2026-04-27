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
  title: "Cena velkoformátových obkladů za m² 2026 | OBK Ostrava",
  description:
    "Ceník pokládky velkoformátových obkladů v Ostravě 2026. Formáty 60×120 až 120×260. Pokládka 850–1 250 Kč/m². Nivelace, buttering-floating, vakuové přísavky.",
  alternates: { canonical: "https://obklady-ostrava.cz/cenik/velkoformatove-obklady" },
};

const breadcrumbs = [
  { label: "Ceník", href: "/cenik" },
  { label: "Velkoformátové obklady" },
];

const faqItems = [
  {
    question: "Proč je pokládka velkoformátu o 30–50 % dražší než klasiky?",
    answer:
      "Tři důvody. Nivelace podkladu — tolerance max 3 mm/2 m, jinak obklad praská. Technika buttering-floating — lepidlo na podklad i na rub desky, 95% pokrytí. Manipulace — kus 120×260 váží 35 kg, potřeba dvou lidí + vakuových přísavek. Práce trvá 2× déle než u 30×60 cm.",
  },
  {
    question: "Jaké lepidlo používáte na velkoformát?",
    answer:
      "Mapei Keraflex Maxi S1 nebo Baumit Baumacol FlexTop. Vždy C2TE S1 flexibilní. Běžné lepidlo C1 pod vahou velkoformátu praská. Spotřeba 5–7 kg/m². Cena lepidla je započítaná v ceně pokládky.",
  },
  {
    question: "Vejde se velkoformát do panelové koupelny?",
    answer:
      "Závisí na velikosti. Do 4 m² doporučujeme max 60×60 cm — větší formát opticky zmenšuje. Od 5 m² lze 60×120 cm na akcentní stěnu. Slab 120×260 dává smysl jen v koupelnách 7+ m². V panelácích T06B (Poruba, Dubina) chytrá kombinace: 60×120 jen za vanou, zbytek 30×60.",
  },
  {
    question: "Co je nivelační systém a proč ho účtujete navíc?",
    answer:
      "Spacery + klipy (Raimondi RLS, Rubi Tile Level) drží sousední desky v jedné rovině během tuhnutí lepidla. Bez nich u velkoformátu vznikají hrany 1–3 mm. Cena 60–120 Kč/m². U slabů 120×260 je systém povinný — bez něj 90% riziko prasknutí rohu.",
  },
  {
    question: "Jak velký musí být podklad pro velkoformát?",
    answer:
      "Tolerance max 3 mm na 2 metrové lati. V panelácích a starých cihlových domech je odchylka běžně 10–30 mm. Před pokládkou nivelujeme stěny hmotou Mapei Ultraplan nebo Knauf Nivellier — cena 200–400 Kč/m² podle tloušťky stěrky.",
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
      name: "Pokládka velkoformátových obkladů Ostrava",
      description:
        "Pokládka velkoformátových obkladů 60×120 až slab 120×260 cm. Buttering-floating, nivelační systém, vakuové přísavky.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        lowPrice: "850",
        highPrice: "1800",
        priceSpecification: { "@type": "UnitPriceSpecification", unitCode: "MTK" },
      },
    },
  ],
};

export default function VelkoformatCenikPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Cena velkoformátových obkladů 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Pokládka formátů 60×120 cm a větších v Ostravě a okolí. Ceny
          zahrnují lepidlo C2TE S1, nivelační klipy, řezání a spárování.
          Bez DPH a bez materiálu obkladů.
        </p>

        <PriceTable
          headers={["Formát / práce", "Cena", "Poznámka"]}
          rows={[
            ["Obklady 60×120 cm", "850–1 100 Kč/m²", "Buttering-floating, klipy"],
            ["Obklady 80×80 / 100×100 cm", "950–1 250 Kč/m²", "Spára 2 mm, nivelace"],
            ["Obklady 120×120 cm", "1 050–1 350 Kč/m²", "Vakuové přísavky"],
            ["Slab 120×240 / 120×260 cm", "1 400–1 800 Kč/m²", "Dva lidé, příprava 1 den"],
            ["Slab 160×320 cm (Laminam)", "1 800–2 400 Kč/m²", "Speciální řezací stůl"],
            ["Dlažba velkoformát 60×120", "800–1 050 Kč/m²", "Nivelace podkladu vč."],
            ["Dlažba 120×120 / 120×240", "1 050–1 400 Kč/m²", "Spára 2 mm"],
            ["Nivelace stěny stěrkou", "200–400 Kč/m²", "Mapei Ultraplan / Knauf"],
            ["Řez na pokos 45°", "150–300 Kč/bm", "Mokrá řezačka, leštění hrany"],
            ["Výřez pro zásuvku / vývod", "120–200 Kč/ks", "Diamantová korunka"],
          ]}
          caption="Ceny orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Co všechno cena zahrnuje
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Lepidlo Mapei Keraflex Maxi S1 nebo Baumit Baumacol FlexTop —
          vždy C2TE S1 flexibilní. Spotřeba 5–7 kg/m². Lepíme metodou
          buttering-floating: lepidlo na podklad i na rub desky, 95%
          pokrytí.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Nivelační klipy Raimondi RLS — drží sousední desky v jedné
          rovině během tuhnutí. Spáru 2 mm. Spárovací hmota Mapei
          Ultracolor Plus, barvu vybíráte z 25 odstínů.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Řezání na vodní řezačce Sigma nebo Rubi Slim Cutter — rovné
          řezy, výřezy kolem zárubní, otvory pro zásuvky a baterie.
          Pokládka, řez i spára v ceně za m².
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Co cena NEzahrnuje
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Materiál obkladů a dlažby (vyberete sami v SIKO Ostrava,
          Koupelnách Ptáček nebo přivezete vlastní). Hydroizolaci
          (450–650 Kč/m² dvouvrstvá Mapelastic). Bourání starých obkladů
          (180–300 Kč/m²).
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Nivelaci stěny účtujeme samostatně, pokud je odchylka nad 3
          mm/2 m. V panelácích T06B (Poruba, Dubina) je odchylka běžně
          10–25 mm — počítejte 200–400 Kč/m² navíc za stěrku.
        </p>

        <PracticeExample
          text="Koupelna 5,2 m² v paneláku Ostrava-Hrabůvka, 6. patro. Akcentní stěna 2,4×2,2 m za vanou ze slabu 120×240 cm Atlas Concorde Marvel (mramorový efekt). Tři kusy slabu, dva lidé, vakuové přísavky. Zbytek koupelny obklady RAKO Concept 30×60 cm (16 m²) na stěnách, dlažba RAKO Stones 60×60 cm (5,2 m²). Před pokládkou slabu nivelace stěny Mapei Ultraplan, průměrná tloušťka 6 mm. Práce 5 dní pokládka + 1 den spárování. Cena: slab 8 800 Kč (5,3 m²), klasika 12 800 Kč (16 m²), dlažba 3 200 Kč (5,2 m²), nivelace 1 600 Kč (5 m²) = 26 400 Kč práce bez materiálu."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Plánujete velkoformátové obklady?"
          description="Přijedeme změřit, zkontrolujeme rovinnost stěn a do 48 hodin dostanete přesnou kalkulaci. Zaměření zdarma po celé Ostravě."
        />

        <RelatedLinks
          links={[
            { title: "Velkoformátové obklady — služba", href: "/sluzby/velkoformatove-obklady" },
            { title: "Velkoformátové obklady vs. klasické", href: "/rady/velkoformatove-obklady-vs-klasicke" },
            { title: "Ceník dlažby", href: "/cenik/dlazby" },
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
            { title: "Přehled ceníku", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
