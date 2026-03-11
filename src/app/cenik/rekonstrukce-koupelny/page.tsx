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
  title: "Cena rekonstrukce koupelny 2026 | OBK Ostrava",
  description:
    "Kolik stojí rekonstrukce koupelny v Ostravě 2026. Malá koupelna do 4 m² od 45 000 Kč, střední 4–6 m² od 65 000 Kč, velká 6–10 m² od 95 000 Kč. Práce bez materiálu.",
  alternates: { canonical: "https://obklady-ostrava.cz/cenik/rekonstrukce-koupelny" },
};

const breadcrumbs = [
  { label: "Ceník", href: "/cenik" },
  { label: "Rekonstrukce koupelny" },
];

const faqItems = [
  {
    question: "Jak dlouho trvá kompletní rekonstrukce koupelny?",
    answer:
      "Malá koupelna do 4 m² trvá přibližně 8–10 pracovních dní. Střední koupelna 4–6 m² zabere cca 10–14 dní. Velká koupelna 6–10 m² s vyzděním jádra trvá obvykle 14–18 dní. Počítáme bez víkendů.",
  },
  {
    question: "Co se stane, když při bourání objevíte problém?",
    answer:
      "Stává se to u panelových domů. Nejčastěji: shnilé stoupačky, prasklé kanalizační hrdlo nebo vlhkost za umakartovým jádrem. O každém nálezu vás okamžitě informujeme. Opravu navrhneme a odsouhlasíme před pokračováním.",
  },
  {
    question: "Je v ceně balíčku i materiál?",
    answer:
      "Ne. Ceny balíčků zahrnují veškeré práce — bourání, odvoz suti, rozvody, hydroizolaci, obkládání, instalaci sanity a úklid. Materiál (obklady, dlažba, lepidlo, sanita) hradíte zvlášť. Průměrně vychází na 25 000–45 000 Kč podle výběru.",
  },
  {
    question: "Můžete doporučit výhodné obklady?",
    answer:
      "RAKO Extra 30×60 od 350 Kč/m² — nejlepší poměr cena/kvalita pro panelákovou koupelnu. Cersanit Livi 25×75 od 290 Kč/m² pro úsporný rozpočet. Na nadstandard doporučujeme Marazzi Crogiolo 60×120 od 1 100 Kč/m².",
  },
  {
    question: "Musím se vystěhovat během rekonstrukce?",
    answer:
      "Ne. Stačí mít přístup k jinému WC — u sousedů nebo na chodbě. Vodu napojíme provizorně do kuchyně. Nejvíc prachu je první 1–2 dny při bourání. Dveře zakryjeme folií a pracujeme s odsáváním.",
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
      name: "Rekonstrukce koupelny Ostrava",
      areaServed: { "@type": "City", name: "Ostrava" },
    },
  ],
};

export default function RekonstrukceKoupelnyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Kolik stojí rekonstrukce koupelny v Ostravě 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Kompletní rekonstrukce malé koupelny do 4 m² vyjde od 45 000 Kč
          (práce bez materiálu). Střední koupelna 4–6 m² stojí 65 000–95 000 Kč.
          Velká koupelna 6–10 m² od 95 000 Kč. Ceny
          zahrnují veškeré práce od bourání po finální úklid.
        </p>

        {/* Co zahrnuje cena */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Co zahrnuje cena rekonstrukce
        </h2>
        <p className="text-[var(--text-secondary)] mb-2 leading-relaxed">
          Každý balíček obsahuje kompletní realizaci na klíč:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
          <li>Bourání starých obkladů, dlažby a jádra (umakart nebo zdivo)</li>
          <li>Odvoz suti kontejnerem — obvykle 1–2 kontejnery</li>
          <li>Nové rozvody vody (PPR) a odpadu (HT systém)</li>
          <li>Hydroizolace sprchového koutu a podlahy — Mapei Mapelastic, dvě vrstvy</li>
          <li>Obkládání stěn a pokládka dlažby</li>
          <li>Instalace sanity — WC, umyvadlo, vana/sprchový kout, baterie</li>
          <li>Elektro — nové zásuvky, osvětlení, ventilátor</li>
          <li>Výmalba stropu a úklid</li>
        </ul>

        {/* Balíčky */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Malá vs střední vs velká koupelna
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Rozdíl mezi balíčky je hlavně v ploše a rozsahu prací. Malá koupelna
          do 4 m² je typický panelák z Poruby nebo Hrabůvky. Střední koupelna
          4–6 m² je cihlový byt nebo větší panelák. Velká koupelna 6–10 m²
          obvykle zahrnuje vyzdění nového jádra z YTONGu, podlahové topení
          nebo walk-in sprchu.
        </p>

        <PriceTable
          headers={["Balíček", "Plocha", "Cena práce", "Co je navíc"]}
          rows={[
            ["Malá koupelna", "Do 4 m²", "45 000–65 000 Kč", "Základní provedení, stávající dispozice"],
            ["Střední koupelna", "4–6 m²", "65 000–95 000 Kč", "Změna dispozice, přesun odpadů"],
            ["Velká koupelna", "6–10 m²", "95 000–140 000 Kč", "Vyzdění jádra, podlahové topení, walk-in sprcha"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        {/* Skryté náklady */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Skryté náklady — na co si dát pozor
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          V paneláku na Dubině nebo Zábřehu často najdeme za umakartovým jádrem
          vlhkost. Sanace zdiva stojí 3 000–8 000 Kč. U bytů z 70. let bývají
          litinové odpady — výměna za HT systém přidá 4 000–7 000 Kč.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Stoupačky. Pokud jsou společné stoupačky v havarijním stavu, musí je
          měnit SVJ. My je napojíme, ale samotnou výměnu nehradíme.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Elektro. V panelácích z 80. let bývá hliníkový rozvod. Nový měděný
          přívod do koupelny (2,5 mm², jistič 16A) stojí 2 500–5 000 Kč.
          Doporučujeme udělat rovnou — pak máte klid na 30 let.
        </p>

        <PriceTable
          headers={["Možný vícenáklad", "Cena", "Kdy nastává"]}
          rows={[
            ["Sanace vlhkého zdiva", "3 000–8 000 Kč", "Vlhkost za umakartovým jádrem"],
            ["Výměna litinových odpadů za HT", "4 000–7 000 Kč", "Panelové domy z 70. let"],
            ["Nový elektrický přívod", "2 500–5 000 Kč", "Hliníkový rozvod, malý jistič"],
            ["Vyrovnání stěn (odchylka nad 5 mm)", "200–350 Kč/m²", "Nerovné panelové stěny"],
            ["Přesun stoupačky nebo odpadu", "5 000–12 000 Kč", "Změna dispozice koupelny"],
          ]}
          caption="O každém vícenákladu vás informujeme předem. Bez vašeho souhlasu nepracujeme."
        />

        <PracticeExample
          text="Koupelna 6 m² v paneláku Ostrava-Zábřeh, 7. patro. Umakartové jádro z roku 1982. Kompletní bourání jádra, odvoz 2 kontejnerů suti. Nové vyzdění YTONGem 50 mm, rozvody PPR, hydroizolace Mapei Mapelastic. Obklady Cersanit Livi 25×75 (světle šedá), dlažba RAKO Extra 60×60. Sprchový kout walk-in 90×120, umyvadlo Cersanit Crea, WC závěsné. Cena práce: 98 000 Kč. Materiál (obklady + sanita): 34 000 Kč. Realizace: přibližně 13 pracovních dní."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete nabídku na rekonstrukci koupelny?"
          description="Přijedeme zaměřit zdarma. Do 48 hodin dostanete položkový rozpočet s pevnou cenou. Žádné skryté příplatky."
        />

        <RelatedLinks
          links={[
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
            { title: "Ceník bouracích prací", href: "/cenik/bouraci-prace" },
            { title: "Ceník pokládky dlažby", href: "/cenik/dlazby" },
            { title: "Přehled ceníku — všechny práce", href: "/cenik" },
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
