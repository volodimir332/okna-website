"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, TrendingUp, Wrench, Coins, Lightbulb } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout";
import { Badge, Button } from "@/components/ui";

// Blog articles data - SEO optimized content
const articles = [
  {
    id: 1,
    slug: "cena-rekonstrukce-koupelny-ostrava-2026",
    title: "Cena rekonstrukce koupelny v Ostravě 2026: Kompletní přehled",
    excerpt: "Kolik stojí rekonstrukce koupelny v roce 2026? Porovnání cen pro malé, standardní i nadstandardní koupelny. Detailní rozpočet a co vše je zahrnuto v ceně.",
    category: "Ceny",
    icon: Coins,
    color: "text-green-600",
    bgColor: "bg-green-50",
    readTime: "8 min",
    date: "15. ledna 2026",
    featured: true,
    content: {
      intro: "Plánujete rekonstrukci koupelny a chcete vědět, kolik vás to bude stát? Připravili jsme pro vás kompletní přehled cen rekonstrukcí koupelen v Ostravě pro rok 2026.",
      sections: [
        {
          title: "Cenové kategorie rekonstrukce",
          items: [
            { name: "Ekonomická rekonstrukce", price: "95 000 – 120 000 Kč", desc: "Základní práce, levnější materiály" },
            { name: "Standardní rekonstrukce", price: "150 000 – 200 000 Kč", desc: "Kvalitní materiály, 3D návrh" },
            { name: "Prémiová rekonstrukce", price: "od 250 000 Kč", desc: "Luxusní materiály, smart technologie" },
          ]
        }
      ]
    }
  },
  {
    id: 2,
    slug: "rekonstrukce-umakartoveho-jadra-postup",
    title: "Rekonstrukce umakartového jádra: Kompletní průvodce",
    excerpt: "Máte v bytě staré umakartové jádro? Zjistěte, jaké jsou možnosti rekonstrukce, postup prací a proč je lepší jádro zbourat než obložit.",
    category: "Technologie",
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    readTime: "12 min",
    date: "10. ledna 2026",
    featured: true,
    content: {
      intro: "Umakartová bytová jádra jsou typickým prvkem panelových domů v Ostravě. Po 40-50 letech provozu je jejich rekonstrukce nevyhnutelná.",
      sections: [
        {
          title: "Proč zbourat staré jádro?",
          items: [
            { name: "Hygiena", desc: "Za umakartem se často skrývá plíseň a bakterie" },
            { name: "Prostor", desc: "Získáte až 15% více prostoru" },
            { name: "Moderní rozvody", desc: "Nové vodovodní a elektrické rozvody" },
          ]
        }
      ]
    }
  },
  {
    id: 3,
    slug: "trendy-koupelen-2026",
    title: "Trendy v designu koupelen 2026: Co je teď IN",
    excerpt: "Objevte nejnovější trendy v designu koupelen pro rok 2026. Přírodní materiály, chytré technologie a koncept domácího spa.",
    category: "Design",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    readTime: "6 min",
    date: "5. ledna 2026",
    featured: false,
    content: {
      intro: "Rok 2026 přináší do designu koupelen návrat k přírodě a důraz na wellness. Podívejte se na hlavní trendy.",
      sections: [
        {
          title: "Hlavní trendy 2026",
          items: [
            { name: "Zemité barvy", desc: "Béžová, terakota, olivová" },
            { name: "3D textury", desc: "Reliéfní obklady, přírodní povrchy" },
            { name: "Smart technologie", desc: "Chytré sprchy, LED zrcadla" },
          ]
        }
      ]
    }
  },
  {
    id: 4,
    slug: "jak-dlouho-trva-rekonstrukce-koupelny",
    title: "Jak dlouho trvá rekonstrukce koupelny? Časový harmonogram",
    excerpt: "Podrobný přehled, kolik dní trvá rekonstrukce koupelny od bourání po finální úklid. Harmonogram prací den po dni.",
    category: "Praktické rady",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    readTime: "5 min",
    date: "1. ledna 2026",
    featured: false,
    content: {
      intro: "Jedna z nejčastějších otázek našich klientů. Připravili jsme pro vás detailní harmonogram rekonstrukce.",
      sections: []
    }
  },
  {
    id: 5,
    slug: "rekonstrukce-koupelny-poruba",
    title: "Rekonstrukce koupelen v Ostravě-Porubě: Lokální specialisté",
    excerpt: "Specializujeme se na rekonstrukce koupelen v panelových domech v Porubě. Znalost místních specifik a rychlá realizace.",
    category: "Lokality",
    icon: Lightbulb,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    readTime: "4 min",
    date: "28. prosince 2025",
    featured: false,
    content: {
      intro: "Ostrava-Poruba je jednou z našich hlavních oblastí působnosti. Máme zkušenosti s různými typy panelových domů.",
      sections: []
    }
  },
  {
    id: 6,
    slug: "stavebni-povoleni-rekonstrukce-koupelny",
    title: "Potřebujete stavební povolení na rekonstrukci koupelny?",
    excerpt: "Přehled legislativních požadavků pro rekonstrukci koupelny v roce 2026. Kdy potřebujete povolení a kdy ne.",
    category: "Legislativa",
    icon: Lightbulb,
    color: "text-red-600",
    bgColor: "bg-red-50",
    readTime: "7 min",
    date: "20. prosince 2025",
    featured: false,
    content: {
      intro: "Nový stavební zákon přinesl změny. Přinášíme aktuální informace o tom, kdy je a kdy není potřeba stavební povolení.",
      sections: []
    }
  },
];

