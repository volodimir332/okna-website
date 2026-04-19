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
  title: "Obkladač Slezská Ostrava — pokládka obkladů a dlažeb | OBK",
  description:
    "Obkladač ve Slezské Ostravě — pokládka obkladů, dlažeb i přírodního kamene. Rekonstrukce koupelen v cihlových domech i panelácích. Záruka 60 měsíců.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/ostrava/slezska-ostrava",
  },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Slezská Ostrava" },
];

const faqItems = [
  {
    question: "Jaká je zástavba ve Slezské Ostravě?",
    answer:
      "Slezská Ostrava je historická část města východně od řeky Ostravice. Najdete zde směs cihlových činžovních domů z přelomu 19. a 20. století, pováleční cihlové domy a novější panelová sídliště v Muglinově a na Kamenci. Koupelny bývají větší než v Porubě (typicky 4–7 m²).",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny ve Slezské Ostravě?",
    answer:
      "Malá koupelna v paneláku (3–4 m²) obvykle 45 000–65 000 Kč bez materiálu. Střední koupelna v cihlovém domě (5–7 m²) 70 000–110 000 Kč bez materiálu. U starších cihlových domů počítejte s výměnou rozvodů, ve starých činžácích někdy i s výměnou litinových stoupaček.",
  },
  {
    question: "Řešíte i staré cihlové domy ze Slezské Ostravy?",
    answer:
      "Ano. Ve staré zástavbě kolem Zámostí, Muglinova a Hrušova máme velké zkušenosti. Hlavní úskalí: křivé zdi (rozdíl 2–5 cm běžně), staré litinové rozvody, odpady z pálené hlíny. Stěny srovnáváme jádrovou omítkou nebo sádrokartonem s profily, staré rozvody kompletně měníme za PPR / HT.",
  },
  {
    question: "Jaké části Slezské Ostravy obsluhujete?",
    answer:
      "Celou Slezskou Ostravu — Slezskou Ostravu (centrum), Muglinov, Heřmanice, Kunčice, Kunčičky, Hrušov, Koblov i Antošovice. Přijedeme na zaměření zdarma kamkoli do 30 km od centra.",
  },
  {
    question: "Pokládáte i přírodní kámen ve Slezské Ostravě?",
    answer:
      "Ano. Děláme kuchyňské desky ze žuly a mramoru, parapety z travertinu, kamenné obklady krbů a fasád. Kámen vybíráte osobně na naší vzorkovně, zaměření i montáž zajišťujeme.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "LocalBusiness",
      name: "OBK Obkladač Slezská Ostrava",
      telephone: "+420737540605",
      url: "https://obklady-ostrava.cz/ostrava/slezska-ostrava",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Slezská Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Slezská Ostrava",
        containedInPlace: {
          "@type": "City",
          name: "Ostrava",
        },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function SlezskaOstravaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač ve Slezské Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Slezská Ostrava je historická část města východně od Ostravice.
          Máme tu zkušenosti se vším — od staré cihlové zástavby v centru
          a Zámostí, přes dělnické kolonie v Muglinově a Hrušově, až po
          novější paneláky na Kamenci. Pokládáme všechny druhy obkladů,
          dlažeb, velkoformátové obklady i přírodní kámen. Rekonstrukce
          koupelny, kuchyně nebo kompletní bytové jádro — vše pod jednou
          střechou, jeden tým, jedna záruka.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde ve Slezské Ostravě pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Slezská Ostrava — centrum a Zámostí</strong> (ul. Keltičkova,
            Bohumínská, Michálkovická) — cihlové činžáky z přelomu století.
            Koupelny bývají větší, ale rozvody jsou často původní litinové.
            Při rekonstrukci kompletně měníme stoupačky PPR a odpady HT.
          </p>
          <p>
            <strong>Muglinov a Hrušov</strong> — mix dělnických kolonií a
            panelových domů. V kolonních domcích úzké prostory, často
            nutné vyzdění nové příčky YTONG nebo Porotherm.
          </p>
          <p>
            <strong>Kamenec a Kunčice</strong> — novější panelová sídliště
            70. let. Bytová jádra typu T06B (1300 × 1600 mm) — bourání
            umakartových stěn je pro nás rutina.
          </p>
          <p>
            <strong>Heřmanice, Kunčičky, Koblov, Antošovice</strong> — zde
            převažují rodinné domy. Větší koupelny, možnost podlahového
            topení, prostor pro velkoformátové obklady nebo přírodní kámen.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Co ve Slezské Ostravě děláme nejčastěji
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>• Kompletní rekonstrukce koupelny v cihlovém domě (stará Slezská, Zámostí)</p>
          <p>• Bourání a přestavba panelákových jader T06B (Muglinov, Kamenec)</p>
          <p>• Pokládka velkoformátových obkladů v nových koupelnách</p>
          <p>• Kuchyňské obklady — klasické i velkoformátové</p>
          <p>• Přírodní kámen — kuchyňské desky, parapety, krby</p>
          <p>• Podlahové topení pod dlažbu</p>
          <p>• Hydroizolace pod obklady dle ČSN 74 4505</p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Paneláky Muglinov / Kamenec"],
            ["Bourání v cihlovém domě", "12 000–25 000 Kč", "Stará zástavba Zámostí"],
            ["Odvoz suti", "4 500–6 000 Kč", "Kontejner + odvoz"],
            ["Vyzdění příček YTONG", "15 000–28 000 Kč", "Jádro nebo cihlový byt"],
            ["Rozvody vody + odpady", "12 000–22 000 Kč", "PPR, HT — výměna stoupaček"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapei Mapelastic, bandáž"],
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Vč. lepidla a spárování"],
            ["Velkoformátové obklady", "850–1 250 Kč/m²", "60×120 až 120×260 cm"],
            ["Pokládka dlažby", "550–900 Kč/m²", "Vyrovnání podkladu v ceně"],
            ["Pokládka přírodního kamene", "900–1 600 Kč/m²", "Žula, mramor, travertin"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Paneláky Muglinov"],
            ["Kompletní koupelna — střední (4–6 m²)", "70 000–110 000 Kč", "Cihlové domy, staré Slezská"],
          ]}
          caption="Ceny orientační, bez DPH a bez materiálu. Platí pro Slezskou Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Byt 2+1 v cihlovém domě na Bohumínské ulici (Zámostí). Dům z roku 1928, koupelna 4,2 m² s původními litinovými stoupačkami. Kompletní bourání staré koupelny, výměna stoupaček za PPR, výměna odpadů za HT, vyrovnání křivých stěn (rozdíl 4 cm) jádrovou omítkou, hydroizolace Mapelastic dvouvrstvá, obklady RAKO Concept 30×60 cm šedobílý matný, dlažba RAKO Stones 60×60 cm antracit, sprchový kout Ravak Pivot 90×90. Práce 13 pracovních dnů, cena prací cca 88 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Rekonstrukce koupelny ve Slezské Ostravě"
          description="Přijedeme na zaměření zdarma kamkoli ve Slezské Ostravě — Muglinov, Hrušov, Kunčice, Heřmanice. Cenovou nabídku zpracujeme do 48 hodin."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Ostrava-Poruba", href: "/ostrava/poruba" },
            { title: "Obkladač Ostrava-Zábřeh", href: "/ostrava/zabreh" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
            { title: "Přírodní kámen", href: "/svet-kamene" },
            { title: "Rekonstrukce koupelny — ceník", href: "/cenik/rekonstrukce-koupelny" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
