interface FAQItem {
  question: string;
  answer: string;
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
}
