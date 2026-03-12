"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Bezplatná schůzka",
    subtitle: "Přijedeme k vám, zaměříme prostor a vyslechneme vaše představy.",
  },
  {
    number: "02",
    title: "Výběr materiálu",
    subtitle: "Společně vybereme obklady, dlažbu nebo přírodní kámen přesně pro vás.",
  },
  {
    number: "03",
    title: "3D návrh zdarma",
    subtitle: "Do 24 hodin dostanete vizualizaci výsledku — ještě před zahájením prací.",
  },
  {
    number: "04",
    title: "Pevná cena",
    subtitle: "Připravíme nabídku bez skrytých příplatků. Cena se nemění.",
  },
  {
    number: "05",
    title: "Materiál zajistíme",
    subtitle: "Veškerý materiál objednáme a doručíme přesně na čas.",
  },
  {
    number: "06",
    title: "Předání díla",
    subtitle: "Tým odborníků provede práci precizně a předá vám čistý prostor.",
  },
];

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.4, 0.65, 0.8], [0, 0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.15, 0.4, 0.65, 0.8], [0.95, 1, 1, 0.97]);
  const y = useTransform(scrollYProgress, [0.15, 0.4], [60, 0]);

  return (
    <section ref={containerRef} className="relative pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16">
      <motion.div
        className="container-custom"
        style={{ opacity, scale, y }}
      >
        {/* Header */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 sm:mb-14 md:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Jak probíhá spolupráce
        </motion.h2>

        {/* Steps Grid — square-ish cards, staggered */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                className={`bg-[#F0F0F0] rounded-2xl p-5 sm:p-6 flex flex-col justify-between aspect-square ${isEven ? 'lg:-mt-4' : 'lg:mt-4'} ${isEven ? '-mt-2' : 'mt-2'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Number */}
                <span className="text-3xl sm:text-4xl font-bold text-gray-300">
                  {step.number}
                </span>

                {/* Content at bottom */}
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-snug">
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
