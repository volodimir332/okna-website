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
  title: "Obkladač Třinec — pokládka obkladů, dlažeb a kamene | OBK",
  description:
    "Obkladač v Třinci. Rekonstrukce koupelen v panelácích Staré Město, Lyžbice i rodinných domech. Pokládka obkladů, dlažeb a přírodního kamene. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/trinec" },
};

const breadcrumbs = [{ label: "Třinec" }];

const faqItems = [
  {
    question: "Jedete do Třince z Ostravy?",
    answer:
      "Ano. Do Třince je to z Ostravy 45 km, cca 40 minut po silnici I/11. Dojezd neúčtujeme zvlášť, zaměření v Třinci provádíme zdarma.",
  },
  {
    question: "Jaká je zástavba v Třinci?",
    answer:
      "Třinec má přes 35 000 obyvatel. Mix panelových sídlišť (Lyžbice, Sosna, Terasa z 70.-80. let), staré cihlové zástavby v centru (Staré Město) a rodinných domů na okrajích. Koupelny v panelácích typu T06B 1300×1600 mm.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v Třinci?",
    answer:
      "Stejné ceny jako v Ostravě. Malá koupelna v paneláku 4 m² — 45 000–65 000 Kč za práci. Rodinný dům 6–10 m² — 95 000–140 000 Kč. Dojezd neúčtujeme. Kalkulace do 48 hodin od zaměření.",
  },
  {
    question: "Děláte i ve Starém Městě a horských částech Třince?",
    answer:
      "Ano. Pokrýváme celý Třinec — Staré Město, Lyžbice, Sosna, Terasa, Kanada, Karpentná, Oldřichovice. Dojeztíme i do přilehlých obcí (Nebory, Bystřice, Vendryně) za stejných podmínek.",
  },
  {
    question: "Pokládáte přírodní kámen i v Třinci?",
    answer:
      "Ano. V Třinci jsme realizovali několik kamenných krbů, kuchyňských desek a fasád. Vzorky kamene vám přivezeme domů nebo navštívíte naši vzorkovnu v Ostravě.",
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
      url: "https://obklady-ostrava.cz/trinec",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: { "@type": "City", name: "Třinec" },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function TrinecPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Třinci
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Třinec — 45 km od Ostravy, pod Beskydami. Město s 35 000 obyvateli,
          hlavně známé Třineckými železárnami. Bytový fond je pestrý: panelová
          sídliště ze 70.-80. let v Lyžbicích a Sosně, cihlové činžáky ve Starém
          Městě a rodinné domy na okrajích. Pokládáme obklady, dlažby,
          velkoformáty i přírodní kámen. Rekonstruujeme kompletní koupelny
          i kuchyně. Doježdíme pravidelně — dojezd neúčtujeme.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Třinci pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Lyžbice a Sosna</strong> — největší sídliště. Paneláky
            T06B a T08B ze 70.-80. let. Umakartová jádra 1300×1600 mm nebo
            1800×2400 mm. Standardní rekonstrukce 10–14 dní.
          </p>
          <p>
            <strong>Staré Město</strong> — historické centrum. Cihlové domy
            z přelomu století, větší koupelny 5–8 m², staré litinové rozvody.
            Rekonstrukce náročnější, ale výsledky výjimečné.
          </p>
          <p>
            <strong>Terasa, Kanada, Oldřichovice</strong> — rodinné domy,
            vily, novější zástavba. Prostor pro velkoformátové obklady,
            podlahové topení i přírodní kámen.
          </p>
          <p>
            <strong>Karpentná a okolní obce</strong> — staré hornické
            domky, často s vlhkostí v přízemí. Řešíme sanaci při rekonstrukci.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "T06B / T08B"],
            ["Vyzdění YTONG příček", "15 000–22 000 Kč", "100mm"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Standard"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Moderní vzhled"],
            ["Dlažba + podlahové topení", "950–1 400 Kč/m²", "Devi Flex"],
            ["Pokládka přírodního kamene", "900–1 600 Kč/m²", "Travertin, žula"],
            ["Kompletní koupelna 4–6 m²", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna 6–10 m²", "95 000–140 000 Kč", "Rodinné domy"],
          ]}
          caption="Ceny platí pro Třinec a okolí (Nebory, Bystřice, Vendryně). Dojezd neúčtujeme. Kalkulace do 48 h od zaměření."
        />

        <PracticeExample
          text="Byt 3+1 v Lyžbicích (ul. Svornosti), panelák T06B z roku 1976. Koupelna 3,2 m² + WC 0,9 m². Kompletní bourání umakartu, vyzdění YTONGem, nové PPR rozvody, hydroizolace Mapelastic, obklady RAKO Concept 30×60 cm (22 m²), dlažba RAKO Extra 60×60 cm antracit, sprchový kout Ravak walk-in 90×90 cm, umyvadlo Cersanit Lara. Práce 11 pracovních dnů, cena prací 62 000 Kč, materiál 43 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Třinci — bez příplatku za dojezd"
          description="Doježdíme do Třince pravidelně. Zaměření zdarma v celém městě. Kalkulace do 48 h, záruka 60 měsíců."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Havířov", href: "/havirov" },
            { title: "Obkladač Karviná", href: "/karvina" },
            { title: "Obkladač Frýdek-Místek", href: "/frydek-mistek" },
            { title: "Rekonstrukce koupelny", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Přírodní kámen", href: "/svet-kamene" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
