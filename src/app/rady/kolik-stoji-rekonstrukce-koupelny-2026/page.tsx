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
  title: "Kolik stojí rekonstrukce koupelny 2026 | OBK Ostrava",
  description:
    "Cena rekonstrukce koupelny 2026 v Ostravě. Malá od 45 000 Kč, standardní 65 000–95 000 Kč, nadstandardní od 95 000 Kč. Podrobný rozpočet, skryté náklady, jak ušetřit.",
  alternates: {
    canonical:
      "https://obklady-ostrava.cz/rady/kolik-stoji-rekonstrukce-koupelny-2026",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Kolik stojí rekonstrukce koupelny 2026" },
];

const faqItems = [
  {
    question: "Kolik stojí rekonstrukce malé koupelny v paneláku?",
    answer:
      "Práce stojí přibližně 45 000–65 000 Kč bez materiálu. Materiál (obklady, dlažba, lepidlo, sanita) přidejte cca 25 000–40 000 Kč. Celkem malá koupelna do 4 m² vyjde přibližně na 70 000–105 000 Kč.",
  },
  {
    question: "Je v ceně balíčku i materiál?",
    answer:
      "Ne. Ceny balíčků zahrnují práce — bourání, odvoz, rozvody, hydroizolaci, obkládání, sanitu a úklid. Materiál (obklady, dlažba, lepidlo, sanita) hradíte zvlášť. Přibližně 25 000–45 000 Kč v závislosti na značce.",
  },
  {
    question: "Jak ušetřit na rekonstrukci koupelny?",
    answer:
      "Tři tipy: 1) Obklady Cersanit místo RAKO — ušetříte přibližně 3 000–5 000 Kč na materiálu. 2) Sprchový kout místo vany — levnější sanita přibližně o 4 000–8 000 Kč. 3) Zachovejte stávající dispozici — bez přesunu odpadů ušetříte přibližně 8 000–15 000 Kč na práci.",
  },
  {
    question: "Kdy se vyplatí prémiová rekonstrukce?",
    answer:
      "Když plánujete v bytě bydlet 10+ let. Podlahové topení, walk-in sprcha a velkoformátové obklady zvýší komfort i hodnotu nemovitosti. V Ostravě zvyšuje cenu bytu o 150 000–250 000 Kč.",
  },
  {
    question: "Dá se rekonstrukce koupelny platit na splátky?",
    answer:
      "Ano. Nabízíme rozdělení platby: 40 % záloha před začátkem, 40 % po obkládání, 20 % po předání. U větších zakázek nad 200 000 Kč individuální dohoda.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Kolik stojí rekonstrukce koupelny v roce 2026",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-02-01",
    },
  ],
};

export default function KolikStojiRekonstrukcePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Kolik stojí rekonstrukce koupelny v roce 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Reálné ceny z rekonstrukcí v Ostravě. Žádné „od–do" bez kontextu.
          Konkrétní rozpočet pro koupelnu 5 m² rozložený na práci, materiál
          a sanitu. Tři cenové kategorie: levná, střední, prémiová.
        </p>

        {/* Tři balíčky */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Tři cenové balíčky — přehled
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Ceny zahrnují kompletní práce od bourání po předání. Materiál
          (obklady, dlažba, sanita) se platí zvlášť. Každý balíček
          obsahuje hydroizolaci, spárování a 60měsíční záruku.
        </p>
        <PriceTable
          headers={["Balíček", "Plocha obkladů", "Cena práce", "Typická koupelna"]}
          rows={[
            ["Malá", "Do 17 m² obkladů", "45 000–65 000 Kč", "Panelák Poruba, Zábřeh — do 4 m²"],
            ["Standardní", "Do 21 m² obkladů", "65 000–95 000 Kč", "Cihlový byt, větší panelák — 4–6 m²"],
            ["Nadstandardní", "Do 30 m² obkladů", "od 95 000 Kč", "Vyzdění jádra, podlahové topení — nad 6 m²"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        {/* Co ovlivňuje cenu */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Co ovlivňuje cenu rekonstrukce
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Cena závisí na pěti věcech. Každá přidává nebo ubírá tisíce korun.
          Tady je přehled, abyste věděli, co očekávat.
        </p>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-3 mb-6">
          <li>
            <strong>Plocha koupelny</strong> — každý m² obkladů stojí
            přibližně 600–1 250 Kč za práci. Koupelna 4 m² vs 8 m² = rozdíl přibližně 20 000–40 000 Kč.
          </li>
          <li>
            <strong>Typ jádra</strong> — umakartové jádro v paneláku = bourání
            přibližně za 8 000–15 000 Kč. Vyzdění nového jádra přibližně 15 000–22 000 Kč. Stávající
            dobré zdivo = 0 Kč.
          </li>
          <li>
            <strong>Změna dispozice</strong> — přesun WC, vany nebo odpadu
            zvyšuje cenu přibližně o 8 000–15 000 Kč. Zachování stávající dispozice
            je nejlevnější.
          </li>
          <li>
            <strong>Formát obkladů</strong> — standardní 30x60 pokládáme přibližně za
            600–850 Kč/m². Velkoformát 60x120 za 850–1 250 Kč/m². Desky 120x260
            od 1 250 Kč/m².
          </li>
          <li>
            <strong>Sanita</strong> — základní WC Cersanit od 3 500 Kč.
            Závěsné Geberit + Villeroy od 12 000 Kč. Baterie Grohe od 2 800 Kč.
            Hansgrohe Raindance od 8 000 Kč.
          </li>
        </ol>

        {/* Rozpočet krok za krokem */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Rozpočet krok za krokem — koupelna 5 m²
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Modelová koupelna: panelový dům Ostrava-Poruba, umakartové jádro,
          5 m² podlahy, 16 m² obkladů na stěnách. Sprchový kout, WC, umyvadlo.
        </p>
        <PriceTable
          headers={["Položka", "Levná varianta", "Střední varianta", "Prémiová varianta"]}
          rows={[
            ["Bourání + odvoz suti", "přibližně 8 500 Kč", "přibližně 10 500 Kč", "přibližně 12 500 Kč"],
            ["Vyzdění jádra", "—", "přibližně 12 000 Kč", "přibližně 18 000 Kč"],
            ["Rozvody vody a odpadu", "přibližně 15 000 Kč", "přibližně 18 000 Kč", "přibližně 22 000 Kč"],
            ["Elektroinstalace", "přibližně 5 000 Kč", "přibližně 7 000 Kč", "přibližně 10 000 Kč"],
            ["Hydroizolace", "přibližně 5 500 Kč", "přibližně 10 500 Kč", "přibližně 13 500 Kč"],
            ["Obkládání stěn (16 m²)", "přibližně 9 600 Kč", "přibližně 12 000 Kč", "přibližně 17 600 Kč"],
            ["Pokládka dlažby (5 m²)", "přibližně 2 750 Kč", "přibližně 3 500 Kč", "přibližně 5 000 Kč"],
            ["Spárování + silikony", "přibližně 4 500 Kč", "přibližně 5 500 Kč", "přibližně 6 500 Kč"],
            ["Instalace sanity", "přibližně 10 000 Kč", "přibližně 13 000 Kč", "přibližně 16 000 Kč"],
            ["Výmalba + úklid", "přibližně 4 000 Kč", "přibližně 4 500 Kč", "přibližně 5 500 Kč"],
            ["PRÁCE CELKEM", "přibližně 64 850 Kč", "přibližně 96 500 Kč", "přibližně 127 100 Kč"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Modelová koupelna 5 m² v paneláku. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Materiál — kolik přidá na ceně
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Materiál tvoří 25–40 % celkové ceny. Závisí na značce obkladů
          a kvalitě sanity. Tady je srovnání pro stejnou koupelnu 5 m².
        </p>
        <PriceTable
          headers={["Materiál", "Levná varianta", "Střední varianta", "Prémiová varianta"]}
          rows={[
            ["Obklady stěny (16 m²)", "4 480 Kč (Cersanit 280/m²)", "5 600 Kč (RAKO 350/m²)", "12 800 Kč (Marazzi 800/m²)"],
            ["Dlažba podlaha (5 m²)", "1 400 Kč (Cersanit 280/m²)", "1 900 Kč (RAKO 380/m²)", "4 500 Kč (Marazzi 900/m²)"],
            ["Lepidlo + spárovačka", "2 200 Kč", "2 800 Kč", "3 500 Kč"],
            ["Hydroizolační materiál", "1 800 Kč", "2 200 Kč", "2 800 Kč"],
            ["WC + mechanismus", "3 500 Kč (stojící)", "8 000 Kč (závěsné Cersanit)", "14 000 Kč (Geberit + Villeroy)"],
            ["Umyvadlo + baterie", "2 500 Kč", "5 500 Kč (Grohe)", "11 000 Kč (Hansgrohe)"],
            ["Sprchový kout / vana", "5 000 Kč (klasický kout)", "8 000 Kč (walk-in)", "15 000 Kč (walk-in sklo 10 mm)"],
            ["Sprchová baterie", "1 800 Kč", "3 500 Kč (Grohe)", "8 000 Kč (Hansgrohe Raindance)"],
            ["Doplňky (věšáky, zrcadlo)", "1 500 Kč", "3 000 Kč", "6 000 Kč"],
            ["MATERIÁL CELKEM", "24 180 Kč", "40 500 Kč", "77 600 Kč"],
          ]}
          caption="Orientační ceny materiálu pro koupelnu 5 m². Závisí na výběru značky a řady."
        />

        {/* Srovnání celkových cen */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Celková cena — srovnání tří variant
        </h2>
        <PriceTable
          headers={["", "Levná varianta", "Střední varianta", "Prémiová varianta"]}
          rows={[
            ["Práce", "přibližně 64 850 Kč", "přibližně 96 500 Kč", "přibližně 127 100 Kč"],
            ["Materiál + sanita", "přibližně 24 000 Kč", "přibližně 40 000 Kč", "přibližně 77 000 Kč"],
            ["CELKEM", "přibližně 89 000 Kč", "přibližně 137 000 Kč", "přibližně 204 000 Kč"],
            ["Obklady", "Cersanit 30x60", "RAKO Extra 30x60", "Marazzi 60x120"],
            ["Sanita", "Stojící WC, základní baterie", "Závěsné WC, Grohe baterie", "Geberit + Villeroy, Hansgrohe"],
            ["Sprcha/vana", "Klasický kout", "Walk-in sprcha", "Walk-in sklo 10 mm"],
            ["Realizace", "přibližně 8–10 dní", "přibližně 10–14 dní", "přibližně 14–18 dní"],
          ]}
          caption="Celkové orientační náklady na rekonstrukci koupelny 5 m² v Ostravě. Přesnou cenu zpracujeme po zaměření zdarma do 24 hodin."
        />

        {/* Skryté náklady */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Skryté náklady — na co si dát pozor
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          U panelových domů v Ostravě-Zábřehu a na Dubině často najdeme
          problémy za umakartovým jádrem. Tyhle náklady se nedají předvídat
          před bouráním. Ale můžete s nimi počítat.
        </p>
        <PriceTable
          headers={["Skrytý náklad", "Cena", "Jak často se vyskytuje"]}
          rows={[
            ["Vlhkost za umakartovým jádrem", "3 000–8 000 Kč", "30 % panelových bytů"],
            ["Výměna litinových odpadů za HT", "4 000–7 000 Kč", "Panelové domy z 70. let"],
            ["Nový elektrický přívod (hliník → měď)", "2 500–5 000 Kč", "Panelové domy z 80. let"],
            ["Vyrovnání stěn (odchylka nad 5 mm)", "150–250 Kč/m²", "Starší panelové domy"],
            ["Přesun stoupačky nebo odpadu", "5 000–12 000 Kč", "Při změně dispozice"],
            ["Sanace plísně", "2 000–5 000 Kč", "Špatně větraná koupelna"],
          ]}
          caption="O každém vícenákladu informujeme předem. Bez souhlasu nepracujeme."
        />

        {/* Jak ušetřit */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Jak ušetřit bez kompromisů na kvalitě
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Obklady Cersanit místo RAKO</strong> — ušetříte
            1 000–3 000 Kč na 16 m² stěn. Kvalita srovnatelná, jen méně
            designových řad.
          </li>
          <li>
            <strong>Formát 30x60 místo velkoformátu</strong> — práce přibližně za
            600–850 Kč/m² místo 850–1 250 Kč/m². Na 16 m² stěn = úspora
            přibližně 4 000–6 400 Kč.
          </li>
          <li>
            <strong>Sprchový kout místo vany</strong> — sanita levnější
            o 4 000–8 000 Kč. Méně obkládání. Méně materiálu.
          </li>
          <li>
            <strong>Zachování stávající dispozice</strong> — bez přesunu
            odpadů a stoupaček ušetříte 8 000–15 000 Kč na práci.
          </li>
          <li>
            <strong>Nákup obkladů ve slevách</strong> — RAKO a Cersanit
            mají výprodeje v lednu a červnu. Slevy 20–40 %. Poradíme vám
            s načasováním.
          </li>
        </ul>

        <PracticeExample text="Koupelna 5,4 m² v paneláku Ostrava-Hrabůvka, ulice Horní. Umakartové jádro z roku 1980. Zákazník chtěl střední variantu. Bourání umakartového jádra, vyzdění YTONGem 75 mm. Nové rozvody PPR, HT odpady. Hydroizolace Mapei Mapelastic. Obklady RAKO Extra 30x60 (světle šedá) na stěny — 17,2 m². Dlažba RAKO Extra 60x60 R10 na podlahu. Walk-in sprchový kout 90x100 cm, závěsné WC Cersanit Crea, umyvadlo Cersanit + baterie Grohe Eurosmart. Cena práce: přibližně 90 000 Kč. Materiál: přibližně 38 000 Kč. Celkem: přibližně 128 000 Kč. Realizace: přibližně 10–14 pracovních dní." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete přesný rozpočet pro vaši koupelnu?"
          description="Zavolejte a domluvíme zaměření zdarma. Do 48 hodin dostanete položkový rozpočet s pevnou cenou. Žádné skryté příplatky."
        />

        <RelatedLinks
          links={[
            { title: "Ceník rekonstrukce koupelny — balíčky", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Jak probíhá rekonstrukce koupelny", href: "/rady/jak-probiha-rekonstrukce-koupelny" },
            { title: "Jak vybrat obklady a dlažbu", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Vana nebo sprchový kout", href: "/rady/vana-nebo-sprchovy-kout" },
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
