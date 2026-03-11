"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/sluzby/rekonstrukce-koupelny", label: "Rekonstrukce", isExternal: true },
  { href: "#svet-kamene", label: "Kámen", isExternal: false },
  { href: "/cenik", label: "Ceník", isExternal: true },
  { href: "/realizace", label: "Realizace", isExternal: true },
  { href: "#kontakt", label: "Kontakt", isExternal: false },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // On sub-pages, redirect to home page with anchor
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo.png"
                alt="Koupelna Ostrava"
                width={150}
                height={100}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[15px] font-semibold"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[15px] font-semibold"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+420737540605"
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+420 737 540 605</span>
              </a>
              <Button
                variant="violet"
                size="md"
                onClick={() => scrollToSection("#kontakt")}
              >
                Spočítat cenu
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2 text-[var(--text-primary)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-14 left-0 right-0 bg-white border-b border-[var(--border)] shadow-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="container-custom py-6 space-y-1">
                {navLinks.map((link, index) => (
                  link.isExternal ? (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block w-full text-left px-4 py-3 text-lg font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="relative block w-full text-left px-4 py-3 text-lg font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.label}
                    </motion.button>
                  )
                ))}

                <div className="pt-4 mt-4 border-t border-[var(--border)] space-y-3">
                  <a
                    href="tel:+420737540605"
                    className="flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+420 737 540 605</span>
                  </a>
                  <div className="px-4">
                    <Button
                      variant="violet"
                      className="w-full"
                      onClick={() => scrollToSection("#kontakt")}
                    >
                      Spočítat cenu
                    </Button>
                  </div>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
