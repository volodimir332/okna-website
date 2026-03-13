import { Header, Footer } from "@/components/layout";
import {
  Hero,
  ProcessSteps,
  Measurement,
  Gallery,
  Contact,
  Specializace,
  Reviews,
  Stats,
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
        <Stats />
        <Gallery />
        <Reviews />
        <Measurement />
        <Contact />
      </main>
      <Footer />
      <PromoPopup />
      <CookieConsent />
      <WhatsAppButton />
    </div>
  );
}
