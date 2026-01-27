
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, ChevronLeft, ChevronRight, Check, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dateOffset, setDateOffset] = useState(0);
  const [timeOffset, setTimeOffset] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Generate dates (next 21 days, skip weekends)
  const getAllDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        days.push({
          value: date.toISOString().split('T')[0],
          dayName: date.toLocaleDateString('cs-CZ', { weekday: 'short' }).toUpperCase(),
          dayNumber: date.getDate(),
          month: date.toLocaleDateString('cs-CZ', { month: 'short' }),
        });
      }
    }
    return days;
  };

  const allDays = getAllDays();
  const visibleDays = allDays.slice(dateOffset, dateOffset + 7);

  // Time slots with 30-minute intervals (working hours 8:00-18:00)
  const allTimeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30"
  ];

  const canScrollDateLeft = dateOffset > 0;
  const canScrollDateRight = dateOffset + 7 < allDays.length;

  const isFormValid = formData.name && formData.phone && formData.preferredDate && formData.preferredTime;

  return (
    <Section id="kontakt">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Domluvte si<br />konzultaci
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Zavoláme vám ve vámi zvoleném čase a probereme váš projekt.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Form (Transparent) */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] p-8 text-center shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Děkujeme!</h3>
                <p className="text-gray-500 text-sm mb-4">Ozveme se vám v dohodnutém termínu.</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "" });
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
              >
                {/* Form Fields Section */}

                {/* Form Fields Section */}
                <div className="mb-6">
                  <div className="grid grid-cols-12 gap-4">
                    {/* Name */}
                    <div className="col-span-12 sm:col-span-6">
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1 uppercase tracking-wide">Jméno *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[#C7D2FE]/20 border border-[#C7D2FE]/40 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="Jan"
                        style={{ fontSize: '16px' }}
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-span-12 sm:col-span-6">
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1 uppercase tracking-wide">Telefon *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[#C7D2FE]/20 border border-[#C7D2FE]/40 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="+420"
                        style={{ fontSize: '16px' }}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-span-12">
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1 uppercase tracking-wide">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[#C7D2FE]/20 border border-[#C7D2FE]/40 focus:border-[#C7D2FE] focus:ring-2 focus:ring-[#C7D2FE]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="jan@email.cz"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-4 bg-[#C7D2FE]/20 border border-[#C7D2FE]/40 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-700">Vyberte den</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setDateOffset(Math.max(0, dateOffset - 1))}
                        disabled={!canScrollDateLeft}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${canScrollDateLeft ? 'bg-white text-[#1E1E1E] shadow-sm hover:bg-gray-50' : 'bg-transparent text-gray-300'}`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setDateOffset(Math.min(allDays.length - 7, dateOffset + 1))}
                        disabled={!canScrollDateRight}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${canScrollDateRight ? 'bg-white text-[#1E1E1E] shadow-sm hover:bg-gray-50' : 'bg-transparent text-gray-300'}`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2 overflow-hidden">
                    {visibleDays.map((day) => {
                      const isSelected = formData.preferredDate === day.value;
                      return (
                        <button
                          key={day.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, preferredDate: day.value }))}
                          className={`flex-1 py-3 text-center transition-all rounded-xl border ${isSelected ? 'bg-transparent border-transparent' : 'bg-transparent border-transparent hover:bg-white/50 hover:border-white/50'}`}
                        >
                          <span className={`block text-[10px] uppercase font-bold tracking-wider mb-0.5 ${isSelected ? 'text-[#6B7AE8]' : 'text-gray-400'}`}>
                            {day.dayName}
                          </span>
                          <span className={`block text-xl font-bold ${isSelected ? 'text-[#6B7AE8]' : 'text-gray-900'}`}>
                            {day.dayNumber}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-8 bg-[#C7D2FE]/20 border border-[#C7D2FE]/40 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-700">Vyberte čas</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setTimeOffset(Math.max(0, timeOffset - 1))}
                        disabled={timeOffset === 0}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${timeOffset > 0 ? 'bg-white text-[#1E1E1E] shadow-sm hover:bg-gray-50' : 'bg-transparent text-gray-300'}`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setTimeOffset(Math.min(allTimeSlots.length - 10, timeOffset + 1))}
                        disabled={timeOffset >= allTimeSlots.length - 10}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${timeOffset < allTimeSlots.length - 10 ? 'bg-white text-[#1E1E1E] shadow-sm hover:bg-gray-50' : 'bg-transparent text-gray-300'}`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {allTimeSlots.slice(timeOffset, timeOffset + 10).map((time) => {
                      const isSelected = formData.preferredTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, preferredTime: time }))}
                          className={`py-2 text-center text-sm font-medium transition-all rounded-lg border ${isSelected ? 'bg-transparent border-transparent text-[#6B7AE8] font-bold' : 'bg-transparent border-transparent text-gray-600 hover:bg-white/50'}`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="violet"
                    size="lg"
                    disabled={!isFormValid || isSubmitting}
                    className={!isFormValid || isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                    ) : (
                      <>
                        Zapsat se na konzultaci
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </div>

          {/* Right Column - Contact Info Block (Separate Card) */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-gray-300 rounded-[2.5rem] p-8 sm:p-10 h-full flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">Kontaktní údaje</h3>
              <div className="space-y-8 flex-grow mt-8">
                <a
                  href="tel:+420123456789"
                  className="flex items-start gap-4 hover:opacity-70 transition-opacity group"
                >
                  <div className="flex items-center justify-center pt-1">
                    <Phone className="w-5 h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Telefon</p>
                    <p className="text-lg font-bold text-gray-900">+420 123 456 789</p>
                  </div>
                </a>

                <a
                  href="mailto:info@koupelna-ostrava.cz"
                  className="flex items-start gap-4 hover:opacity-70 transition-opacity group"
                >
                  <div className="flex items-center justify-center pt-1">
                    <Mail className="w-5 h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-lg font-bold text-gray-900 break-all">info@koupelna-ostrava.cz</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center pt-1">
                    <Clock className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pracovní doba</p>
                    <p className="text-lg font-bold text-gray-900">Po - Pá: 8:00 - 18:00</p>
                    <p className="text-sm text-gray-500 mt-1">Zaměření možné i o víkendu</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8 mt-auto border-t border-gray-300/50">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Sledujte nás</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform text-gray-900">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform text-gray-900">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform text-gray-900">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50">
                <p className="font-bold text-gray-900 text-sm">Odpovíme do 24 hodin</p>
                <p className="text-xs text-gray-600">nebo vám zavoláme ve vámi zvoleném čase</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
