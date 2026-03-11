"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import Image from "next/image";

// Full headline for typewriter
const fullHeadline = "Obklady, dlažby a kámen\nv Ostravě. Na klíč.";

function TypewriterHeadline({ delay = 0 }: { delay?: number }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex <= fullHeadline.length) {
          setDisplayText(fullHeadline.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  const renderText = () => {
    const lines = displayText.split('\n');
    return (
      <>
        {lines.map((line, i) => (
          <span key={i} className={i > 0 ? 'text-gradient' : undefined} style={i > 0 ? { WebkitTextFillColor: 'transparent' } : undefined}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </>
    );
  };

  return (
    <span className="relative">
      {renderText()}
      <motion.span
        className="inline-block w-[3px] h-[0.9em] bg-[#6B7AE8] ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background image — under the header */}
      <Image
        src="/images/hero/hero-bg.png"
        alt="Moderní koupelna s obklady a přírodním kamenem - realizace Ostrava"
        fill
        className="object-cover object-top"
        quality={100}
        priority
        sizes="100vw"
      />

      {/* Dark overlay 10% */}
      <div className="absolute inset-0 bg-black/10 z-[0] pointer-events-none" />

      {/* Fade to white at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to top, #FAFAFA 0%, transparent 100%)' }}
      />

      {/* Worker image — right side, bigger on mobile */}
      <motion.div
        className="absolute right-0 sm:right-2 lg:right-4 xl:right-16 2xl:right-24 bottom-12 sm:bottom-0 z-20 pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Image
          src="/images/hero/worker-obk.png"
          alt="OBK pracovník"
          width={440}
          height={800}
          className="object-contain drop-shadow-2xl w-[280px] sm:w-[260px] md:w-[300px] lg:w-[440px] h-auto"
          priority
        />
      </motion.div>

      {/* Content — centered on all screens */}
      <div className="relative z-10 container-custom px-4 sm:px-6 min-h-screen flex items-start sm:items-center justify-center pt-28 sm:pt-0">
        <motion.div
          className="text-center flex flex-col items-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-3 sm:mb-4 font-bold leading-[1.1] text-white drop-shadow-lg" style={{ fontSize: 'clamp(2.6rem, 5vw, 5.5rem)' }}>
            <span className="sr-only">Obklady, dlažby a kámen v Ostravě. Na klíč.</span>
            <span aria-hidden="true"><TypewriterHeadline delay={300} /></span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-lg px-2 sm:px-0 drop-shadow-md">
            Výsledek uvidíte dřív, než začneme. Pevná cena. Jasný termín.
            Vlastní realizační tým bez subdodavatelů.
          </p>

          <div className="flex flex-row gap-3 sm:gap-5 justify-center sm:px-0 mt-8 sm:mt-12 md:mt-16">
            <Button
              variant="violet"
              size="md"
              className="text-lg sm:text-xl px-7 sm:px-10 py-3.5 sm:py-5"
              onClick={() => scrollToSection("#kviz")}
            >
              Spočítat cenu
              <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="text-lg sm:text-xl px-6 sm:px-8 py-3.5 sm:py-5"
              onClick={() => scrollToSection("#galerie")}
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Zobrazit realizace</span>
              <span className="sm:hidden">Realizace</span>
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
