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
  title: "Obkladač Ostrava-Dubina | OBK",
  description:
    "Obkladač na Dubině v Ostravě. Bourání umakartových jader v panelových domech T06B. Rekonstrukce koupelen na klíč. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava/dubina" },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Dubina" },
];

const faqItems = [
  {
    question: "Jaké panelové domy stojí na Dubině?",
    answer:
      "Na Dubině stojí převážně panelové domy T06B z 80. let. Sídliště bylo stavěno v letech 1979-1985. Bytová jádra jsou umakartová, rozměr 1300 x 1600 mm. Některé vchody mají jádra s odděleným WC (1800 x 2400 mm).",
  },
  {
    question: "Jak probíhá bourání umakartového jádra?",
    answer:
      "Umakartové jádro se skládá z dřevěné kostry a umakartových desek. Bourání trvá jeden den. Nejdřív demontujeme sanitu a rozvody, pak rozřežeme umakart na kusy a rozebereme dřevěnou konstrukci. Suť (cca 200-250 kg) vyneseme a odvezeme na skládku.",
  },
  {
    question: "Čím se vyzdí nové jádro místo umakartového?",
    answer:
      "Nové příčky stavíme z YTONG příčkovek P2-500, tloušťka 100 mm. Na lepení používáme YTONG tenkovrstvou maltu. Příčky kotvíme do nosných panelů. Vyzdění trvá 1-2 dny, poté den schnutí před dalšími pracemi.",
  },
  {
    question: "Kolik stojí kompletní přestavba jádra na Dubině?",
    answer:
      "Kompletní rekonstrukce — bourání umakartového jádra, vyzdění, rozvody, hydroizolace, obklady, dlažba a sanita — vychází přibližně na 45 000–65 000 Kč za malou koupelnu do 4 m² a přibližně 65 000–95 000 Kč za střední koupelnu 4–6 m². Ceny bez materiálu.",
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
        addressLocality: "Ostrava-Dubina",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Ostrava-Dubina",
        containedInPlace: {
          "@type": "City",
          name: "Ostrava",
        },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function DubinaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač na Dubině v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Dubina — sídliště z 80. let na jihu Ostravy. Panelové domy T06B,
          byty 1+1 až 4+1. Všechny mají umakartová bytová jádra. Po 40
          letech provozu je umakart zdeformovaný, dřevěná kostra vlhká,
          rozvody z ocelových trubek zarostlé. Na Dubině jsme předělali
          desítky koupelen — postup máme sjetý na den přesně.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Dubina — co tu řešíme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Ul. Antonína Gavlase, Horní, Zdeňka Chalabaly</strong>
            — paneláky T06B z let 1980-1985. Jádra 1300 x 1600 mm. Většina
            bytů má koupelnu s vanou 150 cm a umyvadlem. WC oddělené malou
            chodbičkou.
          </p>
          <p>
            <strong>Ul. Jana Maluchy, Bedřicha Václavka</strong> — novější
            část Dubiny. Stejný typ T06B, ale jádra bývají v lepším stavu.
            I tak je umakart na konci životnosti.
          </p>
          <p>
            <strong>Typické problémy:</strong> Prohnutý umakart u vany.
            Plíseň mezi umakartovou deskou a nosnou stěnou. Koroze ocelových
            rozvodů — rezavá voda. Netěsné WC. Nefunkční ventilátor.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Jak probíhá bourání umakartového jádra
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>1. Uzavření přívodu vody a odpojení sanity (2 hodiny)</p>
          <p>2. Demontáž vany/sprchy, umyvadla, WC (2 hodiny)</p>
          <p>3. Rozřezání umakartových desek, rozebrání dřevěné kostry (3-4 hodiny)</p>
          <p>4. Vynesení suti k kontejneru u domu (1-2 hodiny)</p>
          <p>5. Očištění nosných panelů, příprava na vyzdění (1 hodina)</p>
          <p className="font-medium">Celkem: 1 pracovní den. Suť: 200-300 kg.</p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Včetně přípravy podkladu"],
            ["Odvoz suti", "4 500–6 000 Kč", "Kontejner + odvoz na skládku"],
            ["Vyzdění příček YTONG 100mm", "15 000–22 000 Kč", "P2-500, tenkovrstvá malta"],
            ["Rozvody vody PPR", "8 000–12 000 Kč", "Studená + teplá + cirkulace"],
            ["Odpady HT", "5 000–8 000 Kč", "DN 40, 50, 110"],
            ["Hydroizolace jednovrstvá", "250–400 Kč/m²", "Stěrka + bandáž rohů"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá stěrka, bandáž"],
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Včetně lepidla a spárování"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání podkladu"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Byt 2+1 na Dubině, ul. Antonína Gavlase. Panelák T06B, rok výstavby 1982. Umakartové jádro 1300 x 1600 mm v havarijním stavu — umakart prohnutý, dřevěná kostra napadená plísní (cca 3,5 m²). Bourání jádra 1 den, vyzdění YTONGem 1,5 dne, rozvody PPR + HT 1 den, hydroizolace Mapei Mapelastic AquaDefense 1 den, obklady Cersanit Marengo 30x60 cm + dlažba 60x60 cm 3 dny, montáž sanity 1 den. Sprchový kout Ravak Blix Slim 80x80 cm, umyvadlo Cersanit Crea 60 cm. Celkem přibližně 9–11 pracovních dní. Cena prací: přibližně 58 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Rekonstrukce jádra na Dubině"
          description="Máte umakartové jádro na Dubině? Přijedeme, zaměříme a zpracujeme nabídku zdarma. Bourání + kompletní přestavbu zvládneme přibližně za 9–12 pracovních dní."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Ostrava-Poruba", href: "/ostrava/poruba" },
            { title: "Obkladač Ostrava-Hrabůvka", href: "/ostrava/hrabuvka" },
            { title: "Bourací práce — ceník", href: "/cenik/bouraci-prace" },
            { title: "Rekonstrukce koupelny", href: "/sluzby/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
