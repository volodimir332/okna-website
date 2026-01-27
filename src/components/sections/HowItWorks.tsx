"use client";

import { motion } from "framer-motion";
import { Calculator, Ruler, Hammer, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";

const steps = [
  {
    icon: Calculator,
    number: "01",
    title: "Orientační cena",
    description:
      "Vyplňte krátký dotazník a během minuty získáte orientační rozpočet vaší nové koupelny.",
    highlight: "Zdarma a nezávazně",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Odborné zaměření",
    description:
      "Technik přijede k vám domů, vše zaměří, navrhne řešení a vysvětlí všechny možnosti.",
    highlight: "1 500 Kč (odečítá se při realizaci)",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Realizace na klíč",
    description:
      "Vlastní realizační tým provede kompletní rekonstrukci. Pevná cena, jasný termín.",
    highlight: "Záruka 60 měsíců",
  },
];

export function HowItWorks() {
  return (
    <Section id="jak-to-funguje">
      <SectionHeader
        title="3 jednoduché kroky k nové koupelně"
        subtitle="Bez stresu, bez skrytých nákladů, bez překvapení."
      />

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Simple icon - violet color */}
            <step.icon className="w-8 h-8 text-[#6B7AE8] mb-5 mx-auto md:mx-0" strokeWidth={1.5} />

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-base text-gray-500 mb-4 leading-relaxed">
              {step.description}
            </p>

            {/* Highlight - violet checkmark */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 justify-center md:justify-start">
              <Check className="w-4 h-4 text-[#6B7AE8]" />
              {step.highlight}
            </div>
          </motion.div>
        ))}
      </div>

    </Section>
  );
}
