"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Martin Kovář",
    nick: "@martinkovar",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Koupelna vypadá přesně jako na 3D návrhu. Precizní práce, termín dodrželi na den. Cena se nezměnila ani o korunu. Konečně řemeslník, na kterého se dá spolehnout.",
  },
  {
    name: "Jana Svobodová",
    nick: "@janasvo",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Rekonstrukce bytového jádra proběhla bez problémů. Pán přijel, zaměřil, dal přesnou cenu a tu i dodržel. Za 18 dní hotovo. Doporučuji všem v Ostravě.",
  },
  {
    name: "Tomáš Procházka",
    nick: "@tprochazka",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Kamenný krb předčil naše očekávání. Přírodní kámen vypadá luxusně. Sousedi závidí a ptají se na kontakt. Záruka 5 let je super bonus.",
  },
];

export function Reviews() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Co říkají naši zákazníci
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            127 hodnocení · průměr 4,9 z 5
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={review.nick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="bg-white rounded-3xl border border-gray-200/80 p-5 sm:p-6 h-full flex flex-col shadow-sm">
                {/* Header: photo + name + stars */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-tight">
                      {review.name}
                    </p>
                    <p className="text-gray-400 text-xs">{review.nick}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Review text */}
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  {review.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
