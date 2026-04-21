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
  title: "Přírodní kámen do koupelny — 7 typů, ceny a péče | Ostrava 2026",
  description:
    "Přírodní kámen do koupelny — žula, mramor, travertin, břidlice, vápenec. Srovnání vlastností, cen a údržby. Co si vybrat do sprchy, na podlahu, na umyvadlovou desku.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/rady/prirodni-kamen-do-koupelny",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Přírodní kámen do koupelny" },
];

const faqItems = [
  {
    question: "Je přírodní kámen vhodný do koupelny?",
    answer:
      "Ano, ale ne každý druh. Nejvhodnější jsou: žula (odolná, vodotěsná), travertin (po impregnaci), břidlice (protiskluz). Méně vhodné: mramor (citlivý na kyseliny, pórovitý), pískovec (nasákavý). Vždy záleží na správné impregnaci — bez ní vydrží kámen v koupelně 2–3 roky, s impregnací 20+ let.",
  },
  {
    question: "Kolik stojí přírodní kámen v koupelně v Ostravě 2026?",
    answer:
      "Materiál: žula 1 400–3 500 Kč/m², mramor 1 800–5 000 Kč/m², travertin 1 200–2 800 Kč/m², břidlice 900–2 200 Kč/m². Pokládka: 900–1 600 Kč/m². Impregnace: 150–300 Kč/m². Celkem 5 m² kamenné podlahy z travertinu: cca 14 000–22 000 Kč vč. práce.",
  },
  {
    question: "Jak často je nutné kámen impregnovat?",
    answer:
      "První impregnace po pokládce. Další každé 2–4 roky, podle intenzity používání a druhu kamene. Porézní kameny (travertin, vápenec) 1× za 2 roky, hutné (žula) 1× za 4–5 let. Impregnujte vy sami za 300–800 Kč (Fila, Lithofin) nebo nás zavolejte — zvládneme za 1 hodinu.",
  },
  {
    question: "Klouže přírodní kámen ve sprše?",
    answer:
      "Leštěný kámen (mramor, žula) ano — velmi. Do sprchy doporučujeme broušený nebo štípaný povrch. Břidlice má přirozený protiskluz R10–R11. Travertin matný R10. Leštěná žula R8 — NIKDY do sprchového koutu. V mokré zóně je protiskluz R10 nebo R11 povinný dle ČSN.",
  },
  {
    question: "Kámen vs. velkoformátová dlažba v efektu mramoru — co zvolit?",
    answer:
      "Keramická imitace mramoru (např. Atlas Concorde Marvel, Fiandre Marmi Maximum) je 3–5× levnější, vodotěsná, nepotřebuje impregnaci, odolná vůči kyselinám. Pravý kámen je autentický, každý kus jedinečný, ale náročnější na údržbu. Pro koupelnu s vysokým provozem doporučujeme imitaci. Pro luxusní showpiece — pravý mramor.",
  },
  {
    question: "Lze kámen kombinovat s podlahovým topením?",
    answer:
      "Ano. Kámen je ideální materiál pro podlahové topení — dobře vede teplo, drží ho rovnoměrně. Tloušťka kamene 15–30 mm. Náběh teploty je pomalejší než u keramiky, ale jakmile se kámen prohřeje, vyzařuje teplo dlouho po vypnutí topení. Úspora energie 15–20 % oproti keramice.",
  },
  {
    question: "Kde si prohlédnout vzorky kamene v Ostravě?",
    answer:
      "Navštivte naši vzorkovnu v Ostravě — máme vystavené desítky druhů. Dále: KamenKámen Ostrava (Rudná), Marmostar Ostrava-Kunčice, Siko Koupelny (má sekci přírodního kamene). Doporučujeme osobní prohlídku — fotky nezachytí přirozené variace barvy.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Přírodní kámen do koupelny — 7 typů, ceny a péče",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-04-18",
      dateModified: "2026-04-19",
      image: "https://obklady-ostrava.cz/images/articles/kamenny-obklad-krbu.jpg",
    },
  ],
};

