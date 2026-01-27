"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

// Gallery items with descriptions about quality
const galleryItems = [
  { image: "/images/robota/IMG_2512.jpg", label: "PRECIZNOST", description: "Dbáme na každý detail. Spáry milimetrově přesné." },
  { image: "/images/robota/IMG_2526.jpg", label: "KVALITA", description: "Pouze prémiové materiály od ověřených značek." },
  { image: "/images/robota/IMG_3401.jpg", label: "TECHNOLOGIE", description: "Moderní postupy pro dokonalý výsledek." },
  { image: "/images/robota/IMG_3549.jpg", label: "DESIGN", description: "Estetika a funkčnost v dokonalé harmonii." },
  { image: "/images/robota/IMG_3660.jpg", label: "PROFESIONALITA", description: "Zkušený tým s 15+ lety praxe." },
  { image: "/images/robota/IMG_3661.jpg", label: "PEČLIVOST", description: "Každá dlaždice položena s maximální péčí." },
  { image: "/images/robota/IMG_3667.jpg", label: "SPOLEHLIVOST", description: "Termíny dodržujeme, sliby plníme." },
  { image: "/images/robota/IMG_3670.jpg", label: "INOVACE", description: "Nejnovější trendy a technologie v oboru." },
  { image: "/images/robota/IMG_3892.jpg", label: "ČISTOTA", description: "Pracujeme čistě, uklízíme po sobě." },
  { image: "/images/robota/IMG_3912.jpg", label: "KOMUNIKACE", description: "Vždy víte, v jaké fázi práce jsou." },
  { image: "/images/robota/IMG_3917.jpg", label: "ZÁRUKA", description: "60 měsíců záruka na všechny práce." },
  { image: "/images/robota/IMG_3920.jpg", label: "MATERIÁLY", description: "RAKO, Geberit, Grohe - jen to nejlepší." },
  { image: "/images/robota/IMG_3922.jpg", label: "ŘEMESLO", description: "Tradiční řemeslné zpracování." },
  { image: "/images/robota/IMG_3970.jpg", label: "DETAIL", description: "V detailech se skrývá dokonalost." },
  { image: "/images/robota/IMG_3976.jpg", label: "HARMONIE", description: "Barevné kombinace, které ladí." },
  { image: "/images/robota/IMG_3986.jpg", label: "PROSTOR", description: "Optimální využití každého centimetru." },
  { image: "/images/robota/IMG_3993.jpg", label: "SVĚTLO", description: "Promyšlené osvětlení pro váš komfort." },
  { image: "/images/robota/IMG_3999.jpg", label: "ELEGANCE", description: "Nadčasový design pro vaši koupelnu." },
  { image: "/images/robota/IMG_4135.jpg", label: "FUNKČNOST", description: "Praktická řešení pro každodenní použití." },
  { image: "/images/robota/IMG_4170.jpg", label: "KOMFORT", description: "Vaše koupelna, váš relax." },
  { image: "/images/robota/IMG_4397.jpg", label: "STYL", description: "Od moderního po klasický - zvládáme vše." },
  { image: "/images/robota/IMG_4411.jpg", label: "PRECIZNOST", description: "Každý kout zpracován k dokonalosti." },
  { image: "/images/robota/IMG_4738.jpg", label: "ODBORNOST", description: "Certifikovaní odborníci v oboru." },
  { image: "/images/robota/IMG_5061.jpg", label: "TRADICE", description: "Stavíme na letech zkušeností." },
  { image: "/images/robota/IMG_5062.jpg", label: "MODERNOST", description: "Sledujeme světové trendy." },
  { image: "/images/robota/IMG_5364.jpg", label: "NADSTANDARD", description: "Vždy o krok dále než ostatní." },
  { image: "/images/robota/IMG_5564.jpg", label: "DOKONALOST", description: "Nic není příliš malé, abychom to zanedbali." },
  { image: "/images/robota/IMG_5749.jpg", label: "PÉČE", description: "S vaší koupelnou zacházíme jako s naší." },
  { image: "/images/robota/IMG_5925.jpg", label: "VÝSLEDEK", description: "Koupelna, ze které se vám nechce odejít." },
  { image: "/images/robota/IMG_6078.jpg", label: "SPOKOJENOST", description: "200+ spokojených zákazníků." },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartX = useRef(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused || isTransitioning) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]);

  const handleClick = useCallback((index: number) => {
    if (index === activeIndex || isTransitioning) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsTransitioning(true);
    setActiveIndex(index);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [activeIndex, isTransitioning]);

  // Drag/swipe handlers
  const handleDragStart = (clientX: number) => {
    dragStartX.current = clientX;
  };

  const handleDragEnd = (clientX: number) => {
    const diff = dragStartX.current - clientX;
    const threshold = 50;

    if (diff > threshold) {
      // Swipe left - next
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    } else if (diff < -threshold) {
      // Swipe right - prev
      setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section
      id="galerie"
      className="py-12 sm:py-16 md:py-24 bg-[#FAFAFA] overflow-hidden"
    >
      <div className="max-w-[100vw] px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-2">
            Naše realizace
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Prohlédněte si naše dokončené projekty
          </p>
        </div>

        {/* Gallery Cards */}
        <div
          className="relative h-[380px] sm:h-[450px] md:h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseUp={(e) => handleDragEnd(e.clientX)}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full flex items-center justify-center">
            {galleryItems.map((item, index) => {
              const isActive = activeIndex === index;
              const distanceFromActive = index - activeIndex;

              // Handle wrapping for infinite feel
              let adjustedDistance = distanceFromActive;
              if (distanceFromActive > galleryItems.length / 2) {
                adjustedDistance = distanceFromActive - galleryItems.length;
              } else if (distanceFromActive < -galleryItems.length / 2) {
                adjustedDistance = distanceFromActive + galleryItems.length;
              }

              const absDistance = Math.abs(adjustedDistance);

              // Only show 3 cards on each side
              if (absDistance > 3) return null;

              // Calculate sizes - cards get smaller as they go back
              const baseWidth = isActive
                ? (isMobile ? 250 : 400)
                : Math.max(isMobile ? 130 : 200, (isMobile ? 210 : 340) - absDistance * (isMobile ? 30 : 50));
              const baseHeight = isActive
                ? (isMobile ? 320 : 480)
                : Math.max(isMobile ? 220 : 340, (isMobile ? 280 : 420) - absDistance * (isMobile ? 25 : 35));

              // Calculate position - cards spread but leave white margins on edges
              let xOffset = 0;
              if (adjustedDistance !== 0) {
                const direction = adjustedDistance > 0 ? 1 : -1;
                // Cards spread out - but not to very edge
                const baseSpread = isMobile ? 130 : 220; // Base distance from center
                const additionalSpread = isMobile ? 90 : 160; // Additional distance per card
                xOffset = direction * (baseSpread + (absDistance - 1) * additionalSpread);
              }

              const zIndex = 50 - absDistance * 10;
              const scale = isActive ? 1 : Math.max(0.88, 1 - absDistance * 0.04);

              return (
                <motion.div
                  key={index}
                  className="absolute rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => handleClick(index)}
                  animate={{
                    x: xOffset,
                    width: baseWidth,
                    height: baseHeight,
                    scale,
                    zIndex,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    zIndex,
                    boxShadow: isActive
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                      : '0 20px 40px -10px rgba(0, 0, 0, 0.3), 0 8px 20px -5px rgba(255, 255, 255, 0.15)'
                  }}
                >
                  {/* Image */}
                  <motion.img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                    draggable={false}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isActive
                        ? 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0) 100%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
                    }}
                  />

                  {/* Label and Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 flex flex-col">
                    <motion.h3
                      className="text-white font-bold tracking-wider"
                      animate={{
                        fontSize: isActive ? (isMobile ? '1rem' : '1.5rem') : (isMobile ? '0.7rem' : '1rem'),
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                    >
                      {item.label}
                    </motion.h3>

                    {/* Description - only on active */}
                    <motion.p
                      className="text-white/90 text-xs sm:text-sm mt-1 sm:mt-2 max-w-sm leading-snug"
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 10,
                      }}
                      transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
                      style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
