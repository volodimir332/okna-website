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
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-5 pb-3">
                <h3 className="text-base font-semibold text-gray-900">
                  🍪 Cookies
                </h3>
                <button
                  onClick={handleDecline}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Používáme cookies pro lepší uživatelský zážitek. Souhlasem nám pomůžete
                  zlepšit naše služby.
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                  {/* Primary button - Accept */}
                  <button
                    onClick={handleAccept}
                    className="w-full px-5 py-3 bg-[#C7D2FE] text-gray-900 font-medium rounded-xl hover:bg-[#B4C6FC] transition-colors text-sm"
                  >
                    Přijmout všechny
                  </button>

                  {/* Secondary buttons row */}
                  <div className="flex gap-2">
                    <button
                      onClick={handleDecline}
                      className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors text-sm"
                    >
                      Odmítnout
                    </button>
                    <button
                      onClick={handleDecline}
                      className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors text-sm"
                    >
                      Nastavení
                    </button>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-gray-100">
                  <a href="#" className="text-xs text-gray-400 hover:text-[#6B7AE8] transition-colors">
                    Zásady cookies
                  </a>
                  <span className="text-gray-200">•</span>
                  <a href="#" className="text-xs text-gray-400 hover:text-[#6B7AE8] transition-colors">
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
