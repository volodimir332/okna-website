import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { PriceTable } from "@/components/content/PriceTable";
import { CTASection } from "@/components/content/CTASection";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { FAQSection } from "@/components/content/FAQSection";
import { faqJsonLd } from "@/lib/schema-helpers";
import { PracticeExample } from "@/components/content/PracticeExample";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ceník obkladačských prací 2026 | OBK Ostrava",
  description: "Přehled cen obkladačských prací, rekonstrukcí koupelen a dlažeb v Ostravě. Od 600 Kč/m² bez materiálu. Pevná cena bez skrytých nákladů.",
  alternates: { canonical: "https://obklady-ostrava.cz/cenik" },
};

const breadcrumbs = [{ label: "Ceník" }];

const subPages = [
  { title: "Obkladačské práce", href: "/cenik/obkladacske-prace", price: "od 600 Kč/m²", desc: "Pokládka obkladů a dlažby, spárování, řezání" },
  { title: "Rekonstrukce koupelny", href: "/cenik/rekonstrukce-koupelny", price: "od 45 000 Kč", desc: "Kompletní rekonstrukce na klíč včetně všech prací" },
  { title: "Dlažby", href: "/cenik/dlazby", price: "od 550 Kč/m²", desc: "Pokládka podlahových dlažeb, nivelace, vyrovnání" },
  { title: "Bourací práce", href: "/cenik/bouraci-prace", price: "od 180 Kč/m²", desc: "Bourání obkladů, dlažeb, příček, bytových jader" },
];

const faqItems = [
  { question: "Je cena konečná, nebo se může změnit?", answer: "Cena v naší nabídce je pevná. Po zaměření a odsouhlasení rozpočtu se nemění. Výjimkou jsou pouze práce navíc, které si sami vyžádáte v průběhu realizace." },
  { question: "Co všechno je zahrnuto v ceně rekonstrukce?", answer: "V ceně je bourání, odvoz suti, nové rozvody vody a odpadu, hydroizolace, obklady, dlažba, instalace sanity, výmalba a úklid. Materiál (obklady, dlažba, sanita) hradíte zvlášť." },
  { question: "Platí se záloha předem?", answer: "Ano, před zahájením prací hradíte zálohu 40 %. Zbytek po dokončení a předání díla." },
  { question: "Jak dlouho platí cenová nabídka?", answer: "Cenová nabídka platí 30 dní od vystavení. Ceny materiálů se mohou měnit, proto doporučujeme neotálet s objednávkou." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Service",
      "provider": { "@id": "https://obklady-ostrava.cz/#organization" },
      "name": "Obkladačské práce Ostrava",
      "areaServed": { "@type": "City", "name": "Ostrava" },
    },
  ],
};

export default function CenikPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Ceník obkladačských prací 2026
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Ceny obkladačských prací v Ostravě se v roce 2026 pohybují od 600 do 1 250 Kč/m² bez materiálu.
          U kompletní rekonstrukce koupelny (práce bez materiálu) počítejte od 45 000 Kč za malou koupelnu.
          Všechny ceny jsou orientační — přesnou nabídku dostanete po zaměření zdarma.
        </p>

        {/* Sub-page cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group p-5 bg-white border border-[var(--border)] rounded-2xl hover:border-[#C7D2FE] hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#6B7AE8] transition-colors">
                  {page.title}
                </h2>
                <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[#6B7AE8] transition-colors flex-shrink-0" />
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">{page.desc}</p>
              <span className="inline-block text-sm font-semibold text-[#6B7AE8]">{page.price}</span>
            </Link>
          ))}
        </div>

        {/* Quick overview table */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
          Přehled cen — rychlý souhrn
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          Ceny jsou bez DPH a bez materiálu, pokud není uvedeno jinak.
        </p>

        <PriceTable
          headers={["Typ práce", "Cena", "Poznámka"]}
          rows={[
            ["Standardní obklady (do 60×60)", "600–850 Kč/m²", "Včetně lepidla a spárování"],
            ["Velkoformátové obklady (nad 60×60)", "850–1 250 Kč/m²", "Buttering-floating, nivelace"],
            ["Standardní dlažba (do 60×60)", "550–800 Kč/m²", "Včetně vyrovnání podkladu"],
            ["Bourání obkladů a dlažby", "150–300 Kč/m²", "Včetně odvozu na skládku"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá + bandáž rohů"],
            ["Malá koupelna do 4 m² (práce)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Střední koupelna 4–6 m² (práce)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Velká koupelna 6–10 m² (práce)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Koupelna 5,2 m² v paneláku na Dubině, Ostrava. Kompletní rekonstrukce včetně bourání umakartového jádra, vyzdění YTONGem, nových rozvodů, hydroizolace, obkladů RAKO Extra 30×60, dlažby 60×60, instalace sprchového koutu a umyvadla Cersanit. Celkem 82 000 Kč (práce bez materiálu), realizace trvala přibližně 11 pracovních dní."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete přesnou cenovou nabídku?"
          description="Zaměření a zpracování rozpočtu provádíme zdarma. Zavolejte nebo vyplňte formulář a ozveme se do 24 hodin."
        />

        <RelatedLinks
          links={[
            { title: "Obkladačské práce — podrobný ceník", href: "/cenik/obkladacske-prace" },
            { title: "Rekonstrukce koupelny — ceník", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Kolik stojí rekonstrukce koupelny 2026", href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026" },
            { title: "Naše služby", href: "/sluzby" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
