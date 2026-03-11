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
  title: "Jak vybrat obklady a dlažbu do koupelny | OBK",
  description:
    "Průvodce výběrem obkladů a dlažby do koupelny. Formáty 30x60, 60x60, 60x120. RAKO od 350 Kč/m², Cersanit od 280 Kč/m². Protiskluz, povrchy, trendy 2026.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/rady/jak-vybrat-obklady-a-dlazbu",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Jak vybrat obklady a dlažbu" },
];

const faqItems = [
  {
    question: "Jaký formát obkladů je nejlepší do malé koupelny?",
    answer:
      "Formát 30x60 cm pokládaný na výšku. Opticky zvětšuje prostor. Na podlahu 60x60 cm. Pro koupelnu do 4 m² v panelácích v Porubě nebo Zábřehu je to osvědčená volba. RAKO Concept nebo Cersanit Livi.",
  },
  {
    question: "Musí být dlažba v koupelně protiskluzová?",
    answer:
      "Ano. Norma ČSN 74 4505 vyžaduje minimálně třídu R9 pro koupelny a R10 pro sprchové kouty. Na podlahu doporučujeme matnou dlažbu s třídou R10. Lesklá dlažba v mokré zóně je nebezpečná.",
  },
  {
    question: "Kolik obkladů objednat na prořez?",
    answer:
      "Počítejte s 10 % navíc u formátu 30x60. U velkoformátu 60x120 a větších přidejte 15 %. Diagonální pokládka = 15 %. Vždy nechte 2–3 kusy jako rezervu na budoucí opravy.",
  },
  {
    question: "Jaký je rozdíl mezi keramikou a porcelánem?",
    answer:
      "Porcelánová dlažba (slinutá kamenina) má nasákavost pod 0,5 %. Je tvrdší, odolnější a vhodná i ven. Keramika má nasákavost 3–6 %. Na stěny koupelny stačí keramika. Na podlahu doporučuji porcelán.",
  },
  {
    question: "Můžu kombinovat obklady od různých výrobců?",
    answer:
      "Můžete, ale hlídejte tloušťku. RAKO má standardně 8 mm, Cersanit 7,8 mm, Marazzi 9 mm. Rozdíl 1 mm vyrovnáme vrstvou lepidla. Větší rozdíl se řeší přechodovou lištou.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Jak vybrat obklady a dlažbu do koupelny",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-02-01",
    },
  ],
};

