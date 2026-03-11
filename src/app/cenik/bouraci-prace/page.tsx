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
  title: "Cena bouracích prací 2026 | OBK Ostrava",
  description:
    "Ceník bouracích prací v Ostravě 2026. Bourání obkladů 180–300 Kč/m², dlažby 150–250 Kč/m², umakartového jádra 8 000–15 000 Kč. Včetně odvozu suti.",
  alternates: { canonical: "https://obklady-ostrava.cz/cenik/bouraci-prace" },
};

const breadcrumbs = [
  { label: "Ceník", href: "/cenik" },
  { label: "Bourací práce" },
];

const faqItems = [
  {
    question: "Jak dlouho trvá bourání umakartového jádra?",
    answer:
      "Samotné bourání jádra v paneláku trvá 1 pracovní den pro dva pracovníky. Odvoz suti do kontejneru další půlden. Celkem 1,5 dne. Kontejner objednáváme den předem a stavíme pod okno nebo na parkoviště.",
  },
  {
    question: "Budou při bourání vibrace a hluk?",
    answer:
      "Ano. Bourání obkladů a dlažby děláme bouracím kladivem — hluk kolem 85 dB. Pracujeme výhradně v pracovní dny 8:00–17:00. Sousedy informujeme předem. Bourání jádra je tišší — umakart řežeme pilou.",
  },
  {
    question: "Musím si zařídit kontejner sám?",
    answer:
      "Ne. Kontejner objednáváme my. Používáme 3m³ kontejnery. Z malé koupelny (do 4 m²) naplníme 1 kontejner. Z bourání celého jádra plus koupelny jsou 2 kontejnery. Cena 4 500–6 000 Kč za kontejner včetně likvidace.",
  },
  {
    question: "Lze bourat jen obklady a dlažbu nechat?",
    answer:
      "Ano. Obklady strhneme, dlažbu necháme. Ale pozor — pod obklady v paneláku bývá lepidlo nebo malba. Stěnu musíme očistit a penetrovat. Počítejte s přípravou podkladu 200–300 Kč/m² navíc.",
  },
  {
    question: "Co se stane se stoupačkami při bourání jádra?",
    answer:
      "Stoupačky nedemolujeme — jsou společné pro celý dům. Odpojíme přípojky, jádro zbouráme kolem stoupaček a poté napojíme nové rozvody. Pokud jsou stoupačky v havarijním stavu, doporučíme výměnu přes SVJ.",
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
      name: "Bourací práce Ostrava",
      areaServed: { "@type": "City", name: "Ostrava" },
    },
  ],
};

export default function BouraciPracePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Cena bouracích prací v Ostravě 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Odstranění starých obkladů stojí 180–300 Kč/m². Odstranění dlažby 150–250 Kč/m².
          Kompletní bourání umakartového jádra v paneláku vyjde na
          8 000–15 000 Kč. Odvoz suti (kontejner 3 m³) 4 500–6 000 Kč. Všechny
          ceny zahrnují práci i úklid.
        </p>

        {/* Co zahrnuje bourání */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Co zahrnuje bourání
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Bourání není jen strhnutí obkladů. Staré lepidlo na stěně musí pryč.
          Pod dlažbou bývá hydroizolace, pod ní potěr. Vše musíme dostat
          na nosnou konstrukci nebo na čistý podklad pro nové vrstvy.
        </p>
        <p className="text-[var(--text-secondary)] mb-2 leading-relaxed">
          V ceně bourání je:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
          <li>Strhnutí obkladů/dlažby bouracím kladivem</li>
          <li>Odstranění starého lepidla a vyrovnávacích vrstev</li>
          <li>Naložení suti do pytlů a snesení na kontejner</li>
          <li>Hrubý úklid prachu a zbytků</li>
        </ul>

        <PriceTable
          headers={["Typ práce", "Cena", "Poznámka"]}
          rows={[
            ["Odstranění starých obkladů", "180–300 Kč/m²", "Včetně odstranění lepidla"],
            ["Odstranění dlažby", "150–250 Kč/m²", "Včetně potěru do 30 mm"],
            ["Bourání umakartového jádra", "8 000–15 000 Kč/komplet", "Kompletní jádro v paneláku"],
            ["Odvoz suti (kontejner 3 m³)", "4 500–6 000 Kč", "Včetně likvidace na skládce"],
            ["Vynášení suti z vyšších pater (bez výtahu)", "příplatek 500–1 500 Kč", "Dle patra a objemu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        {/* Umakartové jádro */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Bourání umakartového jádra
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Umakartové jádro je plechová konstrukce s umakartem. Najdete ho
          v panelových domech z let 1960–1990. V Ostravě je jich tisíce —
          Poruba, Dubina, Hrabůvka, Zábřeh.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Bourání jádra má svůj postup. Nejdřív odpojíme vodu a elektro.
          Pak demontujeme sanitu — WC, umyvadlo, vanu. Umakartové panely
          řežeme kotoučovou pilou a snášíme po kusech. Plechovou konstrukci
          rozřežeme úhlovou bruskou.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Celé jádro (koupelna + WC) zabere 1 pracovní den pro dva lidi.
          Suť z jádra naplní 1,5–2 kontejnery (3 m³). Cena bourání
          8 000–15 000 Kč závisí na velikosti jádra a stavu instalací.
        </p>

        {/* Odvoz a likvidace */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Odvoz a likvidace suti
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Stavební suť je odpad kategorie O (ostatní). Likvidujeme ho
          na certifikované skládce. Kontejner objednáváme den předem.
          Stavíme ho pod okno, na parkoviště nebo do dvora.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Z malé koupelny (obklady + dlažba, bez jádra) naplníte 1 kontejner
          3 m³. Z bourání celého jádra plus koupelny počítejte 2 kontejnery.
          Kontejner 3 m³ stojí 4 500–6 000 Kč včetně dopravy a likvidace.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          V paneláku bez výtahu (nebo s malým výtahem) nosíme suť v pytlích
          po schodech. Příplatek 500–1 500 Kč podle patra. V 1.–3. patře
          s výtahem příplatek neúčtujeme.
        </p>

        <PracticeExample
          text="Panelák na Dubině, Ostrava, 9. patro s výtahem. Umakartové jádro z roku 1978 — koupelna 3,2 m² + WC 1,1 m². Odpojení vody a elektra, demontáž vany, WC a umyvadla. Řezání umakartových panelů, rozřezání plechové konstrukce. Snesení suti výtahem, naložení do 2 kontejnerů 3 m³. Cena bourání jádra: 12 500 Kč. Odvoz suti: 10 000 Kč (2× kontejner). Celkem bourací práce: 22 500 Kč. Doba: přibližně 1,5 pracovního dne."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete zbourat jádro nebo obklady?"
          description="Přijedeme se podívat a do 24 hodin pošleme nabídku. Bourání, odvoz suti, nová koupelna — vše vyřešíme na klíč."
        />

        <RelatedLinks
          links={[
            { title: "Ceník rekonstrukce koupelny", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
            { title: "Ceník pokládky dlažby", href: "/cenik/dlazby" },
            { title: "Přehled ceníku — všechny práce", href: "/cenik" },
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
