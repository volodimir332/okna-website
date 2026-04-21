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
  title: "Rekonstrukce koupelny v paneláku Ostrava — kompletní průvodce 2026",
  description:
    "Kompletní průvodce rekonstrukcí koupelny v panelovém domě v Ostravě. Cena od 65 000 Kč, délka 10-14 dní, postup krok za krokem. Paneláky T06B, T08B, OP 1.11.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/rady/rekonstrukce-koupelny-v-panelaku-ostrava",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Rekonstrukce koupelny v paneláku Ostrava" },
];

const faqItems = [
  {
    question: "Kolik stojí rekonstrukce koupelny v paneláku v Ostravě?",
    answer:
      "V roce 2026 vychází kompletní rekonstrukce koupelny v paneláku T06B (3–4 m²) na 65 000–95 000 Kč za práci bez materiálu. S materiálem a sanitou cca 115 000–180 000 Kč. U větší koupelny v OP 1.11 (5–7 m²) je cena prací 95 000–140 000 Kč, celkem 165 000–260 000 Kč.",
  },
  {
    question: "Jak dlouho trvá rekonstrukce koupelny v paneláku?",
    answer:
      "Standardně 10–14 pracovních dní. Bourání umakartového jádra 1 den, odvoz suti 1 den, vyzdění YTONGem 1–2 dny, rozvody vody a odpadů 1 den, elektroinstalace 1 den, hydroizolace 1 den, obklady a dlažba 3–4 dny, spárování a montáž sanity 1–2 dny.",
  },
  {
    question: "Musím nahlásit rekonstrukci SVJ nebo sousedům?",
    answer:
      "Ano. Bourání jádra je hlučné a vyvolá prach. SVJ nahlaste 7 dní dopředu — většinou stačí email s termínem. Sousedům dejte vědět letáčkem do schránky nebo osobně. My tyto papíry řešíme za vás — součást naší služby.",
  },
  {
    question: "Co dělat s umakartovým jádrem — bourat, nebo jen obkládat?",
    answer:
      "Pouze bourat. Umakartové stěny jsou po 40+ letech mokré, plesnivé a deformované. Obkládání na umakart se Vám vrátí za 2–3 roky v podobě odpadlých obkladů. Bourání + vyzdění YTONGem stojí 23 000–37 000 Kč, ale máte novou zeď na 50+ let.",
  },
  {
    question: "Kolik stojí nové rozvody vody a odpady?",
    answer:
      "Výměna rozvodů v paneláku (vody PPR + odpady HT): 12 000–22 000 Kč podle velikosti bytu. Zahrnuje napojení na stoupačku, rozvedení po bytě, uzavírací ventily a přípravu pro sanitu. Staré ocelové a litinové potrubí musíte vyměnit — za 40 let jsou zarostlé a prorezlé.",
  },
  {
    question: "Kam jít na vzorky obkladů v Ostravě?",
    answer:
      "Doporučujeme: SIKO Ostrava (Rudná ul.), Koupelny Ptáček Ostrava-Zábřeh, StavebninyPRO Poruba. Osobní prohlídka vzorků je lepší než online — rozdíl odstínu mezi fotkou a reálem bývá 10–30 %. Vezměte si s sebou vzorek podlahy nebo stěny, který chcete ladit.",
  },
  {
    question: "Lze rekonstruovat koupelnu v paneláku bez vypnutí vody?",
    answer:
      "Částečně. Napojení na stoupačku vyžaduje vypnutí vody — obvykle 2–4 hodiny v první den. Zbytek prací probíhá bez vypínání. Studenou i teplou vodu v bytě máte dostupnou po celou dobu rekonstrukce (kromě těch 2–4 hodin).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Rekonstrukce koupelny v paneláku Ostrava — kompletní průvodce 2026",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-04-15",
      dateModified: "2026-04-19",
      image: "https://obklady-ostrava.cz/images/articles/rekonstrukce-koupelny-cena.jpg",
    },
  ],
};

