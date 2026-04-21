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
  title: "Velkoformátové obklady vs. klasické — co vybrat do koupelny 2026",
  description:
    "Srovnání velkoformátových a klasických obkladů. Formáty, ceny, pokládka, údržba. Kdy zvolit 120×260 cm a kdy zůstat u 30×60 cm. Reálné příklady z Ostravy.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/rady/velkoformatove-obklady-vs-klasicke",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Velkoformátové obklady vs. klasické" },
];

const faqItems = [
  {
    question: "Od jakého formátu se obklad považuje za velkoformátový?",
    answer:
      "Od 60×60 cm a výše. Běžné velkoformáty: 60×120, 80×80, 100×100, 120×120, 120×240, 120×260 cm. Extrémní formáty nad 160 cm délky (např. Laminam 160×320) patří do kategorie 'slab'.",
  },
  {
    question: "Jsou velkoformátové obklady dražší na pokládku?",
    answer:
      "Ano, pokládka stojí 850–1 250 Kč/m² (klasické 30×60 cm: 600–850 Kč/m²). Rozdíl je 30–50 %. Důvody: těžší manipulace (jeden kus 120×260 váží 35 kg), nutnost nivelace podkladu (tolerance max 3 mm/2 m), technika buttering-floating (lepidlo na desku i na podklad), pomalejší práce.",
  },
  {
    question: "Dají se velkoformátové obklady použít v paneláku?",
    answer:
      "Ano, pokud má stěna dostatečnou nosnost. Paneláky T06B a T08B standardně zvládnou 35 kg/m² obkladu. Velkoformát 120×260 váží cca 25 kg/m² — v pořádku. Do umakartového jádra (bez vyzdění) velkoformát NIKDY — neudrží váhu.",
  },
  {
    question: "Jaké jsou hlavní výhody velkoformátu?",
    answer:
      "Méně spár (vypadá čistěji), moderní vzhled, opticky zvětšuje prostor, stejný design bez rušivých přerušení, snadnější údržba (méně spár = méně plísně). Ideální na sprchový kout nebo akcent stěnu za vanou.",
  },
  {
    question: "Kdy zvolit klasické 30×60 cm místo velkoformátu?",
    answer:
      "Při omezeném rozpočtu, v malé koupelně 2–3 m² (velkoformát působí nevhodně), u členitých stěn s hodně rohy a okny, pokud máte křivé stěny (klasický formát skryje nerovnosti snadněji). Klasika zůstává bezpečnou volbou pro panelákové koupelny.",
  },
  {
    question: "Kolik spár zbude u velkoformátu v koupelně 4 m²?",
    answer:
      "Klasika 30×60 cm: cca 22 m spár na stěně. Velkoformát 60×120 cm: cca 11 m spár. Slab 120×240 cm: cca 4 m spár. Každý metr spáry = potenciální plíseň za 5–10 let. Méně spár = lepší hygiena.",
  },
  {
    question: "Poradíte mi s výběrem velkoformátu v Ostravě?",
    answer:
      "Ano. Doporučujeme SIKO Ostrava (největší výběr), Koupelny Ptáček Zábřeh (kvalitní italské značky), StavebninyPRO Poruba (lepší ceny u RAKO). Rádi s vámi absolvujeme návštěvu vzorkovny — pomůžeme s výběrem formátu, odstínu a protiskluzu.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Velkoformátové obklady vs. klasické — co vybrat",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-04-17",
      dateModified: "2026-04-19",
      image: "https://obklady-ostrava.cz/images/articles/velkoformatove-obklady.jpg",
    },
  ],
};