export default function JakVybratObkladyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Jak vybrat obklady a dlažbu do koupelny
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Správný obklad je základ. Špatný výběr = problémy na 15 let. Tady
          je návod, jak vybrat formát, materiál a povrch. Bez marketingových
          řečí. Z praxe obkladače s 2 000+ m² ročně.
        </p>

        {/* Formáty */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Formáty obkladů — který kam
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Formát volíte podle velikosti koupelny. Malá koupelna = menší formát.
          Velká koupelna = velkoformát vynikne. Tady je přehled nejčastějších
          formátů, které pokládáme v Ostravě.
        </p>
        <PriceTable
          headers={["Formát", "Použití", "Pro koupelnu"]}
          rows={[
            ["20x20 cm", "Mozaika, sprchový kout, obklad vany", "Doplňkový formát"],
            ["25x75 cm", "Stěny, vertikální pokládka", "Do 5 m²"],
            ["30x60 cm", "Stěny i podlaha, univerzální", "Do 8 m² — nejčastější"],
            ["60x60 cm", "Podlaha, stěny větších koupelen", "5–10 m²"],
            ["60x120 cm", "Velkoformát, méně spár", "Nad 6 m²"],
            ["120x260 cm", "Celé desky, bez spár", "Nad 8 m², prémiové koupelny"],
          ]}
          caption="Nejčastější formáty obkladů pro koupelny. Každý řežeme diamantovým kotoučem na míru."
        />

        {/* Materiály */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Materiály — keramika, kamenina, porcelán
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Na stěny koupelny stačí keramický obklad. Nasákavost 3–6 %, tloušťka
          7–8 mm, hmotnost do 16 kg/m². Levnější a snáz se řeže.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Na podlahu chcete slinutou kameninu (porcelán). Nasákavost pod 0,5 %.
          Tvrdší, odolnější proti oděru. Tloušťka 8–10 mm. Nepraskne pod
          pračkou.
        </p>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          U velkoformátů nad 60x120 cm jde vždy o slinutou kameninu. Tenké
          desky (3–5 mm) — Laminam, Neolith. Silné desky (9–12 mm) — RAKO
          Extra, Marazzi Grande.
        </p>

        {/* Povrchy */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Povrchy — matný, lesklý, strukturovaný
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Matný</strong> — nejpraktičtější. Nevidíte otisky prstů,
            kapky vody ani fleky od mýdla. Na podlahu vždy matný.
          </li>
          <li>
            <strong>Lesklý</strong> — opticky zvětšuje prostor. Na stěny malých
            koupelen. Na podlahu ne — kluzký a každá kapka vidět.
          </li>
          <li>
            <strong>Strukturovaný</strong> — imitace kamene, betonu nebo dřeva.
            Třída protiskluzu R10–R11. Na podlahu sprchového koutu.
          </li>
          <li>
            <strong>Lappato (pololesk)</strong> — kompromis. Jemný lesk, ale
            méně kluzký. Na stěny i podlahu. RAKO Extra nabízí tuto úpravu.
          </li>
        </ul>

        {/* Protiskluz */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Protiskluz — R9, R10, R11
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Třída protiskluzu určuje bezpečnost mokré podlahy. Čím vyšší číslo,
          tím drsnější povrch. Norma ČSN 74 4505 to vyžaduje.
        </p>
        <PriceTable
          headers={["Třída", "Úhel skluzu", "Kde použít"]}
          rows={[
            ["R9", "6–10°", "Koupelna — podlaha mimo sprchu"],
            ["R10", "10–19°", "Sprchový kout — standard"],
            ["R11", "19–27°", "Walk-in sprcha, bezbariérové řešení"],
            ["R12–R13", "27°+", "Bazény, venkovní terasy — do koupelny zbytečné"],
          ]}
          caption="Na podlahu koupelny doporučujeme min. R9. Do sprchy min. R10."
        />

        {/* Značky a ceny */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Značky a ceny obkladů 2026
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          V Ostravě nejčastěji pracujeme s RAKO, Cersanit a Marazzi. Obklady
          kupujete sami nebo vám poradíme a objednáme. Tady jsou orientační
          ceny za m².
        </p>
        <PriceTable
          headers={["Značka", "Cenové rozpětí", "Typické řady", "Poznámka"]}
          rows={[
            ["Cersanit", "od 280 Kč/m²", "Livi, Concept, Moduo", "Polský výrobce, dobrá cena"],
            ["RAKO", "od 350 Kč/m²", "Concept, Extra, Betonico", "Český výrobce, široký výběr"],
            ["Paradyz", "od 400 Kč/m²", "Minimal, Naturstone", "Polská střední třída"],
            ["Marazzi", "od 800 Kč/m²", "Crogiolo, Grande, Mystone", "Italská prémiová kvalita"],
            ["Laminam", "od 1 500 Kč/m²", "In-Side, Calce, Oxide", "Tenké velkoformáty 3 mm"],
          ]}
          caption="Ceny jsou orientační, závisí na formátu a řadě. Platné k únoru 2026."
        />

        {/* Trendy 2026 */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Trendy koupelnových obkladů 2026
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Terrazzo efekt</strong> — barevné úlomky v neutrálním
            základu. RAKO Betonico, Marazzi Mystone.
          </li>
          <li>
            <strong>Velkoformát 60x120 a 120x260</strong> — méně spár, čistý
            vzhled. V Ostravě roste poptávka o 40 % rok od roku.
          </li>
          <li>
            <strong>Teplé odstíny</strong> — béžová, písková, terakota místo
            studené šedé. Kombinace se dřevem.
          </li>
          <li>
            <strong>3D struktury</strong> — vlnky, žebra, geometrické vzory na
            akcentní stěně. Cersanit Moduo 3D od 450 Kč/m².
          </li>
          <li>
            <strong>Imitace přírodního kamene</strong> — travertin, mramor,
            břidlice. Marazzi Mystone od 900 Kč/m². Na pohled nerozeznáte
            od originálu.
          </li>
        </ul>

        <PracticeExample text="Koupelna 6,5 m² v novostavbě Ostrava-Nová Bělá. Zákazník chtěl moderní vzhled s minimem spár. Stěny: RAKO Extra 60x120 cm v odstínu béžová (lappato). Podlaha: RAKO Extra 60x60 cm matná, R10. Akcentní stěna za vanou: Cersanit Moduo 3D 30x60 bílá. Spára 1,5 mm, Mapei Keracolor v odstínu manhattan. Materiál: 28 500 Kč. Výsledek — koupelna vypadá jako z italského katalogu." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete poradit s výběrem obkladů?"
          description="Zavolejte. Probereme vaši koupelnu, rozpočet a navrhneme 2–3 kombinace obkladů. Poradenství zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Velkoformátové obklady — výhody a nevýhody", href: "/rady/velkoformatove-obklady-vyhody-a-nevyhody" },
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
            { title: "Jak probíhá rekonstrukce koupelny", href: "/rady/jak-probiha-rekonstrukce-koupelny" },
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
            { title: "Obklady koupelen — služba", href: "/sluzby/obklady-koupelen" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
