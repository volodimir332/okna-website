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
  title: "Vana nebo sprchový kout? Srovnání 2026 | OBK",
  description:
    "Vana nebo sprchový kout do koupelny? Srovnání cen, prostoru, údržby a bezbariérovosti. Walk-in sprcha od 8 000 Kč. Vana od 3 000 Kč. Řešení pro malé koupelny.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/rady/vana-nebo-sprchovy-kout",
  },
};

const breadcrumbs = [
  { label: "Rady", href: "/rady" },
  { label: "Vana nebo sprchový kout" },
];

const faqItems = [
  {
    question: "Vejde se sprchový kout do koupelny 3 m²?",
    answer:
      "Ano. Walk-in sprcha 80x80 cm zabere jen 0,64 m². S lineárním odtokem v podlaze nepotřebujete vaničku. V panelácích v Porubě a Zábřehu takové řešení děláme běžně.",
  },
  {
    question: "Je walk-in sprcha dražší než klasický sprchový kout?",
    answer:
      "Samotné sklo walk-in stojí od 8 000 Kč (8 mm) do 18 000 Kč (10 mm, bezrámové). Klasický kout s dveřmi od 5 000 Kč. Walk-in je dražší o 3 000–8 000 Kč, ale údržba je jednodušší a vzhled modernější.",
  },
  {
    question: "Můžu mít vanu i sprchu v jedné koupelně?",
    answer:
      "Ano, pokud máte alespoň 5 m². Řešení: vana 150x70 se zástěnou. Zástěna od 3 000 Kč (jednodílná) do 8 000 Kč (skládací dvoudílná). Sprchujete se ve vaně, ale můžete se i koupat.",
  },
  {
    question: "Jakou vanu doporučujete do malé koupelny?",
    answer:
      "Vanu 150x70 cm. Akrylátová od 3 000 Kč — lehká (15 kg), teplá na dotek. Značky: Ravak, Cersanit, Kolo. Do panelákové koupelny v Ostravě se vejde bez problému.",
  },
  {
    question: "Je bezbariérová sprcha vhodná i pro mladé lidi?",
    answer:
      "Ano. Bezbariérová = bez vaničky, sprchování v úrovni podlahy. Snadný úklid, moderní vzhled, žádný práh. Pro rodiny s malými dětmi je bezpečnější než klasický kout s vysokým prahem.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Article",
      headline: "Vana nebo sprchový kout — co vybrat",
      author: { "@type": "Organization", name: "OBK Obkladač Ostrava" },
      publisher: { "@type": "Organization", name: "OBK" },
      datePublished: "2026-02-01",
    },
  ],
};

