import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { CTASection } from "@/components/content/CTASection";
import { blogArticles } from "@/lib/blog-articles";

export const metadata: Metadata = {
  title: "Blog | Obklady, dlažba a rekonstrukce | OBK Ostrava",
  description:
    "Články o rekonstrukci koupelen, cenách obkladů, trendech a praktických radách. Od mistra obkladače s 15+ lety praxe v Ostravě.",
  alternates: { canonical: "https://obklady-ostrava.cz/blog" },
};

const breadcrumbs = [{ label: "Blog" }];

// Map slugs to article images
const articleImages: Record<string, string> = {
  "rekonstrukce-koupelny-ostrava-jak-nespalit-200000": "/images/articles/rekonstrukce-koupelny-cena.jpg",
  "hydroizolace-koupelny-proc-nesmi-plakat": "/images/articles/hydroizolace-koupelny.jpg",
  "velkoformatova-dlazba-2025-trendy-ceny": "/images/articles/velkoformatova-dlazba.jpg",
  "kamenny-obklad-krbu-srdce-domu": "/images/articles/kamenny-obklad-krbu.jpg",
  "obklad-na-obklad-lze-pokladat-novou-dlazbu-na-starou": "/images/articles/obklad-na-obklad.jpg",
  "3d-navrh-koupelny-zdarma-proc-je-dulezity-sparorez": "/images/articles/3d-navrh-koupelny.jpg",
  "jak-vybrat-obkladace-v-ostrave-checklist-a-cervene-vlajky": "/images/articles/jak-vybrat-obkladace.jpg",
};

const articles = Object.values(blogArticles)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    {
      "@type": "CollectionPage",
      name: "Blog — obklady, dlažba a rekonstrukce",
      description:
        "Články o rekonstrukci koupelen, cenách obkladů a praktických radách.",
      publisher: {
        "@type": "Organization",
        name: "OBK Obkladač Ostrava",
      },
    },
  ],
};

export default function BlogPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-2">
          Blog
        </h1>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mb-8 leading-relaxed">
          Užitečné články o rekonstrukci koupelen, cenách, trendech
          a praktických radách.
        </p>

        {/* Article cards — 2 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[#C7D2FE] hover:shadow-lg transition-all"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={articleImages[article.slug] || "/images/articles/rekonstrukce-koupelny-cena.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#6B7AE8]">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[#6B7AE8] transition-colors mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">
                  {article.metaDescription}
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

        {/* Link to rady */}
        <div className="mb-12 p-5 sm:p-6 bg-white border border-[var(--border)] rounded-2xl flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[var(--text-primary)] mb-1">
              Rady a tipy
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Praktické články o cenách, materiálech a postupu rekonstrukce.
            </p>
          </div>
          <Link
            href="/rady"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7AE8] hover:text-[#5A68D6] transition-colors flex-shrink-0 ml-4"
          >
            Rady
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <CTASection
          title="Máte konkrétní dotaz ohledně rekonstrukce?"
          description="Zavolejte nebo napište. Poradíme vám s výběrem materiálu, rozpočtem i harmonogramem."
        />
      </div>
    </ContentPage>
  );
}