export default function PanelakPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Rekonstrukce koupelny v paneláku Ostrava — kompletní průvodce 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          V Ostravě žije přes 280 000 lidí a většina v panelových domech
          postavených v 60.-80. letech. Typické bytové jádro z umakartu
          je dnes 40+ let staré a na konci životnosti. Tento průvodce
          popisuje kompletní postup rekonstrukce panelákové koupelny —
          od prvního zaměření až po předání. Vychází z reálných realizací
          v Porubě, Zábřehu, Dubině i Hrabůvce.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Jaké typy paneláků v Ostravě najdete
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>T06B</strong> — nejčastější typ v Porubě, Dubině,
            Hrabůvce. Postaven 1964–1988. Bytové jádro 1300 × 1600 mm,
            umakart na dřevěné konstrukci. Koupelna 2,1 m², WC samostatně
            0,9 m². Stoupačky uprostřed domu.
          </p>
          <p>
            <strong>T08B</strong> — Zábřeh, Výškovice. Podobné T06B, ale
            větší jádro 1800 × 2400 mm (koupelna + WC společně, 4,3 m²).
            Rozvody ocelové nebo měděné, odpady litinové.
          </p>
          <p>
            <strong>OP 1.11</strong> — novější paneláky z 80. let (Dubina,
            Bělský Les). Větší byty, větší koupelny (5–7 m²), některé už
            bez umakartového jádra — přímo zděné.
          </p>
          <p>
            <strong>VVÚ-ETA</strong> — experimentální typ v některých
            částech Ostravy. Vyšší stropy, větší okna. Koupelny 4–5 m².
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Co vás čeká krok za krokem
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-4">
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              1. Zaměření a kalkulace (0 dní — zdarma)
            </p>
            <p>
              Přijedeme k vám domů, změříme prostor, probereme představu.
              Do 48 hodin dostanete písemnou kalkulaci s rozpisem prací
              a orientační cenou materiálu. Žádné skryté poplatky.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              2. Výběr materiálu (1–2 týdny před zahájením)
            </p>
            <p>
              Pojedete na vzorkovnu (SIKO, Ptáček, StavebninyPRO), vyberete
              obklady, dlažbu, sanitu. Objednávku dodáme na stavbu 1–2 dny
              před potřebou.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              3. Bourání (1 den)
            </p>
            <p>
              Ráno přivezeme kontejner. Bouráme umakart, staré obklady,
              rozvody, odpady. Vše zapakujeme a odvezeme na skládku.
              Prach minimalizujeme plachtami a vysavačem HEPA.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              4. Vyzdění YTONGem (1–2 dny)
            </p>
            <p>
              Nové příčky z YTONGu 100mm. Rovné, pevné, odolné vůči
              vlhkosti. V ceně vyzdívky je i vyrovnání podkladu pro
              obklady.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              5. Rozvody vody a odpady (1 den)
            </p>
            <p>
              Nové trubky PPR (voda) a HT (odpady). Napojení na stoupačku.
              Příprava připojení pro umyvadlo, WC, vanu/sprchu, pračku.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              6. Elektroinstalace (1 den)
            </p>
            <p>
              Nové zásuvky (minimálně 2 v koupelně — kategorie IP44),
              světla, ventilátor. Koupelna musí mít vlastní jistič
              s proudovým chráničem.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              7. Hydroizolace (1 den)
            </p>
            <p>
              Stěrková hydroizolace dle ČSN 74 4505. Mapei Mapelastic
              nebo Baumacol Proof — dvě vrstvy + bandáž rohů. Na stěny
              ve sprchovém koutu do výšky 200 cm a na celou podlahu.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              8. Obklady a dlažba (3–4 dny)
            </p>
            <p>
              Nejprve stěny, pak podlaha. Standardní formát 30×60 cm
              trvá kratší dobu, velkoformátové obklady 60×120+ cm jsou
              náročnější (buttering-floating, nivelace podkladu).
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              9. Spárování a silikon (1 den)
            </p>
            <p>
              Mapei Ultracolor Plus nebo Ceresit CE40. Silikonem těsníme
              všechny dilatační spoje — u vany, umyvadla, WC, rohů.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              10. Montáž sanity a předání (1–2 dny)
            </p>
            <p>
              Instalace WC, umyvadla, baterie, vany/sprchy. Kontrola
              funkčnosti. Úklid. Předání s podpisem předávacího
              protokolu a záručního listu na 60 měsíců.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kolik to stojí — detailní ceník 2026
        </h2>
        <PriceTable
          headers={["Položka", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Vč. přípravy podkladu"],
            ["Odvoz suti (kontejner)", "4 500–6 000 Kč", "Cca 300 kg sutě"],
            ["Vyzdění příček YTONG 100mm", "15 000–22 000 Kč", "Jádro 1300 × 1600"],
            ["Rozvody vody PPR", "6 000–10 000 Kč", "Napojení + rozvedení"],
            ["Rozvody odpadů HT", "6 000–12 000 Kč", "Dim. 40/50/110"],
            ["Elektroinstalace", "8 000–15 000 Kč", "Zásuvky IP44, ventilátor, osvětlení"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic + bandáž"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Pokládka + spárování"],
            ["Velkoformátové obklady", "850–1 250 Kč/m²", "60×120 až 120×260 cm"],
            ["Dlažba 60×60 cm", "550–800 Kč/m²", "Pokládka + spárování"],
            ["Montáž sanity", "6 000–10 000 Kč", "WC + umyvadlo + baterie"],
            ["Malá koupelna (do 4 m²) — celkem práce", "65 000–95 000 Kč", "Paneláky T06B"],
            ["Střední koupelna (4–6 m²) — celkem práce", "95 000–140 000 Kč", "T08B, OP 1.11"],
          ]}
          caption="Ceny bez DPH, bez materiálu. Materiál (obklady, dlažba, sanita) zvlášť podle vašeho výběru — typicky 40 000–90 000 Kč."
        />

        <PracticeExample
          text="Byt 2+1, Ostrava-Poruba, ul. Vřesinská. Panelový dům T06B z roku 1974, koupelna 2,1 m² s umakartovým jádrem. Zaměření 15. února 2026. Výběr materiálu 20.-25. února. Zahájení prací 1. března. Dokončení 12. března (10 pracovních dní). Materiál: obklady RAKO Concept 30×60 cm šedobílý matný (28 m²), dlažba RAKO Stones 60×60 cm antracit (2,1 m²), sprchový kout Ravak Pivot 90×90 cm, umyvadlo Cersanit Lara 60 cm, WC Geberit Duofix. Cena prací: 72 000 Kč, materiál: 48 000 Kč, celkem 120 000 Kč včetně DPH."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Nejčastější chyby, kterým se vyhnout
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>❌ Obkládání přímo na umakart.</strong> Umakart se
            v průběhu let deformuje. Obklady praskají, odpadávají.
            Životnost takové "opravy" je 2–4 roky.
          </p>
          <p>
            <strong>❌ Úspora na hydroizolaci.</strong> Bez stěrkové
            hydroizolace voda prosákne pod obklady a za 3–5 let se
            u souseda pod vámi objeví vlhké skvrny na stropě.
            Oprava = kompletní nová rekonstrukce.
          </p>
          <p>
            <strong>❌ Vybírat nejlevnější obkladače na bazaru.</strong>{" "}
            Nabídka 250 Kč/m² za pokládku obkladů vypadá lákavě, ale
            bez záruky, bez pojištění, bez dohody o termínu. Opravy
            nekvalitní práce stojí 2–3× víc.
          </p>
          <p>
            <strong>❌ Zapomenout na ventilátor.</strong> V panelákové
            koupelně bez okna je nucené odvětrání nutnost. Jinak vlhkost
            způsobí plíseň v rozích během jednoho roku.
          </p>
          <p>
            <strong>❌ Obklady po strop bez dilatačních spár.</strong>{" "}
            Každých 4–5 m obkladů potřebuje dilatační spáru vyplněnou
            silikonem. Bez ní obklady při sezónních změnách teploty
            praskají.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Co je součástí naší ceny — a co platíte zvlášť
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p className="font-semibold">✅ V ceně prací zahrnuto:</p>
          <p>• Bourání, odvoz suti, kontejner</p>
          <p>• Vyzdění, vyrovnání stěn a podlahy</p>
          <p>• Rozvody vody (PPR), odpady (HT)</p>
          <p>• Elektroinstalace v koupelně</p>
          <p>• Hydroizolace (Mapei/Baumacol)</p>
          <p>• Pokládka obkladů a dlažby</p>
          <p>• Spárování, silikonování</p>
          <p>• Montáž sanity</p>
          <p>• Úklid po rekonstrukci</p>
          <p>• Záruka 60 měsíců, předávací protokol</p>
          <p className="font-semibold mt-3">💰 Platíte zvlášť:</p>
          <p>• Obklady a dlažbu (výběr na vás)</p>
          <p>• Sanitu: WC, umyvadlo, vanu/sprchu, baterie</p>
          <p>• Zrcadlo, osvětlení, doplňky</p>
          <p>• DPH 15 % (u rekonstrukce staršího bytu)</p>
        </div>

        <FAQSection items={faqItems} />

        <CTASection
          title="Rekonstrukci koupelny v paneláku Ostrava"
          description="Přijedeme na zaměření zdarma. Písemnou kalkulaci dostanete do 48 hodin. Záruka 60 měsíců na všechny práce."
        />

        <RelatedLinks
          links={[
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
            { title: "Jak probíhá rekonstrukce krok za krokem", href: "/rady/jak-probiha-rekonstrukce-koupelny" },
            { title: "Jak vybrat obklady a dlažbu", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Obkladač Ostrava-Poruba", href: "/ostrava/poruba" },
            { title: "Obkladač Ostrava-Zábřeh", href: "/ostrava/zabreh" },
            { title: "Rekonstrukce koupelny — služba", href: "/sluzby/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
