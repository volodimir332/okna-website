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
  title: "Cena rekonstrukce koupelny v Ostravě 2026 — reálný rozpočet | OBK",
  description:
    "Kolik stojí rekonstrukce koupelny v Ostravě v roce 2026? Reálné ceny podle velikosti (4, 6, 10 m²), materiálů a úrovně. Tabulky, příklady, kalkulace.",
  keywords: [
    "cena rekonstrukce koupelny ostrava",
    "kolik stojí rekonstrukce koupelny",
    "rekonstrukce koupelny cena 2026",
    "přestavba koupelny cena",
    "rozpočet koupelna ostrava",
  ],
  alternates: {
    canonical: "https://obklady-ostrava.cz/rady/cena-rekonstrukce-koupelny-ostrava-2026",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Cena rekonstrukce koupelny Ostrava 2026" },
];

const faqItems = [
  {
    question: "Kolik stojí rekonstrukce koupelny v Ostravě v roce 2026?",
    answer:
      "Malá koupelna v paneláku 150 000–280 000 Kč. Střední koupelna v rodinném domě 280 000–500 000 Kč. Luxusní provedení s přírodním kamenem 500 000–1 500 000 Kč. Záleží na velikosti, materiálech a dispozičních úpravách.",
  },
  {
    question: "Jak dlouho trvá rekonstrukce koupelny?",
    answer:
      "Malá koupelna v paneláku: 14–18 pracovních dní. Střední koupelna: 3–5 týdnů. Luxusní rekonstrukce s přírodním kamenem a dispozičními změnami: 5–8 týdnů. Dodržujeme dohodnutý termín nebo kompenzujeme.",
  },
  {
    question: "Dostanu pevnou cenu, nebo se bude cena měnit?",
    answer:
      "Pevnou cenu dostanete po zaměření a výběru materiálů. Cena se po podpisu smlouvy nemění — kromě případů, kdy si sami vyžádáte dodatečné práce (např. přidáte podlahové topení).",
  },
  {
    question: "Musím se vystěhovat na dobu rekonstrukce?",
    answer:
      "Pokud máte jen jednu koupelnu v bytě, doporučujeme odstěhování na 2–4 týdny (panelák). V rodinných domech s druhou koupelnou to není nutné. V nouzi zajistíme provizorní WC a sprchu.",
  },
  {
    question: "Co všechno zahrnuje cena na klíč?",
    answer:
      "Všechny práce (bourání, voda, elektro, obklady, sanita, úklid), materiál dle nabídky, záruku 60 měsíců. Neobsahuje jen nábytek, pokud si jej vyberete mimo nabídku. Vše písemně ve smlouvě.",
  },
  {
    question: "Mohu si vybrat obklady sám?",
    answer:
      "Ano. Tři možnosti: 1) využít partnerské dodavatele (RAKO, SIKO, Cersanit) se slevou, 2) přinést materiál odjinud, 3) nechat nás vybrat podle návrhu. Všechny varianty mají pevnou cenu práce.",
  },
  {
    question: "Co když mi v průběhu rekonstrukce praskne stará trubka?",
    answer:
      "Pokud se během prací objeví skryté závady v rozvodech, napíšeme dodatek ke smlouvě s přesnou cenou opravy. Nikdy nepokračujeme v práci bez vašeho souhlasu — žádné překvapení ve finální faktuře.",
  },
  {
    question: "Pracujete i mimo Ostravu?",
    answer:
      "Ano, v celém Moravskoslezském kraji — Havířov, Karviná, Frýdek-Místek, Opava, Třinec, Orlová, Bohumín, Nový Jičín, Kopřivnice. Dojezd do 50 km neúčtujeme.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Cena rekonstrukce koupelny v Ostravě 2026 — reálný rozpočet",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-04-21",
      dateModified: "2026-04-21",
      image: "https://obklady-ostrava.cz/images/articles/cena-rekonstrukce-2026.jpg",
    },
  ],
};

