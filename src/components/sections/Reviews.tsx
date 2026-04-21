"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export function Reviews() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nově sbíráme recenze na Google
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Po 15+ letech řemeslné práce v Ostravě začínáme být aktivní online.
            Pokud jste byli našimi klienty, budeme vděční za vaši zpětnou
            vazbu na Google — pomůže to dalším lidem v Moravskoslezském kraji
            vybrat spolehlivého obkladače.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <a
              href="https://g.page/r/obklady-ostrava/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6B7AE8] text-white rounded-xl font-semibold hover:bg-[#5A68D6] transition-colors"
            >
              <Star className="w-4 h-4 fill-white" />
              Ohodnotit nás na Google
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a
              href="/realizace"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:border-gray-900 transition-colors"
            >
              Prohlédnout naše realizace
            </a>
          </div>

          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Věříme v transparentnost. Místo vymyšlených citátů vám raději
            ukážeme naši práci — přes 500 dokončených projektů v Ostravě
            a okolí za posledních 15+ let.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
