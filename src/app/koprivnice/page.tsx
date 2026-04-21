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
  title: "Obkladač Kopřivnice — rekonstrukce koupelen v panelácích | OBK",
  description:
    "Obkladač v Kopřivnici. Rekonstrukce koupelen v panelácích Sever, Sýkorec, Lubina. Pokládka obkladů, dlažeb a kamene. Dojezd z Ostravy zdarma. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/koprivnice" },
};

const breadcrumbs = [{ label: "Kopřivnice" }];

const faqItems = [
  {
    question: "Jak daleko je Kopřivnice z Ostravy?",
    answer:
      "Kopřivnice je 30 km od Ostravy, cca 30 minut po dálnici D1 / silnici I/58. Dojezd neúčtujeme, zaměření v Kopřivnici zdarma.",
  },
  {
    question: "Jaká je zástavba v Kopřivnici?",
    answer:
      "Kopřivnice má 22 000 obyvatel — rodiště automobilky Tatra. Velká panelová sídliště Sever, Sýkorec, Lubina (paneláky T06B a T08B ze 60.–80. let). Cihlová zástavba v okolí historické Tatry. Rodinné domy v Mniší a Vlčovice.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v Kopřivnici?",
    answer:
      "Stejné ceny jako v Ostravě. Malá panelová koupelna 4 m² — 45 000–65 000 Kč za práci. Střední 4–6 m² — 65 000–95 000 Kč. Rodinný dům 6–10 m² — 95 000–140 000 Kč. Dojezd z Ostravy neúčtujeme.",
  },
  {
    question: "Děláte i na Severu a Sýkorci?",
    answer:
      "Ano, pracujeme v celé Kopřivnici — Sever, Sýkorec, Lubina, Mniší, Vlčovice, Drnholec. Zaměření zdarma kdekoli. Dojeztíme i do Štramberku (6 km) a Příbora (4 km).",
  },
  {
    question: "Lze v paneláku T06B udělat velkoformátové obklady?",
    answer:
      "Ano, pokud je stěna vyzděná YTONGem (ne umakart). Velkoformát 60×120 cm zvládne panelák do 4 m² zátěže. Musíme srovnat podklad nivelační hmotou. Velkoformát 120×260 v malé panelové koupelně nedoporučujeme — opticky příliš mohutné.",
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
      url: "https://obklady-ostrava.cz/koprivnice",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: { "@type": "City", name: "Kopřivnice" },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function KoprivnicePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Kopřivnici
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Kopřivnice — 30 km od Ostravy, rodiště automobilky Tatra.
          Město s 22 000 obyvateli, převážně panelová sídliště ze 60.–80. let
          (Sever, Sýkorec, Lubina). Kolem historické Tatry starší cihlová
          zástavba, na okraji města rodinné domy v Mniší a Vlčovicích.
          Pokládáme obklady, dlažby, velkoformáty i přírodní kámen. Dojezd
          z Ostravy neúčtujeme, zaměření zdarma.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Kde v Kopřivnici pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Sídliště Sever</strong> — největší sídliště, přes 7 000
            obyvatel. Paneláky T06B a T08B ze 70.–80. let. Umakartová jádra
            1300×1600 mm nebo 1800×2400 mm. Sem jezdíme nejčastěji.
          </p>
          <p>
            <strong>Sídliště Sýkorec</strong> — panelové domy ze 60.–70. let.
            Paneláky T06B. Malé jádra, standardní rekonstrukce 10–12 dní.
          </p>
          <p>
            <strong>Lubina</strong> — smíšená zástavba, paneláky
            i rodinné domy. Větší koupelny v RD, prostor pro velkoformát.
          </p>
          <p>
            <strong>Mniší, Vlčovice, Drnholec</strong> — rodinné domy
            na okraji města. Luxusní provedení s podlahovým topením, přírodním
            kamenem a velkoformátem. Dojeztíme i sem zdarma.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Sever, Sýkorec"],
            ["Vyzdění YTONG příček", "15 000–22 000 Kč", "Místo umakartu"],
            ["Rozvody PPR + HT", "12 000–22 000 Kč", "Výměna"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Standard"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Moderní"],
            ["Podlahové topení", "450–700 Kč/m²", "Elektrické Devi Flex"],
            ["Pokládka přírodního kamene", "900–1 600 Kč/m²", "Travertin, žula"],
            ["Kompletní koupelna 4 m²", "45 000–65 000 Kč", "Panelák Sever"],
            ["Kompletní koupelna 4–6 m²", "65 000–95 000 Kč", "T08B"],
            ["Kompletní koupelna 6–10 m²", "95 000–140 000 Kč", "Rodinné domy"],
          ]}
          caption="Ceny platí pro Kopřivnici a okolí (Štramberk, Příbor, Mniší). Dojezd neúčtujeme."
        />

        <PracticeExample
          text="Byt 3+1 na sídlišti Sever (ul. Francouzská), panelák T08B z roku 1977. Koupelna + WC 4,2 m², umakartové jádro 1800×2400 mm. Kompletní bourání umakartu, vyzdění YTONGem, nové PPR + HT, hydroizolace Mapelastic, obklady RAKO Concept 30×60 cm bílý mat (24 m²), dlažba RAKO Extra 60×60 cm antracit, sprchový kout walk-in 90×110 cm, umyvadlo Cersanit Lara, WC Geberit Duofix. Práce 12 pracovních dnů, cena prací 78 000 Kč, materiál 52 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Obkladač v Kopřivnici — dojezd zdarma"
          description="Doježdíme do Kopřivnice pravidelně. Zaměření zdarma na Severu, Sýkorci i v Lubině. Kalkulace do 48 h, záruka 60 měsíců."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava", href: "/ostrava" },
            { title: "Obkladač Nový Jičín", href: "/novy-jicin" },
            { title: "Obkladač Frýdek-Místek", href: "/frydek-mistek" },
            { title: "Rekonstrukce koupelny v paneláku", href: "/rady/rekonstrukce-koupelny-v-panelaku-ostrava" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