export default function VelkoformatArticlePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Velkoformátové obklady vs. klasické — co vybrat do koupelny 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Velkoformátové obklady jsou trendem posledních 5 let. Vypadají
          moderně, minimalizují spáry, zvětšují prostor. Ale ne pro každou
          koupelnu a ne za každou cenu. V tomto článku porovnáme klasické
          obklady 30×60 cm s velkoformáty 60×120 a větší. Z reálných
          realizací v Ostravě víme, co funguje, co ne a kolik to stojí.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Rozdělení formátů obkladů
        </h2>
        <PriceTable
          headers={["Kategorie", "Formát", "Hmotnost", "Využití"]}
          rows={[
            ["Malý", "15×15, 20×20, 20×30 cm", "14–18 kg/m²", "Mozaika, akcenty, retro koupelny"],
            ["Standardní", "25×50, 30×60, 33×60 cm", "16–20 kg/m²", "Běžná koupelna, panelák"],
            ["Střední", "40×80, 45×90, 50×100 cm", "18–22 kg/m²", "Moderní koupelny, přechod na velkoformát"],
            ["Velkoformátový", "60×120, 80×80, 100×100 cm", "22–25 kg/m²", "Sprchový kout, akcent, prostorné koupelny"],
            ["Velkoformátový XL", "120×120, 120×240, 120×260 cm", "25–28 kg/m²", "Luxusní koupelny, hotely, bazény"],
            ["Slab", "160×320, 100×300 cm", "28–32 kg/m²", "Laminam, velký mramorový efekt"],
          ]}
          caption="Hmotnost se vztahuje na 1 m² obkladu o tloušťce 9–10 mm (keramika). U gresu 12 mm hmotnost stoupá o 15–20 %."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kdy velkoformát dává smysl
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>✅ Koupelna 5+ m²</strong> — velkoformát 60×120
            nebo 120×240 se ukáže v plné kráse. V malých koupelnách
            působí "přecpaně".
          </p>
          <p>
            <strong>✅ Rovné stěny</strong> — velkoformát ukazuje každou
            nerovnost. Podklad musí mít toleranci max 3 mm na 2 metry.
            V nových bytech bez problému, v panelácích je nutná nivelace.
          </p>
          <p>
            <strong>✅ Moderní design</strong> — pokud chcete minimalismus,
            čisté linie, galerijní vzhled. Velkoformát s jemnou kresbou
            mramoru nebo betonu vypadá jako v hotelu.
          </p>
          <p>
            <strong>✅ Podlahové topení</strong> — velkoformátová dlažba
            120×120 cm drží teplo rovnoměrněji než mozaika (méně spár,
            lepší vedení).
          </p>
          <p>
            <strong>✅ Prostor pro akcent</strong> — jedna velkoformátová
            stěna za vanou nebo ve sprchovém koutu výrazně pozvedne
            vzhled za cenu jen mírně vyšší než klasické obklady.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kdy zůstat u klasických obkladů
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>❌ Koupelna pod 3 m²</strong> — velkoformát 120×260
            v malé koupelně "zdusí" prostor. Pro panelákovou koupelnu
            2,1 m² (T06B) doporučujeme max. 30×60 cm nebo 60×60 cm.
          </p>
          <p>
            <strong>❌ Nízký rozpočet</strong> — velkoformát je celkově
            o 40–60 % dražší (materiál i pokládka). Při úsporné
            rekonstrukci ušetříte 15 000–30 000 Kč na klasice.
          </p>
          <p>
            <strong>❌ Členitá dispozice</strong> — hodně rohů, nik,
            okének = spousta řezů. Každý řez velkoformátu zvyšuje
            riziko prasknutí a prodlužuje pokládku.
          </p>
          <p>
            <strong>❌ Křivé stěny</strong> — v panelácích po 40 letech
            bývá odchylka 3–8 cm. Vyrovnání pro velkoformát stojí dalších
            8 000–15 000 Kč. U klasiky se nerovnosti skryjí snadněji.
          </p>
          <p>
            <strong>❌ Bez zkušeného obkladače</strong> — velkoformát
            vyžaduje techniku buttering-floating, rovnací profily,
            vakuové přísavky, nivelační systém. Neodborná pokládka
            znamená 90 % pravděpodobnost prasknutí do roku.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Srovnání ceny — 5 m² koupelna v Ostravě
        </h2>
        <PriceTable
          headers={["Položka", "Klasika 30×60", "Velkoformát 60×120", "Slab 120×260"]}
          rows={[
            ["Cena obkladů / m²", "350–600 Kč", "600–1 100 Kč", "1 400–3 500 Kč"],
            ["Cena pokládky / m²", "650 Kč", "1 050 Kč", "1 400 Kč"],
            ["Lepidlo (C2TE S1)", "130 Kč/m²", "180 Kč/m²", "240 Kč/m²"],
            ["Nivelační systém", "—", "60 Kč/m²", "120 Kč/m²"],
            ["Celkem za 25 m² obkladů", "30 500 Kč", "50 500 Kč", "127 500 Kč"],
            ["Celkem za 5 m² dlažby", "6 400 Kč", "9 950 Kč", "22 800 Kč"],
            ["Celkem práce + materiál", "36 900 Kč", "60 450 Kč", "150 300 Kč"],
          ]}
          caption="Počítáno pro koupelnu 5 m² s 25 m² obkladů na stěnách a 5 m² dlažby na podlaze. Ceny bez DPH, bez sanity."
        />

        <PracticeExample
          text="Koupelna 5,2 m² v novostavbě, Ostrava-Hrabůvka. Klient chtěl moderní vzhled bez viditelných spár. Zvolili jsme slab 120×260 cm od italské značky Fiandre — efekt mramoru Calacatta. Akcentní stěna za vanou (3 kusy = 9 m²), zbytek stěn klasika 30×60 cm stejného odstínu (16 m²). Dlažba velkoformát 120×120 cm v šedé (5,2 m²). Celkem 30,2 m² s kombinací. Cena prací 38 500 Kč, materiál 62 000 Kč. Realizace 14 dní (1.–14. března 2026). Efekt: vypadá jako koupelna v 5★ hotelu za cenu běžné rekonstrukce."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Technické nároky na pokládku velkoformátu
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>1. Podklad s tolerancí max 3 mm / 2 m.</strong> U
            běžné zdi v paneláku je odchylka 10–30 mm. Proto nivelujeme
            hmotou Mapei Ultraplan nebo Baumit Nivello.
          </p>
          <p>
            <strong>2. Lepidlo C2TE S1 flexibilní.</strong> Běžné lepidlo
            C1 praskne pod vahou velkoformátu. Značky: Mapei Keraflex
            Maxi S1, Baumit Baumacol FlexTop.
          </p>
          <p>
            <strong>3. Buttering-floating technika.</strong> Lepidlo
            nanášíme na podklad i na rub obkladu — minimálně 95 %
            pokrytí. Jinak vzniká dutina, která vede k prasknutí.
          </p>
          <p>
            <strong>4. Nivelační systém (spacery + klipy).</strong>{" "}
            Raimondi RLS nebo Rubi Tile Level — drží obklady v jedné
            rovině během tuhnutí lepidla.
          </p>
          <p>
            <strong>5. Dilatační spáry každých 5 m.</strong> Silikonem
            vyplněné — absorbují sezónní pohyby.
          </p>
          <p>
            <strong>6. Minimální šířka spáry 2 mm.</strong> Velkoformát
            má větší toleranci rozměru, takže spára pod 1,5 mm končí
            prasknutím rohu.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Doporučení podle typu koupelny v Ostravě
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Panelák T06B (Poruba, Dubina) — 2,1 m²:</strong>{" "}
            doporučujeme klasika 30×60 cm, maximálně 60×60 cm na podlahu.
            Velkoformát by prostor "zmačkal".
          </p>
          <p>
            <strong>Panelák T08B (Zábřeh, Výškovice) — 4,3 m²:</strong>{" "}
            ideální kombinace — klasika 30×60 na stěnách, dlažba 60×60
            nebo 80×80, akcent 60×120 za vanou.
          </p>
          <p>
            <strong>OP 1.11 a novostavby (Bělský Les, Dubina) — 5+ m²:</strong>{" "}
            plně velkoformát 60×120 nebo 80×80. V luxusním provedení
            slab 120×260 na akcentní stěně.
          </p>
          <p>
            <strong>Cihlový dům (Moravská Ostrava, Slezská Ostrava) — 6+ m²:</strong>{" "}
            prostor pro experimentování. Doporučujeme mix — slab 120×260
            na jedné stěně, klasika 30×60 na zbytku. Vizuálně nejsilnější.
          </p>
        </div>

        <FAQSection items={faqItems} />

        <CTASection
          title="Poradíme s výběrem formátu zdarma"
          description="Jezdíme s klienty na vzorkovnu v Ostravě. Pomůžeme vybrat formát podle vaší koupelny, rozpočtu i vkusu. Zaměření a kalkulace zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Velkoformátové obklady — služba", href: "/sluzby/velkoformatove-obklady" },
            { title: "Výhody a nevýhody velkoformátu", href: "/rady/velkoformatove-obklady-vyhody-a-nevyhody" },
            { title: "Jak vybrat obklady a dlažbu", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
            { title: "Rekonstrukce koupelny v paneláku", href: "/rady/rekonstrukce-koupelny-v-panelaku-ostrava" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