export default function KamenArticlePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Přírodní kámen do koupelny — 7 typů, ceny a péče
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Přírodní kámen v koupelně dává prostoru luxusní, nadčasový
          charakter. Žádný kus není stejný, barva se vyvíjí s časem,
          materiál působí teplem a autenticitou. Ale ne každý kámen
          je do koupelny vhodný. V tomto článku projdeme 7 hlavních
          druhů — vlastnosti, ceny, údržbu a reálné využití
          z rekonstrukcí koupelen v Ostravě.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          1. Žula — nejodolnější volba
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>
            <strong>Vlastnosti:</strong> nejtvrdší z běžných kamenů
            (tvrdost 6–7 na Mohsově škále), nízká nasákavost (0,1–0,4 %),
            velmi odolná vůči chemii i teplu. Nejběžnější barvy: šedá,
            černá, červená, modrá, zelená.
          </p>
          <p>
            <strong>Cena:</strong> 1 400–3 500 Kč/m² (indická G603
            nejlevnější, italská Labradorite nejdražší).
          </p>
          <p>
            <strong>Využití v koupelně:</strong> ideální pro desky pod
            umyvadlo, parapety, schody. Do sprchy jen v broušeném
            provedení (protiskluz R10+).
          </p>
          <p>
            <strong>Údržba:</strong> impregnace 1× za 4–5 let. Běžný
            úklid jemným čistidlem (pH 6–8).
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          2. Mramor — luxusní, ale náročný
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>
            <strong>Vlastnosti:</strong> tvrdost 3–4 (měkčí než žula),
            pórovitý, citlivý na kyseliny (citron, ocet, víno). Typická
            žilkovaná struktura. Nejznámější: Carrara, Calacatta, Statuario
            (bílé s šedými žilami), Emperador (hnědý).
          </p>
          <p>
            <strong>Cena:</strong> 1 800–5 000 Kč/m². Calacatta Gold
            nad 8 000 Kč/m².
          </p>
          <p>
            <strong>Využití v koupelně:</strong> akcentní stěny, obklady
            na sucho, umyvadlové desky (s pravidelnou péčí). NE na podlahy
            s vysokým provozem. NE okolo myčky / vany (chlór ho mat).
          </p>
          <p>
            <strong>Údržba:</strong> impregnace 1× ročně, jemné čistidlo
            pH 7, utírat skvrny ihned (citrony, víno = trvalá skvrna).
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          3. Travertin — teplý středomořský vzhled
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>
            <strong>Vlastnosti:</strong> pórovitý, tvrdost 3–4, typické
            malé dutinky (lze ponechat otevřené nebo vyplnit). Barvy: béžová,
            krémová, hnědá, šedá. Typický pro luxusní středomořské hotely.
          </p>
          <p>
            <strong>Cena:</strong> 1 200–2 800 Kč/m². Tureckého travertinu
            od 1 200 Kč, italského od 2 400 Kč.
          </p>
          <p>
            <strong>Využití v koupelně:</strong> podlahy, obklady stěn,
            sprchové kouty (pouze matný povrch). Teplý vzhled, ale nutná
            impregnace.
          </p>
          <p>
            <strong>Údržba:</strong> impregnace po pokládce + každé 2
            roky. Bez impregnace se do dutinek dostává špína — nepůjde
            vyčistit.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          4. Břidlice — nejlepší protiskluz
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>
            <strong>Vlastnosti:</strong> přírodní vrstvená struktura,
            tvrdost 3–4, typická tmavá barva (černá, šedá, rezavá).
            Přirozený protiskluz R10–R11.
          </p>
          <p>
            <strong>Cena:</strong> 900–2 200 Kč/m². Brazilská břidlice
            Multicolor dražší (2 500+ Kč).
          </p>
          <p>
            <strong>Využití v koupelně:</strong> ideální do sprchových
            koutů a na podlahy. Moderní industriální vzhled. Štípaný
            povrch přirozeně drsný — nemůžete uklouznout.
          </p>
          <p>
            <strong>Údržba:</strong> impregnace 1× za 3 roky. Netrpí
            kyselinami, snadný úklid.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          5. Vápenec (limestone) — klidný, zemitý
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>
            <strong>Vlastnosti:</strong> měkčí (tvrdost 3), pórovitý,
            matný povrch. Barvy: krémová, béžová, šedá. Podobný mramoru,
            ale méně výrazné žíly.
          </p>
          <p>
            <strong>Cena:</strong> 1 100–2 500 Kč/m².
          </p>
          <p>
            <strong>Využití v koupelně:</strong> pouze obklady, ne
            podlahy s vysokým provozem. Citlivý na kyseliny stejně
            jako mramor.
          </p>
          <p>
            <strong>Údržba:</strong> impregnace 1× ročně, opatrnost
            s citronovými čistícími prostředky.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          6. Onyx — průsvitný luxus
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>
            <strong>Vlastnosti:</strong> průsvitný, tvrdost 6–7,
            nejefektnější ze všech kamenů. Při podsvícení "září".
            Barvy: medová, zelená, bílá, černá.
          </p>
          <p>
            <strong>Cena:</strong> 4 500–12 000 Kč/m². Luxusní
            segment.
          </p>
          <p>
            <strong>Využití v koupelně:</strong> pouze akcentní prvky —
            stěna s podsvícením, deska pod umyvadlo. Ne na velké plochy,
            ne na podlahu (měkký a drahý).
          </p>
          <p>
            <strong>Údržba:</strong> impregnace 2× ročně, maximální
            opatrnost.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          7. Pískovec — jen na suchou zónu
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-6 space-y-2">
          <p>
            <strong>Vlastnosti:</strong> velmi pórovitý, tvrdost 2–3,
            vysoká nasákavost (5–10 %). Teplé zemité barvy.
          </p>
          <p>
            <strong>Cena:</strong> 600–1 800 Kč/m².
          </p>
          <p>
            <strong>Využití v koupelně:</strong> NEDOPORUČUJEME do
            mokrých zón. Jen jako akcent do suché části koupelny (např.
            umývárna, předsíň).
          </p>
          <p>
            <strong>Údržba:</strong> silná impregnace po pokládce, opakování
            každý rok. I tak riziko skvrn od vody.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Srovnávací tabulka — rychlý přehled
        </h2>
        <PriceTable
          headers={["Kámen", "Tvrdost", "Nasákavost", "Protiskluz", "Cena/m²", "Vhodné do sprchy"]}
          rows={[
            ["Žula broušená", "6–7", "0,1–0,4 %", "R10–R11", "1 400–3 500 Kč", "✅ Ano"],
            ["Žula leštěná", "6–7", "0,1–0,4 %", "R8", "1 400–3 500 Kč", "❌ Ne"],
            ["Mramor", "3–4", "0,2–0,6 %", "R9", "1 800–5 000 Kč", "⚠️ Pouze matný"],
            ["Travertin matný", "3–4", "2–5 %", "R10", "1 200–2 800 Kč", "✅ Po impregnaci"],
            ["Břidlice štípaná", "3–4", "0,3–1 %", "R11", "900–2 200 Kč", "✅ Nejlepší"],
            ["Vápenec", "3", "1–4 %", "R10", "1 100–2 500 Kč", "⚠️ S opatrností"],
            ["Onyx", "6–7", "0,1 %", "R8", "4 500–12 000 Kč", "❌ Jen akcent"],
            ["Pískovec", "2–3", "5–10 %", "R11", "600–1 800 Kč", "❌ Ne"],
          ]}
          caption="Protiskluz R10+ je požadován ČSN 72 5191 pro mokré zóny. Nasákavost nad 3 % znamená nutnou silnou impregnaci."
        />

        <PracticeExample
          text="Rodinný dům v Ostravě-Porubě (ul. Gustava Klimenta), koupelna 8 m². Klient chtěl spa vzhled. Zvolili jsme travertin Classic matný 60×30 cm (italský Rapolano) na podlahy i obklady. Sprchový kout štípaná břidlice Multicolor 30×60 cm pro protiskluz. Umyvadlová deska žula Labradorite Blue (leštěná) 180×60 cm s vyfrézovaným otvorem pro zápustné umyvadlo. Impregnace Fila MP90 po pokládce. Celkem 30 m² kamene, cena prací 36 000 Kč, materiál 52 000 Kč. Realizace 12 dní v únoru 2026. Údržba 1× za 2 roky reimpregnace (500 Kč v DIY)."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Chyby, kterým se při instalaci kamene vyhnout
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>❌ Používání lepidla s barevnými pigmenty pod světlý
            kámen.</strong> Mramor, travertin, vápenec prosvítají. Tmavé
            lepidlo prosákne přes spáry a způsobí skvrny, které nepůjdou
            vyčistit. Vždy bílé lepidlo (Mapei Adesilex P9 Bianco).
          </p>
          <p>
            <strong>❌ Pokládka bez impregnace první vrstvou.</strong>{" "}
            U travertinu, vápence a mramoru musí být impregnace
            ještě PŘED pokládkou (tzv. "pre-seal"), jinak lepidlo
            a spárovací hmota zabarví povrch.
          </p>
          <p>
            <strong>❌ Spára s tmavým cementem pod bílý mramor.</strong>{" "}
            Spárovací hmota musí být stejné barvy nebo světlejší než
            kámen. Šedý spárovací cement ušpiní bílý mramor a nepůjde
            odstranit.
          </p>
          <p>
            <strong>❌ Kyselé čisticí prostředky.</strong> Citron, ocet,
            WC čistič — zničí mramor, travertin, vápenec během vteřin.
            Používejte pouze pH 6–8 čistidla (Fila Cleaner, Lithofin
            KF Cleaner).
          </p>
          <p>
            <strong>❌ Podlaha z leštěného mramoru ve sprše.</strong>{" "}
            Mokrý leštěný mramor = ledová plocha. Riziko pádu extrémní.
            Do sprchy vždy matný nebo broušený povrch s protiskluzem R10+.
          </p>
        </div>

        <FAQSection items={faqItems} />

        <CTASection
          title="Navrhneme vám koupelnu z přírodního kamene"
          description="Zaměření a konzultace zdarma. Ukážeme vám vzorky, poradíme s výběrem kamene podle vaší koupelny i rozpočtu. Máme 15+ let zkušeností s kamenickými pracemi."
        />

        <RelatedLinks
          links={[
            { title: "Přírodní kámen — prodej a výroba", href: "/svet-kamene" },
            { title: "Jak vybrat obklady a dlažbu", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Velkoformátové obklady vs. klasické", href: "/rady/velkoformatove-obklady-vs-klasicke" },
            { title: "Rekonstrukce koupelny — cena 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
            { title: "Obklady koupelen — služba", href: "/sluzby/obklady-koupelen" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
