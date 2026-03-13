"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Check, Phone, User, Mail, MessageSquare,
  ShowerHead, Flame, Building2, Footprints, UtensilsCrossed, Sun,
  RulerIcon, Move, BarChart3, Warehouse,
} from "lucide-react";

const CZECH_MONTHS = [
  "ledna", "února", "března", "dubna", "května", "června",
  "července", "srpna", "září", "října", "listopadu", "prosince",
];

const stepQuestions = [
  {
    id: 1,
    question: "Co vás zajímá?",
    subtitle: "Vyberte typ práce, o který máte zájem",
    options: [
      { value: "koupelna", label: "Rekonstrukce koupelny", icon: "ShowerHead" },
      { value: "krb", label: "Kamenný krb", icon: "Flame" },
      { value: "fasada", label: "Kamenná fasáda", icon: "Building2" },
      { value: "schody", label: "Obklady schodů", icon: "Footprints" },
      { value: "kuchyn", label: "Obklady kuchyně", icon: "UtensilsCrossed" },
      { value: "terasa", label: "Terasa / balkón", icon: "Sun" },
    ],
  },
  {
    id: 2,
    question: "Jaký je přibližný rozsah?",
    subtitle: "Pomohou nám to lépe nacenit",
    options: [
      { value: "do5", label: "Do 5 m²", icon: "RulerIcon", sub: "malý prostor" },
      { value: "5-10", label: "5–10 m²", icon: "Move", sub: "střední" },
      { value: "10-20", label: "10–20 m²", icon: "BarChart3", sub: "velký" },
      { value: "nad20", label: "Nad 20 m²", icon: "Warehouse", sub: "komerční / speciální" },
    ],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShowerHead, Flame, Building2, Footprints, UtensilsCrossed, Sun,
  RulerIcon, Move, BarChart3, Warehouse,
};

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", note: "" });
  const [monthName, setMonthName] = useState("měsíce");

  useEffect(() => {
    setMonthName(CZECH_MONTHS[new Date().getMonth()]);
  }, []);

  const currentQuestion = stepQuestions[currentStep];
  const totalSteps = stepQuestions.length + 1;
  const progressStep = showForm ? totalSteps : currentStep + 1;

  const handleSelect = (stepId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    setTimeout(() => {
      if (currentStep < stepQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowForm(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (showForm) {
      setShowForm(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const interestLabel = stepQuestions[0].options.find(o => o.value === answers[1])?.label || answers[1];
      const scopeOption = stepQuestions[1].options.find(o => o.value === answers[2]);
      const scopeLabel = scopeOption ? `${scopeOption.label} (${"sub" in scopeOption ? scopeOption.sub : ""})` : answers[2];

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          preferredDate: `[kviz-bonus] Zájem: ${interestLabel} | Rozsah: ${scopeLabel}`,
          preferredTime: form.note || "",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            3 otázky = sleva −15 %
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            Odpovězte na 3 otázky a získejte slevu −15 % na jakoukoliv realizaci do konce {monthName}.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-200">
                <motion.div
                  className="h-full bg-[#6B7AE8] rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: i < progressStep - 1 || submitted ? "100%" : i === progressStep - 1 ? "50%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400">
            {submitted ? "Hotovo!" : `Krok ${progressStep} ze ${totalSteps}`}
            {!submitted && " · Zabere to 30 sekund. Žádné závazky."}
          </p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!showForm && !submitted ? (
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

              <div className={`grid gap-3 ${currentStep === 0 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}>
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  const IconComponent = iconMap[option.icon];
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(currentQuestion.id, option.value)}
                      className={`group relative p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-[#6B7AE8] bg-[#6B7AE8] scale-[1.02]"
                          : "border-gray-200 bg-white hover:border-[#6B7AE8]/40 hover:shadow-md"
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`w-6 h-6 mb-2 ${isSelected ? "text-white" : "text-[#6B7AE8]"}`}
                        />
                      )}
                      <span className={`text-sm sm:text-base font-medium leading-tight block ${
                        isSelected ? "text-white" : "text-gray-800"
                      }`}>
                        {option.label}
                      </span>
                      {"sub" in option && option.sub && (
                        <span className={`text-xs mt-0.5 block ${
                          isSelected ? "text-white/70" : "text-gray-400"
                        }`}>{option.sub}</span>
                      )}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#6B7AE8]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

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
          ) : showForm && !submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                  Kam vám máme zavolat?
                </h3>
                <p className="text-gray-400 text-sm">Ozve se vám přímo mistr — žádné call centrum.</p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jméno *"
                    required
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#6B7AE8] focus:ring-2 focus:ring-[#6B7AE8]/20 outline-none transition-all text-gray-900 font-medium"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Telefon *"
                    required
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#6B7AE8] focus:ring-2 focus:ring-[#6B7AE8]/20 outline-none transition-all text-gray-900 font-medium"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email (nepovinné)"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#6B7AE8] focus:ring-2 focus:ring-[#6B7AE8]/20 outline-none transition-all text-gray-900 font-medium"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    placeholder="Popište váš projekt v pár slovech (nepovinné)"
                    rows={3}
                    className="w-full pl-12 pr-5 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-[#6B7AE8] focus:ring-2 focus:ring-[#6B7AE8]/20 outline-none transition-all text-gray-900 resize-none"
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-xl font-bold bg-[#6B7AE8] hover:bg-[#5A69D4] disabled:opacity-60 text-white shadow-lg text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? "Odesílám..." : "Odeslat a získat bonus"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Ozve se vám přímo mistr do 2 hodin. Žádný call centrum.
                </p>
              </form>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Zpět
                </button>
              </div>
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
                Děkujeme! Vaše poptávka byla odeslána.
              </h3>
              <p className="text-gray-500 mb-4">
                Zavoláme vám do 2 hodin.
              </p>
              <div className="inline-block bg-[#6B7AE8]/10 rounded-xl px-6 py-4">
                <p className="text-[#6B7AE8] font-bold text-lg">
                  Vaše sleva: −15 % na jakoukoliv realizaci
                </p>
                <p className="text-[#6B7AE8]/70 text-sm mt-1">Platí do konce {monthName}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
