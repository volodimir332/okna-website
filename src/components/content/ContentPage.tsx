import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { BackgroundPattern } from "@/components/ui/BackgroundPattern";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface ContentPageProps {
  children: React.ReactNode;
  jsonLd?: object;
}

export function ContentPage({ children, jsonLd }: ContentPageProps) {
  return (
    <div className="relative bg-[#FAFAFA]">
      <BackgroundPattern />
      <Header />
      <main className="relative z-10 pt-14 md:pt-16">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </div>
  );
}
