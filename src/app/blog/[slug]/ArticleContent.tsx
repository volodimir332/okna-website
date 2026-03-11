"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { BlogArticle } from "@/lib/blog-articles";

function formatContent(text: string): string {
  let html = text;

  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>'
  );
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>'
  );
  html = html.replace(
    /^#### (.+)$/gm,
    '<h4 class="text-lg font-semibold text-gray-900 mt-6 mb-2">$1</h4>'
  );

  html = html.replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>');
  html = html.replace(
    /^✅ (.+)$/gm,
    '<li class="mb-2 text-green-700">✅ $1</li>'
  );
  html = html.replace(
    /^❌ (.+)$/gm,
    '<li class="mb-2 text-red-700">❌ $1</li>'
  );

  html = html.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-gray-900">$1</strong>'
  );

  const paragraphs = html.split(/\n\n+/);
  html = paragraphs
    .map((p) => {
      p = p.trim();
      if (!p) return "";
      if (p.startsWith("<h") || p.startsWith("<li") || p.startsWith("<table"))
        return p;
      if (p.startsWith("|")) {
        const rows = p.split("\n").filter((r) => r.includes("|"));
        if (rows.length > 0) {
          let table =
            '<table class="w-full my-6 border-collapse border border-gray-300">';
          rows.forEach((row, i) => {
            const cells = row
              .split("|")
              .filter((c) => c.trim())
              .map((c) => c.trim());
            if (i === 0) {
              table += '<thead><tr class="bg-gray-100">';
              cells.forEach((cell) => {
                table += `<th class="border border-gray-300 px-4 py-2 text-left font-semibold">${cell}</th>`;
              });
              table += "</tr></thead><tbody>";
            } else {
              table += "<tr>";
              cells.forEach((cell) => {
                table += `<td class="border border-gray-300 px-4 py-2">${cell}</td>`;
              });
              table += "</tr>";
            }
          });
          table += "</tbody></table>";
          return table;
        }
      }
      return `<p class="mb-4 text-gray-700 leading-relaxed text-base">${p}</p>`;
    })
    .filter((p) => p)
    .join("");

  html = html.replace(/(<li[^>]*>.*?<\/li>)/gs, (match) => {
    if (!html.includes("<ul")) {
      return `<ul class="list-none space-y-2 my-6 pl-0">${match}</ul>`;
    }
    return match;
  });

  return html;
}

export function ArticleContent({ article }: { article: BlogArticle }) {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-500 hover:text-[#6366F1] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Zpět na blog</span>
          </Link>
        </nav>

        <article>
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-500 pb-6 border-b-2 border-gray-200">
              <time className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </time>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="article-content"
            dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
          />
        </article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 bg-[#6366F1]/5 rounded-2xl border-2 border-[#6366F1]/20"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Chcete nezávaznou konzultaci?
          </h3>
          <p className="text-gray-600 mb-5 text-base">
            Nabízíme výjezd na místo zdarma, 3D návrh a reálný rozpočet
            s&nbsp;položkovým výpisem.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6366F1] text-white font-semibold rounded-full hover:bg-[#5558E3] transition-colors shadow-lg hover:shadow-xl"
          >
            Kontaktovat nás
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .article-content h2 {
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .article-content h3 {
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .article-content h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .article-content ul {
          margin: 1rem 0;
        }
        .article-content table {
          margin: 1.5rem 0;
        }
        .article-content strong {
          color: #111827;
        }
        .article-content p {
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
}
