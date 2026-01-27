"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ShowerHead, Bath, Waves } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const packages = [
  {
    id: "mala",
    name: "MALÁ koupelna",
    nameColor: "#1F2937", // Black
    borderColor: "rgba(99, 102, 241, 0.3)", // Purple border
    size: "1 300 x 1 600 mm",
    area: "do 17 m²",
    priceRange: "98 000 - 136 000",
    priceNote: "Kč (včetně DPH)",
    features: [
      "3D vizualizace a kladečský plán v ceně",
      "příprava staveniště a zakrytí",
      "úprava rozvodů vody a odpadů",
      "úprava elektroinstalace",
      "instalace obkladů a dlažeb",
      "instalace sanity (vana/sprcha, umyvadlo)",
      "výmalba",
      "hrubý úklid",
    ],
  },
  {
    id: "standardni",
    name: "STANDARDNÍ koupelna",
    nameColor: "#1F2937", // Black
    borderColor: "rgba(99, 102, 241, 0.3)", // Purple border
    size: "1 600 x 1 900 mm",
    area: "do 21 m²",
    priceRange: "136 000 - 212 000",
    priceNote: "Kč (včetně DPH)",
    features: [
      "3D vizualizace a kladečský plán v ceně",
      "bourací práce a likvidace odpadu",
      "výstavba nových příček (YTONG/SDK)",
      "nové rozvody vody a odpadů",
      "nová elektroinstalace",
      "hydroizolace a penetrace",
      "obkladačské práce (standardní formáty)",
      "kompletace sanity a baterií",
      "výmalba a finální úklid",
    ],
  },
  {
    id: "nadstandardni",
    name: "NADSTANDARDNÍ koupelna",
    nameColor: "#1F2937", // Black
    borderColor: "rgba(99, 102, 241, 0.3)", // Purple border
    size: "1 900 x 3 000 mm",
    area: "do 30 m²",
    priceRange: "od 208 000",
    priceNote: "Kč (včetně DPH)",
    features: [
      "3D vizualizace a kladečský plán v ceně",
      "kompletní bourací a stavební práce",
      "vyrovnání stěn a podlah do roviny",
      "kompletní nové rozvody (voda, odpad, elektro)",
      "pokládka velkoformátových obkladů",
      "instalace podomítkových systémů",
      "SDK podhledy a osvětlení",
      "prémiová výmalba",
      "odvoz a likvidace odpadu",
      "detailní úklid",
    ],
  },
];

export function Packages() {
  const scrollToContact = () => {
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate slides every 4 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % packages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Helper to handle cyclic index
  const getPosition = (index: number) => {
    let diff = (index - activeIndex) % packages.length;
    if (diff < 0) diff += packages.length;
    return diff;
  };

  return (
    <Section id="balicky" theme="light" className="overflow-hidden">
      <SectionHeader
        title="Ceny rekonstrukce koupelny"
        subtitle="Transparentní ceny bez skrytých nákladů. Vyberte si podle velikosti vaší koupelny."
      />

      {/* Desktop Grid (Hidden on Mobile) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Card Content (Desktop) */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden h-full flex flex-col border-2 border-[#C7D2FE]">
              <div className="bg-[#C7D2FE]/20 p-4 sm:p-6 md:p-8 pb-3 sm:pb-5">
                <div className="flex gap-2 mb-3">
                  {pkg.id === 'mala' && <ShowerHead className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />}
                  {pkg.id === 'standardni' && (
                    <>
                      <ShowerHead className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                      <Bath className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                    </>
                  )}
                  {pkg.id === 'nadstandardni' && (
                    <>
                      <ShowerHead className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                      <Bath className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                      <Waves className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                    </>
                  )}
                </div>
                <h3 className="text-base sm:text-xl font-bold" style={{ color: pkg.nameColor }}>
                  {pkg.name}
                </h3>
                <div className="space-y-1.5 sm:space-y-3 mt-4 sm:mt-6">
                  <p className="text-gray-600">
                    <span className="text-gray-500 text-xs sm:text-sm">rozměr: </span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-lg">{pkg.size}</span>
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-500 text-xs sm:text-sm">obklad a dlažba: </span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-lg">{pkg.area}</span>
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-500 text-xs sm:text-sm">cena realizace: </span>
                    <span className="font-bold text-gray-900 text-base sm:text-xl">{pkg.priceRange} </span>
                    <span className="text-gray-500 text-xs sm:text-sm">{pkg.priceNote}</span>
                  </p>
                </div>
              </div>
              <div className="h-[2px] bg-[#C7D2FE]/30" />
              <div className="p-4 sm:p-6 md:p-8 pt-4 sm:pt-6 flex-1 flex flex-col">
                <ul className="space-y-1.5 sm:space-y-2.5 flex-1 mb-4 sm:mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3">
                      <span className="w-3 sm:w-4 h-0.5 rounded-full mt-2 sm:mt-2.5 flex-shrink-0" style={{ backgroundColor: "#C7D2FE" }} />
                      <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="violet"
                  size="md"
                  onClick={scrollToContact}
                  className="w-full"
                >
                  Nezávazná poptávka
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Vertical Stack */}
      <div className="md:hidden flex flex-col gap-6 px-2">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Mobile Card Content */}
            <div className="relative bg-white rounded-2xl overflow-hidden flex flex-col border-2 border-[#C7D2FE] shadow-lg">
              <div className="bg-[#C7D2FE]/20 p-4 pb-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-2">
                    {pkg.id === 'mala' && <ShowerHead className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />}
                    {pkg.id === 'standardni' && (
                      <>
                        <ShowerHead className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                        <Bath className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                      </>
                    )}
                    {pkg.id === 'nadstandardni' && (
                      <>
                        <ShowerHead className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                        <Bath className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                        <Waves className="w-6 h-6 text-[#6B7AE8]" strokeWidth={1.5} />
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {pkg.name}
                  </h3>
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-500">rozměr: </span>
                    <span className="font-semibold text-gray-900">{pkg.size}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-500">cena: </span>
                    <span className="font-bold text-gray-900 text-base">{pkg.priceRange}</span>
                  </p>
                </div>
              </div>
              <div className="h-[2px] bg-[#C7D2FE]/30" />
              <div className="p-4 pt-4 flex-1 flex flex-col bg-white">
                <ul className="space-y-2.5 mb-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-3 h-0.5 rounded-full mt-2.5 flex-shrink-0 bg-[#C7D2FE]" />
                      <span className="text-sm leading-relaxed text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="violet"
                  size="md"
                  onClick={scrollToContact}
                  className="w-full"
                >
                  Nezávazná poptávka
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </Section>
  );
}
