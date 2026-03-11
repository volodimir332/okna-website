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
  title: "Obkladač Frýdek-Místek | OBK",
  description:
    "Obkladač ve Frýdku-Místku. Rekonstrukce koupelen v panelácích i rodinných domech. Pokládka obkladů a dlažeb. Dojezd z Ostravy 25 km. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/frydek-mistek" },
};

const breadcrumbs = [{ label: "Frýdek-Místek" }];

const faqItems = [
  {
    question: "Jak daleko je Frýdek-Místek od Ostravy?",
    answer:
      "25 km, cca 25 minut po D56. Dojezd neúčtujeme, ceny prací jsou stejné jako v Ostravě. Na zaměření přijedeme zdarma.",
  },
  {
    question: "Děláte i rodinné domy ve Frýdku-Místku?",
    answer:
      "Ano. Ve Frýdku-Místku a okolí je hodně rodinných domů. Děláme koupelny v novostavbách i rekonstrukce ve starších RD. Plochy koupelen v RD bývají 6-12 m² — větší než v panelácích.",
  },
  {
    question: "Jaké panelové domy jsou ve Frýdku-Místku?",
    answer:
      "Na sídlišti Slezská a Riviera panelové domy T06B z 70.-80. let. Na Anenské paneláky ze 60. let. Bytová jádra standardní — 1300 x 1600 mm, umakartová.",
  },
  {
    question: "Kolik stojí obkládání koupelny v rodinném domě?",
    answer:
      "Závisí na ploše. Koupelna 8 m² v rodinném domě — obklady + dlažba přibližně od 70 000 Kč bez materiálu. Kompletní rekonstrukce včetně rozvodů, hydroizolace a sanity přibližně od 120 000 Kč. Přesná cena po zaměření.",
  },
  {
    question: "Řešíte i podlahové vytápění v koupelně?",
    answer:
      "Ano. U rodinných domů a novostaveb často instalujeme elektrické podlahové topení (rohož DEVI nebo Fenix) pod dlažbu. Cena materiálu přibližně 1 800–2 500 Kč/m², pokládka přibližně od 350 Kč/m².",
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
        name: "Frýdek-Místek",
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function FrydekMistekPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač ve Frýdku-Místku
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Frýdek-Místek — 25 km jižně od Ostravy. Město má na rozdíl od
          Ostravy nebo Havířova pestřejší zástavbu. Panelová sídliště na
          Slezské a Riviéře, ale taky hodně cihlových domů v centru a
          rodinných domů v okrajových částech. Každý typ stavby = jiný
          přístup k obkládání. Jezdíme sem pravidelně.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde ve Frýdku-Místku pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Sídliště Slezská</strong> (ul. Slezská, Lískovecká,
            J. Čapka) — panelové domy T06B z 70.-80. let. Umakartová jádra
            1300 x 1600 mm. Klasická přestavba na zděné jádro.
          </p>
          <p>
            <strong>Sídliště Riviera / Anenská</strong> (ul. Pionýrů,
            Anenská, Bezručova) — starší paneláky z 60. let. Menší byty,
            kompaktnější koupelny. U některých domů se stoupačky vedou
            v jiném místě než na Slezské.
          </p>
          <p>
            <strong>Centrum Frýdku</strong> — cihlové domy, měšťanské domy
            s velkými koupelnami. Silné stěny, vysoké stropy. Často
            rekonstrukce s větší plochou (8-12 m²).
          </p>
          <p>
            <strong>Místek, Chlebovice, Lískovec</strong> — rodinné domy.
            Novostavby i starší RD z 60.-90. let. U novostaveb obkládáme
            už hotové podklady, u starších domů řešíme nerovnosti a vlhkost.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Rodinné domy — na co si dát pozor
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>
            Koupelny v rodinných domech bývají 2-3x větší než v panelácích.
            Plocha 8-12 m² stěn + 5-8 m² podlaha. Podklady musí být rovné
            — u starších RD je to 80 % práce navíc.
          </p>
          <p>
            U novostaveb pozor na SDK příčky. Obklady na SDK přes penetraci
            a flexibilní lepidlo C2. Sádrové desky musí být zelené
            (impregnované) — v koupelně žádné běžné bílé SDK.
          </p>
          <p>
            Podlahové vytápění v koupelně je u RD standard. Elektrická
            topná rohož (DEVI, Fenix) pod dlažbu. Termostat na stěně.
            Instalaci koordinujeme s elektrikářem.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Lepidlo + spárování"],
            ["Velkoformátové obklady (nad 60×60 cm)", "850–1 250 Kč/m²", "Nivelace, buttering-floating"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání"],
            ["Velkoformátová dlažba (nad 60×60 cm)", "800–1 200 Kč/m²", "Nivelace, buttering-floating"],
            ["Podlahové topení — pokládka rohože", "od 350 Kč/m²", "Bez materiálu rohože"],
            ["Hydroizolace jednovrstvá", "250–400 Kč/m²", "Stěrka + bandáž rohů"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá stěrka + bandáž"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
            ["Rekonstrukce koupelny — RD (8 m²)", "přibližně od 120 000 Kč", "Včetně rozvodů a hydroizolace"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Rodinný dům ve Frýdku, ul. Janáčkova. Novostavba z roku 2020. Koupelna 9,5 m² — obklady + dlažba na SDK příčkách (zelené impregnované). Penetrace Ceresit CT 17, lepidlo Mapei Keraflex Maxi S1 (flexibilní C2). Obklady Marazzi Crogiolo 75x150 cm (velkoformát, béžový), dlažba Marazzi Mystone 60x120 cm. Elektrické podlahové topení DEVI DTIR rohož 1,5 m². Walk-in sprchový kout 140x90 cm, sklo 8mm. Dvojumyvadlo Villeroy & Boch Subway 130 cm, závěsné WC Villeroy & Boch O.novo. Práce přibližně 14–16 pracovních dní. Cena prací: přibližně 135 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač ve Frýdku-Místku"
          description="Zaměření a cenová nabídka zdarma v celém Frýdku-Místku. Panelák i rodinný dům. Zavolejte nebo napište — ozveme se do 24 hodin."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Havířov", href: "/havirov" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
            { title: "Podlahové topení", href: "/sluzby/podlahove-topeni" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
