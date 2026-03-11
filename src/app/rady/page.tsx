import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { CTASection } from "@/components/content/CTASection";

export const metadata: Metadata = {
  title: "Rady a tipy | Rekonstrukce koupelny | OBK Ostrava",
  description:
    "Praktické rady pro rekonstrukci koupelny v Ostravě. Jak vybrat obklady, kolik to stojí, postup prací krok za krokem. Od mistra obkladače s 15+ lety praxe.",
  alternates: { canonical: "https://obklady-ostrava.cz/rady" },
};

const breadcrumbs = [{ label: "Rady a tipy" }];

const articles = [
  {
    title: "Jak probíhá rekonstrukce koupelny krok za krokem",
    description:
      "7 kroků od zaměření po předání. Co se děje každý den, jak dlouho trvá bourání, obkládání i montáž sanity.",
    href: "/rady/jak-probiha-rekonstrukce-koupelny",
    date: "1. 2. 2026",
    readTime: "8 min",
    image: "/images/articles/rekonstrukce-krok-za-krokem.jpg",
  },
  {
    title: "Jak vybrat obklady a dlažbu do koupelny",
    description:
      "Formáty, materiály, povrchy a protiskluz. Srovnání RAKO, Cersanit a Marazzi. Cenové rozpětí a trendy 2026.",
    href: "/rady/jak-vybrat-obklady-a-dlazbu",
    date: "1. 2. 2026",
    readTime: "7 min",
    image: "/images/articles/jak-vybrat-obklady.jpg",
  },
  {
    title: "Kolik stojí rekonstrukce koupelny v roce 2026",
    description:
      "Podrobný rozpočet pro malou, střední i prémiovou koupelnu. Rozklad na práci, materiál a sanitu.",
    href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026",
    date: "1. 2. 2026",
    readTime: "10 min",
    image: "/images/articles/cena-rekonstrukce-2026.jpg",
  },
  {
    title: "Vana nebo sprchový kout — co vybrat",
    description:
      "Srovnání van a sprchových koutů: cena, prostor, údržba, bezbariérovost. Řešení pro malé koupelny.",
    href: "/rady/vana-nebo-sprchovy-kout",
    date: "1. 2. 2026",
    readTime: "6 min",
    image: "/images/articles/vana-nebo-sprcha.jpg",
  },
  {
    title: "Velkoformátové obklady: výhody a nevýhody",
    description:
      "Obklady nad 60×60 cm. Méně spár, moderní vzhled, ale vyšší cena a náročnější pokládka.",
    href: "/rady/velkoformatove-obklady-vyhody-a-nevyhody",
    date: "1. 2. 2026",
    readTime: "6 min",
    image: "/images/articles/velkoformatove-obklady.jpg",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    {
      "@type": "CollectionPage",
      name: "Rady a tipy pro rekonstrukci koupelny",
      description:
        "Praktické rady pro rekonstrukci koupelny v Ostravě od mistra obkladače.",
      publisher: {
        "@type": "Organization",
        name: "OBK Obkladač Ostrava",
      },
    },
  ],
};

export default function RadyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-2">
          Rady a tipy pro rekonstrukci
        </h1>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mb-8 leading-relaxed">
          Praktické rady od mistra obkladače. Konkrétní čísla, materiály
          a postupy z reálných rekonstrukcí v Ostravě.
        </p>

        {/* Article cards — 2 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[#C7D2FE] hover:shadow-lg transition-all"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[#6B7AE8] transition-colors mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[#6B7AE8] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to blog */}
        <div className="mb-12 p-5 sm:p-6 bg-white border border-[var(--border)] rounded-2xl flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[var(--text-primary)] mb-1">
              Další články na blogu
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Tipy, realizace a novinky ze světa obkladů a rekonstrukcí.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7AE8] hover:text-[#5A68D6] transition-colors flex-shrink-0 ml-4"
          >
            Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <CTASection
          title="Máte konkrétní otázku?"
          description="Zavolejte nebo napište. Poradíme vám s výběrem materiálu, rozpočtem i harmonogramem rekonstrukce."
        />
      </div>
    </ContentPage>
  );
}
