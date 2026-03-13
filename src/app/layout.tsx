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
    default: "Obklady, dlažby a přírodní kámen Ostrava | Záruka 60 měsíců | OBK",
    template: "%s | Obklady Ostrava"
  },
  description:
    "Precizní obklady, dlažby a přírodní kámen v Ostravě a okolí. Vlastní tým, pevná cena, záruka 60 měsíců. 800+ dokončených projektů. Zaměření zdarma.",
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
    languages: {
      "cs": "https://obklady-ostrava.cz",
      "x-default": "https://obklady-ostrava.cz",
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://obklady-ostrava.cz",
    siteName: "OBK - Obklady Ostrava",
    title: "Obklady, dlažby a kámen v Ostravě | Na klíč | OBK",
    description:
      "Profesionální pokládka obkladů, dlažeb a přírodního kamene. Ostrava a Moravskoslezský kraj. 3D návrh zdarma. Pevná cena. Záruka 60 měsíců.",
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
    title: "Obklady, dlažby a kámen v Ostravě | Na klíč | OBK",
    description: "Profesionální pokládka obkladů, dlažeb a přírodního kamene. Ostrava a Moravskoslezský kraj. Záruka 60 měsíců.",
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
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://obklady-ostrava.cz/#organization",
      "name": "OBK — Obklady Ostrava",
      "alternateName": "IZOLASTAV, spol. s r.o.",
      "image": "https://obklady-ostrava.cz/images/logos/logo.png",
      "telephone": "+420737540605",
      "email": "info@obklady-ostrava.cz",
      "url": "https://obklady-ostrava.cz",
      "priceRange": "$",
      "openingHours": "Mo-Fr 08:00-18:00",
      "foundingDate": "2005",
      "taxID": "CZ64617980",
      "description": "Precizní obklady, dlažby a přírodní kámen v Ostravě. Vlastní tým, záruka 60 měsíců.",
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
        { "@type": "City", "name": "Opava" },
        { "@type": "City", "name": "Třinec" },
        { "@type": "City", "name": "Orlová" }
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
          "name": "Za jak dlouho od první poptávky mohu očekávat realizaci?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Obvykle zahájíme realizaci do 2–4 týdnů od podpisu smlouvy, v závislosti na aktuální vytíženosti."
          }
        },
        {
          "@type": "Question",
          "name": "Jak dlouho trvá kompletní rekonstrukce koupelny?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standardní rekonstrukce koupelny 4–6 m² trvá 14–21 pracovních dní."
          }
        },
        {
          "@type": "Question",
          "name": "Jakou záruku poskytujete na odvedenou práci?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na veškeré práce poskytujeme záruku 60 měsíců (5 let). Jsme plně pojištění."
          }
        },
        {
          "@type": "Question",
          "name": "Kolik stojí rekonstrukce koupelny v Ostravě?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cena se pohybuje od 115 000 Kč za malou koupelnu, přes 160 000-250 000 Kč za standardní, až po 245 000 Kč a více za nadstandardní provedení. Konečná cena závisí na velikosti a vybraných materiálech."
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
