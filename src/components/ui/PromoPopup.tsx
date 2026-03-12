"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
                {/* Header */}
                <div className="text-center mb-5 mt-2">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
                    3D návrh zdarma
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base">
                    Uvidíte výsledek ještě před zahájením prací.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Váš telefon"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 focus:border-[#6B7AE8] focus:ring-2 focus:ring-[#6B7AE8]/30 outline-none transition-all text-white placeholder:text-white/60 font-medium"
                    style={{ fontSize: '16px' }}
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#6B7AE8] hover:bg-[#5A69D4] text-white shadow-lg text-base cursor-pointer"
                  >
                    Chci 3D návrh zdarma
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <p className="text-center text-xs text-white/50 mt-3 font-medium">
                  Zavoláme do 2 hodin. Bez závazků.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#6B7AE8] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Výborně!
                </h3>
                <p className="text-white/90 font-medium mb-1">
                  Váš 3D návrh je na cestě.
                </p>
                <p className="text-white/60 text-sm">
                  Ozveme se vám do 2 hodin.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
