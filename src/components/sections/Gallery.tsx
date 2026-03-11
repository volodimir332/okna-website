"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Gallery items — mixed tile and stone for variety
const galleryItems = [
  { image: "/images/robota/IMG_2512.jpg", label: "Koupelna Havířov", description: "Kompletní rekonstrukce koupelny na klíč." },
  { image: "/images/kamen/kamen-9.jpg", label: "Kamenný krb", description: "Obložení krbu přírodním pískovcem." },
  { image: "/images/robota/IMG_2526.jpg", label: "Rekonstrukce Ostrava-Poruba", description: "Moderní koupelna s velkoformátovými obklady." },
  { image: "/images/kamen/kamen-6.jpg", label: "Kamenná fasáda", description: "Kompletní fasáda domu z přírodního kamene." },
  { image: "/images/robota/IMG_3401.jpg", label: "Kamenný krb Frýdek-Místek", description: "Obložení krbu přírodním kamenem." },
  { image: "/images/robota/IMG_3549.jpg", label: "Velkoformát Opava", description: "Velkoformátové obklady pro elegantní vzhled." },
  { image: "/images/kamen/kamen-1.jpg", label: "Kuchyně z kamene", description: "Kuchyňský ostrov s kamennou základnou." },
  { image: "/images/robota/IMG_3660.jpg", label: "Koupelna na klíč", description: "Od návrhu po finální úklid — vše v jednom." },
  { image: "/images/kamen/kamen-11.jpg", label: "Kamenný gril", description: "Moderní kuchyně s kamenem a podsvícením." },
  { image: "/images/robota/IMG_3661.jpg", label: "Sprchový kout bez vany", description: "Bezbariérový sprchový kout s walk-in designem." },
  { image: "/images/robota/IMG_3667.jpg", label: "Koupelna Karviná", description: "Klasická koupelna s moderními prvky." },
  { image: "/images/kamen/kamen-3.jpg", label: "Kamenná stěna", description: "Dekorativní stěna z přírodního kamene." },
  { image: "/images/robota/IMG_3670.jpg", label: "Obklady kuchyně Ostrava", description: "Precizní obklady za kuchyňskou linku." },
  { image: "/images/kamen/kamen-10.jpg", label: "Kamenná sprcha", description: "Sprchový kout z rustikálního kamene." },
  { image: "/images/robota/IMG_3892.jpg", label: "Koupelna Třinec", description: "Minimalistický design s důrazem na detail." },
  { image: "/images/robota/IMG_3912.jpg", label: "Terasa Frýdek-Místek", description: "Mrazuvzdorná dlažba na venkovní terasu." },
  { image: "/images/kamen/kamen-5.jpg", label: "Obložení fasády", description: "Kamenný obklad vstupu do domu." },
  { image: "/images/robota/IMG_3917.jpg", label: "Rekonstrukce Havířov", description: "Kompletní přestavba bytového jádra." },
  { image: "/images/kamen/kamen-19.jpg", label: "Travertinová dlažba", description: "Crazy pave vzor z přírodního travertinu." },
  { image: "/images/robota/IMG_3920.jpg", label: "Koupelna Bohumín", description: "Prémiové materiály RAKO a Geberit." },
  { image: "/images/robota/IMG_3922.jpg", label: "Obklady schodiště", description: "Keramické obklady interiérového schodiště." },
  { image: "/images/kamen/kamen-13.jpg", label: "Venkovní barbecue", description: "Kamenný gril s dřevníkem na zahradu." },
  { image: "/images/robota/IMG_3970.jpg", label: "Wellness Ostrava", description: "Obklady pro privátní wellness zónu." },
  { image: "/images/kamen/kamen-20.jpg", label: "Crazy Pave travertin", description: "Nepravidelná kamenná dlažba v šedém tónu." },
  { image: "/images/robota/IMG_3976.jpg", label: "Koupelna Orlová", description: "Harmonická kombinace barev a materiálů." },
  { image: "/images/robota/IMG_3986.jpg", label: "Malá koupelna Opava", description: "Chytré řešení malého prostoru." },
  { image: "/images/kamen/kamen-21.jpg", label: "Travertin detail", description: "Precizní spárování přírodního kamene." },
  { image: "/images/robota/IMG_3993.jpg", label: "Koupelna s oknem", description: "Promyšlené osvětlení a prostorový design." },
  { image: "/images/robota/IMG_3999.jpg", label: "Luxusní koupelna Ostrava", description: "Nadčasový design s prémiovými materiály." },
  { image: "/images/robota/IMG_4135.jpg", label: "Podlaha Český Těšín", description: "Velkoformátová dlažba v obývacím pokoji." },
  { image: "/images/robota/IMG_4170.jpg", label: "Koupelna Petřvald", description: "Relaxační koupelna s vanou i sprchou." },
  { image: "/images/robota/IMG_4397.jpg", label: "Komerční prostor Ostrava", description: "Obklady pro restauraci v centru města." },
  { image: "/images/robota/IMG_4411.jpg", label: "Bazén Frýdek-Místek", description: "Speciální protiskluzové obklady bazénu." },
  { image: "/images/robota/IMG_4738.jpg", label: "Fasáda Kopřivnice", description: "Fasádní obklady rodinného domu." },
  { image: "/images/robota/IMG_5061.jpg", label: "Koupelna Nový Jičín", description: "Rekonstrukce koupelny v paneláku." },
  { image: "/images/robota/IMG_5062.jpg", label: "Moderní koupelna Ostrava", description: "Trendy design s walk-in sprchou." },
  { image: "/images/robota/IMG_5364.jpg", label: "Koupelna Hlučín", description: "Nadstandardní provedení s hydroizolací." },
  { image: "/images/robota/IMG_5564.jpg", label: "Obklady krbu Ostrava", description: "Přírodní kámen pro obložení krbu." },
  { image: "/images/robota/IMG_5749.jpg", label: "Koupelna Havířov centrum", description: "Kompletní rekonstrukce bytového jádra." },
  { image: "/images/robota/IMG_5925.jpg", label: "Koupelna Ostrava-Jih", description: "Moderní koupelna se sprchovým koutem." },
  { image: "/images/robota/IMG_6078.jpg", label: "200+ realizací", description: "Spokojení zákazníci po celém kraji." },
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
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.label} - realizace koupelny Ostrava`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 250px, 400px"
                      draggable={false}
                    />
                  </motion.div>

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
