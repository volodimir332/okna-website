"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show popup immediately
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Modal - Bottom right on desktop, bottom on mobile */}
          <motion.div
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[420px] z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-5 pb-3">
                <h3 className="text-base font-semibold text-gray-900">
                  🍪 Cookies
                </h3>
                <button
                  onClick={handleDecline}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                  aria-label="Zavřít"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Používáme cookies pro správné fungování webu, analýzu návštěvnosti a zlepšení vašeho zážitku.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  Vaše údaje zpracováváme v souladu s GDPR. Můžete přijmout všechny, odmítnout nebo upravit nastavení.
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mb-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-5 py-3.5 bg-white text-gray-900 font-semibold rounded-full border-2 border-black hover:bg-gray-50 transition-colors text-sm shadow-sm"
                  >
                    Přijmout všechny
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 px-5 py-3.5 bg-white text-gray-900 font-semibold rounded-full border-2 border-black hover:bg-gray-50 transition-colors text-sm shadow-sm"
                  >
                    Odmítnout
                  </button>
                </div>
                
                {/* Settings button */}
                <button
                  onClick={handleDecline}
                  className="w-full px-4 py-2.5 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-400 hover:bg-gray-50 transition-colors text-xs"
                >
                  Nastavení
                </button>

                {/* Links */}
                <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-gray-200">
                  <a href="#" className="text-xs text-gray-500 hover:text-gray-800 underline transition-colors">
                    Zásady cookies
                  </a>
                  <span className="text-gray-300">•</span>
                  <a href="#" className="text-xs text-gray-500 hover:text-gray-800 underline transition-colors">
                    GDPR
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
