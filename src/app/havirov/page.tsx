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
  title: "Obkladač Havířov | Obkladačské práce | OBK",
  description:
    "Obkladač v Havířově. Rekonstrukce koupelen v panelových domech. Pokládka obkladů a dlažeb. Dojezd z Ostravy 15 km. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/havirov" },
};

const breadcrumbs = [{ label: "Havířov" }];

const faqItems = [
  {
    question: "Jedete do Havířova z Ostravy? Kolik stojí dojezd?",
    answer:
      "Ano, do Havířova to máme 15 km, cca 20 minut. Dojezd v ceně zakázky neúčtujeme zvlášť. Zaměření v Havířově provádíme zdarma.",
  },
  {
    question: "Jaké panelové domy jsou v Havířově?",
    answer:
      "V Havířově převažují panelové domy typu T06B a T08B z 60.-80. let. V Havířově-Městě i Havířově-Šumbarku. Bytová jádra jsou umakartová, rozměry 1300 x 1600 mm nebo 1800 x 2400 mm.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v Havířově?",
    answer:
      "Ceny jsou stejné jako v Ostravě. Malá koupelna v paneláku do 4 m² přibližně 45 000–65 000 Kč, střední 4–6 m² přibližně 65 000–95 000 Kč. Ceny bez materiálu. Dojezd neúčtujeme.",
  },
  {
    question: "Děláte i v Havířově-Šumbarku a Havířově-Podlesí?",
    answer:
      "Ano, pracujeme v celém Havířově — Město, Šumbark, Podlesí, Prostřední Suchá, Životice. Všude zaměření zdarma.",
  },
  {
    question: "Jak dlouho dopředu se mám objednat?",
    answer:
      "Aktuální čekací doba na zahájení prací je 3-5 týdnů. Zaměření a nabídku zpracujeme do týdne od zavolání. Doporučujeme objednat materiál co nejdřív — dodací lhůty obkladů bývají 1-3 týdny.",
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
        name: "Havířov",
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function HavirovPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Havířově
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Havířov — 15 km od Ostravy, 20 minut po D56. Město s největším
          podílem panelových domů v Česku. Přes 70 % bytového fondu tvoří
          paneláky z 60.-80. let. Havířov-Město, Šumbark, Podlesí — všude
          stejný typ umakartových bytových jader. Děláme kompletní
          rekonstrukce koupelen v celém Havířově za stejné ceny jako
          v Ostravě.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Havířově pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Havířov-Město</strong> (ul. Národní třída, Žákovská,
            Moskevská) — centrum města, panelové domy T06B a T08B. Hodně
            bytů 3+1 z konce 60. let. Jádra 1300 x 1600 mm. Sem jezdíme
            nejčastěji.
          </p>
          <p>
            <strong>Šumbark</strong> (ul. Moravská, Šumbarská, Jarošova)
            — velké sídliště z 70.-80. let. Paneláky T08B, větší byty 3+1
            a 4+1. Jádra 1800 x 2400 mm s odděleným WC.
          </p>
          <p>
            <strong>Podlesí</strong> — sídliště z 80. let. Novější paneláky
            T06B. Jádra v relativně lepším stavu, ale umakart je umakart —
            po 40 letech je na výměnu.
          </p>
          <p>
            <strong>Prostřední Suchá</strong> — starší zástavba, cihlové domy
            i rodinné domy. Koupelny bývají větší, rekonstrukce řešíme
            individuálně.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Havířov — specifika panelových domů
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>
            Havířovské paneláky mají oproti ostravským jednu zvláštnost:
            v mnoha domech na Šumbarku jsou stoupačky vedené v šachtě za
            WC. Při rekonstrukci je nutné počítat s přístupem k uzávěrům
            a revizním dvířkům.
          </p>
          <p>
            SVJ v Havířově často řeší rekonstrukce stoupaček celého domu.
            Pokud se plánuje výměna stoupaček, vyplatí se koordinovat
            s rekonstrukcí koupelny — ušetříte za bourání a zpětné obkládání.
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
            ["Vyzdění příček YTONG", "15 000–22 000 Kč", "100mm příčkovky"],
            ["Hydroizolace jednovrstvá", "250–400 Kč/m²", "Stěrka + bandáž rohů"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá + bandáž"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Panelák v Havířově-Městě, ul. Žákovská. Dům T06B z roku 1968. Byt 3+1, umakartové jádro 1300 x 1600 mm (cca 3,5 m²). Umakart doslova odpadával od stěn. Bourání 1 den, vyzdění YTONGem 1,5 dne, nové PPR rozvody + HT odpady 1 den, hydroizolace Ceresit CL 51 Express 1 den, obklady Tubadzin Kolor 25x75 cm (bílý mat) 2 dny, dlažba RAKO Stones 60x60 cm 1 den, montáž sanity 1 den. Sprchový kout Ravak Blix 90x90 cm, umyvadlo Jika Cubito 65 cm. Celkem přibližně 10–12 pracovních dní. Cena prací: přibližně 60 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Havířově — bez příplatku za dojezd"
          description="Do Havířova jezdíme pravidelně. Zaměření zdarma v celém městě — Město, Šumbark, Podlesí. Zavolejte a domluvíme termín."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Karviná", href: "/karvina" },
            { title: "Rekonstrukce koupelny — ceník", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Obkladačské práce — ceník", href: "/cenik/obkladacske-prace" },
            { title: "Rekonstrukce koupelny", href: "/sluzby/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
