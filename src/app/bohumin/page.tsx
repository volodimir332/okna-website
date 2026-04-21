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
  title: "Obkladač Bohumín — rekonstrukce koupelen a obklady | OBK",
  description:
    "Obkladač v Bohumíně. Rekonstrukce koupelen v cihlové i panelové zástavbě. Pokládka obkladů, dlažeb a přírodního kamene. Dojezd z Ostravy zdarma. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/bohumin" },
};

const breadcrumbs = [{ label: "Bohumín" }];

const faqItems = [
  {
    question: "Jak daleko je Bohumín z Ostravy?",
    answer:
      "Bohumín je 18 km od Ostravy, cca 20 minut po dálnici D1/D48. Dojezd neúčtujeme, zaměření zdarma.",
  },
  {
    question: "Jaká je zástavba v Bohumíně?",
    answer:
      "Bohumín má 20 000 obyvatel. Mix cihlových činžáků z přelomu století (kolem nádraží, hlavní ulice), paneláků ze 70.-80. let (Pudlov, Záblatí) a rodinných domů (Skřečoň, Nový Bohumín). Koupelny: v činžácích 5–7 m², v panelácích 3–4 m².",
  },
  {
    question: "Řešíte i cihlovou zástavbu v centru Bohumína?",
    answer:
      "Ano. Máme zkušenosti s cihlovými činžáky z přelomu 19./20. století — křivé stěny, staré litinové rozvody, vlhkost v přízemí. Kompletní rekonstrukci zvládneme za 13–18 dní.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v Bohumíně?",
    answer:
      "Malá koupelna v paneláku 45 000–65 000 Kč, střední v činžáku 85 000–130 000 Kč za práci bez materiálu. Dojezd z Ostravy neúčtujeme. Stejné ceny jako v Ostravě.",
  },
  {
    question: "Děláte i v Novém Bohumíně a Skřečoni?",
    answer:
      "Ano. Doježdíme do všech částí — Bohumín-Záblatí, Pudlov, Nový Bohumín, Skřečoň, Vrbice, Šunychl. I do blízkých obcí (Rychvald, Dolní Lutyně).",
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
      url: "https://obklady-ostrava.cz/bohumin",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: { "@type": "City", name: "Bohumín" },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function BohuminPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Bohumíně
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Bohumín — 18 km od Ostravy, železniční uzel na hranici s Polskem.
          Město s 20 000 obyvateli, pestrá zástavba: historické cihlové
          činžáky v centru (kolem nádraží, Husova, Studentská), panelová
          sídliště v Pudlově a Záblatí, rodinné domy v Novém Bohumíně
          a Skřečoni. Pokládáme obklady, dlažby i přírodní kámen, řešíme
          kompletní rekonstrukce koupelen i kuchyní. Dojezd z Ostravy
          neúčtujeme.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Bohumíně pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Bohumín-centrum</strong> (Husova, Studentská, Nerudova) —
            cihlové činžáky z let 1890–1935. Koupelny 5–7 m², vysoké stropy,
            staré litinové rozvody. Rekonstrukce náročnější, ale prostor pro
            velkoformátové obklady nebo přírodní kámen.
          </p>
          <p>
            <strong>Pudlov a Záblatí</strong> — panelová sídliště ze 70.–80.
            let. Paneláky T06B a T08B. Standardní rekonstrukce umakartových
            jader — 10–14 dnů.
          </p>
          <p>
            <strong>Nový Bohumín a Skřečoň</strong> — rodinné domy, vily,
            řadovky. Větší koupelny 6–10 m². Prostor pro luxusní provedení
            s přírodním kamenem, podlahovým topením a designovou sanitou.
          </p>
          <p>
            <strong>Vrbice, Šunychl</strong> — starší rodinné domky,
            občas s vlhkostí. Řešíme sanaci v rámci rekonstrukce.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Sanace vlhkosti (injektáž + omítka)", "8 000–18 000 Kč", "Přízemní byty"],
            ["Výměna litinových stoupaček", "15 000–30 000 Kč", "Činžáky centrum"],
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Pudlov, Záblatí"],
            ["Vyzdění YTONG", "15 000–22 000 Kč", "Nové příčky"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Standard"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Moderní"],
            ["Přírodní kámen", "900–1 600 Kč/m²", "Travertin, žula"],
            ["Kompletní koupelna — malá (4 m²)", "45 000–65 000 Kč", "Panelák"],
            ["Kompletní koupelna — střední (5–7 m²)", "85 000–130 000 Kč", "Činžák centrum"],
          ]}
          caption="Ceny platí pro Bohumín a okolí (Rychvald, Dolní Lutyně). Dojezd z Ostravy neúčtujeme."
        />

        <PracticeExample
          text="Cihlový činžák v centru Bohumína (ul. Studentská), koupelna 5,8 m². Dům z roku 1925, původní litinové stoupačky, křivé stěny (odchylka 5 cm), dlažba z 50. let. Kompletní bourání, výměna stoupaček za PPR, vyrovnání stěn, hydroizolace Mapelastic, obklady Atlas Concorde Marvel mramorový efekt 60×120 cm (28 m²), dlažba Marazzi Grande 120×120 cm, sprchový kout walk-in 140×90, umyvadlo Laufen Pro. Práce 15 pracovních dnů, cena prací 108 000 Kč, materiál 82 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Bohumíně — dojezd zdarma"
          description="Doježdíme do Bohumína pravidelně. Zaměření zdarma v celém městě. Kalkulace do 48 h, záruka 60 měsíců."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Orlová", href: "/orlova" },
            { title: "Obkladač Karviná", href: "/karvina" },
            { title: "Rekonstrukce koupelny", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Přírodní kámen", href: "/svet-kamene" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
