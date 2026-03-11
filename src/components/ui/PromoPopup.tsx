"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, Clock, Users } from "lucide-react";
import Image from "next/image";

const monthNames = [
  "ledna", "února", "března", "dubna", "května", "června",
  "července", "srpna", "září", "října", "listopadu", "prosince"
];

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deadline = useMemo(() => {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return `${lastDay.getDate()}. ${monthNames[now.getMonth()]}`;
  }, []);

  useEffect(() => {
    const wasShown = sessionStorage.getItem("promoPopupShown");

    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("promoPopupShown", "true");
      }, 25000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[70] max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/bathroom/IMG_6519.JPG"
              alt="Beautiful bathroom"
              fill
              className="object-cover"
              quality={80}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/65" />
          </div>

          {/* Close button - highest z-index */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors z-[80] cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Scrollable Content */}
          <div className="relative z-10 p-6 sm:p-8 pt-10 sm:pt-12 pb-6 sm:pb-8 overflow-y-auto">
            {!isSubmitted ? (
              <>
                {/* Urgency badge */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/30">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-red-300 text-xs font-bold uppercase tracking-wider">
                      Pouze do {deadline}
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div className="text-center mb-4">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
                    Sleva <span className="text-[#C7D2FE]">5 000 Kč</span>
                  </h3>
                  <p className="text-white/90 font-medium text-base sm:text-lg drop-shadow-md">
                    na obkladačské a koupelnové práce
                  </p>
                </div>

                {/* Limited spots */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10">
                    <Users className="w-4 h-4 text-[#C7D2FE]" />
                    <span className="text-white text-sm font-semibold">
                      Pouze pro <span className="text-[#C7D2FE]">3 zákazníky</span> tento měsíc
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Check className="w-5 h-5 text-[#86EFAC] flex-shrink-0" />
                    <span className="text-sm sm:text-base">Zaměření a 3D vizualizace zdarma</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Check className="w-5 h-5 text-[#86EFAC] flex-shrink-0" />
                    <span className="text-sm sm:text-base">Pevná cena bez skrytých nákladů</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Check className="w-5 h-5 text-[#86EFAC] flex-shrink-0" />
                    <span className="text-sm sm:text-base">Záruka 60 měsíců na všechny práce</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Váš telefon"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/30 outline-none transition-all text-white placeholder:text-white/60 font-medium"
                    style={{ fontSize: '16px' }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Váš e-mail (nepovinné)"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/30 outline-none transition-all text-white placeholder:text-white/60 font-medium"
                    style={{ fontSize: '16px' }}
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#C7D2FE] hover:bg-[#B4C6FC] text-gray-900 shadow-lg text-base cursor-pointer"
                  >
                    Odeslat a získat slevu
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <p className="text-center text-xs text-white/50 mt-3 font-medium">
                  Zavoláme vám do 24 hodin. Žádný spam.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#86EFAC] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Výborně!
                </h3>
                <p className="text-white/90 font-medium mb-1">
                  Sleva 5 000 Kč je vaše.
                </p>
                <p className="text-white/60 text-sm">
                  Ozveme se vám do 24 hodin s dalšími kroky.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
