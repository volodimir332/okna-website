import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/blog-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://obklady-ostrava.cz";
  const now = new Date();

  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/cenik", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/cenik/obkladacske-prace", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cenik/rekonstrukce-koupelny", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cenik/dlazby", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cenik/bouraci-prace", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/svet-kamene", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sluzby", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sluzby/obklady-koupelen", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sluzby/obklady-kuchyni", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sluzby/velkoformatove-obklady", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sluzby/rekonstrukce-koupelny", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sluzby/hydroizolace", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sluzby/podlahove-topeni", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ostrava", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/ostrava/poruba", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/ostrava/zabreh", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/ostrava/dubina", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/ostrava/hrabuvka", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/havirov", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/karvina", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/frydek-mistek", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/opava", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/realizace", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rady", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/rady/jak-probiha-rekonstrukce-koupelny", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/rady/jak-vybrat-obklady-a-dlazbu", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/rady/kolik-stoji-rekonstrukce-koupelny-2026", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/rady/vana-nebo-sprchovy-kout", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/rady/velkoformatove-obklady-vyhody-a-nevyhody", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  ];

  const blogPages = Object.keys(blogArticles).map((slug) => ({
    url: `/blog/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...blogPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
