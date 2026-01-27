"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

// Blog articles data
const articles = [
  {
    id: 1,
    slug: "cena-rekonstrukce-koupelny-ostrava-2026",
    title: "Cena rekonstrukce koupelny v Ostravě 2026",
    excerpt: "Kompletní přehled cen pro malé, standardní i nadstandardní koupelny. Detailní rozpočet a co vše je zahrnuto v ceně.",
    category: "Ceny",
    readTime: "8 min",
    date: "15. ledna 2026",
  },
  {
    id: 2,
    slug: "rekonstrukce-umakartoveho-jadra-postup",
    title: "Rekonstrukce umakartového jádra: Průvodce",
    excerpt: "Jaké jsou možnosti rekonstrukce starého umakartového jádra? Postup prací a proč je lepší jádro zbourat.",
    category: "Technologie",
    readTime: "12 min",
    date: "10. ledna 2026",
  },
  {
    id: 3,
    slug: "trendy-koupelen-2026",
    title: "Trendy v designu koupelen 2026",
    excerpt: "Přírodní materiály, chytré technologie a koncept domácího spa. Co je teď IN.",
    category: "Design",
    readTime: "6 min",
    date: "5. ledna 2026",
  },
  {
    id: 4,
    slug: "jak-dlouho-trva-rekonstrukce-koupelny",
    title: "Jak dlouho trvá rekonstrukce koupelny?",
    excerpt: "Podrobný časový harmonogram od bourání po finální úklid. Den po dni.",
    category: "Praktické rady",
    readTime: "5 min",
    date: "1. ledna 2026",
  },
  {
    id: 5,
    slug: "rekonstrukce-koupelny-poruba",
    title: "Rekonstrukce koupelen v Ostravě-Porubě",
    excerpt: "Specializujeme se na panelové domy v Porubě. Znalost místních specifik.",
    category: "Lokality",
    readTime: "4 min",
    date: "28. prosince 2025",
  },
  {
    id: 6,
    slug: "stavebni-povoleni-rekonstrukce-koupelny",
    title: "Stavební povolení na rekonstrukci koupelny",
    excerpt: "Kdy potřebujete povolení a kdy ne. Aktuální legislativa 2026.",
    category: "Legislativa",
    readTime: "7 min",
    date: "20. prosince 2025",
  },
  {
    id: 7,
    slug: "vybrat-spravnou-dlazbu",
    title: "Jak vybrat správnou dlažbu do koupelny",
    excerpt: "Protiskluznost, formáty, materiály. Na co si dát pozor při výběru.",
    category: "Materiály",
    readTime: "6 min",
    date: "15. prosince 2025",
  },
  {
    id: 8,
    slug: "sprchovy-kout-nebo-vana",
    title: "Sprchový kout nebo vana?",
    excerpt: "Výhody a nevýhody obou variant. Jak se rozhodnout.",
    category: "Praktické rady",
    readTime: "5 min",
    date: "10. prosince 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Zpět na hlavní stránku</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">Koupelna</span>
            <span className="text-xl font-light text-gray-400">Ostrava</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Page Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Užitečné články o rekonstrukci koupelen, cenách, trendech a praktických radách.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C7D2FE]/50 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left side */}
                  <div className="flex-1">
                    {/* Category */}
                    <span className="inline-block text-xs font-medium text-[#6B7AE8] mb-2">
                      {article.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#6B7AE8] transition-colors mb-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Right side - Meta */}
                  <div className="flex items-center gap-6 text-xs text-gray-400 md:flex-shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#6B7AE8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 mb-4">
            Máte konkrétní dotaz ohledně rekonstrukce?
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C7D2FE] text-gray-900 font-medium rounded-full hover:bg-[#B4C6FC] transition-colors"
          >
            Kontaktujte nás
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-400">
          © 2026 Koupelna Ostrava. Všechna práva vyhrazena.
        </div>
      </footer>
    </div>
  );
}
