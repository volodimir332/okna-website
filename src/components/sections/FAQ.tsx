"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";

const faqs = [
  {
    question: "Za jak dlouho od první poptávky mohu očekávat realizaci?",
    answer: "Obvykle začínáme realizaci do 2–4 týdnů od schválení nabídky. Záleží na aktuální vytíženosti a složitosti projektu. Po zaměření vám sdělíme přesný termín zahájení prací.",
  },
  {
    question: "Jak dlouho trvá kompletní rekonstrukce koupelny?",
    answer: "Doba realizace závisí na rozsahu prací. Základní obnova bez bourání trvá 5–7 dní. Kompletní rekonstrukce včetně bourání umakartu obvykle 10–12 pracovních dní. Prémiové projekty s designovými prvky mohou trvat déle.",
  },
  {
    question: "Zajišťujete i bourání a odvoz starého materiálu?",
    answer: "Ano, kompletně. Zajistíme bourací práce, odvoz a likvidaci veškerého odpadu včetně starých obkladů, sanity a umakartu. Vše je zahrnuto v ceně realizace.",
  },
  {
    question: "Kdy budu vědět přesnou celkovou cenu realizace?",
    answer: "Přesnou cenu vám sdělíme po odborném zaměření, které provede náš technik přímo u vás doma. Zaměření je zcela zdarma a nezávazné.",
  },
  {
    question: "Bude v bytě po dobu rekonstrukce funkční elektrika a voda?",
    answer: "Ano, zajistíme provizorní napojení elektřiny a vody tak, abyste mohli využívat ostatní části bytu. Krátkodobé odstávky jsou nutné pouze při napojování nových rozvodů.",
  },
  {
    question: "Můžeme se domluvit na změnách v průběhu stavby?",
    answer: "Menší změny jsou možné i během realizace. U větších úprav záleží na fázi projektu. Doporučujeme všechny detaily promyslet při zaměření, abychom předešli zpoždění a vícenákladům.",
  },
  {
    question: "Můžeme po dobu realizace bydlet doma?",
    answer: "Ano, ve většině případů je to možné. Práce probíhají pouze v prostoru koupelny. Zajistíme zakrytí a ochranu ostatních prostor proti prachu a nečistotám.",
  },
  {
    question: "Je vaše firma pojištěna proti poškození majetku?",
    answer: "Ano, jsme plně pojištění pro případ jakýchkoliv škod během realizace. Pojištění odpovědnosti kryje případné škody na vašem majetku i v sousedních bytech.",
  },
  {
    question: "Jakou záruku poskytujete na odvedenou práci?",
    answer: "Na všechny práce poskytujeme nadstandardní záruku 60 měsíců. Záruka se vztahuje na veškeré instalatérské, obkladačské a stavební práce.",
  },
  {
    question: "Pracujete i o víkendech?",
    answer: "Standardně pracujeme v pracovních dnech. Zaměření však můžeme po dohodě provést i o víkendu. V případě urgentních projektů lze domluvit i víkendové práce.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" theme="light">
      <SectionHeader
        title="Nejčastější dotazy"
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