export default function VanaNeboSprchPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Vana nebo sprchový kout — co vybrat
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Nejčastější otázka při rekonstrukci koupelny. Odpověď závisí na
          velikosti koupelny, rozpočtu a životním stylu. Tady je srovnání
          z praxe — ne z katalogu.
        </p>

        {/* Srovnávací tabulka */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Vana vs sprchový kout — přehled
        </h2>
        <PriceTable
          headers={["Kritérium", "Vana", "Sprchový kout"]}
          rows={[
            ["Minimální prostor", "1 500 × 700 mm (1,05 m²)", "800 × 800 mm (0,64 m²)"],
            ["Cena sanity", "od 3 000 Kč (akrylát)", "od 5 000 Kč (klasický) / 8 000 Kč (walk-in)"],
            ["Spotřeba vody", "120–180 l na koupel", "40–60 l na sprchování"],
            ["Údržba", "Čištění vany + spáry kolem", "Stěrka po sprchování, méně spár"],
            ["Bezbariérovost", "Vysoký okraj 55–60 cm", "Bez prahu (walk-in)"],
            ["Komfort", "Relaxace, koupání dětí", "Rychlé sprchování, masážní proudy"],
            ["Obkládání", "Obklad vany + zástěna", "Obklad sprchové zóny celá stěna"],
            ["Doba instalace", "0,5 dne", "0,5–1 den (walk-in s odtokem v podlaze)"],
          ]}
          caption="Srovnání pro běžnou koupelnu v Ostravě."
        />

        {/* Kdy vana */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Kdy zvolit vanu
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Vana dává smysl ve třech situacích. Máte děti pod 6 let — koupání
          je pohodlnější a bezpečnější. Rádi se koupete — relaxace po práci.
          Máte prostor minimálně 1 500 × 700 mm volného.
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Akrylátová vana</strong> — od 3 000 Kč. Lehká (15 kg),
            teplá na dotek. Ravak Classic, Cersanit Lorena. Životnost 15–20
            let.
          </li>
          <li>
            <strong>Ocelová smaltovaná vana</strong> — od 5 000 Kč. Odolnější,
            těžší (30 kg). Kaldewei Saniform. Životnost 25–30 let.
          </li>
          <li>
            <strong>Litinová vana</strong> — od 15 000 Kč. Hmotnost 80–120 kg.
            Výborně drží teplo. Roca Continental. Životnost 50+ let. Do
            paneláku zkontrolujte nosnost stropu.
          </li>
          <li>
            <strong>Volně stojící vana</strong> — od 20 000 Kč. Designový
            prvek. Potřeba minimálně 6 m² koupelny. Obkládání podlahy kolem.
          </li>
        </ul>

        {/* Kdy sprcha */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Kdy zvolit sprchový kout
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Sprchový kout je lepší volba ve většině panelákových koupelen
          v Ostravě. Ušetříte místo, vodu i peníze. Pro koupelny pod 4 m²
          je to prakticky jediná rozumná volba.
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Klasický sprchový kout</strong> — od 5 000 Kč. Vanička
            + dveře/zástěna. Rozměry od 80x80 cm. Ravak Pivot, Cersanit
            Moduo.
          </li>
          <li>
            <strong>Walk-in sprcha</strong> — od 8 000 Kč. Pevné sklo 8–10 mm
            bez dveří. Moderní vzhled. Šířka skla od 80 cm. Odtok lineární
            v podlaze.
          </li>
          <li>
            <strong>Sprchový kout bezrámový</strong> — od 12 000 Kč. Sklo
            10 mm, nerezové panty. Čistý design. SanSwiss, Ravak SmartLine.
          </li>
          <li>
            <strong>Bezbariérová sprcha</strong> — od 10 000 Kč. Bez vaničky,
            spád v podlaze 1–2 %. Lineární žlab Alcaplast od 2 500 Kč. Pro
            seniory, rodiny s dětmi, moderní koupelny.
          </li>
        </ul>

        {/* Cenové srovnání */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Cenové srovnání — vana vs sprcha
        </h2>
        <PriceTable
          headers={["Položka", "Vana + zástěna", "Walk-in sprcha"]}
          rows={[
            ["Sanita (vana/kout)", "3 000–25 000 Kč", "8 000–18 000 Kč"],
            ["Zástěna / sklo", "3 000–8 000 Kč", "V ceně koutu"],
            ["Lineární odtok", "—", "2 500–5 000 Kč"],
            ["Baterie sprchová", "2 000–8 000 Kč", "2 000–8 000 Kč"],
            ["Obkládání kolem", "3 500–6 000 Kč (obklad vany)", "4 000–7 000 Kč (celá sprchová zóna)"],
            ["Hydroizolace", "2 000–3 000 Kč", "3 000–5 000 Kč (větší plocha)"],
            ["CELKEM sanita + práce", "13 500–50 000 Kč", "19 500–43 000 Kč"],
          ]}
          caption="Orientační ceny pro koupelnu v Ostravě. Bez obkládání stěn."
        />

        {/* Kombinace */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Kombinace — vana se zástěnou
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Nejčastější řešení v Ostravě. Vana 150x70 nebo 170x75 s pevnou
          nebo skládací zástěnou. Můžete se sprchovat i koupat. Šetříte
          místo — nepotřebujete zvláštní sprchový kout.
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6">
          <li>
            <strong>Jednodílná pevná zástěna</strong> — od 3 000 Kč. Sklo
            6 mm, šířka 80 cm. Ravak VS1. Jednoduchá montáž.
          </li>
          <li>
            <strong>Dvoudílná skládací zástěna</strong> — od 5 000 Kč.
            Složí se k stěně. Ravak VS2, SanSwiss Solino. Praktická pro
            koupání dětí.
          </li>
          <li>
            <strong>Posuvná zástěna</strong> — od 6 000 Kč. Posuv na liště.
            Šířka 100–120 cm. Pro vany 170 cm.
          </li>
        </ul>

        {/* Prostorové nároky */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Prostorové nároky — co se vejde kam
        </h2>
        <PriceTable
          headers={["Koupelna", "Doporučení", "Konkrétní řešení"]}
          rows={[
            ["Do 3 m²", "Pouze sprchový kout", "Walk-in 80x80 nebo kout 80x80 s posuvnými dveřmi"],
            ["3–4 m²", "Sprchový kout nebo krátká vana", "Walk-in 80x100 nebo vana 150x70 se zástěnou"],
            ["4–5 m²", "Vana se zástěnou", "Vana 170x75 + skládací zástěna"],
            ["5–7 m²", "Vana + sprchový kout zvlášť", "Vana 170x75 + walk-in 90x100"],
            ["Nad 7 m²", "Volně stojící vana + walk-in", "Designová vana + walk-in 120 cm sklo"],
          ]}
          caption="Doporučení na základě 500+ rekonstrukcí v Ostravě."
        />

        <PracticeExample text="Koupelna 3,5 m² v paneláku Ostrava-Dubina, ulice Horní. Zákazníci chtěli původně vanu, ale v 3,5 m² by nezbylo místo na umyvadlo. Navrhli jsme walk-in sprchový kout 80x100 cm se sklem 8 mm a lineárním odtokem Alcaplast. Obklady Cersanit Livi 25x75 světle šedá na stěny, dlažba RAKO Extra 30x30 R10 na podlahu sprchy. Výsledek: prostorná sprchová zóna, místo na umyvadlo 60 cm i WC závěsné. Cena sanity: 14 500 Kč. Zákazníci říkají, že koupelna vypadá dvakrát větší." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Nevíte, jestli vana nebo sprcha?"
          description="Přijedeme, změříme koupelnu a navrhneme nejlepší řešení pro váš prostor. Zaměření a poradenství zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
            { title: "Jak probíhá rekonstrukce koupelny", href: "/rady/jak-probiha-rekonstrukce-koupelny" },
            { title: "Jak vybrat obklady a dlažbu", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
            { title: "Ceník rekonstrukce koupelny", href: "/cenik/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
