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
  title: "Velkoformátové obklady — výhody a nevýhody | OBK",
  description:
    "Velkoformátové obklady nad 60x60 cm. Méně spár, moderní vzhled, snadná údržba. RAKO Extra, Marazzi Grande, Laminam. Cena pokládky od 650 Kč/m². Ostrava.",
  alternates: {
    canonical:
      "https://obklady-ostrava.cz/rady/velkoformatove-obklady-vyhody-a-nevyhody",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Velkoformátové obklady" },
];

const faqItems = [
  {
    question: "Od jakého rozměru je obklad velkoformátový?",
    answer:
      "Od 60x60 cm. Klasický velkoformát je 60x120 cm. Velké desky 120x260 cm nebo 120x120 cm se řadí mezi XXL formáty. Vše nad 60x60 vyžaduje buttering-floating techniku a nivelační spony.",
  },
  {
    question: "Dá se velkoformát pokládat v paneláku?",
    answer:
      "Ano. Formát 60x120 cm se vejde do výtahu i dveří panelového bytu. Desky 120x260 cm se musí přenášet schodištěm a potřebují 2 lidi. V panelácích v Porubě a Zábřehu velkoformáty pokládáme pravidelně.",
  },
  {
    question: "Kolik stojí pokládka velkoformátových obkladů?",
    answer:
      "Práce: 650–950 Kč/m² pro formát 60x120 cm. Pro desky 120x260 cm od 1 200 Kč/m². Materiál: RAKO Extra od 890 Kč/m², Marazzi Grande od 1 100 Kč/m², Laminam od 1 500 Kč/m².",
  },
  {
    question: "Praskne velkoformátový obklad snadno?",
    answer:
      "Při správné pokládce ne. Klíčové je: rovný podklad (odchylka max 2 mm/2 m), buttering-floating (lepidlo na stěnu i obklad), přísavky na přenos. Obklad 60x120 o tloušťce 9 mm je pevnější než standardní 30x60 o 8 mm.",
  },
  {
    question: "Jakou spáru použít u velkoformátu?",
    answer:
      "Minimální spára 1,5 mm. Doporučujeme 2 mm. Spárovačka Mapei Keracolor FF nebo Ceresit CE 40 v barvě obkladu. U desek 120x260 se dá jít na 1 mm spáru s epoxidovou spárovačkou Mapei Kerapoxy.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Velkoformátové obklady: výhody a nevýhody",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-02-01",
    },
  ],
};

