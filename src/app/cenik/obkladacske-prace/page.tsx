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
  title: "Cena obkladačských prací za m² 2026 | OBK Ostrava",
  description:
    "Ceník obkladačských prací v Ostravě 2026. Standardní obklady 600–850 Kč/m², velkoformát 850–1 250 Kč/m², mozaika 1 050–1 500 Kč/m². Pevná cena po zaměření zdarma.",
  alternates: { canonical: "https://obklady-ostrava.cz/cenik/obkladacske-prace" },
};

const breadcrumbs = [
  { label: "Ceník", href: "/cenik" },
  { label: "Obkladačské práce" },
];

const faqItems = [
  {
    question: "Proč se liší cena obkladu 30×60 a 120×60?",
    answer:
      "Velkoformátový obklad vyžaduje buttering-floating techniku — lepidlo na obklad i stěnu. Řezání vyžaduje mokrou řezačku. Nivelační klipy drží rovinnost. To vše zvyšuje pracnost o 40–60 %.",
  },
  {
    question: "Je v ceně spárování a řezání?",
    answer:
      "Ano. V naší ceně za m² je zahrnuto lepení, řezání, spárování a úklid. Cena nezahrnuje materiál — obklady, lepidlo a spárovací hmotu.",
  },
  {
    question: "Jak dlouho trvá obložení koupelny 6 m²?",
    answer:
      "Samotné obkládání standardním obkladem 30×60 trvá 3–4 pracovní dny. U velkoformátu 120×60 počítejte 5–6 dní. K tomu přičtěte 1 den na spárování a úklid.",
  },
  {
    question: "Můžu si materiál koupit sám?",
    answer:
      "Samozřejmě. Většina zákazníků si obklady vybírá sama. Poradíme s výběrem lepidla — na velkoformát doporučujeme Ceresit CM 17 nebo Mapei Keraflex. Na standardní formáty stačí Ceresit CM 11.",
  },
  {
    question: "Děláte i diagonální pokládku?",
    answer:
      "Ano. Diagonální pokládka (45°) stojí 750–1 000 Kč/m². Je náročnější na řezání a spotřebuje o 10–15 % více materiálu. Hodí se pro menší koupelny — opticky zvětšuje prostor.",
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
      name: "Obkladačské práce Ostrava",
      areaServed: { "@type": "City", name: "Ostrava" },
    },
  ],
};

export default function ObkladacskePracePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Cena obkladačských prací v Ostravě 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Obkládání koupelny obkladem 30×60 vyjde na 600–850 Kč/m² bez
          materiálu. Velkoformát 120×60 stojí 850–1 250 Kč/m². Mozaika
          1 050–1 500 Kč/m². Ceny platí pro Ostravu a okolí do 50 km. Přesnou
          částku dostanete po zaměření zdarma.
        </p>

        {/* Co ovlivňuje cenu */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Co ovlivňuje cenu obkladačských prací
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Největší vliv na cenu má formát obkladu. Obklad 30×60 cm lepíte
          jednovrstvě na stěnu. Obklad 60×120 cm vyžaduje buttering-floating —
          lepidlo na stěnu i na obklad. Spotřeba lepidla vzroste o 30 %.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Druhý faktor je stav podkladu. Rovná stěna z SDK nepotřebuje
          vyrovnání. Panelákové jádro z Dubiny nebo Poruby mívá odchylku
          5–10 mm na 2 m. Vyrovnání stěrkovou hmotou stojí 200–350 Kč/m²
          navíc.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Třetí faktor je složitost vzoru. Rovná pokládka je nejlevnější.
          Diagonální pokládka (45°) přidává 150–200 Kč/m² za náročnější
          řezání. Mozaika vyžaduje přesné spárování — každá spára musí sedět
          na 0,5 mm.
        </p>

        {/* Ceník */}
        <PriceTable
          headers={["Typ práce", "Cena za m²", "Poznámka"]}
          rows={[
            ["Standardní obklady (do 60×60)", "600–850 Kč", "Jednovrstvé lepení, spára 2 mm"],
            ["Velkoformátové obklady (nad 60×60)", "850–1 250 Kč", "Buttering-floating, nivelační klipy"],
            ["Mozaika (síťovaná i jednotlivá)", "1 050–1 500 Kč", "Přesné spárování, řez na 1 mm"],
            ["Diagonální pokládka (45°)", "750–1 000 Kč", "Více řezů, +10–15 % prořez materiálu"],
            ["Obklady s dekorem/vzorem", "700–950 Kč", "Přesné napasování vzoru"],
            ["Vyrovnání podkladu stěrkou (do 10 mm)", "250–350 Kč", "Při odchylce nad 3 mm na 2 m"],
            ["Hydroizolace (dvouvrstvá)", "450–650 Kč", "Mapei Mapelastic + bandáž rohů a prostupů"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        {/* Standardní vs velkoformát */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Standardní obklad vs velkoformát
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Standardní obklad 30×60 cm je nejčastější volba v ostravských
          panelácích. Lepíte na Ceresit CM 11, spárujete Ceresit CE 40
          Aquastatic. Jedna koupelna 6 m² = 3–4 dny práce.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Velkoformát 60×120 cm dává koupelně luxusní vzhled. Méně spár znamená
          méně údržby. Ale potřebujete Ceresit CM 17 nebo Mapei Keraflex,
          nivelační klipy 1,5 mm a mokrou řezačku. Práce trvá 5–6 dní.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          RAKO Extra nabízí obklady 30×60 od 350 Kč/m². Cersanit má
          velkoformáty 60×120 od 550 Kč/m². Marazzi Grande začíná na
          900 Kč/m². Materiál hradíte zvlášť.
        </p>

        {/* Co je v ceně zahrnuto */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Co je v ceně zahrnuto
        </h2>
        <p className="text-[var(--text-secondary)] mb-2 leading-relaxed">
          Naše cena za m² zahrnuje:
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
          <li>Příprava podkladu — penetrace, kontrola rovinnosti</li>
          <li>Lepení obkladů na flexibilní lepidlo</li>
          <li>Řezání — rovné, rohové, výřezy pro zásuvky a trubky</li>
          <li>Spárování spárovací hmotou</li>
          <li>Silikonování rohů a napojení na sanitu</li>
          <li>Úklid po práci</li>
        </ul>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          V ceně není: materiál (obklady, lepidlo, spárovačka), hydroizolace
          (účtujeme zvlášť) a vyrovnání podkladu nad 3 mm odchylky.
        </p>

        <PracticeExample
          text="Panelák v Ostravě-Porubě, byt 3+1, koupelna 5,8 m². Staré obklady 15×15 z 80. let. Stěny po strhnutí měly odchylku 8 mm. Vyrovnání stěrkou + penetrace + obklady RAKO Extra 30×60 (barva cement) + spárování Ceresit CE 40. Cena práce: 52 000 Kč bez materiálu. Doba realizace: přibližně 4 pracovní dny. Zákazník si materiál pořídil sám za 12 400 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete přesnou cenu obkladačských prací?"
          description="Zaměření a rozpočet zdarma. Zavolejte nebo napište — ozveme se do 24 hodin. Cena je po odsouhlasení pevná."
        />

        <RelatedLinks
          links={[
            { title: "Ceník rekonstrukce koupelny", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Ceník pokládky dlažby", href: "/cenik/dlazby" },
            { title: "Ceník bouracích prací", href: "/cenik/bouraci-prace" },
            { title: "Přehled ceníku — všechny práce", href: "/cenik" },
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
