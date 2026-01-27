"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Nezávazná schůzka",
    description: "Domluvíme si schůzku přímo u vás. Přijedeme, zaměříme prostory a probereme vaše představy v pohodlí vašeho domova.",
    image: "/images/bathroom/IMG_6509.JPG",
  },
  {
    number: "02",
    title: "Inspirace a představy",
    description: "Ukažte nám fotky, inspiraci z internetu a plánek současné koupelny. Vymyslíme design přesně pro vás.",
    image: "/images/bathroom/IMG_6510.JPG",
  },
  {
    number: "03",
    title: "3D vizualizace",
    description: "Do druhého dne od zaměření pro vás připravíme profesionální 3D návrh vaší nové koupelny a zašleme vám ho online.",
    image: "/images/bathroom/IMG_6511.JPG",
  },
  {
    number: "04",
    title: "Cenová nabídka",
    description: "Jakmile odsouhlasíte návrh, připravíme pro vás cenovou nabídku kompletního vybavení od podlahové dlažby po zrcadlo.",
    image: "/images/bathroom/IMG_6512.JPG",
  },
  {
    number: "05",
    title: "Materiál až ke dveřím",
    description: "Veškerý materiál pro vaši vysněnou koupelnu vám doručíme přesně na čas, kdy jej budete potřebovat.",
    image: "/images/bathroom/IMG_6513.JPG",
  },
  {
    number: "06",
    title: "Realizace na klíč",
    description: "Náš tým profesionálů provede kompletní rekonstrukci. Pevná cena, jasný termín, záruka 60 měsíců.",
    image: "/images/bathroom/IMG_6518.JPG",
  },
];

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Animate width from 95% to 100% as user scrolls
  const width = useTransform(scrollYProgress, [0, 1], ["95%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "16px"]);

  return (
    <section ref={containerRef} className="relative py-4 sm:py-8 md:py-12">
      <div className="flex justify-center">
        <motion.div
          className="relative bg-[#1E1E1E] overflow-hidden"
          style={{
            width,
            borderRadius,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="px-4 pt-10 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16">
            <motion.h2
              className="text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 sm:mb-12 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Vaše cesta ke koupelně<br className="sm:hidden" /><span className="whitespace-nowrap"> na míru</span>
            </motion.h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 px-4 lg:px-8 pb-8 lg:pb-12">
            {steps.map((step, index) => {
              // Staggered effect: даємо різну висоту для кожного блоку
              // Парні індекси (0, 2, 4) - вище, непарні (1, 3, 5) - нижче
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className={`relative bg-[#1E1E1E] group h-[260px] sm:h-auto overflow-hidden rounded-xl lg:rounded-2xl ${isEven ? 'lg:-mt-6' : 'lg:mt-6'} ${isEven ? '-mt-3' : 'mt-3'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Image Container: Absolute full height on mobile, Aspect ratio on desktop */}
                  {/* Image Container: Absolute full height on mobile, Aspect ratio on desktop */}
                  <div className="absolute inset-0 sm:relative sm:aspect-[4/3] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                    {/* Number: Top-left on mobile, Bottom-left on desktop */}
                    <div className="absolute top-3 left-3 sm:bottom-3 sm:left-3 text-white/60 sm:text-white/80 text-4xl sm:text-3xl font-bold z-10">
                      {step.number}
                    </div>

                    {/* Smooth Gradient Transition (Mobile & Desktop) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 sm:h-24 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/50 to-transparent z-0" />

                    {/* Additional Mobile Strong Gradient for text readability - ONLY BOTTOM PART */}
                    <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/90 to-transparent sm:hidden z-0" />
                  </div>

                  {/* Content: Absolute bottom on mobile, Static flow on desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:static sm:p-4 md:p-5 z-20">
                    <h3 className="text-lg sm:text-base md:text-lg font-bold text-[#C7D2FE] mb-2 sm:mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-xs md:text-sm text-gray-300 sm:text-gray-400 leading-relaxed sm:leading-relaxed line-clamp-4 sm:line-clamp-none">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
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
