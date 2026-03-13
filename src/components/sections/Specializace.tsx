"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Row 1 — obklady, dlažby, plitka (tiles)
const row1 = [
  { title: "Rekonstrukce koupelen", subtitle: "Kompletní přestavba na klíč", image: "/images/robota/IMG_5364.jpg", href: "/sluzby/rekonstrukce-koupelny" },
  { title: "Velkoformátové obklady", subtitle: "Obklady 60×120 cm a větší", image: "/images/robota/IMG_2512.jpg", href: "/sluzby/velkoformatove-obklady" },
  { title: "Obklady schodišť", subtitle: "Interiérové i exteriérové schody", image: "/images/robota/IMG_2526.jpg", href: "/sluzby" },
  { title: "Sprchové kouty", subtitle: "Walk-in sprchy a bezbariérová řešení", image: "/images/robota/IMG_3892.jpg", href: "/sluzby/obklady-koupelen" },
  { title: "Dekorativní obklady", subtitle: "Mozaiky, vzory a kombinace materiálů", image: "/images/robota/IMG_6078.jpg", href: "/sluzby/obklady-kuchyni" },
  { title: "Terasy a balkony", subtitle: "Mrazuvzdorná dlažba venkovních ploch", image: "/images/robota/IMG_3670.jpg", href: "/sluzby" },
  { title: "Obklady koupelen", subtitle: "Stěnové obklady do mokrých prostor", image: "/images/robota/IMG_3920.jpg", href: "/sluzby/obklady-koupelen" },
  { title: "Komerční prostory", subtitle: "Obchody, restaurace, kanceláře", image: "/images/robota/IMG_3660.jpg", href: "/sluzby" },
  { title: "Podlahy a dlažby", subtitle: "Keramické podlahy a imitace dřeva", image: "/images/robota/IMG_5749.jpg", href: "/sluzby" },
  { title: "Obklady kuchyní", subtitle: "Obklady za kuchyňskou linku", image: "/images/robota/IMG_3993.jpg", href: "/sluzby/obklady-kuchyni" },
  { title: "Venkovní schody", subtitle: "Vstupní a zahradní schodiště", image: "/images/robota/IMG_3999.jpg", href: "/sluzby" },
  { title: "Luxusní koupelna", subtitle: "Mramorové obklady od podlahy po strop", image: "/images/robota/IMG_5564.jpg", href: "/sluzby/obklady-koupelen" },
];

// Row 2 — přírodní kámen (stone)
const row2 = [
  { title: "Kamenné fasády", subtitle: "Obložení fasád přírodním kamenem", image: "/images/kamen/kamen-6.jpg", href: "/svet-kamene" },
  { title: "Kamenný krb", subtitle: "Obložení krbů žulou a mramorem", image: "/images/kamen/kamen-9.jpg", href: "/svet-kamene" },
  { title: "Kamenné zdi", subtitle: "Dekorativní stěny z přírodního kamene", image: "/images/kamen/kamen-3.jpg", href: "/svet-kamene" },
  { title: "Montáž kamene", subtitle: "Profesionální pokládka a broušení", image: "/images/kamen/kamen-7.jpg", href: "/svet-kamene" },
  { title: "Kamenné barbecue", subtitle: "Venkovní grily a posezení z kamene", image: "/images/kamen/kamen-13.jpg", href: "/svet-kamene" },
  { title: "Kamenná sprcha", subtitle: "Sprchové kouty z přírodního kamene", image: "/images/kamen/kamen-10.jpg", href: "/svet-kamene" },
  { title: "Kamenné obložení", subtitle: "Fasáda domu přírodním kamenem", image: "/images/kamen/kamen-5.jpg", href: "/svet-kamene" },
  { title: "Kamenná stěna", subtitle: "Exteriérové oplocení přírodním kamenem", image: "/images/kamen/kamen-16.jpg", href: "/svet-kamene" },
  { title: "Stavba z kamene", subtitle: "Kamenné zdi a opěrné stěny", image: "/images/kamen/kamen-8.jpg", href: "/svet-kamene" },
  { title: "Kamenný krb rustikal", subtitle: "Rustikální krb z přírodního kamene", image: "/images/kamen/kamen-22.jpg", href: "/svet-kamene" },
  { title: "Kamenné steenstrips", subtitle: "Mediteránní kamenné obložení krbu", image: "/images/kamen/kamen-23.jpg", href: "/svet-kamene" },
  { title: "Moderní kamenný krb", subtitle: "Minimalistický krb s kamenným obložením", image: "/images/kamen/kamen-24.jpg", href: "/svet-kamene" },
  { title: "Kamenný krb detail", subtitle: "Přírodní kámen s černou krbovou vložkou", image: "/images/kamen/kamen-25.jpg", href: "/svet-kamene" },
  { title: "Travertinová dlažba", subtitle: "Crazy pave vzor z přírodního travertinu", image: "/images/kamen/kamen-19.jpg", href: "/svet-kamene" },
  { title: "Crazy Pave travertin", subtitle: "Nepravidelná kamenná dlažba", image: "/images/kamen/kamen-20.jpg", href: "/svet-kamene" },
  { title: "Kamenné detaily", subtitle: "Řezání a broušení kamene na míru", image: "/images/kamen/kamen-12.jpg", href: "/svet-kamene" },
  { title: "Moderní kuchyně", subtitle: "Kamenný ostrov s podsvícením", image: "/images/kamen/kamen-11.jpg", href: "/svet-kamene" },
  { title: "Travertin detail", subtitle: "Precizní spárování přírodního kamene", image: "/images/kamen/kamen-21.jpg", href: "/svet-kamene" },
];

