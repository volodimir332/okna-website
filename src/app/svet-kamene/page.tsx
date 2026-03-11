import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { CTASection } from "@/components/content/CTASection";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Přírodní kámen Ostrava — prodej, výroba, montáž | OBK",
  description:
    "Prodáváme přírodní kámen a vyrábíme na míru. Žula, mramor, travertin, břidlice. Kuchyňské desky, parapety, krby, fasády. Ostrava a okolí.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/svet-kamene",
  },
};

const breadcrumbs = [{ label: "Svět Kamene" }];

const stoneTypes = [
  {
    name: "Žula",
    description:
      "Nejtvrdší přírodní kámen. Ideální na kuchyňské desky a schodiště.",
    image: "/images/kamen/kamen-1.jpg",
  },
  {
    name: "Mramor",
    description:
      "Luxusní povrch pro koupelny a obývací pokoje.",
    image: "/images/kamen/kamen-9.jpg",
  },
  {
    name: "Travertin",
    description:
      "Teplý, mediteránní styl pro interiéry i exteriéry.",
    image: "/images/kamen/kamen-13.jpg",
  },
  {
    name: "Břidlice",
    description:
      "Rustikální charakter pro krby, fasády a zahradní prvky.",
    image: "/images/kamen/kamen-3.jpg",
  },
];

const stoneProducts = [
  "Kuchyňské desky a pracovní plochy",
  "Parapety a okenní desky",
  "Schodišťové stupně a podesty",
  "Obložení krbů a kamen",
  "Zahradní prvky (lavičky, fontány, obrubníky)",
  "Fasádní obklady",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    {
      "@type": "Service",
      provider: { "@id": "https://obklady-ostrava.cz/#organization" },
      name: "Přírodní kámen — prodej, výroba na míru, montáž",
      description:
        "Prodej přírodního kamene, výroba kuchyňských desek, parapetů a schodů z kamene, obložení fasád a krbů.",
      areaServed: { "@type": "City", name: "Ostrava" },
    },
  ],
};

export default function SvetKamenePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Přírodní kámen pro váš domov
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Prodej kamene, výroba na míru a montáž v Ostravě a okolí. Žula,
          mramor, travertin, břidlice — přímo od dodavatele, bez přirážky
          obchodu.
        </p>

        {/* Hero image */}
        <div className="relative w-full h-[250px] sm:h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/kamen/kamen-11.jpg"
            alt="Přírodní kámen — moderní kuchyně s kamenným obkladem"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Section 1 — Jaké kameny nabízíme */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-6">
          Jaké kameny nabízíme
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {stoneTypes.map((stone) => (
            <div
              key={stone.name}
              className="bg-white rounded-2xl border-2 border-[#C7D2FE]/40 overflow-hidden group hover:border-[#6B7AE8]/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={stone.image}
                  alt={`${stone.name} — přírodní kámen`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  {stone.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {stone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2 — Co z kamene vyrobíme */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">
          Co z kamene vyrobíme
        </h2>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Přesné řezání a broušení kamene na CNC strojích. Dodání obvykle do
          10 pracovních dní.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {stoneProducts.map((product) => (
            <div
              key={product}
              className="flex items-center gap-3 bg-white rounded-xl p-3 sm:p-4 border border-[#C7D2FE]/30"
            >
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-green-600" />
              </div>
              <span className="text-sm sm:text-base text-gray-700">
                {product}
              </span>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-6">
          Ukázky kamenných realizací
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {[
            { src: "/images/kamen/kamen-6.jpg", alt: "Kamenná fasáda domu" },
            { src: "/images/kamen/kamen-10.jpg", alt: "Kamenný sprchový kout" },
            { src: "/images/kamen/kamen-5.jpg", alt: "Obložení fasády kamenem" },
            { src: "/images/kamen/kamen-2.jpg", alt: "Montáž kamenného obkladu" },
            { src: "/images/kamen/kamen-15.jpg", alt: "Kamenné venkovní barbecue" },
            { src: "/images/kamen/kamen-8.jpg", alt: "Stavba kamenné zdi" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <CTASection
          title="Pošlete poptávku — odpovíme do 2 hodin"
          description="Popište nám, co potřebujete z kamene. Zavoláme vám a probereme materiál, rozměry a cenu. Zaměření zdarma."
        />

        <RelatedLinks
          links={[
            {
              title: "Rekonstrukce koupelny",
              href: "/sluzby/rekonstrukce-koupelny",
            },
            {
              title: "Velkoformátové obklady",
              href: "/sluzby/velkoformatove-obklady",
            },
            { title: "Ceník obkladačských prací", href: "/cenik" },
            { title: "Naše realizace", href: "/realizace" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
