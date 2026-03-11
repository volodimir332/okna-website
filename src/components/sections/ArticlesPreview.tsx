"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { blogArticles } from "@/lib/blog-articles";

const articles = Object.values(blogArticles);

export function ArticlesPreview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0); // Відкрита перша стаття за замовчуванням

  const selectedArticle = selectedIndex !== null ? articles[selectedIndex] : null;

  const selectArticle = (index: number) => {
    setSelectedIndex(index);
  };

  // Простий парсер markdown-подібного тексту
  const formatContent = (text: string) => {
    let html = text;
    
    // Заголовки - білий текст для темного фону (однакові розміри для h2 і h3, менші для h4)
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-lg md:text-xl font-bold text-white mt-6 mb-2">$1</h2>');
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg md:text-xl font-bold text-white mt-6 mb-2">$1</h3>');
    html = html.replace(/^#### (.+)$/gm, '<h4 class="text-sm md:text-base font-semibold text-white mt-4 mb-2">$1</h4>');
    
    // Списки - білий текст (зменшені розміри)
    html = html.replace(/^- (.+)$/gm, '<li class="mb-1 text-white text-xs sm:text-sm">$1</li>');
    html = html.replace(/^✅ (.+)$/gm, '<li class="mb-1 text-green-400 text-xs sm:text-sm">✅ $1</li>');
    html = html.replace(/^❌ (.+)$/gm, '<li class="mb-1 text-gray-400 text-xs sm:text-sm">❌ $1</li>');
    
    // Жирний текст - білий
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
    
    // Параграфи - такі самі розміри як в TechnicalStandards
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs
      .map(p => {
        p = p.trim();
        if (!p) return '';
        if (p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<table')) return p;
        if (p.startsWith('|')) {
          // Таблиця
          const rows = p.split('\n').filter(r => r.includes('|'));
          if (rows.length > 0) {
            let table = '<table class="w-full my-4 border-collapse border border-gray-600 text-sm">';
            rows.forEach((row, i) => {
              const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
              if (i === 0) {
                table += '<thead><tr class="bg-gray-800">';
                cells.forEach(cell => {
                  table += `<th class="border border-gray-600 px-3 py-2 text-left font-semibold text-sm text-white">${cell}</th>`;
                });
                table += '</tr></thead><tbody>';
              } else {
                table += '<tr>';
                cells.forEach(cell => {
                  table += `<td class="border border-gray-600 px-3 py-2 text-sm text-white">${cell}</td>`;
                });
                table += '</tr>';
              }
            });
            table += '</tbody></table>';
            return table;
          }
        }
        return `<p class="mb-2 text-gray-300 leading-relaxed text-xs sm:text-sm">${p}</p>`;
      })
      .filter(p => p)
      .join('');
    
    // Обгортаємо списки
    html = html.replace(/(<li[^>]*>[\s\S]*?<\/li>)/g, (match) => {
      if (!html.includes('<ul')) {
        return `<ul class="list-none space-y-2 my-4 pl-0">${match}</ul>`;
      }
      return match;
    });
    
    return html;
  };

  return (
    <Section id="clanky" theme="light">
      <SectionHeader
        title="Přečtěte si více"
        subtitle="Užitečné články o rekonstrukci koupelen"
        className="[&>h2]:text-gray-900"
      />

      <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-stretch">
        {/* Left Side - Article Viewer (темно-сірий фон) */}
        <div className="dark-article-preview md:col-span-6 relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#1E1E1E] z-10 isolate">
          <AnimatePresence mode="wait">
            {selectedArticle ? (
              <motion.div
                key={selectedArticle.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full w-full overflow-y-auto p-4 md:p-6 scroll-smooth bg-[#1E1E1E] relative z-10"
              >
                {/* Article Header */}
                <div className="mb-4">
                  <span className="text-[10px] font-semibold text-[#6B7AE8] uppercase tracking-wider block mb-2">
                    {selectedArticle.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {selectedArticle.title}
                  </h3>
                </div>

                {/* Article Content */}
                <div
                  className="article-content prose prose-lg max-w-none text-white"
                  style={{ color: 'white' }}
                  dangerouslySetInnerHTML={{ __html: formatContent(selectedArticle.content) }}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <p className="text-gray-400 text-lg mb-2">
                    Vyberte článek
                  </p>
                  <p className="text-gray-400 text-sm">
                    Klikněte na článek vpravo pro zobrazení
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side - Articles List */}
        <div className="md:col-span-6 flex flex-col md:h-[500px] py-4">
          <div className="flex flex-col gap-4 md:gap-10 justify-center h-full">
            {articles.map((article, index) => {
              const isSelected = selectedIndex === index;

              return (
                <motion.button
                  key={article.slug}
                  onClick={() => selectArticle(index)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-[#6B7AE8]/10 border-2 border-[#6B7AE8]'
                      : 'bg-white border-2 border-gray-200 hover:border-[#6B7AE8]/50 hover:bg-gray-50'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                    isSelected ? 'text-[#6B7AE8]' : 'text-gray-900'
                  }`}>
                    {article.title}
                  </h4>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

    </Section>
  );
}
