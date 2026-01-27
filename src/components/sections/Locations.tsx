"use client";

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";

const locations = [
  { name: "Ostrava", districts: ["Poruba", "Jih", "Hrabůvka", "Zábřeh", "Centrum"] },
  { name: "Havířov", districts: ["Město", "Podlesí", "Šumbark"] },
  { name: "Karviná", districts: ["Fryštát", "Nové Město", "Mizerov"] },
  { name: "Frýdek-Místek", districts: ["Frýdek", "Místek"] },
];

const additionalAreas = [
  "Opava",
  "Orlová",
  "Třinec",
  "Český Těšín",
  "Bohumín",
  "Rychvald",
];

export function Locations() {
  return (
    <Section id="lokality" theme="secondary">
      <SectionHeader
        title="Kde všude pracujeme"
        subtitle="Působíme v Ostravě a okolí do 50 km. Pokud jste z jiné lokality, kontaktujte nás."
      />

      <div className="max-w-5xl mx-auto">
        {/* Main Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-blue)]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent-blue)]" />
                </div>
                <h3 className="text-lg font-semibold">{location.name}</h3>
              </div>

              <ul className="space-y-2">
                {location.districts.map((district) => (
                  <li key={district} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Check className="w-4 h-4 text-[var(--accent-green)]" />
                    {location.name}-{district}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Areas */}
        <motion.div
          className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--border)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">Další města v dosahu</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-[var(--bg-secondary)] rounded-full text-sm text-[var(--text-secondary)]"
              >
                {area}
              </span>
            ))}
            <span className="px-4 py-2 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] rounded-full text-sm font-medium">
              + další do 50 km
            </span>
          </div>
        </motion.div>

        {/* Map Placeholder - with expanding animation */}
        <motion.div
          className="mt-8 aspect-[2/1] rounded-3xl overflow-hidden bg-[var(--bg-dark)] relative transition-all duration-700"
          initial={{ opacity: 0, scale: 0.96, borderRadius: "32px" }}
          whileInView={{ opacity: 1, scale: 1, borderRadius: "24px" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Placeholder for actual map */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-[var(--accent-blue)]" />
              <p className="text-lg font-medium">Mapa působnosti</p>
              <p className="text-white/60 text-sm mt-2">
                Ostrava + 50 km okolí
              </p>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[var(--accent-blue)] rounded-full animate-pulse" />
          <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-[var(--accent-warm)] rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[var(--accent-blue)] rounded-full animate-pulse" />
        </motion.div>

        {/* Note */}
        <p className="text-center text-sm text-[var(--text-tertiary)] mt-6">
          Nejste z uvedených lokalit? Kontaktujte nás, rádi se domluvíme.
        </p>
      </div>
    </Section>
  );
}
