"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import Image from "next/image";

// Full headline for typewriter
const fullHeadline = "Precizní obklady\na přírodní kámen.";

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
    const totalLines = fullHeadline.split('\n').length;
    return (
      <>
        {lines.map((line, i) => {
          return (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <span className="relative">
      {renderText()}
      <motion.span
        className="inline-block w-[3px] h-[0.9em] bg-[#1A1A1A] ml-1 align-middle"
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
        src="/images/hero/hero-bg-v2.png"
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

      {/* Worker image — hidden on mobile, visible on desktop */}
      <motion.div
        className="absolute hidden sm:block sm:right-2 lg:right-4 xl:right-16 2xl:right-24 sm:bottom-0 z-20 pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Image
          src="/images/hero/worker-obk.png"
          alt="OBK pracovník"
          width={440}
          height={800}
          className="object-contain drop-shadow-2xl sm:w-[260px] md:w-[300px] lg:w-[440px] h-auto"
          priority
        />
      </motion.div>

      {/* Content — vertically centered, above worker on mobile */}
      <div className="relative z-10 container-custom px-4 sm:px-6 min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center flex flex-col items-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-5 sm:mb-6 font-bold leading-[1.1] text-[#1A1A1A]" style={{ fontSize: 'clamp(2.75rem, 5vw, 5.5rem)' }}>
            <span className="sr-only">Precizní obklady a přírodní kámen.</span>

            <span aria-hidden="true"><TypewriterHeadline delay={300} /></span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-lg px-2 sm:px-0">
            Pevná cena. Jasný termín. Moravskoslezský kraj.
          </p>

          <div className="flex flex-row gap-3 sm:gap-5 justify-center sm:px-0 mt-10 sm:mt-14 md:mt-20">
            <Button
              variant="secondary"
              size="md"
              className="text-lg sm:text-xl px-7 sm:px-10 py-3.5 sm:py-5 !bg-white !text-[#1A1A1A] !border-white/80 hover:!bg-white/90 shadow-lg"
              onClick={() => scrollToSection("#kviz")}
            >
              Spočítat cenu
              <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="text-lg sm:text-xl px-6 sm:px-8 py-3.5 sm:py-5 !text-black !border-black/30 hover:!bg-black/10"
              onClick={() => scrollToSection("#galerie")}
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-black" />
              <span className="hidden sm:inline">Zobrazit realizace</span>
              <span className="sm:hidden">Realizace</span>
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