export default function CenaRekonstrukceOstrava2026Page() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Cena rekonstrukce koupelny v Ostravě 2026 — reálný rozpočet bez překvapení
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-6 leading-relaxed">
          Plánujete rekonstrukci koupelny v Ostravě a chcete vědět, kolik
          to skutečně bude stát? Cena závisí na velikosti prostoru, vybraných
          materiálech a úrovni řemeslného zpracování. V tomto průvodci
          najdete <strong>reálné cenové rozpětí pro rok 2026</strong>,
          rozpis podle typu koupelny a praktické rady, jak neplatit navíc.
        </p>

        <div className="max-w-3xl mb-10 p-4 sm:p-5 bg-[var(--surface)] border-l-4 border-[#6B7AE8] rounded-r-xl">
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <strong className="text-[var(--text-primary)]">TL;DR:</strong>{" "}
            Malá koupelna v panelákovém bytě v Ostravě stojí kompletně{" "}
            <strong>150 000–280 000 Kč</strong>. Střední koupelna v rodinném
            domě <strong>280 000–500 000 Kč</strong>. Luxusní koupelna
            s přírodním kamenem <strong>500 000–1 500 000 Kč</strong>.
            Podrobné rozpočty níže.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          1. Co všechno zahrnuje rekonstrukce koupelny
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>Kompletní rekonstrukce koupelny <strong>na klíč</strong> obvykle zahrnuje:</p>
          <p>• <strong>Bourací práce</strong> — demolice starých obkladů, van, WC, bytového jádra</p>
          <p>• <strong>Vodoinstalace</strong> — nové rozvody vody (PPR), odpady (HT)</p>
          <p>• <strong>Elektroinstalace</strong> — nové okruhy, zásuvky IP44, osvětlení, topné kabely</p>
          <p>• <strong>Zdění a příčky</strong> — YTONG, úprava dispozice, instalační šachta</p>
          <p>• <strong>Hydroizolace</strong> — Mapei Mapelastic, Schlüter-Kerdi nebo Baumacol Proof</p>
          <p>• <strong>Pokládka obkladů a dlažby</strong> — stěny i podlaha</p>
          <p>• <strong>Sanitární technika</strong> — vana/sprcha, WC, umyvadlo, baterie</p>
          <p>• <strong>Nábytek a doplňky</strong> — skříňky, zrcadlo, osvětlení, topný žebřík</p>
          <p>• <strong>Úklid a odvoz suti</strong></p>
          <p className="mt-3 font-medium text-[var(--text-primary)]">
            Důležité: samotné obklady tvoří jen 15–25 % celkového rozpočtu —
            zbytek jsou řemeslné práce a ostatní materiály.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          2. Cena podle velikosti — 3 scénáře
        </h2>

        <h3 className="text-base font-semibold text-[var(--text-primary)] mt-6 mb-3">
          🔹 Scénář A: Malá koupelna v paneláku (4–5 m²)
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-3 max-w-3xl">
          Typická koupelna v panelákovém bytě v Porubě, Dubině, Hrabůvce nebo Zábřehu.
        </p>
        <PriceTable
          headers={["Položka", "Cena"]}
          rows={[
            ["Bourací práce + odvoz", "15 000–25 000 Kč"],
            ["Vodoinstalace + elektro", "30 000–45 000 Kč"],
            ["Zdění, stavební úpravy", "15 000–30 000 Kč"],
            ["Hydroizolace", "8 000–14 000 Kč"],
            ["Obklady + dlažba (materiál)", "25 000–45 000 Kč"],
            ["Pokládka obkladů (práce)", "30 000–50 000 Kč"],
            ["Sanita (vana/sprcha, WC, umyvadlo)", "25 000–60 000 Kč"],
            ["Nábytek + zrcadlo + osvětlení", "15 000–30 000 Kč"],
            ["CELKEM", "163 000–299 000 Kč"],
          ]}
          caption="Reálné rozpětí: 150 000–280 000 Kč. Paneláky T06B, T08B v Ostravě."
        />

        <h3 className="text-base font-semibold text-[var(--text-primary)] mt-8 mb-3">
          🔸 Scénář B: Střední koupelna v rodinném domě (6–8 m²)
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-3 max-w-3xl">
          Rodinné domy v Ostravě-Porubě, Krásné Poli, Hošťálkovicích, Mariánských
          Horách nebo v okolí (Havířov, Karviná, Frýdek-Místek).
        </p>
        <PriceTable
          headers={["Položka", "Cena"]}
          rows={[
            ["Bourací práce + odvoz", "25 000–40 000 Kč"],
            ["Vodoinstalace + elektro", "50 000–80 000 Kč"],
            ["Zdění, úpravy dispozice", "30 000–60 000 Kč"],
            ["Hydroizolace", "15 000–25 000 Kč"],
            ["Obklady + dlažba (materiál)", "50 000–90 000 Kč"],
            ["Pokládka obkladů (práce)", "60 000–100 000 Kč"],
            ["Sanita (vana + sprcha, 2× umyvadlo)", "60 000–120 000 Kč"],
            ["Podlahové topení", "20 000–35 000 Kč"],
            ["Nábytek + doplňky", "30 000–60 000 Kč"],
            ["CELKEM", "340 000–610 000 Kč"],
          ]}
          caption="Reálné rozpětí při rozumných volbách: 280 000–500 000 Kč."
        />

        <h3 className="text-base font-semibold text-[var(--text-primary)] mt-8 mb-3">
          🔶 Scénář C: Luxusní koupelna s přírodním kamenem (8+ m²)
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-3 max-w-3xl">
          Pro majitele bytů v novostavbách, rodinných vil nebo kompletních
          přestaveb s velkoformátovými obklady 60×120, přírodním kamenem
          nebo mramorem.
        </p>
        <PriceTable
          headers={["Položka", "Cena"]}
          rows={[
            ["Bourací práce + odvoz", "40 000–60 000 Kč"],
            ["Vodoinstalace + elektro (premium)", "80 000–150 000 Kč"],
            ["Zdění, dispoziční úpravy", "50 000–120 000 Kč"],
            ["Hydroizolace (Schlüter systém)", "30 000–50 000 Kč"],
            ["Přírodní kámen / velkoformáty", "120 000–400 000 Kč"],
            ["Pokládka (práce)", "120 000–250 000 Kč"],
            ["Sanita (designová vana, walk-in)", "150 000–350 000 Kč"],
            ["Podlahové topení + ručníkový žebřík", "40 000–70 000 Kč"],
            ["Nábytek na míru + osvětlení", "80 000–200 000 Kč"],
            ["3D projekt + designové poradenství", "15 000–40 000 Kč"],
            ["CELKEM", "725 000–1 690 000 Kč"],
          ]}
          caption="Reálné rozpětí: 500 000–1 500 000 Kč. Novostavby, rodinné vily."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-10 mb-3">
          3. Rozpis nákladů — kam jdou peníze
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>Průměrná struktura nákladů u střední koupelny:</p>
          <p>• Řemeslné práce: <strong>40–45 %</strong></p>
          <p>• Sanita (vana, WC, umyvadlo, baterie): <strong>15–25 %</strong></p>
          <p>• Obklady a dlažba: <strong>15–20 %</strong></p>
          <p>• Vodoinstalace a elektro (materiál): <strong>8–12 %</strong></p>
          <p>• Nábytek a doplňky: <strong>7–12 %</strong></p>
          <p>• Ostatní (hydroizolace, topení, úklid): <strong>5–10 %</strong></p>
          <p className="mt-3">
            Nedává smysl šetřit na materiálu za cenu horší kvality — rozdíl
            mezi levnou a střední kategorií dlaždic je v celkovém rozpočtu
            pouhých 5–8 %, ale vzhledově a trvanlivostí obrovský.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          4. Ceny obkladů a dlažeb v roce 2026 (Ostrava)
        </h2>
        <PriceTable
          headers={["Kategorie", "Cena / m² (materiál)"]}
          rows={[
            ["Základní keramické obklady (RAKO, Cersanit)", "350–700 Kč/m²"],
            ["Střední třída (Marazzi, Lasselsberger)", "700–1 400 Kč/m²"],
            ["Velkoformáty 60×120 (premium)", "1 200–2 800 Kč/m²"],
            ["Imitace dřeva (dlažba)", "800–2 000 Kč/m²"],
            ["Imitace betonu / kamene", "900–2 200 Kč/m²"],
            ["Mozaiky (sklo, kámen)", "1 500–5 000 Kč/m²"],
          ]}
          caption="Cena pokládky v Ostravě: standard (do 60×60) 800–1 200 Kč/m², velkoformát 1 200–1 800 Kč/m², přírodní kámen 1 500–2 500 Kč/m², mozaika 1 800–3 500 Kč/m². Rohové řezy 45° +150–300 Kč/bm."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-10 mb-3">
          5. Přírodní kámen — kdy se vyplatí
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-3xl">
          Přírodní kámen není luxus jen pro milionáře.{" "}
          <strong>Travertin nebo kvarcit v malých plochách</strong> (stěna
          za vanou, sprchový kout, umyvadlová deska) přidá koupelně nadčasový
          charakter za relativně rozumnou cenu.
        </p>
        <PriceTable
          headers={["Druh kamene", "Cena/m²", "Typické použití"]}
          rows={[
            ["Travertin", "1 800–3 500 Kč", "Stěny, podlaha, sprcha"],
            ["Kvarcit (Silver Shine)", "2 500–4 500 Kč", "Akcentní stěna, fasáda"],
            ["Mramor (Carrara, Calacatta)", "3 500–12 000 Kč", "Luxusní koupelny"],
            ["Žula", "2 200–4 000 Kč", "Podlahy, odolné plochy"],
            ["Ardezie (břidlice)", "1 600–3 200 Kč", "Rustikální stěny"],
            ["Onyx (podsvícený)", "8 000–25 000 Kč", "Designové akcenty"],
          ]}
          caption="Ceny platí pro rok 2026. Více v článku Přírodní kámen do koupelny."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-10 mb-3">
          6. Hodinová sazba obkladače v Ostravě 2026
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>• Začínající obkladač (bez referencí): <strong>300–450 Kč/hod</strong></p>
          <p>• Zkušený řemeslník (5+ let): <strong>450–650 Kč/hod</strong></p>
          <p>• Specialista na velkoformáty / kámen: <strong>650–900 Kč/hod</strong></p>
          <p>• Tým s garancí a pojištěním: <strong>800–1 200 Kč/hod vč. DPH</strong></p>
          <p className="mt-3">
            <strong>Pozor:</strong> Levná hodinovka neznamená levná rekonstrukce.
            Zkušený obkladač udělá 4 m² za den, začátečník 1,5 m² — a často
            za sebou zanechá chyby, které se řeší za vaše peníze.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-10 mb-3">
          7. Skryté náklady — co ovlivňuje cenu nahoru
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>1. Špatný stav podkladu</strong> — trhliny, odpadnutá
            omítka, plesnivé zdi. Stěrky a sanace: 10 000–30 000 Kč navíc.
          </p>
          <p>
            <strong>2. Azbest ve starých obkladech</strong> (bytové jádro
            z 70.–80. let) — odstranění podle zákona: 15 000–40 000 Kč.
          </p>
          <p>
            <strong>3. Nestandardní rozměry a detaily</strong> — kruhové
            sprchy, šikminy, okenní ostění, rohy pod úhlem 45° (pokos).
            Každý pokos = +150–300 Kč/bm.
          </p>
          <p>
            <strong>4. Velkoformáty a mramor</strong> — speciální lepidla,
            nářadí (řezačka až 180 cm), dva lidi na manipulaci. Sazba
            o 30–50 % vyšší.
          </p>
          <p>
            <strong>5. Podlahové topení</strong> — elektrické 800–1 500 Kč/m²,
            teplovodní výrazně víc (součást vytápění domu).
          </p>
          <p>
            <strong>6. Dispoziční změny</strong> — posun WC, zrušení vany
            a vybudování walk-in sprchy, nový komín. 20 000–80 000 Kč.
          </p>
          <p>
            <strong>7. Premium sanita</strong> — rozdíl mezi běžnou vanou
            (8 000 Kč) a designovou s hydromasáží (80 000 Kč) je desetinásobek.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          8. Jak ušetřit a nepokazit
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p className="font-semibold text-[var(--text-primary)]">✅ Co se vyplatí:</p>
          <p>• Jeden dodavatel na klíč místo lovení řemeslníků — ušetří 15–25 %</p>
          <p>• 3D vizualizace před zahájením — změny v papíru stojí nula</p>
          <p>• Střední kategorie obkladů (700–1 400 Kč/m²)</p>
          <p>• Investice do kvalitní hydroizolace (Mapei, Schlüter)</p>
          <p>• Pevná cena písemně, ne hodinová sazba</p>
          <p className="font-semibold text-[var(--text-primary)] mt-4">❌ Čemu se vyhnout:</p>
          <p>• "Nejlevnější nabídka" bez referencí — skončí nedodělkem</p>
          <p>• Zálohy nad 30 % před zahájením prací</p>
          <p>• Dodavatel, který nechce sepsat smlouvu s rozsahem prací</p>
          <p>• Materiál z neznámých e-shopů — reklamace probíhá měsíce</p>
          <p>• Pokládka přímo na sádrokarton bez hydroizolace</p>
        </div>

        <PracticeExample
          text="Byt 3+1 v novostavbě na Ostravě-Hrabůvce, koupelna 6,5 m². Klient chtěl moderní minimalismus s podlahovým topením. Kompletní rekonstrukce zahrnovala: bourací práce, nové PPR + HT rozvody, elektroinstalace, hydroizolace Mapelastic, elektrické podlahové topení Devi Flex 300 W/m², obklady Atlas Concorde Marvel velkoformát 60×120 cm (stěny 28 m²), dlažba Marazzi Grande 120×120 cm (6,5 m²), walk-in sprcha 140×90 Ravak, volně stojící vana, závěsné WC Geberit, dvojité umyvadlo Laufen. Doba: 23 pracovních dní. Cena prací: 185 000 Kč. Materiál a sanita: 212 000 Kč. Celkem: 397 000 Kč vč. DPH."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete přesný rozpočet pro vaši koupelnu?"
          description="Zaměření a cenová nabídka zdarma — i o víkendu. Přijedeme, probereme představy, připravíme pevnou cenu do 48 hodin. Bez skrytých příplatků, bez překvapení."
        />

        <RelatedLinks
          links={[
            { title: "Rekonstrukce koupelny v paneláku Ostrava", href: "/rady/rekonstrukce-koupelny-v-panelaku-ostrava" },
            { title: "Velkoformátové obklady vs. klasické", href: "/rady/velkoformatove-obklady-vs-klasicke" },
            { title: "Přírodní kámen do koupelny", href: "/rady/prirodni-kamen-do-koupelny" },
            { title: "Jak vybrat obklady a dlažbu", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Jak probíhá rekonstrukce krok za krokem", href: "/rady/jak-probiha-rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
