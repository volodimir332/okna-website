"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Vlastní realizační tým",
    description: "Žádní subdodavatelé. Pracují jen naši zkušení řemeslníci, které osobně známe.",
  },
  {
    title: "Jedna odpovědná osoba",
    description: "Od začátku do konce komunikujete s jedním člověkem, který ví o všem.",
  },
  {
    title: "Hotovo v termínu",
    description: "Dodržujeme dohodnuté termíny. Pokud ne, kompenzujeme vám to.",
  },
  {
    title: "Pojištění odpovědnosti",
    description: "Jsme plně pojištění pro případ jakýchkoliv škod během realizace.",
  },
  {
    title: "Záruka 60 měsíců",
    description: "Na všechny práce poskytujeme nadstandardní záruku tři roky.",
  },
  {
    title: "Kvalitní materiály",
    description: "Pracujeme pouze s ověřenými značkami: RAKO, Geberit, Grohe.",
  },
];

export function Measurement() {
  return (
    <section id="zamereni" className="relative py-3 sm:py-4 md:py-6">
      {/* Thin white margins on sides */}
      <div className="px-2 md:px-3">
        <motion.div
          className="relative bg-[#1E1E1E] rounded-2xl sm:rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16">
            {/* Header - стacked on mobile, side by side on desktop */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-10 md:mb-16 lg:mb-20">
              <motion.h2
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-white leading-tight text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Proč si vybrat právě nás?
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-gray-400 text-xs sm:text-sm md:text-lg lg:text-xl max-w-lg text-center lg:text-right mt-3 sm:mt-3 lg:mt-0 lg:ml-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Jsme lokální specialisté, ne anonymní firma. Za každou prací stojíme osobně.
              </motion.p>
            </div>

            {/* Features Grid - 2 columns on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {/* Title */}
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
