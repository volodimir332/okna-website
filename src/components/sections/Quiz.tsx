"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Gift, Check, Phone } from "lucide-react";

const steps = [
  {
    id: 1,
    question: "Co vás zajímá?",
    subtitle: "Vyberte typ práce, o který máte zájem",
    options: [
      { value: "koupelna", label: "Rekonstrukce koupelny", emoji: "🚿" },
      { value: "krb", label: "Kamenný krb", emoji: "🔥" },
      { value: "fasada", label: "Kamenná fasáda", emoji: "🏠" },
      { value: "schody", label: "Obklady schodů", emoji: "🪜" },
      { value: "kuchyn", label: "Obklady kuchyně", emoji: "🍳" },
      { value: "terasa", label: "Terasa / balkón", emoji: "☀️" },
    ],
  },
  {
    id: 2,
    question: "Kdy to plánujete?",
    subtitle: "Kdy byste chtěli začít?",
    options: [
      { value: "asap", label: "Co nejdříve", emoji: "⚡" },
      { value: "mesic", label: "Do měsíce", emoji: "📅" },
      { value: "3mesice", label: "Do 3 měsíců", emoji: "🗓️" },
      { value: "neznam", label: "Zatím se rozhlížím", emoji: "👀" },
    ],
  },
  {
    id: 3,
    question: "Máte už vybraný materiál?",
    subtitle: "Pomůžeme vám s výběrem, pokud potřebujete",
    options: [
      { value: "ano", label: "Ano, mám vybraný", emoji: "✅" },
      { value: "castecne", label: "Částečně", emoji: "🤔" },
      { value: "ne", label: "Ne, potřebuji poradit", emoji: "💡" },
    ],
  },
];

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = steps[currentStep];

  const handleSelect = (stepId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (isComplete) {
      setIsComplete(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
    setPhone("");
    setSubmitted(false);
  };

  const getDiscountLabel = () => {
    const interest = answers[1];
    if (interest === "koupelna" || interest === "fasada") return "10 %";
    return "7 %";
  };

  return (
    <section id="kviz" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#6B7AE8]/10 text-[#6B7AE8] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            Získejte slevu za 30 sekund
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            3 otázky = sleva na projekt
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Odpovězte a získejte slevu na vaši realizaci
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-2">
            {steps.map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-200">
                <motion.div
                  className="h-full bg-[#6B7AE8] rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: i < currentStep || isComplete ? "100%" : i === currentStep && !isComplete ? "50%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400">
            {isComplete ? "Hotovo!" : `Krok ${currentStep + 1} ze ${steps.length}`}
          </p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
              className="min-h-[300px]"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                  {currentQuestion.question}
                </h3>
                <p className="text-gray-400 text-sm">{currentQuestion.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(currentQuestion.id, option.value)}
                      className={`group relative p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-[#6B7AE8] bg-[#6B7AE8]/5 scale-[1.02]"
                          : "border-gray-200 bg-white hover:border-[#6B7AE8]/40 hover:shadow-md"
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{option.emoji}</span>
                      <span className="text-sm sm:text-base font-medium text-gray-800 leading-tight block">
                        {option.label}
                      </span>
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-[#6B7AE8] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Back */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                    currentStep === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zpět
                </button>
              </div>
            </motion.div>
          ) : !submitted ? (
            <motion.div
              key="discount"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              {/* Discount reveal */}
              <div className="mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-[#6B7AE8] flex items-center justify-center mx-auto mb-5"
                >
                  <Gift className="w-10 h-10 text-white" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-500 text-sm mb-2"
                >
                  Vaše sleva na realizaci
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-5xl sm:text-6xl font-extrabold text-[#6B7AE8] mb-2"
                >
                  {getDiscountLabel()}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-400 text-sm"
                >
                  Zanechte telefon a sleva je vaše
                </motion.p>
              </div>

              {/* Phone form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="max-w-sm mx-auto space-y-3"
              >
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Váš telefon"
                    required
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#6B7AE8] focus:ring-2 focus:ring-[#6B7AE8]/20 outline-none transition-all text-gray-900 font-medium"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl font-bold bg-[#6B7AE8] hover:bg-[#5A69D4] text-white shadow-lg text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Získat slevu {getDiscountLabel()}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Zavoláme do 2 hodin. Bez závazků.
                </p>
              </motion.form>

              <button
                onClick={handleBack}
                className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft className="w-3 h-3 inline mr-1" />
                Zpět
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Výborně, sleva je vaše!
              </h3>
              <p className="text-gray-500 mb-1">
                Sleva <span className="font-bold text-[#6B7AE8]">{getDiscountLabel()}</span> vám bude uplatněna při realizaci.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Ozveme se vám do 2 hodin.
              </p>
              <button
                onClick={handleReset}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Zkusit znovu
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
