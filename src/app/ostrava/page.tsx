import type { Metadata } from "next";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { PriceTable } from "@/components/content/PriceTable";
import { CTASection } from "@/components/content/CTASection";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { FAQSection } from "@/components/content/FAQSection";
import { faqJsonLd } from "@/lib/schema-helpers";
import { PracticeExample } from "@/components/content/PracticeExample";

export const metadata: Metadata = {
  title: "Obkladač Ostrava | Obkladačské práce | OBK",
  description:
    "Obkladač v Ostravě. Rekonstrukce koupelen, pokládka obkladů a dlažeb v panelových i cihlových domech. Poruba, Zábřeh, Dubina, Hrabůvka. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava" },
};

const breadcrumbs = [{ label: "Ostrava" }];

const faqItems = [
  {
    question: "Kolik stojí rekonstrukce koupelny v paneláku v Ostravě?",
    answer:
      "Kompletní rekonstrukce koupelny v paneláku T06B nebo T08B vychází přibližně od 65 000 Kč bez materiálu u malé koupelny do 4 m². U střední koupelny 4–6 m² obvykle 65 000–95 000 Kč. Zahrnuje bourání, rozvody, hydroizolaci, obklady, dlažbu a montáž sanity. Přesná cena závisí na velikosti a zvoleném řešení.",
  },
  {
    question: "Jak dlouho trvá rekonstrukce koupelny v Ostravě?",
    answer:
      "Malá koupelna v paneláku (do 4 m²) trvá přibližně 8–10 pracovních dní. Standardní koupelna se samostatným WC přibližně 12–15 dní. Počítáme s bouráním, vyzdíváním a kompletním dokončením.",
  },
  {
    question: "Děláte v celé Ostravě, nebo jen v některých částech?",
    answer:
      "Pracujeme ve všech městských obvodech Ostravy — Poruba, Zábřeh, Dubina, Hrabůvka, Moravská Ostrava, Mariánské Hory, Bělský Les, Výškovice, Fifejdy. Na zaměření přijedeme zdarma kamkoli v Ostravě.",
  },
  {
    question: "Musím si sám zajistit materiál?",
    answer:
      "Nemusíte. Pomůžeme s výběrem obkladů a dlažby ve stavebnináchPRO Ostrava, Siko nebo PTÁČEK. Dovoz materiálu na místo zajistíme. Materiál ale hradíte zvlášť, takže máte plnou kontrolu nad rozpočtem.",
  },
  {
    question: "Jakou záruku poskytujete?",
    answer:
      "Na obkladačské práce poskytujeme záruku 60 měsíců. Záruka pokrývá vady provedení — odlepení obkladů, praskliny ve spárách, netěsnost hydroizolace. Záruční list dostanete při předání.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "LocalBusiness",
      name: "OBK Obkladač Ostrava",
      image: "https://obklady-ostrava.cz/og-image.jpg",
      telephone: "+420737540605",
      url: "https://obklady-ostrava.cz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "City",
        name: "Ostrava",
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function OstravaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Ostrava má přes 280 000 obyvatel a většina bydlí v panelových domech
          ze 60. až 80. let. Typy T06B, T08B, OP 1.11 — všechny mají
          umakartová bytová jádra o rozměrech 1300 x 1600 mm nebo 1800 x 2400 mm.
          Po 40+ letech provozu jsou na konci životnosti. Děláme jejich kompletní
          přestavbu na zděné koupelny s hydroizolací a moderními obklady.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
          Kde v Ostravě pracujeme
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Poruba</strong> — největší sídliště v Ostravě. Panelové domy
            z 60.-80. let, převážně T06B. Bytová jádra 1300 x 1600 mm. Obvyklé
            ulice: Hlavní třída, Opavská, Vřesinská, Čs. exilu.
          </p>
          <p>
            <strong>Zábřeh</strong> — sídliště Výškovice, Zábřeh-Bělský Les.
            Paneláky T08B a OP 1.11. Časté zakázky na ul. Výškovická,
            Kosmonautů, Svazácká.
          </p>
          <p>
            <strong>Dubina</strong> — sídliště z 80. let. Panelové domy T06B
            s umakartovými jádry. Zde bourání a vyzdění nového jádra z YTONGu
            trvá obvykle 2-3 dny.
          </p>
          <p>
            <strong>Hrabůvka</strong> — mix starších panelových a cihlových domů.
            U cihlových domů řešíme často vlhkost a potřebu sanace zdí před
            obkládáním.
          </p>
          <p>
            <strong>Moravská Ostrava</strong> — cihlové domy z přelomu století,
            velké koupelny, vysoké stropy. Jiný typ práce než v panelácích.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
          Orientační ceník prací v Ostravě
        </h2>
        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Standardní obklady (do 60×60 cm)", "600–850 Kč/m²", "Včetně lepidla a spárování"],
            ["Velkoformátové obklady (nad 60×60 cm)", "850–1 250 Kč/m²", "Buttering-floating, nivelace"],
            ["Standardní dlažba (do 60×60 cm)", "550–800 Kč/m²", "Včetně vyrovnání podkladu"],
            ["Velkoformátová dlažba (nad 60×60 cm)", "800–1 200 Kč/m²", "Nivelace, buttering-floating"],
            ["Hydroizolace jednovrstvá", "250–400 Kč/m²", "Stěrka + bandáž rohů"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Dvouvrstvá stěrka + bandáž"],
            ["Odstranění obkladů", "180–300 Kč/m²", "Včetně úklidu"],
            ["Bourání umakartového jádra", "8 000–15 000 Kč", "Včetně přípravy podkladu"],
            ["Odvoz suti", "4 500–6 000 Kč", "Kontejner + odvoz na skládku"],
            ["Kompletní koupelna — malá (do 4 m²)", "45 000–65 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — střední (4–6 m²)", "65 000–95 000 Kč", "Práce bez materiálu"],
            ["Kompletní koupelna — velká (6–10 m²)", "95 000–140 000 Kč", "Práce bez materiálu"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Byt 3+1 v Ostravě-Zábřehu, ul. Výškovická. Panelový dům T08B z roku 1978. Umakartové jádro 1800 x 2400 mm — koupelna + WC (cca 5,5 m²). Bourání umakartového jádra, vyzdění YTONGem 100mm, nové rozvody PPR a HT, hydroizolace Mapei Mapelastic, obklady RAKO Board 30x60 cm, dlažba RAKO Extra 60x60 cm, sprchový kout Walk-in 90x120 cm, umyvadlo Cersanit Lara. Práce přibližně 12–14 pracovních dní. Cena prací: přibližně 90 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete obkladače v Ostravě?"
          description="Zaměření a cenovou nabídku zpracujeme zdarma. Přijedeme kamkoli v Ostravě — Poruba, Zábřeh, Dubina, Hrabůvka i další obvody. Zavolejte nebo napište."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava-Poruba", href: "/ostrava/poruba" },
            { title: "Obkladač Ostrava-Zábřeh", href: "/ostrava/zabreh" },
            { title: "Obkladač Ostrava-Dubina", href: "/ostrava/dubina" },
            { title: "Obkladač Ostrava-Hrabůvka", href: "/ostrava/hrabuvka" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
