"use client";

import { motion } from "framer-motion";
import { Users, Shield, Clock, Award, Wrench, HeartHandshake } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";

const reasons = [
  {
    icon: Users,
    title: "Vlastní realizační tým",
    description: "Žádní subdodavatelé. Pracují jen naši zkušení řemeslníci, které osobně známe.",
  },
  {
    icon: HeartHandshake,
    title: "Jedna odpovědná osoba",
    description: "Od začátku do konce komunikujete s jedním člověkem, který ví o všem.",
  },
  {
    icon: Clock,
    title: "Hotovo v termínu",
    description: "Dodržujeme dohodnuté termíny. Pokud ne, kompenzujeme vám to.",
  },
  {
    icon: Shield,
    title: "Pojištění odpovědnosti",
    description: "Jsme plně pojištění pro případ jakýchkoliv škod během realizace.",
  },
  {
    icon: Award,
    title: "Záruka 60 měsíců",
    description: "Na všechny práce poskytujeme nadstandardní záruku tři roky.",
  },
  {
    icon: Wrench,
    title: "Kvalitní materiály",
    description: "Pracujeme pouze s ověřenými značkami: RAKO, Geberit, Grohe.",
  },
];

const partners = ["RAKO", "Geberit", "Grohe", "SIKO"];

export function WhyUs() {
  return (
    <Section id="proc-my" className="pb-12 md:pb-0">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#6B7AE8] mb-4 sm:mb-6 leading-tight">
          Proč si vybrat právě nás?
        </h2>
        <p className="text-base sm:text-lg text-gray-500">
          Jsme lokální specialisté, ne anonymní firma. Za každou prací stojíme osobně.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-3 sm:gap-6">
          {reasons.filter((_, i) => i % 2 === 0).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white ring-1 ring-gray-100 hover:ring-gray-200 hover:shadow-lg transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mb-3 sm:mb-5" strokeWidth={1.5} />
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column - Shifted Down */}
        <div className="flex flex-col gap-3 sm:gap-6 mt-8 sm:mt-16">
          {reasons.filter((_, i) => i % 2 !== 0).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white ring-1 ring-gray-100 hover:ring-gray-200 hover:shadow-lg transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mb-3 sm:mb-5" strokeWidth={1.5} />
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Partners */}
      <motion.div
        className="mt-16 pt-12 border-t border-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-center text-xs text-gray-400 mb-6">
          Pracujeme s materiály od ověřených výrobců
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-xl font-semibold text-gray-300 hover:text-gray-600 transition-colors"
            >
              {partner}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Highlight */}
      <motion.div
        className="mt-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative bg-gray-50 rounded-3xl p-8">
          <div className="absolute top-6 left-8 text-4xl text-gray-200 font-serif">
            "
          </div>
          <blockquote className="text-base text-gray-700 leading-relaxed mb-6 pt-6">
            Konečně firma, která dodržela termín i cenu. Pan technik vše vysvětlil,
            řemeslníci byli profesionální a úklid po sobě perfektní. Doporučuji všem!
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium">
              JN
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Jana Nováková</p>
              <p className="text-xs text-gray-400">Ostrava-Poruba</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reference Link */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.nejremeslnici.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Více recenzí na NejŘemeslníci.cz
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
}
