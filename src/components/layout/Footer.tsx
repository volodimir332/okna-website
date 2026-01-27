"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { href: "#balicky", label: "Balíčky" },
    { href: "#galerie", label: "Realizace" },
    { href: "#zamereni", label: "Zaměření" },
  ],
  resources: [
    { href: "#jak-to-funguje", label: "Jak to funguje" },
    { href: "#kviz", label: "Kalkulačka ceny" },
    { href: "#kontakt", label: "Kontakt" },
  ],
  locations: [
    "Ostrava",
    "Havířov",
    "Karviná",
    "Frýdek-Místek",
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mx-2">
      <div
        className="bg-[#1E1E1E] text-white rounded-t-3xl border-t border-x border-white/10 overflow-hidden"
      >
        <div className="px-6 py-8 md:px-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">
                  Koupelna<span className="font-light text-white/60"> Ostrava</span>
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                  Specialisté na rekonstrukce koupelen a bytových jader v Ostravě a okolí.
                </p>
                <div className="space-y-2 text-xs sm:text-sm">
                  <a
                    href="tel:+420123456789"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+420 123 456 789</span>
                  </a>
                  <a
                    href="mailto:info@koupelna-ostrava.cz"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@koupelna-ostrava.cz</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Ostrava a okolí (do 50 km)</span>
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
                <ul className="space-y-2">
                  {footerLinks.locations.map((location) => (
                    <li key={location} className="text-white/60 text-xs sm:text-sm">
                      {location}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-white/40">
              <p>© {currentYear} Koupelna Ostrava. Všechna práva vyhrazena.</p>
              <div className="flex items-center gap-6">
                <span>IČO: 12345678</span>
                <span>Pojištění odpovědnosti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
