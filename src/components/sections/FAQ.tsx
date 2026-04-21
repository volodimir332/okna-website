"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";

const faqs = [
  {
    question: "Kolik stojí rekonstrukce koupelny v Ostravě?",
    answer:
      "V Ostravě a okolí se cena kompletní rekonstrukce panelové koupelny pohybuje od 65 000 Kč za práci bez materiálu u malé koupelny (do 4 m²). Střední koupelna 4–6 m² stojí 75 000–110 000 Kč. S materiálem a sanitou celkem 115 000–220 000 Kč. Kalkulaci zpracujeme do 48 hodin od zaměření.",
  },
  {
    question: "Jak dlouho trvá pokládka obkladů v Ostravě?",
    answer:
      "Pokládka obkladů v koupelně 4–6 m² trvá 3–4 pracovní dny (standardní formát 30×60 cm). Velkoformátové obklady 60×120 cm a větší 4–6 dní kvůli technice buttering-floating a nivelaci. Součástí je lepení, řezání a spárování.",
  },
  {
    question: "Pracujete i o víkendu?",
    answer:
      "Standardně pracujeme Po–Pá 8:00–18:00. Zaměření v Ostravě provedeme po dohodě i o víkendu zdarma. U urgentních projektů jsme schopni domluvit i víkendové práce za příplatek.",
  },
  {
    question: "Jaké dáváte záruky na práci?",
    answer:
      "Na všechny obkladačské a rekonstrukční práce poskytujeme nadstandardní záruku 60 měsíců (5 let). Záruka pokrývá odlepení obkladů, praskliny ve spárách, netěsnost hydroizolace. Jsme plně pojištění pro případ škod.",
  },
  {
    question: "Pracujete i mimo Ostravu?",
    answer:
      "Ano. Pokrýváme celý Moravskoslezský kraj — Havířov, Karviná, Frýdek-Místek, Opava, Třinec, Orlová, Bohumín, Nový Jičín, Kopřivnice. Dojezd do 50 km od Ostravy neúčtujeme. Dále po dohodě.",
  },
  {
    question: "Jak dlouho dopředu se mám objednat?",
    answer:
      "Aktuální čekací doba na zahájení prací v Ostravě je 3–5 týdnů. Zaměření a písemnou kalkulaci zpracujeme do týdne od zavolání. Doporučujeme vybrat materiál co nejdřív — dodací lhůty obkladů bývají 1–3 týdny.",
  },
  {
    question: "Kolik stojí pokládka dlažby v Ostravě?",
    answer:
      "Standardní dlažba 60×60 cm 550–800 Kč/m² (včetně vyrovnání podkladu a spárování). Velkoformát 120×120 cm 800–1 200 Kč/m². Dlažba s podlahovým topením 950–1 400 Kč/m². Ceny bez DPH a bez materiálu.",
  },
  {
    question: "Pokládáte i přírodní kámen?",
    answer:
      "Ano. V Ostravě a okolí pokládáme žulu, mramor, travertin, břidlici i vápenec. Ceny pokládky 900–1 600 Kč/m² podle druhu kamene a náročnosti. Nabízíme kuchyňské desky, parapety, obložení krbů, fasády i obklady koupelen.",
  },
  {
    question: "Zajišťujete i bourání a odvoz suti?",
    answer:
      "Ano, kompletně. V Ostravě přistavíme kontejner k domu, bouráme umakartová jádra, staré obklady i dlažby. Suť (typicky 200–400 kg) odvezeme na skládku. Vše v ceně rekonstrukce.",
  },
  {
    question: "Máte vzorkovnu v Ostravě?",
    answer:
      "Máme partnerské vzorkovny — SIKO Ostrava (Rudná), Koupelny Ptáček Ostrava-Zábřeh, StavebninyPRO Poruba. Rádi vás na výběr obkladů osobně doprovodíme a poradíme s výběrem formátu, odstínu i protiskluzu.",
  },
];

// FAQPage Schema.org for Rich Snippets
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" theme="light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SectionHeader
        title="Nejčastější dotazy — obklady Ostrava"
      />

      <div className="max-w-4xl mx-auto space-y-2 sm:space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="border-b border-gray-200 pb-3 sm:pb-5"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between gap-4 sm:gap-8 text-left group"
            >
              <span className="text-sm sm:text-lg md:text-xl text-gray-900 group-hover:text-[#6B7AE8] transition-colors">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${openIndex === index ? 'text-[#6B7AE8]' : 'text-gray-400'}`} />
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="pt-3 sm:pt-6 pr-8 sm:pr-16">
                    <p className="text-gray-500 text-sm sm:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

      </div>
    </Section>
  );
}
