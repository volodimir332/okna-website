"use client";

import { Header, Footer } from "@/components/layout";
import {
  Hero,
  ProcessSteps,
  Packages,
  Measurement,
  Gallery,
  Quiz,
  FAQ,
  Contact,
  TechnicalStandards,
} from "@/components/sections";
import { PromoPopup, BackgroundPattern, CookieConsent } from "@/components/ui";

export default function Home() {
  return (
    <div className="relative bg-[#FAFAFA]">
      {/* Global background with grid - only at top */}
      <BackgroundPattern />

      <Header />
      <main className="relative z-10">
        <Hero />
        <ProcessSteps />
        <TechnicalStandards />
        <Packages />
        <Gallery />
        <Quiz />
        <Measurement />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <PromoPopup />
      <CookieConsent />
    </div>
  );
}
