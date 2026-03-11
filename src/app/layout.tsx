import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFAFA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://obklady-ostrava.cz"),
  title: {
    default: "Rekonstrukce koupelny Ostrava na klíč | Záruka 60 měsíců | OBK",
    template: "%s | Obklady Ostrava"
  },
  description:
    "Specialisté na kompletní rekonstrukce koupelen a bytových jader v Ostravě a okolí. Vlastní realizační tým bez subdodavatelů, pevná cena, hotovo v termínu. Záruka 60 měsíců. Bezplatná konzultace a 3D návrh.",
  keywords: [
    "rekonstrukce koupelny ostrava",
    "rekonstrukce koupelny cena",
    "koupelna na klíč ostrava",
    "rekonstrukce bytového jádra",
    "rekonstrukce umakartového jádra",
    "rekonstrukce panelákové koupelny",
    "přestavba koupelny ostrava",
    "nová koupelna cena",
    "koupelny ostrava-poruba",
    "koupelny ostrava-jih",
    "levná rekonstrukce koupelny",
    "kompletní rekonstrukce jádra",
    "rekonstrukce koupelny do 100 000",
    "bytové jádro rekonstrukce",
    "vyzdění bytového jádra ytongem",
    "ostrava",
    "havířov",
    "karviná",
    "frýdek-místek",
    "opava",
    "orlová",
    "třinec",
  ],
  authors: [{ name: "OBK - Obklady Ostrava" }],
  creator: "OBK - Obklady Ostrava",
  publisher: "OBK - Obklady Ostrava",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://obklady-ostrava.cz",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://obklady-ostrava.cz",
    siteName: "OBK - Obklady Ostrava",
    title: "Rekonstrukce koupelny Ostrava na klíč | OBK",
    description:
      "Specialisté na rekonstrukce koupelen v Ostravě a okolí. Vlastní tým bez subdodavatelů, pevná cena, hotovo v termínu. Záruka 60 měsíců.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OBK - Rekonstrukce koupelen v Ostravě",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekonstrukce koupelny Ostrava | Na klíč",
    description: "Specialisté na rekonstrukce koupelen v Ostravě a okolí. Záruka 60 měsíců.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "PASTE-YOUR-REAL-CODE-HERE",
  // },
};

// JSON-LD Schema.org structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://obklady-ostrava.cz/#organization",
      "name": "OBK - Obklady Ostrava",
      "image": "https://obklady-ostrava.cz/images/logos/logo.png",
      "telephone": "+420737540605",
      "email": "info@obklady-ostrava.cz",
      "url": "https://obklady-ostrava.cz",
      "priceRange": "$",
      "openingHours": "Mo-Fr 08:00-18:00",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ostrava",
        "addressRegion": "Moravskoslezský kraj",
        "addressCountry": "CZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.8209,
        "longitude": 18.2625
      },
      "areaServed": [
        { "@type": "City", "name": "Ostrava" },
        { "@type": "City", "name": "Havířov" },
        { "@type": "City", "name": "Karviná" },
        { "@type": "City", "name": "Frýdek-Místek" },
        { "@type": "City", "name": "Opava" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/koupelnaostrava",
        "https://www.instagram.com/koupelnaostrava"
      ]
    },
    {
      "@type": "Service",
      "provider": { "@id": "https://obklady-ostrava.cz/#organization" },
      "name": "Rekonstrukce koupelen Ostrava",
      "description": "Kompletní rekonstrukce koupelen a bytových jader v Ostravě. Obklady, dlažby, hydroizolace, instalatérské práce.",
      "areaServed": { "@type": "City", "name": "Ostrava" },
      "serviceType": "Obkladačské a rekonstrukční práce"
    },
    {
      "@type": "WebSite",
      "@id": "https://obklady-ostrava.cz/#website",
      "url": "https://obklady-ostrava.cz",
      "name": "OBK - Obklady Ostrava",
      "description": "Rekonstrukce koupelen a obkladačské práce v Ostravě",
      "publisher": {
        "@id": "https://obklady-ostrava.cz/#organization"
      },
      "inLanguage": "cs-CZ"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kolik stojí rekonstrukce koupelny v Ostravě?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cena rekonstrukce koupelny v Ostravě se pohybuje od 115 000 Kč za malou koupelnu, přes 160 000-250 000 Kč za standardní, až po 245 000 Kč a více za nadstandardní provedení. Konečná cena závisí na velikosti, rozsahu prací a vybraných materiálech."
          }
        },
        {
          "@type": "Question",
          "name": "Jak dlouho trvá rekonstrukce koupelny?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kompletní rekonstrukce koupelny obvykle trvá 7-14 dní v závislosti na rozsahu prací. Malá koupelna cca 7 dní, standardní 10 dní, nadstandardní 14+ dní."
          }
        },
        {
          "@type": "Question",
          "name": "Potřebuji stavební povolení na rekonstrukci koupelny?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pokud nezasahujete do nosných konstrukcí a neměníte dispozice, stavební povolení obvykle není potřeba. V případě zásahů do nosných stěn je nutné ohlášení stavby."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
          </Script>
        </>
      )}
      <body className="font-sans antialiased overflow-x-hidden w-full relative bg-[#FAFAFA]">
        <div className="w-full max-w-[100vw] overflow-x-hidden flex flex-col min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
