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
  title: "Obklady kuchyní Ostrava | Kuchyňský obklad | OBK",
  description:
    "Kuchyňské obklady v Ostravě. Zástěna za linkou od 10 000 Kč, celá stěna od 20 000 Kč. Keramika, sklo, velkoformát 60x120. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/sluzby/obklady-kuchyni" },
};

const breadcrumbs = [
  { label: "Služby", href: "/sluzby" },
  { label: "Obklady kuchyní" },
];

const faqItems = [
  {
    question: "Jaký obklad je nejlepší za kuchyňskou linku?",
    answer:
      "Nejpraktičtější je keramický obklad 60x60 nebo 60x120 cm. Snadno se čistí, odolává mastnotě a teplu. Sklo vypadá dobře, ale snáze se poškrábe. Doporučuji RAKO Extra nebo Cersanit.",
  },
  {
    question: "Kolik stojí obložení zástěny za kuchyňskou linkou?",
    answer:
      "Standardní zástěna 2,4 m x 0,6 m (1,44 m²) stojí od 10 000 Kč za práci bez materiálu. Velkoformátový obklad 60x120 vyjde přibližně na 13 000–16 000 Kč. Cena závisí na formátu a složitosti řezání.",
  },
  {
    question: "Musí se pod kuchyňský obklad dělat hydroizolace?",
    answer:
      "Za dřezem ano — alespoň stěrková izolace v šířce 30 cm kolem výtoku. Zbytek zástěny hydroizolaci nepotřebuje. Stačí kvalitní penetrace Ceresit CT 17.",
  },
  {
    question: "Jak dlouho trvá obložení kuchyně?",
    answer:
      "Samotná zástěna za linkou zabere přibližně 1 den. Celá stěna kuchyně obvykle 2–3 dny. Velkoformátové obklady 60x120 jsou pomalejší — počítejte cca s 2 dny na zástěnu.",
  },
  {
    question: "Dá se obklad položit na starý obklad?",
    answer:
      "Technicky ano, pokud starý obklad drží a je rovný. Používáme kontaktní můstek Ceresit CL 72. Nedoporučuji to ale za sporákem — vrstvy se mohou oddělit od tepla. Lepší je staré obklady sundat.",
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
      name: "Obklady kuchyní Ostrava",
      description:
        "Pokládka obkladů v kuchyních. Zástěna za linkou, celé stěny, velkoformátové obklady.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CZK",
        price: "10000",
        unitText: "zakázka",
      },
    },
  ],
};

export default function ObkladyKuchyniPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obklady kuchyní v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Pokládáme kuchyňské obklady od malé zástěny za linkou po celé stěny.
          Keramika, sklo i velkoformát 60x120. V Ostravě děláme kuchyně
          v panelácích i novostavbách. Záruka 60 měsíců.
        </p>

        {/* Types */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Typy kuchyňských obkladů
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          V kuchyni řešíme nejčastěji dva typy prací. Zástěna za linkou
          — úzký pás mezi deskou a horními skříňkami. Nebo celá stěna od podlahy
          ke stropu.
        </p>

        <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-2">
          Zástěna za linkou
        </h3>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Standardní rozměr zástěny je 2,4 m x 0,6 m. To je 1,44 m². Pokládáme
          ji po montáži spodních skříněk, ale před montáží horních. U rovné
          stěny zvládneme za 1 den. Nejčastější formáty: 30x60, 60x60 nebo
          jeden kus 60x120 bez spár.
        </p>

        <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-2">
          Celá stěna kuchyně
        </h3>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Obložení celé stěny od podlahy ke stropu. Obvykle 6–10 m². Řešíme
          i rohy, přechody a výřezy pro zásuvky. Velkoformát 60x120 vypadá
          nejlépe — minimum spár, snadná údržba. Práce trvá obvykle 2–3 dny.
        </p>

        {/* Materials */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Materiály pro kuchyňské obklady
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Keramický obklad 30x60 cm</strong> — nejlevnější varianta.
            RAKO Concept od 380 Kč/m². Odolává teplu i vlhkosti.
          </li>
          <li>
            <strong>Velkoformát 60x120 cm</strong> — minimum spár. RAKO Extra
            od 890 Kč/m². Jeden kus pokryje celou výšku zástěny.
          </li>
          <li>
            <strong>Skleněný obklad</strong> — efektní vzhled, snadno se čistí.
            Od 1 500 Kč/m² včetně montáže. Nevhodné přímo za plynový sporák.
          </li>
          <li>
            <strong>Velkoformát 120x260 cm</strong> — celá stěna bez jediné
            spáry. Marazzi Grande, Laminam. Od 1 200 Kč/m² jen materiál.
          </li>
        </ul>

        {/* Process */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Postup pokládky
        </h2>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Kontrola podkladu</strong> — rovinnost, přilnavost omítky.
            Vyrovnání stěrkou při odchylce nad 3 mm.
          </li>
          <li>
            <strong>Penetrace</strong> — Ceresit CT 17. Schnutí 4 hodiny.
          </li>
          <li>
            <strong>Hydroizolace za dřezem</strong> — stěrková izolace Mapei
            v šířce 30 cm kolem výtoku.
          </li>
          <li>
            <strong>Pokládka</strong> — lepidlo Ceresit CM 17 nebo Mapei
            Keraflex. U velkoformátů buttering-floating.
          </li>
          <li>
            <strong>Spárování</strong> — Mapei Keracolor nebo Ceresit CE 40.
            Silikonová spára u desky a horních skříněk.
          </li>
        </ol>

        {/* Prices */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Ceník obkladů kuchyní
        </h2>
        <PriceTable
          headers={["Typ práce", "Cena", "Poznámka"]}
          rows={[
            ["Zástěna za linkou (do 2 m²)", "od 10 000 Kč", "Formát do 60×60, včetně spárování"],
            ["Zástěna velkoformát 60×120", "od 13 000 Kč", "Buttering-floating, nivelace"],
            ["Celá stěna kuchyně (do 10 m²)", "od 20 000 Kč", "Formát do 60×60"],
            ["Celá stěna velkoformát", "od 29 000 Kč", "60×120 nebo větší"],
            ["Skleněný obklad", "od 1 800 Kč/m²", "Včetně lepení a montáže"],
            ["Bourání starého obkladu", "180–300 Kč/m²", "Odvoz suti 4 500–6 000 Kč"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample text="Kuchyňská zástěna 2,4 m x 0,6 m v bytě v Hrabůvce, Ostrava. Obklad 60x120 cm RAKO Extra — 2 kusy na celou šířku, bez svislé spáry. Lepidlo Mapei Keraflex Maxi. Spára Mapei Keracolor 2 mm. Silikonová spára Mapei u desky a horních skříněk. Práce trvala přibližně 1 den. Cena za pokládku: 14 200 Kč bez materiálu." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete obložit kuchyni?"
          description="Zavolejte nebo napište. Přijedeme, zaměříme a obvykle do 3 pracovních dnů dostanete nabídku s přesnou cenou."
        />

        <RelatedLinks
          links={[
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
            { title: "Rekonstrukce koupelny na klíč", href: "/sluzby/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
