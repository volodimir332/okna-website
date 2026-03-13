"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Vlastní realizační tým",
    description: "Žádní subdodavatelé. Pracují výhradně naši zkušení řemeslníci — obkladači i kameníci s mnohaletou praxí. Každý člen týmu prošel důkladným školením a pracuje s precizností, na kterou se můžete spolehnout.",
  },
  {
    title: "Jedna osoba, celý projekt",
    description: "Od prvního hovoru až po předání klíčů komunikujete s jedním člověkem. Váš osobní projektový manažer řeší vše — materiály, harmonogram i kontrolu kvality. Žádné zmatky, žádné ztracené informace.",
  },
  {
    title: "Výsledek vidíte předem",
    description: "Ještě před zahájením prací dostanete 3D vizualizaci zdarma. Uvidíte přesně, jak bude váš prostor vypadat — barvy, rozložení i detaily. Žádná překvapení, jen jistota správného rozhodnutí.",
  },
  {
    title: "Pevná cena a termín",
    description: "Cena se po podpisu smlouvy nemění — žádné skryté příplatky ani dodatečné náklady. Termín dodržíme, nebo kompenzujeme. Pracujeme transparentně a férově od začátku do konce.",
  },
  {
    title: "Prémiové materiály",
    description: "Používáme pouze ověřené materiály od předních evropských výrobců — Mapei, Rako, Schlüter. Správný materiál znamená dokonalý výsledek, který vydrží desítky let bez problémů.",
  },
  {
    title: "Čistota a pořádek na stavbě",
    description: "Po každém pracovním dni uklízíme. Staveniště chráníme fóliemi, odpad odvážíme průběžně. Předáváme čistý prostor připravený k okamžitému užívání — bez prachu a nepořádku.",
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
                Působíme v Moravskoslezském a Olomouckém kraji.
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
                  {/* Number */}
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/20 mb-2 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

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
