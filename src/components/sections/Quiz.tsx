"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";

const questions = [
  {
    id: 1,
    question: "Jaká je velikost vaší koupelny?",
    options: [
      { value: "small", label: "Do 4 m²", priceMultiplier: 0.7 },
      { value: "medium", label: "4 – 6 m²", priceMultiplier: 1 },
      { value: "large", label: "6 – 10 m²", priceMultiplier: 1.4 },
      { value: "xlarge", label: "Nad 10 m²", priceMultiplier: 1.8 },
    ],
  },
  {
    id: 2,
    question: "O jaký typ rekonstrukce máte zájem?",
    options: [
      { value: "partial", label: "Částečná", priceMultiplier: 0.6 },
      { value: "complete", label: "Kompletní", priceMultiplier: 1 },
      { value: "luxury", label: "Prémiová", priceMultiplier: 1.5 },
    ],
  },
  {
    id: 3,
    question: "Jaký styl koupelny preferujete?",
    options: [
      { value: "modern", label: "Moderní", priceMultiplier: 1 },
      { value: "classic", label: "Klasický", priceMultiplier: 1.1 },
      { value: "industrial", label: "Industriální", priceMultiplier: 1.2 },
      { value: "natural", label: "Přírodní", priceMultiplier: 1.15 },
    ],
  },
  {
    id: 4,
    question: "Plánujete vyměnit sanitu?",
    options: [
      { value: "all", label: "Kompletně vše", priceMultiplier: 1.3 },
      { value: "partial", label: "Jen některé", priceMultiplier: 1.1 },
      { value: "none", label: "Nechám stávající", priceMultiplier: 0.8 },
    ],
  },
  {
    id: 5,
    question: "Preferujete vanu nebo sprchový kout?",
    options: [
      { value: "bath", label: "Vana", priceMultiplier: 1.1 },
      { value: "shower", label: "Sprchový kout", priceMultiplier: 1 },
      { value: "both", label: "Obojí", priceMultiplier: 1.3 },
    ],
  },
  {
    id: 6,
    question: "Potřebujete nové rozvody vody?",
    options: [
      { value: "yes", label: "Ano, kompletně", priceMultiplier: 1.2 },
      { value: "partial", label: "Částečně", priceMultiplier: 1.1 },
      { value: "no", label: "Ne", priceMultiplier: 1 },
    ],
  },
  {
    id: 7,
    question: "Kdy plánujete rekonstrukci?",
    options: [
      { value: "asap", label: "Co nejdříve", priceMultiplier: 1 },
      { value: "soon", label: "Do 3 měsíců", priceMultiplier: 1 },
      { value: "later", label: "Do půl roku", priceMultiplier: 1 },
      { value: "planning", label: "Jen se rozhlížím", priceMultiplier: 1 },
    ],
  },
];

const BASE_PRICE = 55000;

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentStep];

  const calculatedPrice = useMemo(() => {
    let price = BASE_PRICE;
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question?.options.find(o => o.value === answerValue);
      if (option) {
        price *= option.priceMultiplier;
      }
    });
    return Math.round(price / 1000) * 1000;
  }, [answers]);

  const handleSelectOption = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  const scrollToContact = () => {
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('cs-CZ') + ' Kč';
  };

  return (
    <section id="kviz" className="py-20 md:py-24 bg-[#FAFAFA] min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-3 sm:px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-4 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-1 sm:mb-2">
            Spočítejte si svou koupelnu
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Odpovězte na pár otázek a připravíme vám nezávaznou nabídku
          </p>
        </motion.div>

        {/* Step Indicator - Circles connected by lines */}
        <div className="mb-6 sm:mb-10 max-w-xl mx-auto">
          <div className="flex items-center justify-between px-2">
            {questions.map((_, index) => {
              const isCompleted = index < currentStep || isComplete;
              const isCurrent = index === currentStep && !isComplete;
              const isLast = index === questions.length - 1;

              return (
                <div key={index} className="flex items-center flex-1 last:flex-none">
                  {/* Circle */}
                  <button
                    onClick={() => handleStepClick(index)}
                    disabled={index > currentStep}
                    className={`relative z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[10px] sm:text-sm font-semibold transition-all duration-300 flex-shrink-0 ${isCompleted
                      ? 'bg-[#86EFAC] text-gray-700 cursor-pointer hover:bg-[#6EE7A0]'
                      : isCurrent
                        ? 'bg-[#86EFAC] text-gray-700'
                        : 'bg-white border-2 border-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    {index + 1}
                  </button>

                  {/* Line between circles */}
                  {!isLast && (
                    <div className="flex-1 h-0.5 mx-0.5 sm:mx-1 relative">
                      <div className="absolute inset-0 bg-gray-200" />
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-[#86EFAC]"
                        initial={{ width: 0 }}
                        animate={{
                          width: index < currentStep || isComplete ? '100%' : '0%'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
              className="min-h-[220px] sm:min-h-[320px] flex flex-col items-center"
            >
              {/* Question */}
              <div className="text-center mb-6 sm:mb-10 max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#6B7AE8] leading-tight">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Answer Options - Column on mobile, Row on desktop */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-6 px-4 w-full sm:w-auto">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestion.id] === option.value;

                  // Пастельні кольори для обводки
                  const borderColors = [
                    'border-[#C7D2FE]', // Фіолетовий
                    'border-[#FDE68A]', // Кремовий/Жовтий
                    'border-[#86EFAC]', // Салатовий
                    'border-[#FDA4AF]', // Рожевий (якщо є 4-й варіант)
                  ];
                  const borderColor = borderColors[index % borderColors.length];

                  return (
                    <Button
                      key={option.value}
                      variant="violet"
                      onClick={() => handleSelectOption(currentQuestion.id, option.value)}
                      className={`flex-shrink-0 w-[200px] sm:w-auto min-w-[200px] sm:min-w-[140px] shadow-sm border-4 ${borderColor} ${isSelected ? 'ring-2 ring-[#6B7AE8] scale-105' : ''
                        }`}
                      style={{
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        fontSize: '16px',
                      }}
                    >
                      {option.label}
                    </Button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-center mt-4 sm:mt-12">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${currentStep === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  Zpět
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              {/* Price Display */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-3">Orientační cena práce (bez materiálu)</p>
                <p className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                  cca {formatPrice(calculatedPrice)}
                </p>
                <p className="text-gray-400 text-xs">
                  * Cena bez DPH a bez materiálu. Přesnou kalkulaci připravíme po zaměření.
                </p>
              </div>

              {/* Success message */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Děkujeme za odpovědi!
                </h3>
                <p className="text-gray-500 text-base max-w-md mx-auto">
                  Zanechte nám kontakt a připravíme vám detailní nabídku na míru.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  style={{
                    background: 'linear-gradient(135deg, #C7D2FE 0%, #C7D2FE 100%)',
                    color: '#1F2937',
                    padding: '16px 32px',
                    borderRadius: '9999px',
                    fontSize: '16px',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(199, 210, 254, 0.4)',
                  }}
                  className="hover:opacity-90 transition-opacity"
                >
                  Zapsat se na konzultaci
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  Spočítat znovu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
