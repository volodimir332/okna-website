import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "@/lib/blog-articles";
import { ContentPage } from "@/components/content/ContentPage";
import { ArticleContent } from "./ArticleContent";

function normalizeSlug(raw: string): string {
  return decodeURIComponent(raw)
    .replace(/ý/g, "y")
    .replace(/č/g, "c")
    .replace(/ě/g, "e")
    .replace(/ř/g, "r")
    .replace(/š/g, "s")
    .replace(/ž/g, "z");
}

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  const article = blogArticles[slug];

  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://obklady-ostrava.cz/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "cs_CZ",
      url: `https://obklady-ostrava.cz/blog/${article.slug}`,
      title: article.metaTitle,
      description: article.metaDescription,
      siteName: "OBK - Obklady Ostrava",
      publishedTime: article.date,
      authors: ["OBK - Obklady Ostrava"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  const article = blogArticles[slug];

  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "OBK - Obklady Ostrava",
      url: "https://obklady-ostrava.cz",
    },
    publisher: {
      "@type": "Organization",
      name: "OBK - Obklady Ostrava",
      url: "https://obklady-ostrava.cz",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://obklady-ostrava.cz/blog/${article.slug}`,
    },
    inLanguage: "cs",
  };

  return (
    <ContentPage jsonLd={jsonLd}>
      <ArticleContent article={article} />
    </ContentPage>
  );
}
