"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Upload, RefreshCw } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

// Demo images - будуть замінені на реальні
const demoTransformations = [
  {
    id: 1,
    before: "Stará umakartová koupelna",
    after: "Moderní design s walk-in sprchou",
    location: "Ostrava-Poruba",
  },
  {
    id: 2,
    before: "Zastaralé obklady",
    after: "Velkoformátová dlažba",
    location: "Ostrava-Jih",
  },
  {
    id: 3,
    before: "Klasická vana",
    after: "Prostorný sprchový kout",
    location: "Havířov",
  },
];

export function AIDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const handleNext = () => {
    setShowAfter(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % demoTransformations.length);
    }, 300);
  };

  const currentDemo = demoTransformations[activeIndex];

  return (
    <Section id="ai-demo" theme="secondary">
      <SectionHeader
        title="Podívejte se, jak může vypadat vaše nová koupelna"
        subtitle="Ukázka transformace před a po. Skutečné realizace z Ostravy a okolí."
      />

      <div className="max-w-4xl mx-auto">
        {/* Main Demo Card */}
        <motion.div
          className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Image Container */}
          <div className="relative aspect-video bg-[var(--bg-dark)]">
            <AnimatePresence mode="wait">
              {!showAfter ? (
                <motion.div
                  key="before"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Placeholder - будe замінено на реальне фото */}
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-4xl">🏚️</span>
                    </div>
                    <p className="text-xl font-semibold mb-2">PŘED</p>
                    <p className="text-white/60">{currentDemo.before}</p>
                    <p className="text-sm text-white/40 mt-4">
                      Vložte fotky do public/images/gallery/pred
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-warm)]/20"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Placeholder - будe замінено на реальне фото */}
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <p className="text-xl font-semibold mb-2">PO</p>
                    <p className="text-white/80">{currentDemo.after}</p>
                    <p className="text-sm text-white/40 mt-4">
                      Vložte fotky do public/images/gallery/po
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Location Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
              📍 {currentDemo.location}
            </div>

            {/* Toggle Button */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button
                variant={showAfter ? "primary" : "dark"}
                size="md"
                onClick={() => setShowAfter(!showAfter)}
              >
                {showAfter ? (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    Zobrazit PŘED
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Zobrazit PO
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border)]">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {demoTransformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setShowAfter(false);
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-[var(--accent-blue)]"
                      : "bg-[var(--border)] hover:bg-[var(--text-tertiary)]"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button variant="secondary" size="sm" onClick={handleNext}>
              Další ukázka
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Chcete vidět návrh pro vaši koupelnu?
          </p>
          <Button
            variant="gradient-outline"
            size="md"
            className="text-sm sm:text-base"
            onClick={() => document.querySelector("#kviz")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Spočítat cenu a domluvit zaměření</span>
            <span className="sm:hidden">Spočítat cenu</span>
          </Button>
        </motion.div>

        {/* Note */}
        <p className="text-center text-sm text-[var(--text-tertiary)] mt-6">
          * Ukázky jsou orientační. Konečné řešení vzniká po odborném zaměření.
        </p>
      </div>
    </Section>
  );
}
