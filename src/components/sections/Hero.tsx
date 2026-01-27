"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShowerHead } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

// Full headline for typewriter
const fullHeadline = "Rekonstrukce koupelny v Ostravě bez stresu. Na\u00A0klíč.";

// Typewriter component for full headline with colored parts
function TypewriterHeadline({ delay = 0 }: { delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex <= fullHeadline.length) {
          setDisplayText(fullHeadline.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          // Hide cursor after typing is done
          setTimeout(() => setShowCursor(false), 500);
        }
      }, 50); // Speed of typing

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  // Split text to color "bez stresu" part
  const renderColoredText = () => {
    const bezStresuStart = "Rekonstrukce koupelny v Ostravě ".length;
    const bezStresuEnd = bezStresuStart + "bez stresu".length;

    const part1 = displayText.slice(0, bezStresuStart);
    const part2 = displayText.slice(bezStresuStart, bezStresuEnd);
    const part3 = displayText.slice(bezStresuEnd);

    return (
      <>
        <span>{part1}</span>
        <span className="text-gradient">{part2}</span>
        <span>{part3}</span>
      </>
    );
  };

  return (
    <span className="relative">
      {renderColoredText()}
      {showCursor && isTyping && (
        <motion.span
          className="inline-block w-[3px] h-[0.9em] bg-[var(--accent-warm)] ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
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
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">

      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Mobile: image first, then content. Desktop: side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-16 items-center">

          {/* Visual - shown first on mobile */}
          <motion.div
            className="relative order-1 lg:order-2 -mt-4 sm:mt-0 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 3D Bathroom Image - increased by 15% on mobile */}
            <div className="relative mx-auto max-w-[320px] sm:max-w-[400px] lg:max-w-none">
              <img
                src="/images/hero/bathroom-3d.png"
                alt="3D vizualizace koupelny"
                className="w-full h-auto object-contain lg:max-w-[600px] mx-auto"
              />
            </div>

            {/* Floating Stats Card - thick border */}
            <motion.div
              className="absolute bottom-2 left-2 sm:bottom-12 sm:left-4 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-4 shadow-lg border-2 border-[#C7D2FE]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-1.5 sm:gap-3">
                <ShowerHead className="w-5 h-5 sm:w-10 sm:h-10 text-[#6B7AE8]" />
                <div>
                  <p className="text-sm sm:text-2xl font-bold text-[var(--text-primary)]">200+</p>
                  <p className="text-[8px] sm:text-sm text-[var(--text-secondary)]">realizací</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Guarantee Card - thick border */}
            <motion.div
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-4 shadow-lg border-2 border-[#C7D2FE]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-[8px] sm:text-sm text-[var(--text-secondary)]">Záruka</p>
              <p className="text-xs sm:text-xl font-bold text-[var(--text-primary)]">60 měsíců</p>
            </motion.div>
          </motion.div>

          {/* Content - shown second on mobile */}
          <motion.div
            className="text-center lg:text-left flex flex-col order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading with Typewriter Effect - moved up */}
            <h1 className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <TypewriterHeadline delay={300} />
            </h1>

            {/* Subheading - smaller */}
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
              Výsledek uvidíte dřív, než začneme. Pevná cena. Jasný termín.
              Vlastní realizační tým bez subdodavatelů.
            </p>

            {/* CTAs - closer to center on mobile */}
            <div className="flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start px-6 sm:px-0 mt-6 sm:mt-10 md:mt-12">
              <Button
                variant="violet-outline"
                size="sm"
                className="text-xs sm:text-sm"
                onClick={() => scrollToSection("#kviz")}
              >
                Spočítat cenu
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="text-xs sm:text-sm"
                onClick={() => scrollToSection("#galerie")}
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Zobrazit realizace</span>
                <span className="sm:hidden">Realizace</span>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