// Article card component
function ArticleCard({ article, index, featured = false }: {
  article: typeof articles[0];
  index: number;
  featured?: boolean;
}) {
  const Icon = article.icon;

  return (
    <motion.article
      className={`group relative bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[#C7D2FE]/50 transition-all duration-300 hover:shadow-lg ${featured ? "md:col-span-2 md:row-span-2" : ""
        }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${article.bgColor} ${article.color}`}>
          <Icon className="w-3 h-3" />
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? "md:p-8" : ""}`}>
        <div className="pt-8">
          <h3 className={`font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#6B7AE8] transition-colors ${featured ? "text-xl md:text-2xl" : "text-lg"
            }`}>
            {article.title}
          </h3>

          <p className={`text-[var(--text-secondary)] mb-4 ${featured ? "text-base line-clamp-4" : "text-sm line-clamp-2"
            }`}>
            {article.excerpt}
          </p>

          {/* Price table for pricing article */}
          {featured && article.id === 1 && (
            <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)]">
              <table className="w-full text-sm">
                <thead className="bg-[var(--bg-secondary)]">
                  <tr>
                    <th className="text-left p-3 font-semibold">Typ</th>
                    <th className="text-left p-3 font-semibold">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--border)]">
                    <td className="p-3">Ekonomická</td>
                    <td className="p-3 font-medium text-green-600">95 000 – 120 000 Kč</td>
                  </tr>
                  <tr className="border-t border-[var(--border)]">
                    <td className="p-3">Standardní</td>
                    <td className="p-3 font-medium text-blue-600">150 000 – 200 000 Kč</td>
                  </tr>
                  <tr className="border-t border-[var(--border)]">
                    <td className="p-3">Prémiová</td>
                    <td className="p-3 font-medium text-purple-600">od 250 000 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Meta info */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>

            <button className="flex items-center gap-1 text-sm font-medium text-[#6B7AE8] group-hover:gap-2 transition-all">
              Číst více
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Blog() {
  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <Section id="blog" theme="light">
      <SectionHeader
        title="Užitečné články a tipy"
        subtitle="Přinášíme vám odborné rady, aktuální trendy a praktické tipy pro rekonstrukci vaší koupelny."
      />

      {/* Featured articles */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {featuredArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} featured />
        ))}
      </div>

      {/* Regular articles grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {regularArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index + 2} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-[var(--text-secondary)] mb-4">
          Máte konkrétní dotaz? Rádi vám poradíme.
        </p>
        <Button variant="gradient-outline" size="md">
          Kontaktovat nás
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </Section>
  );
}
