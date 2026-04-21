"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";

const articles = [
  {
    title: "Rekonstrukce koupelny v paneláku Ostrava — průvodce 2026",
    description:
      "Typy T06B, T08B, OP 1.11, postup krok za krokem, ceník, chyby kterým se vyhnout.",
    href: "/rady/rekonstrukce-koupelny-v-panelaku-ostrava",
    readTime: "14 min",
    image: "/images/articles/rekonstrukce-koupelny-cena.jpg",
  },
  {
    title: "Přírodní kámen do koupelny — 7 typů, ceny a péče",
    description:
      "Žula, mramor, travertin, břidlice. Srovnání vlastností, protiskluzu a cen.",
    href: "/rady/prirodni-kamen-do-koupelny",
    readTime: "13 min",
    image: "/images/articles/kamenny-obklad-krbu.jpg",
  },
  {
    title: "Velkoformátové obklady vs. klasické — co vybrat",
    description:
      "Srovnání formátů 30×60 až 120×260. Ceny, technické nároky, doporučení podle typu koupelny.",
    href: "/rady/velkoformatove-obklady-vs-klasicke",
    readTime: "11 min",
    image: "/images/articles/velkoformatova-dlazba.jpg",
  },
  {
    title: "Kolik stojí rekonstrukce koupelny v roce 2026",
    description:
      "Podrobný rozpočet pro malou, střední i prémiovou koupelnu. Rozklad na práci, materiál a sanitu.",
    href: "/rady/kolik-stoji-rekonstrukce-koupelny-2026",
    readTime: "10 min",
    image: "/images/articles/cena-rekonstrukce-2026.jpg",
  },
];

export function HomeArticles() {
  return (
    <Section id="clanky" theme="light">
      <SectionHeader
        title="Užitečné články"
        subtitle="Praktické rady od mistra obkladače v Ostravě — ceny, postupy, tipy z reálných realizací."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {articles.map((article, index) => (
          <motion.div
            key={article.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Link
              href={article.href}
              className="group block bg-white border border-gray-200/80 rounded-2xl overflow-hidden hover:border-[#C7D2FE] hover:shadow-lg transition-all h-full flex flex-col"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#6B7AE8] transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1 text-[11px] text-gray-400">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#6B7AE8] transition-colors" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <Link
          href="/rady"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7AE8] hover:text-[#5A68D6] transition-colors"
        >
          Všechny články a rady
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
