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
  title: "Jak probíhá rekonstrukce koupelny krok za krokem | OBK",
  description:
    "Rekonstrukce koupelny v 7 krocích. Zaměření, bourání, rozvody, hydroizolace, obklady, sanita, dokončení. Reálný harmonogram 10–14 dní. Ostrava.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/rady/jak-probiha-rekonstrukce-koupelny",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Jak probíhá rekonstrukce koupelny" },
];

const faqItems = [
  {
    question: "Jak dlouho trvá rekonstrukce malé koupelny v paneláku?",
    answer:
      "Malá koupelna do 4 m² v paneláku trvá 8–10 pracovních dní. Bourání umakartového jádra zabere 1 den. Vyzdění nového jádra z YTONGu 1–2 dny. Obkládání 3–4 dny. Zbytek jsou rozvody, hydroizolace a montáž sanity.",
  },
  {
    question: "Musím být doma během rekonstrukce?",
    answer:
      "Nemusíte. Stačí nám klíče a přístup k elektrice. Každý večer vám pošleme fotku stavu prací. Při bourání doporučujeme zakrýt nábytek v předsíni folií — děláme to automaticky.",
  },
  {
    question: "Co když se během bourání objeví problém?",
    answer:
      "Voláme hned. Nejčastěji: vlhkost za umakartovým jádrem, shnilé stoupačky nebo hliníkové rozvody. Pošleme fotku, vysvětlíme řešení a cenu. Bez vašeho souhlasu nepokračujeme.",
  },
  {
    question: "Můžu během rekonstrukce používat WC?",
    answer:
      "WC odpojujeme při bourání (den 1–2). Pak ho napojíme provizorně. Od třetího dne můžete WC používat. Vodu na umývání přepojíme do kuchyně.",
  },
  {
    question: "Jak se připravit na rekonstrukci koupelny?",
    answer:
      "Vykliďte koupelnu — osobní věci, kosmetiku, pračku. Zajistěte přístup k jinému WC na první 2 dny. Zakryjte podlahu v chodbě kartony. My přidáme folii a ochranné pásky na zárubně.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Jak probíhá rekonstrukce koupelny krok za krokem",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-02-01",
    },
  ],
};

export default function JakProbihaRekonstrukcePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Jak probíhá rekonstrukce koupelny
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Kompletní rekonstrukce koupelny trvá 10–14 pracovních dní. Sedm
          jasných kroků od zaměření po předání klíčů. Žádné překvapení, žádné
          prostoje. Takhle to děláme v Ostravě.
        </p>

        {/* Krok 1 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          1. Zaměření a 3D návrh (1–2 dny)
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Přijedeme s laserovým měřičem Bosch GLM 50 C. Změříme každý roh,
          zkontrolujeme rovinnost stěn a podlahy. Odchylky zapisujeme v mm.
          Ověříme polohu stoupaček a rozměry prostupů.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Do 48 hodin dostanete 3D vizualizaci. Uvidíte rozložení obkladů,
          pozici sanity i spárovací vzor. Můžete měnit barvy, formáty, pozice.
          Návrh je zdarma a nezávazný.
        </p>

        {/* Krok 2 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          2. Bourání a odvoz suti (1–2 dny)
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Nejhlučnější část. Bourací kladivo Hilti TE 500. Staré obklady,
          dlažba, umakartové jádro — všechno pryč. Suť sypeme přímo do
          kontejneru. Jeden kontejner = 3 tuny = běžná panelová koupelna.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          V panelácích na Dubině, Zábřehu a v Porubě bourání trvá 1 den.
          U zděných jader v cihlových domech na Slezské nebo v centru počítejte
          s 2 dny. Odpojíme vodu, elektro a odpad. Stoupačky chráníme.
        </p>

        {/* Krok 3 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          3. Rozvody vody a elektro (2 dny)
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Instalatér udělá nové rozvody z PPR trubek. Studená, teplá, cirkulace.
          Odpady z HT systému — hladké, neucpávají se. Elektrikář natáhne nový
          kabel CYKY 3x2,5 na jistič 16A. Zásuvky IP44 do mokré zóny.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Při vyzdívání nového jádra používáme YTONG 50 mm nebo 75 mm. Přesné
          tvárnice, lepené na tenkovrstvou maltu. Hotové za den. Další den
          schne.
        </p>

        {/* Krok 4 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          4. Hydroizolace (1 den + schnutí)
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Dvouvrstvá hydroizolace Mapei Mapelastic nebo Baumacol Proof. Nanášíme
          válečkem. První vrstva schne 4–6 hodin. Druhá vrstva přes noc. V
          rozích a kolem prostupů bandáž Mapei Mapeband.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Hydroizolace pokrývá celou podlahu a stěny do výšky min. 200 mm.
          V sprchové zóně celá stěna. Norma ČSN 74 4505 vyžaduje izolaci v
          mokrých prostorech. My ji děláme vždy.
        </p>

        {/* Krok 5 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          5. Obklady a dlažba (3–5 dní)
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Nejdelší část. Začínáme dlažbou — podlaha musí být hotová před
          obklady. Lepidlo Ceresit CM 17 nebo Mapei Keraflex. Hřebenový šíř.
          10 mm. Nivelační spony pro rovné spáry.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Na stěny pokládáme odspoda. Formát 30x60 cm = cca 16 m² za den.
          Velkoformát 60x120 cm = cca 10 m² za den. Každý řez diamantovým
          kotoučem. U formátů nad 60 cm buttering-floating — lepidlo na stěnu
          i na obklad.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Spárování děláme den po pokládce. Mapei Keracolor GG nebo Ceresit
          CE 40. Silikonové spáry v rozích a u sanity — sanitární silikon
          Mapei Mapesil AC.
        </p>

        {/* Krok 6 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          6. Instalace sanity (1 den)
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Montáž WC, umyvadla, vany nebo sprchového koutu. Baterie Grohe nebo
          Hansgrohe. Závěsné WC na podomítkový systém Geberit Duofix. Sifon,
          napojení, funkční zkouška.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Testujeme těsnost každého spoje. Puštíme vodu na 30 minut a
          kontrolujeme. Zkouška odtoku — 10 l za minutu musí odtéct bez
          problému.
        </p>

        {/* Krok 7 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          7. Silikony a dokončení (1 den)
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Sanitární silikony v rozích, kolem vany, u sprchového koutu a
          umyvadla. Výmalba stropu bílou barvou Primalex Polar. Montáž
          doplňků — věšáky, držák toaletního papíru, zrcadlo.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Finální úklid. Odvezeme zbytky materiálu. Předáme klíče a záruční
          list. Záruka 60 měsíců na veškeré práce.
        </p>

        {/* Harmonogram */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Harmonogram — přehled
        </h2>
        <PriceTable
          headers={["Den", "Práce", "Trvání"]}
          rows={[
            ["Den 1–2", "Bourání a odvoz suti", "1–2 dny"],
            ["Den 3–4", "Rozvody vody, odpadu a elektro", "2 dny"],
            ["Den 5", "Hydroizolace (+ schnutí přes noc)", "1 den"],
            ["Den 6–10", "Obklady stěn a pokládka dlažby", "3–5 dní"],
            ["Den 11", "Spárování a schnutí", "1 den"],
            ["Den 12", "Instalace sanity a baterie", "1 den"],
            ["Den 13–14", "Silikony, výmalba, úklid, předání", "1–2 dny"],
          ]}
          caption="Harmonogram pro standardní koupelnu 5–7 m². Malá koupelna do 4 m² = 8–10 dní."
        />

        <PracticeExample text="Koupelna 5,2 m² v paneláku Ostrava-Poruba, ulice Opavská. Umakartové jádro z roku 1978. Bourání 1 den, vyzdění YTONGem 1 den, rozvody 2 dny. Hydroizolace Mapei Mapelastic celá podlaha + sprchová zóna. Obklady RAKO Concept 30x60 na stěny, dlažba RAKO Extra 60x60 na podlahu. Walk-in sprchový kout 90x100, Geberit Duofix WC, umyvadlo Cersanit Crea. Celkem 12 pracovních dní. Cena práce: 148 000 Kč." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete vědět přesný harmonogram pro vaši koupelnu?"
          description="Zavolejte a domluvíme nezávazné zaměření zdarma. Do 48 hodin dostanete harmonogram i cenovou nabídku."
        />

        <RelatedLinks
          links={[
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
            { title: "Jak vybrat obklady a dlažbu", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Vana nebo sprchový kout", href: "/rady/vana-nebo-sprchovy-kout" },
            { title: "Ceník rekonstrukce koupelny", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Velkoformátové obklady", href: "/rady/velkoformatove-obklady-vyhody-a-nevyhody" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
