"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Bezplatná schůzka",
    subtitle: "Přijedeme k vám, zaměříme prostor a vyslechneme vaše představy.",
    image: "/images/bathroom/IMG_6509.JPG",
  },
  {
    number: "02",
    title: "Výběr materiálu",
    subtitle: "Společně vybereme obklady, dlažbu nebo přírodní kámen přesně pro vás.",
    image: "/images/robota/IMG_3892.jpg",
  },
  {
    number: "03",
    title: "3D návrh zdarma",
    subtitle: "Do 24 hodin dostanete vizualizaci výsledku — ještě před zahájením prací.",
    image: "/images/bathroom/IMG_6511.JPG",
  },
  {
    number: "04",
    title: "Pevná cena",
    subtitle: "Připravíme nabídku bez skrytých příplatků. Cena se nemění.",
    image: "/images/kamen/kamen-10.jpg",
  },
  {
    number: "05",
    title: "Materiál zajistíme",
    subtitle: "Veškerý materiál objednáme a doručíme přesně na čas.",
    image: "/images/kamen/kamen-3.jpg",
  },
  {
    number: "06",
    title: "Předání hotového díla",
    subtitle: "Tým odborníků provede práci precizně a předá vám čistý prostor.",
    image: "/images/kamen/kamen-7.jpg",
  },
];

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate width from 90% to 100% as block enters
  const width = useTransform(scrollYProgress, [0.15, 0.45], ["90%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0.15, 0.45], ["32px", "16px"]);
  // Fade in later — starts at 0.25, fully visible at 0.4
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.4, 0.65, 0.8], [0, 0, 1, 1, 0]);
  // Scale up from smaller
  const scale = useTransform(scrollYProgress, [0.15, 0.4, 0.65, 0.8], [0.95, 1, 1, 0.97]);
  // Y offset for parallax feel
  const y = useTransform(scrollYProgress, [0.15, 0.4], [60, 0]);
  // Asymmetric mask — top fades more, bottom fades less when entering/leaving
  const maskTop = useTransform(scrollYProgress, [0.15, 0.3, 0.4, 0.65, 0.8], [40, 20, 0, 0, 30]);
  const maskBottom = useTransform(scrollYProgress, [0.15, 0.3, 0.4, 0.65, 0.8], [20, 10, 0, 0, 15]);
  const maskImage = useTransform(
    [maskTop, maskBottom],
    ([top, bottom]: number[]) =>
      top === 0 && bottom === 0
        ? 'none'
        : `linear-gradient(to bottom, transparent 0%, black ${top}%, black ${100 - bottom}%, transparent 100%)`
  );

  return (
    <section ref={containerRef} className="relative pt-16 sm:pt-24 md:pt-32 pb-4 sm:pb-8 md:pb-12">
      <div className="flex justify-center">
        <motion.div
          className="relative overflow-hidden w-full"
          style={{
            opacity,
            scale,
            y,
          }}
        >
          {/* Header */}
          <div className="px-4 pt-10 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16">
            <motion.h2
              className="text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 sm:mb-12 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Jak probíhá<br className="sm:hidden" /><span className="whitespace-nowrap"> spolupráce</span>
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
                  className={`relative bg-white shadow-md group h-[260px] sm:h-auto overflow-hidden rounded-xl lg:rounded-2xl ${isEven ? 'lg:-mt-6' : 'lg:mt-6'} ${isEven ? '-mt-3' : 'mt-3'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Image Container: Absolute full height on mobile, Aspect ratio on desktop */}
                  <div className="absolute inset-0 sm:relative sm:aspect-[4/3] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={`${step.title} - obklady, dlažby a kámen krok ${step.number}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                    {/* Number: Top-left on mobile, Bottom-left on desktop */}
                    <div className="absolute top-3 left-3 sm:bottom-3 sm:left-3 text-white/80 text-4xl sm:text-3xl font-bold z-10">
                      {step.number}
                    </div>

                    {/* Smooth Gradient Transition (Mobile & Desktop) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 sm:h-24 bg-gradient-to-t from-white via-white/50 to-transparent z-0" />

                    {/* Additional Mobile Strong Gradient for text readability - ONLY BOTTOM PART */}
                    <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white via-white/90 to-transparent sm:hidden z-0" />
                  </div>

                  {/* Content: Absolute bottom on mobile, Static flow on desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:static sm:p-4 md:p-5 z-20">
                    <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-xs md:text-sm mt-1 leading-snug line-clamp-1">
                      {step.subtitle}
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
