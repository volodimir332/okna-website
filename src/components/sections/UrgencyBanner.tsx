"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CZECH_MONTHS = [
  "ledna", "února", "března", "dubna", "května", "června",
  "července", "srpna", "září", "října", "listopadu", "prosince",
];

export function UrgencyBanner() {
  const [monthName, setMonthName] = useState("měsíce");

  useEffect(() => {
    setMonthName(CZECH_MONTHS[new Date().getMonth()]);
  }, []);

  return (
    <motion.div
      className="fixed top-20 right-4 sm:right-6 z-50"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.4 }}
    >
      <div
        style={{
          background: "rgba(107, 122, 232, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(107, 122, 232, 0.25)",
          borderRadius: 16,
          padding: "10px 16px",
          maxWidth: 160,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 22, fontWeight: 800, color: "#6B7AE8", lineHeight: 1.1, marginBottom: 2 }}>
          −15 %
        </p>
        <p style={{ fontSize: 11, fontWeight: 500, color: "#6B7AE8", opacity: 0.8, lineHeight: 1.3 }}>
          do konce {monthName}
        </p>
        <p style={{ fontSize: 10, color: "#6B7AE8", opacity: 0.6, marginTop: 4, lineHeight: 1.2 }}>
          zbývají 4 místa
        </p>
      </div>
    </motion.div>
  );
}