export default function VelkoformatoveObkladyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Velkoformátové obklady: výhody a nevýhody
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Obklady nad 60x60 cm mění vzhled koupelny. Méně spár, čisté plochy,
          moderní design. Ale vyšší cena a náročnější pokládka. Tady je
          objektivní přehled z praxe — pokládáme 200+ m² velkoformátu ročně.
        </p>

        {/* Co to je */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Co jsou velkoformátové obklady
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Velkoformát = obklad s jednou stranou nad 60 cm. Začíná formátem
          60x60 cm. Nejčastější je 60x120 cm. Největší desky mají 120x260 cm
          nebo 160x320 cm. Tloušťka od 3 mm (tenké desky) do 12 mm
          (standardní).
        </p>
        <PriceTable
          headers={["Formát", "Plocha desky", "Hmotnost", "Kategorie"]}
          rows={[
            ["60x60 cm", "0,36 m²", "7–8 kg", "Vstupní velkoformát"],
            ["60x120 cm", "0,72 m²", "14–16 kg", "Nejčastější velkoformát"],
            ["80x160 cm", "1,28 m²", "20–25 kg", "Velký formát"],
            ["120x120 cm", "1,44 m²", "22–28 kg", "Čtvercový XXL"],
            ["120x260 cm", "3,12 m²", "18–24 kg (tenké 5 mm)", "Desky — celá stěna"],
            ["160x320 cm", "5,12 m²", "25–35 kg (tenké 6 mm)", "Maximální formát"],
          ]}
          caption="Přehled velkoformátových obkladů dostupných na českém trhu."
        />

        {/* Výhody */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Výhody velkoformátových obkladů
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-3 mb-6">
          <li>
            <strong>Méně spár</strong> — formát 60x120 na stěnu 240x120 cm =
            2 kusy, 1 horizontální spára. Standardní 30x60 = 8 kusů, 7 spár.
            Méně spár = méně plísní, méně čištění.
          </li>
          <li>
            <strong>Moderní vzhled</strong> — velké plochy bez přerušení.
            Koupelna vypadá čistě a prostorně. Imitace mramoru nebo betonu
            vynikne teprve ve velkoformátu.
          </li>
          <li>
            <strong>Snadná údržba</strong> — hladká plocha, minimum spár.
            Stěrkou po sprchování a jednou týdně utřít. Žádné drhnutí spár
            kartáčkem.
          </li>
          <li>
            <strong>Optické zvětšení prostoru</strong> — velké desky bez spár
            nedělí stěnu. Koupelna 4 m² vypadá jako 6 m². V malých panelákových
            koupelnách v Ostravě to funguje.
          </li>
          <li>
            <strong>Vyšší hodnota nemovitosti</strong> — velkoformátová koupelna
            zvyšuje atraktivitu bytu při prodeji. V Ostravě přidává
            30 000–50 000 Kč k hodnotě.
          </li>
        </ul>

        {/* Nevýhody */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Nevýhody velkoformátových obkladů
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-3 mb-6">
          <li>
            <strong>Vyšší cena materiálu</strong> — RAKO Extra 60x120 od
            890 Kč/m². Standardní RAKO 30x60 od 350 Kč/m². Rozdíl
            540 Kč/m² = na 16 m² stěn 8 640 Kč navíc.
          </li>
          <li>
            <strong>Dražší pokládka</strong> — práce 650–950 Kč/m² místo
            450 Kč/m². Na 16 m² = rozdíl 3 200–8 000 Kč. Celkem
            (materiál + práce) o 12 000–16 000 Kč víc.
          </li>
          <li>
            <strong>Křehkost při přepravě</strong> — deska 60x120 cm se
            při neopatrném zacházení praskne. Přepravujeme na stojato,
            v originálním balení. Přenášíme přísavkami, vždy dva lidi.
          </li>
          <li>
            <strong>Náročnější pokládka</strong> — podklad musí být rovný
            (max 2 mm/2 m). Buttering-floating technika. Nivelační spony.
            Řezání mokrou řezačkou s diamantovým kotoučem. Obkladač bez
            zkušeností s velkoformátem to nezvládne.
          </li>
          <li>
            <strong>Více prořezu</strong> — počítejte s 15 % navíc na prořez
            místo 10 % u standardu. U složitých rohů a prostupů ještě víc.
          </li>
        </ul>

        {/* Srovnání standard vs velkoformát */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Standard vs velkoformát — srovnání nákladů
        </h2>
        <PriceTable
          headers={["Položka", "Standard 30x60", "Velkoformát 60x120"]}
          rows={[
            ["Cena obkladu (RAKO)", "350 Kč/m²", "890 Kč/m²"],
            ["Cena pokládky", "450 Kč/m²", "650–950 Kč/m²"],
            ["Prořez", "10 %", "15 %"],
            ["Celkem za 16 m² stěn (materiál + práce)", "14 080 Kč", "27 544 Kč"],
            ["Počet spár na stěnu 240x120 cm", "7 spár", "1 spára"],
            ["Rychlost pokládky", "16 m²/den", "10 m²/den"],
            ["Náročnost na podklad", "Standardní", "Max 2 mm/2 m odchylka"],
          ]}
          caption="Srovnání pro obklady RAKO na stěny koupelny. Ceny práce + materiál."
        />

        {/* Značky */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Značky velkoformátových obkladů
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          V Ostravě pokládáme čtyři hlavní značky. Každá má jiné silné
          stránky. Tady je přehled s cenami.
        </p>
        <PriceTable
          headers={["Značka", "Formáty", "Cena od", "Poznámka"]}
          rows={[
            ["RAKO Extra", "60x60, 60x120 cm", "890 Kč/m²", "Český výrobce, nejlepší dostupnost"],
            ["Marazzi Grande", "60x120, 120x120 cm", "1 100 Kč/m²", "Italská kvalita, imitace mramoru"],
            ["Laminam", "100x300, 120x260 cm", "1 500 Kč/m²", "Tenké desky 3–5 mm, ultra velkoformát"],
            ["Neolith", "120x260, 150x320 cm", "2 000 Kč/m²", "Slinutý kámen, kuchyňské desky i obklady"],
          ]}
          caption="Ceny orientační, závisí na řadě a povrchové úpravě. Únor 2026."
        />

        {/* Pro koho se hodí */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Pro koho se velkoformát hodí
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            Koupelny nad 5 m² — velký formát vynikne na větší ploše.
          </li>
          <li>
            Lidé, kteří nechtějí drhnutí spár — minimum spár = minimum
            údržby.
          </li>
          <li>
            Moderní designové koupelny — imitace mramoru, betonu, kamene.
          </li>
          <li>
            Prémiové rekonstrukce — rozpočet na materiál od 800 Kč/m².
          </li>
          <li>
            I malé koupelny 3–4 m² — velkoformát opticky zvětší prostor.
            Ale počítejte s vyšším prořezem.
          </li>
        </ul>

        {/* Jak se pokládají */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Jak se velkoformáty pokládají
        </h2>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-3 mb-6">
          <li>
            <strong>Příprava podkladu</strong> — vyrovnání stěrkou na
            odchylku max 2 mm/2 m. Penetrace Ceresit CT 17. Schnutí min.
            4 hodiny.
          </li>
          <li>
            <strong>Buttering-floating</strong> — lepidlo hřebenem 10 mm
            na stěnu a zároveň na obklad. Ceresit CM 17 nebo Mapei Keraflex
            Maxi. Celoplošné pokrytí bez vzduchových kapes.
          </li>
          <li>
            <strong>Přenos přísavkami</strong> — desku 60x120 přenášíme
            dvěma přísavkami (Sigma, Raimondi). Desku 120x260 třemi
            přísavkami, dva lidi.
          </li>
          <li>
            <strong>Nivelační spony</strong> — zajistí rovnou plochu mezi
            deskami. Spona + klín. Raimondi RLS nebo Levtec. Odstraníme
            po zatuhnutí lepidla.
          </li>
          <li>
            <strong>Řezání</strong> — mokrá řezačka s diamantovým kotoučem
            300 mm. Řez bez otřepů. Otvory pro zásuvky a baterie
            diamantovou korunkou.
          </li>
          <li>
            <strong>Spárování</strong> — spára 1,5–2 mm. Mapei Keracolor FF
            nebo Ceresit CE 40 v barvě obkladu. U desek 120x260 lze
            epoxidová spára 1 mm (Mapei Kerapoxy).
          </li>
        </ol>

        {/* Na co si dát pozor */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Na co si dát pozor
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Rovnost podkladu</strong> — odchylka nad 2 mm způsobí
            prasknutí desky při pokládce. Vždy měříme 2m latí.
          </li>
          <li>
            <strong>Přeprava</strong> — desky převážíme na stojato v dodávce.
            Nikdy naplocho. Originální balení. Při vykládce dva lidi.
          </li>
          <li>
            <strong>Výběr obkladače</strong> — velkoformát vyžaduje zkušenost.
            Ptejte se na reference s formátem 60x120+. My pokládáme 200+ m²
            velkoformátu ročně.
          </li>
          <li>
            <strong>Dilatace</strong> — u stěn a v rozích pružná spára
            (silikon). Velké desky pracují s teplotou víc než malé.
          </li>
          <li>
            <strong>Rezerva</strong> — objednejte 15 % navíc. Pokud desku
            prasknete, doobjednat stejnou šarži nemusí jít.
          </li>
        </ul>

        <PracticeExample text="Koupelna 7,2 m² v novostavbě Ostrava-Nová Ves. Zákazník chtěl velkoformátové obklady imitace mramoru. Stěny: Marazzi Grande Marble Look 120x120 cm (Calacatta). Podlaha: Marazzi Grande 60x120 cm matná R10. Sprchová zóna: walk-in 100x140 cm, celá obložená tím samým formátem. Před pokládkou vyrovnání stěn stěrkou — odchylka byla 4 mm, srovnali jsme na 1,5 mm. Buttering-floating, Mapei Keraflex Maxi, nivelační spony Raimondi. Spára 2 mm, Mapei Keracolor manhattan. Materiál: 48 500 Kč. Práce obklady: 22 800 Kč. Výsledek — koupelna jako z italského hotelu. Zákazník dostal 60měsíční záruku." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete velkoformátové obklady v koupelně?"
          description="Pokládáme 200+ m² velkoformátu ročně. Zavolejte — poradíme s výběrem formátu a značky. Zaměření zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Jak vybrat obklady a dlažbu do koupelny", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
            { title: "Velkoformátové obklady — služba", href: "/sluzby/velkoformatove-obklady" },
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
