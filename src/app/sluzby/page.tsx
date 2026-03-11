import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { CTASection } from "@/components/content/CTASection";
import { FAQSection } from "@/components/content/FAQSection";
import { faqJsonLd } from "@/lib/schema-helpers";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Obkladačské služby Ostrava | OBK",
  description:
    "Kompletní obkladačské služby v Ostravě. Obklady koupelen, kuchyní, velkoformáty, rekonstrukce na klíč, hydroizolace a podlahové topení. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/sluzby" },
};

const breadcrumbs = [{ label: "Služby" }];

const services = [
  {
    title: "Obklady koupelen",
    href: "/sluzby/obklady-koupelen",
    desc: "Pokládka obkladů a dlažby v koupelně. Standardní i velkoformátové. Od diagnostiky podkladu po spárování.",
    price: "od 600 Kč/m²",
  },
  {
    title: "Obklady kuchyní",
    href: "/sluzby/obklady-kuchyni",
    desc: "Kuchyňská zástěna za linkou, celé stěny. Keramika, sklo, velkoformát 60x120.",
    price: "od 10 000 Kč",
  },
  {
    title: "Velkoformátové obklady",
    href: "/sluzby/velkoformatove-obklady",
    desc: "Formáty 60x120 až 120x260 cm. Buttering-floating, nivelace, speciální přísavky.",
    price: "od 850 Kč/m²",
  },
  {
    title: "Rekonstrukce koupelny na klíč",
    href: "/sluzby/rekonstrukce-koupelny",
    desc: "Od 3D návrhu po předání. Bourání, rozvody, hydroizolace, obklady, sanita. 3 cenové balíčky.",
    price: "od 45 000 Kč",
  },
  {
    title: "Hydroizolace koupelny",
    href: "/sluzby/hydroizolace",
    desc: "Dvouvrstvá hydroizolace dle ČSN 74 4505. Mapei Mapelastic, Baumacol. Bandáž rohů a prostupů.",
    price: "od 450 Kč/m²",
  },
  {
    title: "Podlahové topení pod dlažbu",
    href: "/sluzby/podlahove-topeni",
    desc: "Elektrické i teplovodní topení pod dlažbu. Ideální pro koupelny. Regulace po místnostech.",
    price: "od 1 100 Kč/m²",
  },
];

const faqItems = [
  {
    question: "Jak probíhá objednávka vašich služeb?",
    answer:
      "Zavolejte nebo vyplňte formulář. Obvykle se ozveme do 24 hodin a domluvíme zaměření zdarma. Na místě probereme rozsah prací, materiály a termín. Přesnou cenovou nabídku obdržíte přibližně do 3 pracovních dnů.",
  },
  {
    question: "Jakou záruku na práci poskytujete?",
    answer:
      "Na veškeré obkladačské práce poskytujeme záruku 60 měsíců. Záruka se vztahuje na pokládku, spárování i hydroizolaci. Používáme výhradně certifikované materiály s vlastní zárukou výrobce.",
  },
  {
    question: "Pracujete i o víkendu?",
    answer:
      "V odůvodněných případech ano. Standardně pracujeme pondělí až pátek, 7:00–16:00. Víkendové práce řešíme individuálně, například u rekonstrukcí s krátkým termínem.",
  },
  {
    question: "Dodáváte i materiál?",
    answer:
      "Materiál si můžete zajistit sami, nebo vám ho objednáme za velkoobchodní ceny. Spolupracujeme s RAKO, Cersanit, Marazzi. Dopravu na stavbu zajistíme.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Service",
      provider: { "@id": "https://obklady-ostrava.cz/#organization" },
      name: "Obkladačské služby Ostrava",
      areaServed: { "@type": "City", name: "Ostrava" },
    },
  ],
};

export default function SluzbyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Naše obkladačské služby
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Pokládáme obklady a dlažbu v Ostravě od roku 2005. Od malé kuchyňské
          zástěny po kompletní rekonstrukci koupelny na klíč. Na všechny práce
          dáváme záruku 60 měsíců. Zaměření a rozpočet zdarma.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-5 bg-white border border-[var(--border)] rounded-2xl hover:border-[#C7D2FE] hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#6B7AE8] transition-colors">
                  {service.title}
                </h2>
                <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[#6B7AE8] transition-colors flex-shrink-0" />
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                {service.desc}
              </p>
              <span className="inline-block text-sm font-semibold text-[#6B7AE8]">
                {service.price}
              </span>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Proč si vybrat OBK
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Máme za sebou přes 800 dokončených koupelen po celé Ostravě. Pracujeme
          v Porubě, na Dubině, v Hrabůvce, v Zábřehu i v centru. Každou zakázku
          řeší jeden mistr od začátku do konce.
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>Záruka 60 měsíců na práci i materiál</li>
          <li>Pevná cena bez skrytých příplatků</li>
          <li>Zaměření a rozpočet zdarma do 24 hodin</li>
          <li>Certifikované materiály: Ceresit, Mapei, Baumit</li>
          <li>Velkoformáty do rozměru 120x260 cm</li>
        </ul>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Kde pracujeme
        </h2>
        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
          Působíme v celé Ostravě a blízkém okolí. Nejčastěji jezdíme do
          Poruby, na Dubinu, do Hrabůvky a Zábřehu. Panelákové koupelny jsou
          naše denní práce. Rekonstrukce umakartových jader řešíme každý týden.
        </p>

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete obkladače v Ostravě?"
          description="Zavolejte nebo napište. Domluvíme zaměření zdarma a obvykle do 3 pracovních dnů máte cenovou nabídku na stole."
        />

        <RelatedLinks
          links={[
            { title: "Ceník obkladačských prací 2026", href: "/cenik" },
            {
              title: "Kolik stojí rekonstrukce koupelny",
              href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026",
            },
            {
              title: "Obkladačské práce — podrobný ceník",
              href: "/cenik/obkladacske-prace",
            },
            { title: "Blog — rady a tipy", href: "/blog" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
