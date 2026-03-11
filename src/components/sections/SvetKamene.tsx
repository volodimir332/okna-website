"use client";

import { motion } from "framer-motion";
import { Mountain, Scissors, Home } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import Link from "next/link";
import Image from "next/image";

const stoneServices = [
  {
    icon: Mountain,
    title: "Prodej přírodního kamene",
    description:
      "Žula, mramor, travertin, břidlice. Prodáváme materiál přímo — bez přirážky obchodu.",
    href: "#svet-kamene",
  },
  {
    icon: Scissors,
    title: "Výroba z kamene na míru",
    description:
      "Kuchyňské desky, parapety, obklady krbů, schodišťové stupně. Přesné řezání a broušení.",
    href: "#svet-kamene",
  },
  {
    icon: Home,
    title: "Kamenné fasády a krby",
    description:
      "Obložení fasád, krbů a zahradních prvků přírodním kamenem. Trvanlivost na generace.",
    href: "#svet-kamene",
  },
];

const stoneGallery = [
  { src: "/images/kamen/kamen-1.jpg", alt: "Kuchyňský ostrov z přírodního kamene" },
  { src: "/images/kamen/kamen-9.jpg", alt: "Kamenný krb v obývacím pokoji" },
  { src: "/images/kamen/kamen-11.jpg", alt: "Moderní kuchyně s kamenným krbem" },
  { src: "/images/kamen/kamen-6.jpg", alt: "Kamenná fasáda domu" },
  { src: "/images/kamen/kamen-10.jpg", alt: "Sprchový kout z přírodního kamene" },
  { src: "/images/kamen/kamen-3.jpg", alt: "Kamenná stěna v interiéru" },
  { src: "/images/kamen/kamen-13.jpg", alt: "Venkovní kamenné barbecue" },
  { src: "/images/kamen/kamen-5.jpg", alt: "Obložení fasády kamenem" },
  { src: "/images/kamen/kamen-2.jpg", alt: "Montáž kamenného obkladu" },
];

export function SvetKamene() {
  return (
    <Section id="svet-kamene" theme="light">
      <SectionHeader
        title="Svět Kamene"
        subtitle="Přírodní kámen pro váš interiér i exteriér. Prodej materiálu, výroba na míru a obkladačské práce s kamenem."
      />

      {/* 3 Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-10 sm:mb-16">
        {stoneServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={service.href}
              className="block bg-white rounded-2xl p-4 sm:p-6 border-2 border-[#C7D2FE]/40 hover:border-[#6B7AE8]/50 transition-all duration-200 hover:shadow-lg h-full group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#C7D2FE]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#6B7AE8]/10 transition-colors">
                <service.icon
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#6B7AE8]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {stoneGallery.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`relative overflow-hidden rounded-2xl ${
              index === 0 ? "col-span-2 sm:col-span-1 row-span-2 aspect-square" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
