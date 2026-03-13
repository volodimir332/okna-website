"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  label: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/gallery/IMG_6329.jpg", label: "Precizní rohy", description: "Obklady s dokonale řezanými rohy pod úhlem 45°." },
  { type: "image", src: "/images/gallery/stone-01.jpg", label: "Přírodní kámen — stěna", description: "Obklad stěny masivním přírodním kamenem." },
  { type: "image", src: "/images/gallery/IMG_6330.jpg", label: "Velkoformátová dlažba", description: "Pokládka velkoformátových dlaždic na podlahu." },
  { type: "image", src: "/images/gallery/IMG_6331.jpg", label: "Obklady stěn", description: "Stěnové obklady koupelny s přesnými spárami." },
  { type: "image", src: "/images/gallery/stone-02.jpg", label: "Spárování kamene", description: "Ruční spárování přírodního kamene na stěně." },
  { type: "image", src: "/images/gallery/IMG_6332.jpg", label: "Koupelna v procesu", description: "Pokládka dlažby a obkladů s nivelačním systémem." },
  { type: "image", src: "/images/gallery/stone-03.jpg", label: "Kamenná podlaha", description: "Pokládka nepravidelné kamenné dlažby." },
  { type: "image", src: "/images/gallery/IMG_6334.jpg", label: "Detail spárování", description: "Precizní práce s minimální spárou." },
  { type: "image", src: "/images/gallery/IMG_6340_2.jpg", label: "Obklady u okna", description: "Přesné řezy kolem okenního rámu." },
  { type: "image", src: "/images/gallery/stone-04.jpg", label: "Kamenná mozaika", description: "Detailní práce s nepravidelným přírodním kamenem." },
  { type: "image", src: "/images/gallery/IMG_6349.jpg", label: "Obložení parapetu", description: "Obklady kolem okna s dokonalým detailem." },
  { type: "image", src: "/images/gallery/IMG_6351.jpg", label: "Nika v koupelně", description: "Vestavěná nika s precizním obložením." },
  { type: "image", src: "/images/gallery/stone-05.jpg", label: "Kamenná fasáda", description: "Obklad venkovní stěny přírodním kamenem." },
  { type: "image", src: "/images/gallery/IMG_6352.jpg", label: "Sprchový kout", description: "Velkoformátové obklady ve sprchovém koutě." },
  { type: "image", src: "/images/gallery/IMG_6353_2.jpg", label: "Podlaha koupelny", description: "Velkoformátová dlažba s minimální spárou." },
  { type: "image", src: "/images/gallery/stone-06.jpg", label: "Pokládka kamene", description: "Ruční pokládka dekorativního kamene na stěnu." },
  { type: "image", src: "/images/gallery/IMG_6354.jpg", label: "Obklady a dřevo", description: "Kombinace obkladů s dřevěným obložením." },
  { type: "image", src: "/images/gallery/IMG_6375_2.jpg", label: "Střešní okno", description: "Obklady kolem střešního okna v koupelně." },
  { type: "image", src: "/images/gallery/IMG_6410.jpg", label: "Koupelna s dřevem", description: "Moderní koupelna s dřevěnými prvky a obklady." },
  { type: "image", src: "/images/gallery/IMG_6418_2.jpg", label: "Dokončená koupelna", description: "Hotová koupelna s velkoformátovými obklady." },
  { type: "image", src: "/images/gallery/IMG_6434.jpg", label: "Detail řezu", description: "Přesný pokos na hraně — 45° bez chyby." },
  { type: "image", src: "/images/gallery/IMG_6460.jpg", label: "Koupelna na klíč", description: "Kompletní rekonstrukce koupelny s oknem." },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartX = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll every 4s (longer for videos)
  useEffect(() => {
    if (isPaused || isTransitioning) return;
    const isVideo = galleryItems[activeIndex].type === "video";
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, isVideo ? 8000 : 4000);
    return () => clearInterval(interval);
  }, [isPaused, isTransitioning, activeIndex]);

  const handleClick = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsTransitioning(true);
      setActiveIndex(index);
      timeoutRef.current = setTimeout(() => setIsTransitioning(false), 400);
    },
    [activeIndex, isTransitioning]
  );

  const handleDragStart = (clientX: number) => {
    dragStartX.current = clientX;
  };

  const handleDragEnd = (clientX: number) => {
    const diff = dragStartX.current - clientX;
    if (diff > 50) {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    } else if (diff < -50) {
      setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="galerie" className="py-12 sm:py-16 md:py-24 bg-[#FAFAFA] overflow-hidden">
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

              let adjustedDistance = distanceFromActive;
              if (distanceFromActive > galleryItems.length / 2) {
                adjustedDistance = distanceFromActive - galleryItems.length;
              } else if (distanceFromActive < -galleryItems.length / 2) {
                adjustedDistance = distanceFromActive + galleryItems.length;
              }

              const absDistance = Math.abs(adjustedDistance);
              if (absDistance > 3) return null;

              const baseWidth = isActive
                ? isMobile ? 250 : 400
                : Math.max(isMobile ? 130 : 200, (isMobile ? 210 : 340) - absDistance * (isMobile ? 30 : 50));
              const baseHeight = isActive
                ? isMobile ? 320 : 480
                : Math.max(isMobile ? 220 : 340, (isMobile ? 280 : 420) - absDistance * (isMobile ? 25 : 35));

              let xOffset = 0;
              if (adjustedDistance !== 0) {
                const direction = adjustedDistance > 0 ? 1 : -1;
                const baseSpread = isMobile ? 130 : 220;
                const additionalSpread = isMobile ? 90 : 160;
                xOffset = direction * (baseSpread + (absDistance - 1) * additionalSpread);
              }

              const zIndex = 50 - absDistance * 10;
              const scale = isActive ? 1 : Math.max(0.88, 1 - absDistance * 0.04);

              return (
                <motion.div
                  key={index}
                  className="absolute rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => handleClick(index)}
                  animate={{ x: xOffset, width: baseWidth, height: baseHeight, scale, zIndex }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    zIndex,
                    boxShadow: isActive
                      ? "0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)"
                      : "0 20px 40px -10px rgba(0,0,0,0.3), 0 8px 20px -5px rgba(255,255,255,0.15)",
                  }}
                >
                  {/* Media */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        autoPlay={isActive}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={`${item.label} - realizace Ostrava`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 250px, 400px"
                        draggable={false}
                      />
                    )}
                  </motion.div>

                  {/* Logo watermark */}
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20 opacity-60">
                    <img
                      src="/images/logos/logo.png"
                      alt=""
                      className="w-16 h-auto sm:w-20"
                      style={{ filter: "brightness(0) invert(1)" }}
                      draggable={false}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isActive
                        ? "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0) 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
                    }}
                  />

                  {/* Play icon for video */}
                  {item.type === "video" && !isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-gray-900 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Label and Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 flex flex-col">
                    <motion.h3
                      className="text-white font-bold tracking-wider"
                      animate={{
                        fontSize: isActive ? (isMobile ? "1rem" : "1.5rem") : (isMobile ? "0.7rem" : "1rem"),
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
                    >
                      {item.label}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 text-xs sm:text-sm mt-1 sm:mt-2 max-w-sm leading-snug"
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
                      style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === activeIndex ? "#1A1A1A" : "#D1D5DB",
                transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
