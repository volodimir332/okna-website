"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const row1 = [
  { title: "Rekonstrukce koupelen", subtitle: "Kompletní přestavba na klíč", image: "/images/robota/IMG_5364.jpg", href: "/sluzby/rekonstrukce-koupelny" },
  { title: "Kamenné fasády", subtitle: "Obložení fasád přírodním kamenem", image: "/images/kamen/kamen-6.jpg", href: "/svet-kamene" },
  { title: "Velkoformátové obklady", subtitle: "Obklady 60×120 cm a větší", image: "/images/robota/IMG_2512.jpg", href: "/sluzby/velkoformatove-obklady" },
  { title: "Kamenný krb", subtitle: "Obložení krbů žulou a mramorem", image: "/images/kamen/kamen-9.jpg", href: "/svet-kamene" },
  { title: "Obklady schodišť", subtitle: "Interiérové i exteriérové schody", image: "/images/robota/IMG_2526.jpg", href: "/sluzby" },
  { title: "Kamenná kuchyně", subtitle: "Kuchyňské ostrovy z přírodního kamene", image: "/images/kamen/kamen-1.jpg", href: "/svet-kamene" },
  { title: "Sprchové kouty", subtitle: "Walk-in sprchy a bezbariérová řešení", image: "/images/robota/IMG_3892.jpg", href: "/sluzby/obklady-koupelen" },
  { title: "Kamenné zdi", subtitle: "Dekorativní stěny z přírodního kamene", image: "/images/kamen/kamen-3.jpg", href: "/svet-kamene" },
  { title: "Dekorativní obklady", subtitle: "Mozaiky, vzory a kombinace materiálů", image: "/images/robota/IMG_6078.jpg", href: "/sluzby/obklady-kuchyni" },
  { title: "Montáž kamene", subtitle: "Profesionální pokládka a broušení", image: "/images/kamen/kamen-7.jpg", href: "/svet-kamene" },
  { title: "Terasy a balkony", subtitle: "Mrazuvzdorná dlažba venkovních ploch", image: "/images/robota/IMG_3670.jpg", href: "/sluzby" },
  { title: "Kamenné barbecue", subtitle: "Venkovní grily a posezení z kamene", image: "/images/kamen/kamen-13.jpg", href: "/svet-kamene" },
  { title: "Travertinová dlažba", subtitle: "Crazy pave vzor z přírodního travertinu", image: "/images/kamen/kamen-19.jpg", href: "/svet-kamene" },
];

const row2 = [
  { title: "Kamenná sprcha", subtitle: "Sprchové kouty z přírodního kamene", image: "/images/kamen/kamen-10.jpg", href: "/svet-kamene" },
  { title: "Obklady koupelen", subtitle: "Stěnové obklady do mokrých prostor", image: "/images/robota/IMG_3920.jpg", href: "/sluzby/obklady-koupelen" },
  { title: "Kamenné obložení", subtitle: "Fasáda domu přírodním kamenem", image: "/images/kamen/kamen-5.jpg", href: "/svet-kamene" },
  { title: "Komerční prostory", subtitle: "Obchody, restaurace, kanceláře", image: "/images/robota/IMG_3660.jpg", href: "/sluzby" },
  { title: "Moderní kuchyně", subtitle: "Kamenný krb a ostrov s podsvícením", image: "/images/kamen/kamen-11.jpg", href: "/svet-kamene" },
  { title: "Podlahy a dlažby", subtitle: "Keramické podlahy a imitace dřeva", image: "/images/robota/IMG_5749.jpg", href: "/sluzby" },
  { title: "Kamenná stěna", subtitle: "Exteriérové oplocení přírodním kamenem", image: "/images/kamen/kamen-16.jpg", href: "/svet-kamene" },
  { title: "Obklady kuchyní", subtitle: "Obklady za kuchyňskou linku", image: "/images/robota/IMG_3993.jpg", href: "/sluzby/obklady-kuchyni" },
  { title: "Stavba z kamene", subtitle: "Kamenné zdi a opěrné stěny", image: "/images/kamen/kamen-8.jpg", href: "/svet-kamene" },
  { title: "Venkovní schody", subtitle: "Vstupní a zahradní schodiště", image: "/images/robota/IMG_3999.jpg", href: "/sluzby" },
  { title: "Luxusní koupelna", subtitle: "Mramorové obklady od podlahy po strop", image: "/images/robota/IMG_5564.jpg", href: "/sluzby/obklady-koupelen" },
  { title: "Kamenné detaily", subtitle: "Řezání a broušení kamene na míru", image: "/images/kamen/kamen-12.jpg", href: "/svet-kamene" },
  { title: "Crazy Pave travertin", subtitle: "Nepravidelná kamenná dlažba", image: "/images/kamen/kamen-20.jpg", href: "/svet-kamene" },
  { title: "Travertin detail", subtitle: "Precizní spárování přírodního kamene", image: "/images/kamen/kamen-21.jpg", href: "/svet-kamene" },
];

function MarqueeRow({ items, direction = "left", speed = 40 }: { items: typeof row1; direction?: "left" | "right"; speed?: number }) {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...items, ...items];
  const totalWidth = items.length * 395; // 390px card + 5px gap

  const animationName = direction === "left" ? "marqueeLeft" : "marqueeRight";

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <style jsx>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-${totalWidth}px); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-${totalWidth}px); }
          to { transform: translateX(0); }
        }
      `}</style>
      <div
        className="flex gap-1"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {doubled.map((spec, i) => (
          <Link
            key={`${spec.title}-${i}`}
            href={spec.href}
            className="group relative flex-shrink-0 w-[312px] sm:w-[390px] overflow-hidden rounded-sm aspect-[3/4]"
          >
            <Image
              src={spec.image}
              alt={spec.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 312px, 390px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="text-white font-bold text-xl sm:text-3xl leading-tight mb-0.5">
                {spec.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-lg leading-snug">
                {spec.subtitle}
              </p>
            </div>
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

      {/* Full-width marquee rows */}
      <div className="space-y-2">
        <MarqueeRow items={row1} direction="left" speed={90} />
        <MarqueeRow items={row2} direction="right" speed={100} />
      </div>
    </section>
  );
}
