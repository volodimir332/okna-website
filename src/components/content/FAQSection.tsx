"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="my-12 max-w-3xl">
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
        Časté dotazy
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-[var(--border)] rounded-2xl overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
            >
              <span className="font-semibold text-[var(--text-primary)] text-base pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[var(--text-tertiary)] flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

