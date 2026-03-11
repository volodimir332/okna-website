import type { Metadata } from "next";
import Image from "next/image";
import { ContentPage } from "@/components/content/ContentPage";

export const metadata: Metadata = {
  title: "Realizace | Galerie našich prací",
  description:
    "Podívejte se na naše dokončené realizace rekonstrukcí koupelen v Ostravě a okolí. Fotogalerie před a po rekonstrukci.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/realizace",
  },
};

const workImages = [
  "IMG_6440_3.jpg",
  "IMG_6376_3.jpg",
  "IMG_6340_3.jpg",
  "IMG_6338_3.jpg",
  "IMG_6418_3.jpg",
  "IMG_6375_3.jpg",
  "IMG_6440_2.jpg",
  "IMG_6376_2.jpg",
  "IMG_6340_2.jpg",
  "IMG_6338_2.jpg",
  "IMG_6418_2.jpg",
  "IMG_6375_2.jpg",
  "IMG_6079_2.jpg",
  "IMG_6062_2.jpg",
  "IMG_5921_2.jpg",
  "IMG_5747_2.jpg",
  "IMG_5710_2.jpg",
  "IMG_5638_2.jpg",
  "IMG_5636_2.jpg",
  "IMG_5561_2.jpg",
  "IMG_4743_2.jpg",
  "IMG_4663_2.jpg",
  "IMG_4436_2.jpg",
  "IMG_4051_2.jpg",
  "IMG_4044_2.jpg",
  "IMG_6439_2.jpg",
  "IMG_6437_2.jpg",
  "IMG_6440.jpg",
  "IMG_6439.jpg",
  "IMG_6078.jpg",
  "IMG_5925.jpg",
  "IMG_5749.jpg",
  "IMG_5564.jpg",
  "IMG_5364.jpg",
  "IMG_5062.jpg",
  "IMG_5061.jpg",
  "IMG_4738.jpg",
  "IMG_4411.jpg",
  "IMG_4397.jpg",
  "IMG_4170.jpg",
  "IMG_4135.jpg",
  "IMG_3999.jpg",
  "IMG_3993.jpg",
  "IMG_3986.jpg",
  "IMG_3976.jpg",
  "IMG_3970.jpg",
  "IMG_3922.jpg",
  "IMG_3920.jpg",
  "IMG_3917.jpg",
  "IMG_3912.jpg",
  "IMG_3892.jpg",
  "IMG_3670.jpg",
  "IMG_3667.jpg",
  "IMG_3661.jpg",
  "IMG_3660.jpg",
  "IMG_3549.jpg",
  "IMG_3401.jpg",
  "IMG_2526.jpg",
  "IMG_2512.jpg",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Realizace rekonstrukcí koupelen — OBK Ostrava",
  description:
    "Fotogalerie dokončených realizací rekonstrukcí koupelen v Ostravě a okolí. Více než 200 projektů.",
  url: "https://obklady-ostrava.cz/realizace",
  mainEntity: {
    "@type": "ImageGallery",
    name: "Galerie realizací OBK",
    about: "Rekonstrukce koupelen, obklady a dlažby v Ostravě",
    numberOfItems: workImages.length,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://obklady-ostrava.cz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Realizace",
        item: "https://obklady-ostrava.cz/realizace",
      },
    ],
  },
};

export default function RealizacePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <section className="py-12 sm:py-20">
        <div className="container-custom px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Naše realizace
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
              Prohlédněte si fotogalerii dokončených rekonstrukcí koupelen
              v&nbsp;Ostravě a okolí. Každý projekt realizujeme vlastním týmem
              bez subdodavatelů.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {workImages.map((img, i) => (
              <div key={img} className="mb-4 break-inside-avoid">
                <Image
                  src={`/images/work/${img}`}
                  alt={`Rekonstrukce koupelny Ostrava — realizace č. ${i + 1}`}
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
