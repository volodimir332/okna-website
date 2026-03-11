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
  Specializace,
} from "@/components/sections";
import { PromoPopup, CookieConsent, WhatsAppButton } from "@/components/ui";

export default function Home() {
  return (
    <div className="relative bg-[#FAFAFA]">
      <Header />
      <main className="relative z-10">
        <Hero />
        <ProcessSteps />
        <Specializace />
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
      <WhatsAppButton />
    </div>
  );
}
