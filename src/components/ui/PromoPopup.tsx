"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem("promoPopupShown");

    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("promoPopupShown", "true");
      }, 25000); // Show after 25 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-lg mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/bathroom/IMG_6519.JPG"
                  alt="Beautiful bathroom"
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
                {/* Dark overlay for readability - Darker as requested */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60" />
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 backdrop-blur-sm"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="relative z-10 p-8 pt-12 pb-8">
                {!isSubmitted ? (
                  <>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <p className="text-white font-bold text-sm uppercase tracking-wider mb-2 drop-shadow-md">
                        Speciální nabídka
                      </p>
                      <h3 className="text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
                        Sleva <span className="text-[#C7D2FE]">5 000 Kč</span>
                      </h3>
                      <p className="text-white font-medium text-lg drop-shadow-md">
                        na kompletní rekonstrukci koupelny
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-white font-medium drop-shadow-sm">
                        <Check className="w-5 h-5 text-[#C7D2FE]" />
                        <span>Zaměření zdarma</span>
                      </div>
                      <div className="flex items-center gap-3 text-white font-medium drop-shadow-sm">
                        <Check className="w-5 h-5 text-[#C7D2FE]" />
                        <span>3D vizualizace vaší koupelny</span>
                      </div>
                      <div className="flex items-center gap-3 text-white font-medium drop-shadow-sm">
                        <Check className="w-5 h-5 text-[#C7D2FE]" />
                        <span>Záruka 60 měsíců</span>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Váš e-mail"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/30 outline-none transition-all text-white placeholder:text-white/70 font-medium"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#C7D2FE] hover:bg-[#B4C6FC] text-gray-900 shadow-lg hover:shadow-[#C7D2FE]/25"
                      >
                        Získat slevu
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>

                    <p className="text-center text-xs text-white/60 mt-4 font-medium">
                      Odesláním souhlasíte se zpracováním osobních údajů
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[#C7D2FE] flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Děkujeme!
                    </h3>
                    <p className="text-white/90 font-medium">
                      Sleva byla aktivována. Brzy vás budeme kontaktovat.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
