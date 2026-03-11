"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  product: [
    { href: "/sluzby", label: "Služby" },
    { href: "/cenik", label: "Ceník" },
    { href: "/realizace", label: "Realizace" },
    { href: "/rady", label: "Rady a tipy" },
  ],
  resources: [
    { href: "/sluzby/rekonstrukce-koupelny", label: "Rekonstrukce koupelny" },
    { href: "/sluzby/obklady-koupelen", label: "Obklady koupelen" },
    { href: "/sluzby/velkoformatove-obklady", label: "Velkoformáty" },
    { href: "/sluzby/hydroizolace", label: "Hydroizolace" },
    { href: "#kviz", label: "Kalkulačka ceny" },
    { href: "#kontakt", label: "Kontakt" },
  ],
  locations: {
    main: [
      { label: "Ostrava", href: "/ostrava" },
      { label: "Havířov", href: "/havirov" },
      { label: "Karviná", href: "/karvina" },
      { label: "Frýdek-Místek", href: "/frydek-mistek" },
      { label: "Opava", href: "/opava" },
      { label: "Třinec", href: null },
      { label: "Orlová", href: null },
      { label: "Bohumín", href: null },
      { label: "Nový Jičín", href: null },
      { label: "Kopřivnice", href: null },
    ],
    extended: [
      { label: "Přerov", href: null },
      { label: "Olomouc", href: null },
      { label: "Zlín", href: null },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mx-2">
      <div
        className="bg-[#1E1E1E] text-white rounded-t-3xl border-t border-x border-white/10 overflow-hidden"
      >
        <div className="px-6 py-8 md:px-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-3">
                  <Image
                    src="/images/logos/logo.png"
                    alt="Koupelna Ostrava"
                    width={150}
                    height={100}
                    className="h-10 w-auto brightness-0 invert"
                    loading="lazy"
                  />
                </div>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                  Obklady, dlažby a přírodní kámen. Realizujeme v Moravskoslezském kraji.
                </p>
                <div className="space-y-2 text-xs sm:text-sm">
                  <a
                    href="tel:+420737540605"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+420 737 540 605</span>
                  </a>
                  <a
                    href="mailto:info@obklady-ostrava.cz"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@obklady-ostrava.cz</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Moravskoslezský kraj a okolí (do 100 km)</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-semibold mb-3 text-white/90 text-sm sm:text-base">Služby</h4>
                <ul className="space-y-2">
                  {footerLinks.product.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold mb-3 text-white/90 text-sm sm:text-base">Informace</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Locations */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-semibold mb-3 text-white/90 text-sm sm:text-base">Působíme v</h4>
                <p className="text-white/40 text-[11px] mb-2">Moravskoslezský kraj:</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
                  {footerLinks.locations.main.map((location) => (
                    <li key={location.label} className="text-xs sm:text-sm">
                      {location.href ? (
                        <a
                          href={location.href}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          {location.label}
                        </a>
                      ) : (
                        <span className="text-white/60">{location.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-white/40 text-[11px] mb-2">Na vyžádání:</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {footerLinks.locations.extended.map((location) => (
                    <li key={location.label} className="text-xs sm:text-sm">
                      <span className="text-white/60">{location.label} a okolí</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-white/40">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <p>Provozovatel: IZOLASTAV, spol. s r.o.</p>
                <p>Sídlo: Vojtěšská 211/6, 110 00 Nové Město, Praha 1</p>
              </div>
              <p className="text-[0.75rem] text-white/30">
                Realizační tým sídlí v Ostravě. Právní sídlo společnosti je v Praze.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-4">
                  <span>IČO: 64617980</span>
                  <span>DIČ: CZ64617980</span>
                  <span>Plátce DPH</span>
                </div>
                <p>© {currentYear} Koupelna Ostrava. Všechna práva vyhrazena.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
