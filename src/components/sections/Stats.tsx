"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Users, Shield } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Calendar, value: "15+", label: "let praxe v Ostravě" },
  { icon: Briefcase, value: "500+", label: "dokončených projektů" },
  { icon: Users, value: "10", label: "měst po celém MSK" },
  { icon: Shield, value: "5 let", label: "záruka na práci" },
];

export function Stats() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <motion.div
            className="flex items-center justify-center lg:mr-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src="/images/logos/logo.png"
              alt="OBK — Obklady Ostrava logo"
              width={500}
              height={250}
              className="w-40 sm:w-52 lg:w-64 h-auto"
              style={{ filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.25))" }}
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 flex-1">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-7 h-7 sm:w-9 sm:h-9 text-[#6B7AE8] mb-2 sm:mb-3" strokeWidth={1.5} />
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-none mb-1 sm:mb-2">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
