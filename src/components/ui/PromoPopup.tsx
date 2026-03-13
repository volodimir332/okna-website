"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const CZECH_MONTHS = [
  "ledna", "února", "března", "dubna", "května", "června",
  "července", "srpna", "září", "října", "listopadu", "prosince",
];

function getCurrentMonthName() {
  return CZECH_MONTHS[new Date().getMonth()];
}

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const monthName = getCurrentMonthName();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Popup lead",
          phone,
          email,
          preferredDate: "[popup-sleva-15%]",
          preferredTime: "",
        }),
      });
    } catch {
      // silent fail
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsVisible(false), 4000);
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
              alt="Rekonstrukce koupelny Ostrava — moderní obklady a dlažba"
              fill
              className="object-cover"
              quality={80}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/65" />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors z-[80] cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 pt-10 sm:pt-12 pb-8 sm:pb-10 overflow-y-auto">
            {!isSubmitted ? (
              <>
                {/* Urgency badge */}
                <div className="flex justify-center mb-4">
                  <span className="inline-block bg-red-500/20 text-red-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                    Zbývají pouze 2 místa tento měsíc
                  </span>
                </div>

                {/* Header */}
                <div className="text-center mb-5">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
                    −15 % na realizaci
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base">
                    Zanechte telefon a získejte slevu na jakoukoliv objednávku do konce {monthName}.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Váš telefon"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all text-white placeholder:text-white/60 font-medium"
                    style={{ fontSize: "16px" }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Váš email (nepovinné)"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all text-white placeholder:text-white/60 font-medium"
                    style={{ fontSize: "16px" }}
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        padding: "12px 32px",
                        borderRadius: 9999,
                        fontWeight: 600,
                        fontSize: 15,
                        backgroundColor: "#FFFFFF",
                        color: "#1A1A1A",
                        border: "none",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        boxShadow: "0 4px 20px rgba(255,255,255,0.25)",
                        opacity: isSubmitting ? 0.6 : 1,
                      }}
                    >
                      {isSubmitting ? "Odesílám..." : `Získat slevu −15 %`}
                      {!isSubmitting && <ArrowRight style={{ width: 18, height: 18 }} />}
                    </button>
                  </div>
                </form>

                <p className="text-center text-xs text-white/50 mt-4 font-medium">
                  Zavoláme do 24 hodin. Bez závazků.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Sleva −15 % je vaše!
                </h3>
                <p className="text-white/90 font-medium mb-1">
                  Platí na jakoukoliv objednávku do konce {monthName}.
                </p>
                <p className="text-white/60 text-sm">
                  Ozveme se vám do 24 hodin.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
