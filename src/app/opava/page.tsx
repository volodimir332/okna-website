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
  title: "Obkladač Opava | Obkladačské práce | OBK",
  description:
    "Obkladač v Opavě. Rekonstrukce koupelen v cihlových domech a panelácích. Pokládka obkladů a dlažeb. Dojezd z Ostravy 30 km. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/opava" },
};

const breadcrumbs = [{ label: "Opava" }];

const faqItems = [
  {
    question: "Kolik stojí dojezd z Ostravy do Opavy?",
    answer:
      "Dojezd do Opavy (30 km) neúčtujeme. Ceny prací jsou stejné jako v Ostravě. Zaměření provádíme zdarma.",
  },
  {
    question: "Jaká je zástavba v Opavě?",
    answer:
      "Opava má pestrou zástavbu. Historické centrum s cihlovými domy z 19. a začátku 20. století. Sídliště Kateřinky a Kylešovice s panelovými domy z 70.-80. let. Okrajové části s rodinnými domy.",
  },
  {
    question: "Jak řešíte obklady ve starých cihlových domech?",
    answer:
      "Cihlové domy v centru Opavy mají silné stěny (45-60 cm), ale povrch je často nerovný. Omítky mohou být 100+ let staré. Před obkládáním otlučeme nesoudržné omítky, naneseme sanační nebo jádrovou omítku a zarovnáme. Teprve pak hydroizolace a obklady.",
  },
  {
    question: "Děláte i v Kateřinkách a Kylešovicích?",
    answer:
      "Ano, v Kateřinkách a Kylešovicích jsou panelové domy T06B — stejný postup jako v Ostravě. Bourání umakartového jádra, vyzdění, obklady. Kompletní rekonstrukce malé koupelny přibližně od 45 000 Kč bez materiálu.",
  },
  {
    question: "Jak dlouho předem se mám objednat?",
    answer:
      "Aktuální čekací doba na zahájení prací je 3-6 týdnů. Na zaměření přijedeme do týdne. Nabídku zpracujeme do 48 hodin po zaměření.",
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
      url: "https://obklady-ostrava.cz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "City",
        name: "Opava",
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function OpavaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Opavě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Opava — 30 km severozápadně od Ostravy, 30 minut po I/11.
          Na rozdíl od Ostravy tu převažuje cihlová zástavba. Historické
          centrum, měšťanské domy z přelomu 19. a 20. století, činžovní
          domy z 30. let. Panelová sídliště jsou v Kateřinkách a
          Kylešovicích. Každý typ stavby obkládáme jinak. Dojezd z Ostravy
          neúčtujeme.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Opavě pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Centrum Opavy</strong> (ul. Masarykova, Ostrožná,
            Hrnčířská, Ratibořská) — cihlové domy z 19. a počátku 20. století.
            Stěny z plných pálených cihel, tloušťka 45-60 cm. Koupelny
            často v původním stavu z 60.-70. let — staré keramické obklady
            15x15, plechová vana, korodující rozvody.
          </p>
          <p>
            <strong>Kateřinky</strong> (ul. Ratibořská, Těšínská, Hlavní)
            — panelové domy T06B z 70.-80. let. Umakartová jádra,
            standardní přestavba. Stejný postup jako v Ostravě.
          </p>
          <p>
            <strong>Kylešovice</strong> (ul. Hlavní, Bílovecká) — mix
            panelových domů a rodinných domů. Paneláky T06B, RD z různých
            období.
          </p>
          <p>
            <strong>Předměstí, Jaktař</strong> — rodinné domy, starší
            i novější. U starších RD řešíme vlhkost v přízemí, nerovné
            podlahy, staré rozvody.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Cihlové domy v Opavě — specifika
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-2">
          <p>
            Cihlové domy v centru Opavy mají silné stěny a vysoké stropy
            (3,0-3,5 m). Koupelny jsou velké — 6-10 m². Více plochy =
            více materiálu a práce, ale výsledek stojí za to.
          </p>
          <p>
            Staré omítky (vápenné, vápenocementové) bývají nesoudržné.
            Před obkládáním je nutné oťukat, případně nanést novou
            jádrovou omítku. Na vlhké stěny sanační omítku (Baumit Sanova
            nebo Cemix).
          </p>
          <p>
            Podlahy v cihlových domech jsou často s dřevěnými trámy.
            Pod dlažbu je nutné vytvořit únosný podklad — anhydritový
            nebo cementový potěr. U koupelny nad trámovým stropem vždy
            stavební posudek na únosnost.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Lepidlo + spárování"],
            ["Velkoformátové obklady (nad 60×60 cm)", "850–1 250 Kč/m²", "Nivelace, buttering-floating"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání"],
            ["Velkoformátová dlažba (nad 60×60 cm)", "800–1 200 Kč/m²", "Nivelace, buttering-floating"],
            ["Odstranění obkladů / otlučení omítek", "180–300 Kč/m²", "Včetně odvozu"],
            ["Jádrová omítka", "350–500 Kč/m²", "Vyrovnání podkladu"],
            ["Hydroizolace jednovrstvá", "250–400 Kč/m²", "Stěrka + bandáž rohů"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá stěrka + bandáž"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Cihlový dům v centru Opavy, ul. Masarykova. Byt 3+kk, 2. patro. Koupelna 7,8 m² — staré obklady 15x15 z 70. let, litinová vana, ocelové rozvody. Bourání starých obkladů a omítek 1,5 dne. Otlučení nesoudržné vápenné omítky, nová jádrová omítka Cemix (3 dny schnutí). Hydroizolace Mapei Mapelastic. Obklady Marazzi Chalk 25x76 cm (bílý mat), dlažba Marazzi Mystone 60x60 cm (šedá). Vana Ravak Formy 01 180 cm, umyvadlo Laufen Pro S 60 cm, závěsné WC Laufen Pro. Práce přibližně 16–18 pracovních dní (včetně technologických přestávek na schnutí omítek). Cena prací: přibližně 125 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Opavě — dojezd zdarma"
          description="Přijedeme na zaměření zdarma kamkoli v Opavě. Centrum, Kateřinky, Kylešovice, Předměstí. Zavolejte nebo napište."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Havířov", href: "/havirov" },
            { title: "Obkladač Frýdek-Místek", href: "/frydek-mistek" },
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
