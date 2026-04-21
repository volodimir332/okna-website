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
  title: "Obkladač Orlová — rekonstrukce koupelen v panelácích | OBK",
  description:
    "Obkladač v Orlové. Rekonstrukce koupelen v panelácích Lutyně, Poruba, Město. Bourání umakartových jader, pokládka obkladů, dlažeb a kamene. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/orlova" },
};

const breadcrumbs = [{ label: "Orlová" }];

const faqItems = [
  {
    question: "Jak daleko je Orlová z Ostravy?",
    answer:
      "Orlová je 20 km od Ostravy, cca 25 minut po silnici I/59. Dojezd neúčtujeme, zaměření provádíme zdarma.",
  },
  {
    question: "Jaké paneláky jsou v Orlové?",
    answer:
      "Orlová je hornické město — převážně paneláky ze 60.–80. let (T06B, T08B). Největší sídliště Lutyně, dále Poruba a Město. Bytová jádra umakartová 1300×1600 nebo 1800×2400 mm. Po 40+ letech jsou na konci životnosti.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v Orlové?",
    answer:
      "Malá koupelna v paneláku 4 m² — 45 000–65 000 Kč, střední 4–6 m² — 65 000–95 000 Kč za práci. Dojezd z Ostravy neúčtujeme. Stejné ceny jako v Ostravě.",
  },
  {
    question: "Děláte i v Lutyni, Porubě a Městě?",
    answer:
      "Ano, v celé Orlové — Lutyně, Poruba, Město, Staré Město. Zaměření zdarma v každé části. Dojeztíme i do přilehlých obcí (Petřvald, Doubrava, Rychvald).",
  },
  {
    question: "Jak dlouho dopředu se mám objednat?",
    answer:
      "Čekací doba na zahájení prací 3–5 týdnů. Zaměření a kalkulaci zvládneme do týdne. Doporučujeme vybírat materiál co nejdřív — dodací lhůty obkladů 1–3 týdny.",
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
      url: "https://obklady-ostrava.cz/orlova",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: { "@type": "City", name: "Orlová" },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function OrlovaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Orlové
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Orlová — 20 km od Ostravy, bývalé hornické město s 28 000 obyvateli.
          Přes 75 % bytového fondu tvoří panelové domy ze 60.–80. let.
          Nejstarší paneláky v Lutyni, novější v Porubě a Městě. Rekonstruujeme
          koupelny v panelácích každý týden — bouráme umakartová jádra,
          vyzdíváme YTONGem, pokládáme moderní obklady, dlažby i velkoformáty.
          Ceny stejné jako v Ostravě, dojezd neúčtujeme.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Orlové pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Lutyně</strong> — největší sídliště, přes 15 000 obyvatel.
            Paneláky T06B a T08B z 60.-80. let. Jádra 1300×1600 mm i větší.
            Sem jezdíme nejčastěji.
          </p>
          <p>
            <strong>Poruba</strong> — novější panelové sídliště ze 70.–80. let.
            Paneláky OP 1.11 a T08B. Jádra v lepším stavu, ale po 40 letech
            je doporučena kompletní výměna.
          </p>
          <p>
            <strong>Město</strong> — historické centrum Orlové. Mix cihlových
            činžáků a novějších paneláků. Větší koupelny, často s podkrovím.
          </p>
          <p>
            <strong>Staré Město</strong> — tradiční hornická zástavba. Starší
            cihlové domy s malými koupelnami (2–3 m²). Řešíme sanaci vlhkosti.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Lutyně, Poruba"],
            ["Vyzdění YTONG příček", "15 000–22 000 Kč", "100mm"],
            ["Rozvody voda PPR + odpady HT", "12 000–22 000 Kč", "Výměna stoupaček"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Standard"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Moderní"],
            ["Kompletní koupelna 4 m²", "45 000–65 000 Kč", "Panelák T06B"],
            ["Kompletní koupelna 4–6 m²", "65 000–95 000 Kč", "T08B"],
          ]}
          caption="Ceny platí pro Orlovou, Petřvald, Doubravu a okolí do 30 km. Dojezd neúčtujeme."
        />

        <PracticeExample
          text="Byt 2+1 v Lutyni (ul. Masarykova), panelák T06B z roku 1972. Koupelna + WC dohromady 3,1 m². Umakart odpadával od stěn, rozvody zarostlé. Kompletní bourání, vyzdění YTONGem, nové PPR stoupačky, hydroizolace, obklady RAKO Concept 30×60 cm, dlažba RAKO Stones 60×60 cm, sprchový kout Ravak 90×90, umyvadlo Cersanit Lara. Práce 10 pracovních dnů, cena prací 58 000 Kč, materiál 38 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Orlové — bez dojezdu navíc"
          description="Doježdíme do Orlové pravidelně — Lutyně, Poruba, Město. Zaměření zdarma, kalkulace do 48 h, záruka 60 měsíců."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Karviná", href: "/karvina" },
            { title: "Obkladač Havířov", href: "/havirov" },
            { title: "Obkladač Bohumín", href: "/bohumin" },
            { title: "Rekonstrukce koupelny v paneláku", href: "/rady/rekonstrukce-koupelny-v-panelaku-ostrava" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
