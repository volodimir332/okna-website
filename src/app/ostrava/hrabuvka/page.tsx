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
  title: "Obkladač Ostrava-Hrabůvka | OBK",
  description:
    "Obkladač v Ostravě-Hrabůvce. Rekonstrukce koupelen v panelových i cihlových domech. Pokládka obkladů a dlažeb. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava/hrabuvka" },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Hrabůvka" },
];

const faqItems = [
  {
    question: "Jaké domy jsou v Hrabůvce?",
    answer:
      "V Hrabůvce najdete mix panelových domů z 60.-70. let a starších cihlových domů z 50. let. Panelové domy jsou převážně typu T02B a T06B. Cihlové domy mají silnější stěny, větší koupelny a často vlhkostní problémy v přízemí.",
  },
  {
    question: "Jak řešíte vlhkost v cihlových domech?",
    answer:
      "V cihlových domech v Hrabůvce se vlhkost řeší sanační omítkou na zdech a dvouvrstvou hydroizolační stěrkou (Mapei Mapelastic nebo Ceresit CL 51) před obkládáním. V přízemních bytech přidáváme izolaci i na podlahu pod dlažbu.",
  },
  {
    question: "Děláte i obklady v kuchyni?",
    answer:
      "Ano. Kuchyňský obklad (zástěna za linkou) je rychlá práce — obvykle 1 den. Plocha 2–4 m². Cena obkládání přibližně od 600 Kč/m² + materiál. Obklady 30x60 cm nebo 20x60 cm jsou nejčastější volba.",
  },
  {
    question: "Lze v Hrabůvce parkovat s dodávkou u domu?",
    answer:
      "U většiny panelových domů v Hrabůvce parkování problém není. U cihlových domů na ul. Dr. Martínka nebo Horymírova bývá míň místa, ale vždy se domlouváme individuálně.",
  },
  {
    question: "Jak rychle se dostanete na zakázku do Hrabůvky?",
    answer:
      "Do Hrabůvky to máme 15 minut. Na zaměření přijedeme obvykle do 3 pracovních dní od zavolání. Nabídku zpracujeme do 48 hodin po zaměření.",
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
        addressLocality: "Ostrava-Hrabůvka",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Ostrava-Hrabůvka",
        containedInPlace: {
          "@type": "City",
          name: "Ostrava",
        },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function HrabuvkaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Ostravě-Hrabůvce
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Hrabůvka — starší část Ostravy s pestrou zástavbou. Panelové domy
          z 60.-70. let (T02B, T06B) stojí vedle cihlových domů z 50. let.
          Každý typ vyžaduje jiný přístup. V panelácích bourání umakartových
          jader, v cihlových domech řešíme nerovné stěny, vlhkost a sanaci
          zdiva. Oboje zvládáme.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Panelové domy v Hrabůvce
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Ul. Mitušova, Moravská, Kašparova</strong> — panelové
            domy T06B z konce 60. let. Bytová jádra 1300 x 1600 mm. Umakart
            je po 55+ letech v dezolátním stavu. Kompletní přestavba jádra
            na zděné.
          </p>
          <p>
            <strong>Ul. Horní, Provaznická</strong> — paneláky T02B z počátku
            60. let. Starší typ s menšími koupelnami. Jádro bývá ještě menší,
            prostorové řešení vyžaduje zkušenost.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Cihlové domy v Hrabůvce
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Ul. Dr. Martínka, Horymírova, Závodní</strong> — cihlové
            domy z 50. let, některé i starší. Koupelny 5-8 m², vyšší stropy
            (2,8-3,0 m). Stěny z plných cihel — skvělý podklad pro obklady,
            ale vlhkost v přízemí je častý problém.
          </p>
          <p>
            Před obkládáním vlhkých stěn vždy nejdřív sanace: sanační omítka
            + hydroizolační stěrka. Bez toho by se obklady do roku odlepily.
          </p>
          <p>
            Podlahy v cihlových domech bývají nerovné — výškové rozdíly
            5-15 mm na metr. Před pokládkou dlažby vždy nivelační stěrka
            (samonivelační, tloušťka 3-15 mm).
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Lepidlo + spárování"],
            ["Velkoformátové obklady (nad 60×60 cm)", "850–1 250 Kč/m²", "Buttering-floating, nivelace"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání"],
            ["Velkoformátová dlažba (nad 60×60 cm)", "800–1 200 Kč/m²", "Nivelace, buttering-floating"],
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Včetně přípravy podkladu"],
            ["Odvoz suti", "4 500–6 000 Kč", "Kontejner + odvoz na skládku"],
            ["Odstranění obkladů", "180–300 Kč/m²", "Včetně úklidu"],
            ["Vyzdění YTONG", "15 000–22 000 Kč", "Příčkovky 100mm"],
            ["Sanace vlhkého zdiva", "350–550 Kč/m²", "Sanační omítka + stěrka"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá stěrka + bandáž"],
            ["Nivelace podlahy", "250–400 Kč/m²", "Samonivelační stěrka"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Cihlový dům v Hrabůvce, ul. Dr. Martínka. Byt 2+1, přízemí. Koupelna 6,5 m² s vysokou vlhkostí — staré obklady napadené plísní, zdivo mokré. Bourání starých obkladů a omítek 1 den. Sanační omítka Baumit Sanova (2 vrstvy, 4 dny schnutí). Hydroizolace Mapei Mapelastic. Obklady Paradyž Afternoon 30x60 cm (béžová), dlažba RAKO Ground 60x60 cm. Vana Ravak Rosa 160 cm, umyvadlo Ravak Classic 70 cm. Práce přibližně 14–16 pracovních dní (včetně technologických přestávek). Cena prací: přibližně 105 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Hrabůvce — cihlové i panelové domy"
          description="Zaměření a cenová nabídka zdarma. Přijedeme do Hrabůvky do 3 pracovních dní. Zavolejte nebo napište."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Ostrava-Zábřeh", href: "/ostrava/zabreh" },
            { title: "Obkladač Ostrava-Dubina", href: "/ostrava/dubina" },
            { title: "Hydroizolace koupelny", href: "/sluzby/hydroizolace" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
