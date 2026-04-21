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
  title: "Obkladač Nový Jičín — pokládka obkladů, dlažeb a kamene | OBK",
  description:
    "Obkladač v Novém Jičíně. Rekonstrukce koupelen v historickém centru, panelákách Loučka a Bludovice. Pokládka obkladů, dlažeb a přírodního kamene. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/novy-jicin" },
};

const breadcrumbs = [{ label: "Nový Jičín" }];

const faqItems = [
  {
    question: "Jak daleko je Nový Jičín z Ostravy?",
    answer:
      "Nový Jičín je 35 km od Ostravy, cca 35 minut po dálnici D1 / silnici I/48. Dojezd neúčtujeme, zaměření zdarma.",
  },
  {
    question: "Jaká je zástavba v Novém Jičíně?",
    answer:
      "Nový Jičín má 24 000 obyvatel. Historické centrum s renesančními domy (pod památkovou ochranou), panelová sídliště Loučka a Bludovice, vilová čtvrť Žerotínova. Koupelny: v centru 5–9 m², v panelácích 3–4 m².",
  },
  {
    question: "Děláte i v památkově chráněné zástavbě v centru?",
    answer:
      "Ano. V renesančních domech na Masarykově náměstí a okolních ulicích řešíme rekonstrukce s ohledem na NPÚ. Pomůžeme s papírováním, dodržíme materiálové požadavky (např. vápenné omítky v kombinaci s hydroizolací).",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v Novém Jičíně?",
    answer:
      "Panelák 4 m² — 45 000–65 000 Kč, historický dům 5–7 m² — 85 000–130 000 Kč, vila 6–10 m² — 95 000–160 000 Kč za práci. Dojezd z Ostravy neúčtujeme.",
  },
  {
    question: "Pokládáte přírodní kámen i v Novém Jičíně?",
    answer:
      "Ano. V NJ jsme realizovali kamenné krby, kuchyňské desky i fasády. Historické centrum s vápencovými domy je ideální kontext pro přírodní kámen — ladí s okolím.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "LocalBusiness",
      name: "OBK Obkladač Ostrava",
      telephone: "+420737540605",
      url: "https://obklady-ostrava.cz/novy-jicin",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: { "@type": "City", name: "Nový Jičín" },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function NovyJicinPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Novém Jičíně
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Nový Jičín — 35 km od Ostravy, historické město s 24 000 obyvateli.
          Renesanční centrum pod památkovou ochranou, panelová sídliště
          Loučka a Bludovice, vilová zástavba Žerotínova. Rekonstruujeme
          koupelny všech typů — od malých panelákových po luxusní vilové
          s přírodním kamenem a velkoformátovými obklady. Máme zkušenosti
          i s rekonstrukcemi v památkově chráněných domech. Dojezd
          z Ostravy neúčtujeme.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Novém Jičíně pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Historické centrum</strong> (Masarykovo náměstí, 5. května,
            Lidická) — renesanční a barokní domy pod památkovou ochranou.
            Větší koupelny, vysoké stropy, staré rozvody. Rekonstrukce
            ve shodě s NPÚ — papírování řešíme za vás.
          </p>
          <p>
            <strong>Loučka</strong> — panelové sídliště ze 70. let. Paneláky
            T06B a T08B. Umakartová jádra. Standardní rekonstrukce 10–14 dní.
          </p>
          <p>
            <strong>Bludovice</strong> — novější sídliště z 80. let. Paneláky
            OP 1.11, větší koupelny 5–7 m². Občas už bez umakartu.
          </p>
          <p>
            <strong>Žerotínova a Straník</strong> — vilová čtvrť, rodinné domy.
            Luxusní provedení s přírodním kamenem a podlahovým topením.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Loučka, Bludovice"],
            ["Bourání cihlových stěn (historické domy)", "12 000–25 000 Kč", "Centrum"],
            ["Výměna stoupaček", "12 000–25 000 Kč", "Činžáky centrum"],
            ["Vyzdění YTONG", "15 000–22 000 Kč", "Příčky"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Standard"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Moderní"],
            ["Přírodní kámen", "900–1 600 Kč/m²", "Žula, mramor, travertin"],
            ["Kompletní koupelna — malá (4 m²)", "45 000–65 000 Kč", "Paneláky"],
            ["Kompletní koupelna — střední (5–7 m²)", "85 000–130 000 Kč", "Centrum, vily"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–160 000 Kč", "Žerotínova"],
          ]}
          caption="Ceny platí pro Nový Jičín a okolí (Straník, Kunín, Šenov). Dojezd neúčtujeme."
        />

        <PracticeExample
          text="Byt v renesančním domě na Masarykově náměstí, koupelna 6,2 m². Dům z 16. století, památkově chráněný. Původní vápenné omítky, klenuté stropy. Citlivá rekonstrukce v shodě s NPÚ: odstranění moderních prvků, zachování kleneb, výměna rozvodů skrytě v drážkách, vápenosádrová omítka, hydroizolace Baumacol Proof, obklady mramorový efekt Fiandre 60×120 cm, dlažba travertin Classic 60×60 cm, luxusní sanita Laufen. Práce 18 pracovních dnů, cena prací 138 000 Kč, materiál 95 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Novém Jičíně — dojezd zdarma"
          description="Doježdíme do NJ pravidelně. Rekonstrukce v historickém centru i panelácích. Papíry na NPÚ řešíme za vás. Kalkulace do 48 h."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Kopřivnice", href: "/koprivnice" },
            { title: "Obkladač Frýdek-Místek", href: "/frydek-mistek" },
            { title: "Obkladač Opava", href: "/opava" },
            { title: "Přírodní kámen", href: "/svet-kamene" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
