
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Check, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Chyba při odesílání");

      setIsSubmitted(true);
    } catch {
      setError("Nepodařilo se odeslat. Zavolejte nám: +420 737 540 605");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone;

  return (
    <Section id="kontakt">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - only on mobile */}
        <div className="mb-8 sm:mb-12 lg:hidden">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
            Domluvte si<br />konzultaci
          </h2>
          <p className="text-gray-500 text-xs sm:text-base">
            Zavoláme vám do 2 hodin a probereme váš projekt.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Left Column - Header + Form */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Header - only on desktop */}
            <div className="hidden lg:block mb-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-3">
                Domluvte si<br />konzultaci
              </h2>
              <p className="text-gray-500 text-base">
                Zavoláme vám do 2 hodin a probereme váš projekt.
              </p>
            </div>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] p-5 sm:p-8 text-center shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2">Děkujeme!</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Ozveme se vám do 2 hodin.</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "" });
                  }}
                  className="text-[#1E1E1E] hover:underline text-sm font-medium"
                >
                  Nová žádost
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:bg-white lg:rounded-[2rem] lg:p-8 lg:shadow-lg lg:border lg:border-gray-100"
              >
                {/* Mobile: 2-column grid. Desktop: single column stack */}
                <div className="mb-5 sm:mb-6">
                  <div className="grid grid-cols-12 lg:grid-cols-1 gap-3 sm:gap-4">
                    {/* Name */}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-1">
                      <label className="block text-xs font-semibold text-gray-500 mb-1 sm:mb-1.5 ml-1 uppercase tracking-wide">Jméno *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F5F5F5] lg:bg-[#FAFAFA] border border-gray-200 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="Jan"
                        style={{ fontSize: '16px' }}
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-1">
                      <label className="block text-xs font-semibold text-gray-500 mb-1 sm:mb-1.5 ml-1 uppercase tracking-wide">Telefon *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F5F5F5] lg:bg-[#FAFAFA] border border-gray-200 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="+420"
                        style={{ fontSize: '16px' }}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-span-12 lg:col-span-1">
                      <label className="block text-xs font-semibold text-gray-500 mb-1 sm:mb-1.5 ml-1 uppercase tracking-wide">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#F5F5F5] lg:bg-[#FAFAFA] border border-gray-200 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="jan@email.cz"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                )}

                {/* Submit Button */}
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    style={{
                      backgroundColor: '#C7D2FE',
                      color: '#1F2937',
                      padding: '14px 36px',
                      borderRadius: '9999px',
                      fontSize: '16px',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(199, 210, 254, 0.5)',
                      opacity: !isFormValid || isSubmitting ? 0.7 : 1,
                      cursor: !isFormValid || isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                    ) : (
                      <>
                        Zavolám vám do 2 hodin
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Ozve se vám přímo mistr, ne operátor call centra.
                  </p>
                </div>
              </motion.form>
            )}
          </div>

          {/* Right Column - Contact Info Block */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-gray-300 rounded-[2.5rem] p-5 sm:p-10 h-full flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-5 sm:mb-12">Kontaktní údaje</h3>
              <div className="space-y-5 sm:space-y-8 flex-grow mt-4 sm:mt-8">
                <a
                  href="tel:+420737540605"
                  className="flex items-start gap-3 sm:gap-4 hover:opacity-70 transition-opacity group"
                >
                  <div className="flex items-center justify-center pt-0.5 sm:pt-1">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1">Telefon</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">+420 737 540 605</p>
                  </div>
                </a>

                <a
                  href="mailto:info@obklady-ostrava.cz"
                  className="flex items-start gap-3 sm:gap-4 hover:opacity-70 transition-opacity group"
                >
                  <div className="flex items-center justify-center pt-0.5 sm:pt-1">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1">Email</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900 break-all">info@obklady-ostrava.cz</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex items-center justify-center pt-0.5 sm:pt-1">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1">Pracovní doba</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">Po - Pá: 8:00 - 18:00</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Zaměření možné i o víkendu</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-5 sm:pt-8 mt-auto border-t border-gray-300/50">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">Sledujte nás</p>
                  <div className="flex gap-3 sm:gap-4">
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform text-gray-900">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform text-gray-900">
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform text-gray-900">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-8 p-3 sm:p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50">
                <p className="font-bold text-gray-900 text-sm">Odpovíme do 2 hodin</p>
                <p className="text-xs text-gray-600">Ozve se vám přímo mistr, ne operátor.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
