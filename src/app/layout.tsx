import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
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
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAFAFA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://koupelna-ostrava.cz"),
  title: {
    default: "Rekonstrukce koupelny Ostrava | Na klíč od 39 000 Kč | Záruka 60 měsíců",
    template: "%s | Koupelna Ostrava"
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
  authors: [{ name: "Koupelna Ostrava" }],
  creator: "Koupelna Ostrava",
  publisher: "Koupelna Ostrava",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://koupelna-ostrava.cz",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://koupelna-ostrava.cz",
    siteName: "Koupelna Ostrava",
    title: "Rekonstrukce koupelny Ostrava | Na klíč od 39 000 Kč",
    description:
      "Specialisté na rekonstrukce koupelen v Ostravě a okolí. Vlastní tým bez subdodavatelů, pevná cena, hotovo v termínu. Záruka 60 měsíců.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Koupelna Ostrava - Rekonstrukce koupelen na klíč",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekonstrukce koupelny Ostrava | Na klíč",
    description: "Specialisté na rekonstrukce koupelen v Ostravě a okolí. Záruka 60 měsíců.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Schema.org structured data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://koupelna-ostrava.cz/#organization",
      "name": "Koupelna Ostrava",
      "alternateName": "Rekonstrukce koupelen Ostrava",
      "description": "Specialisté na kompletní rekonstrukce koupelen a bytových jader v Ostravě a okolí. Vlastní realizační tým, pevná cena, záruka 60 měsíců.",
      "url": "https://koupelna-ostrava.cz",
      "telephone": "+420123456789",
      "email": "info@koupelna-ostrava.cz",
      "priceRange": "$$-$$$",
      "currenciesAccepted": "CZK",
      "paymentAccepted": "Cash, Bank Transfer, Credit Card",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nádražní 123",
        "addressLocality": "Ostrava",
        "addressRegion": "Moravskoslezský kraj",
        "postalCode": "702 00",
        "addressCountry": "CZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "49.8209",
        "longitude": "18.2625"
      },
      "areaServed": [
        { "@type": "City", "name": "Ostrava" },
        { "@type": "City", "name": "Havířov" },
        { "@type": "City", "name": "Karviná" },
        { "@type": "City", "name": "Frýdek-Místek" },
        { "@type": "City", "name": "Opava" },
        { "@type": "City", "name": "Orlová" },
        { "@type": "City", "name": "Třinec" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Služby rekonstrukce koupelen",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rekonstrukce malé koupelny",
              "description": "Kompletní rekonstrukce malé koupelny do 4m²"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "115000",
              "priceCurrency": "CZK",
              "minPrice": "115000",
              "maxPrice": "160000"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rekonstrukce standardní koupelny",
              "description": "Kompletní rekonstrukce standardní koupelny 4-6m²"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "160000",
              "priceCurrency": "CZK",
              "minPrice": "160000",
              "maxPrice": "250000"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rekonstrukce nadstandardní koupelny",
              "description": "Kompletní rekonstrukce prostorné koupelny nad 6m²"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "245000",
              "priceCurrency": "CZK",
              "minPrice": "245000"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/koupelnaostrava",
        "https://www.instagram.com/koupelnaostrava"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://koupelna-ostrava.cz/#website",
      "url": "https://koupelna-ostrava.cz",
      "name": "Koupelna Ostrava",
      "description": "Rekonstrukce koupelen a bytových jader v Ostravě",
      "publisher": {
        "@id": "https://koupelna-ostrava.cz/#organization"
      },
      "inLanguage": "cs-CZ"
    },
    {
      "@type": "WebPage",
      "@id": "https://koupelna-ostrava.cz/#webpage",
      "url": "https://koupelna-ostrava.cz",
      "name": "Rekonstrukce koupelny Ostrava | Na klíč od 39 000 Kč",
      "isPartOf": {
        "@id": "https://koupelna-ostrava.cz/#website"
      },
      "about": {
        "@id": "https://koupelna-ostrava.cz/#organization"
      },
      "description": "Specialisté na rekonstrukce koupelen v Ostravě a okolí. Vlastní tým, pevná cena, záruka 60 měsíců.",
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
      <body className="font-sans antialiased overflow-x-hidden w-full relative bg-[#FAFAFA]">
        <div className="w-full max-w-[100vw] overflow-x-hidden flex flex-col min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