function MarqueeRow({ items, direction = "left", speed = 40 }: { items: typeof row1; direction?: "left" | "right"; speed?: number }) {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const touchRef = useRef<{ x: number; time: number; offset: number } | null>(null);
  const rafRef = useRef<number>(0);
  const isTouchingRef = useRef(false);
  const doubled = [...items, ...items];
  const totalWidth = items.length * 394;
  const dir = direction === "left" ? -1 : 1;
  const baseSpeed = (totalWidth / speed) * dir; // px per second

  const animate = useCallback(() => {
    if (!trackRef.current) return;

    if (!isTouchingRef.current) {
      // Add velocity decay (momentum from swipe)
      if (Math.abs(velocityRef.current) > 0.5) {
        offsetRef.current += velocityRef.current;
        velocityRef.current *= 0.95; // friction
      } else {
        velocityRef.current = 0;
        // Normal auto-scroll
        offsetRef.current += baseSpeed / 60;
      }

      // Loop wrap
      if (dir === -1 && offsetRef.current <= -totalWidth) {
        offsetRef.current += totalWidth;
      } else if (dir === 1 && offsetRef.current >= 0) {
        offsetRef.current -= totalWidth;
      }
    }

    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    rafRef.current = requestAnimationFrame(animate);
  }, [baseSpeed, totalWidth, dir]);

  useEffect(() => {
    // Start from correct position for right-moving rows
    if (direction === "right") {
      offsetRef.current = -totalWidth;
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, direction, totalWidth]);

  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchingRef.current = true;
    velocityRef.current = 0;
    touchRef.current = {
      x: e.touches[0].clientX,
      time: Date.now(),
      offset: offsetRef.current,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const diff = e.touches[0].clientX - touchRef.current.x;
    offsetRef.current = touchRef.current.offset + diff;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const dt = (Date.now() - touchRef.current.time) / 1000;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    if (dt > 0) {
      velocityRef.current = (dx / dt) / 60; // px per frame momentum
      // Cap velocity
      velocityRef.current = Math.max(-30, Math.min(30, velocityRef.current));
    }
    touchRef.current = null;
    isTouchingRef.current = false;
  };

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className="flex gap-1 will-change-transform"
      >
        {doubled.map((spec, i) => (
          <Link
            key={`${spec.title}-${i}`}
            href={spec.href}
            className="group relative flex-shrink-0 w-[265px] sm:w-[390px] overflow-hidden rounded-lg aspect-[3/4]"
          >
            <Image
              src={spec.image}
              alt={spec.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 265px, 390px"
            />
            {/* Logo watermark */}
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20 opacity-50">
              <img
                src="/images/logos/logo.png"
                alt=""
                className="w-14 h-auto sm:w-18"
                style={{ filter: "brightness(0) invert(1)" }}
                draggable={false}
              />
            </div>
            {/* Gradient: top-down for text at top */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
            {/* Text at top */}
            <div className="absolute top-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="text-white font-bold text-2xl sm:text-4xl leading-tight mb-1">
                {spec.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-lg leading-snug">
                {spec.subtitle}
              </p>
            </div>
            {/* CTA button on every other card */}
            {i % 2 === 1 && (
              <>
                {/* Dark gradient at bottom for button contrast */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FFFFFF',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    fontSize: 13,
                    padding: '10px 22px',
                    borderRadius: 9999,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Chci to stejné
                  <span style={{ fontSize: 14 }}>&rarr;</span>
                </button>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Specializace() {
  return (
    <section id="specializace" className="py-12 sm:py-16 md:py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Header stays in container */}
      <div className="container-custom mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-2">
          Co všechno umíme
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Obklady, dlažby, přírodní kámen — pokládáme všude, kde to dává smysl.
        </p>
      </div>

      {/* Full-width marquee rows — gap-1 between rows same as between cards */}
      <div className="space-y-1">
        <MarqueeRow items={row1} direction="left" speed={90} />
        <MarqueeRow items={row2} direction="right" speed={100} />
      </div>
    </section>
  );
}
