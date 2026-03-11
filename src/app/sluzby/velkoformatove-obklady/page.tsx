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
  title: "Velkoformátové obklady Ostrava | OBK",
  description:
    "Pokládka velkoformátových obkladů v Ostravě. Formáty 60x120 až 120x260 cm. Buttering-floating, nivelace. Od 850 Kč/m². Záruka 60 měsíců.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/sluzby/velkoformatove-obklady",
  },
};

const breadcrumbs = [
  { label: "Služby", href: "/sluzby" },
  { label: "Velkoformátové obklady" },
];

const faqItems = [
  {
    question: "Jaké formáty obkladů pokládáte?",
    answer:
      "Pokládáme 60x120, 75x150, 120x120 a 120x260 cm. Desky 120x260 váží 30–40 kg a vyžadují dva lidi a vakuové přísavky. Větší formáty na vyžádání.",
  },
  {
    question: "Proč jsou velkoformáty dražší na pokládku?",
    answer:
      "Vyžadují dokonale rovný podklad (odchylka max. 1,5 mm/2 m), buttering-floating techniku, nivelační systém a speciální nářadí. Řezání provádíme lištovým řezačem nebo úhlovou bruskou s diamantovým kotoučem.",
  },
  {
    question: "Lze velkoformáty použít na podlahu?",
    answer:
      "Ano. Na podlahu pokládáme 60x120 a 120x120 cm. Vyžaduje vyrovnaný podklad samonivelákem. Používáme Mapei Keraflex Maxi S1 — flexibilní lepidlo pro velkoformáty.",
  },
  {
    question: "Jak se velkoformáty přepravují?",
    answer:
      "Desky 120x260 přepravujeme na stojanech ve svislé poloze. Do bytu nosíme ve dvou pomocí vakuových přísavek. Výtahem se vejde formát do 120x120. Větší desky nosíme po schodech.",
  },
  {
    question: "Kolik spár má velkoformátový obklad?",
    answer:
      "Minimum. U formátu 120x260 pokryjete celou stěnu koupelny jednou deskou — žádná svislá spára. Spáry děláme 1,5–2 mm tenké. Výsledek vypadá jako jedna celistvá plocha.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "Service",
      provider: { "@id": "https://obklady-ostrava.cz/#organization" },
      name: "Velkoformátové obklady Ostrava",
      description:
        "Pokládka velkoformátových obkladů 60x120 až 120x260 cm. Buttering-floating, nivelace.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CZK",
        price: "850",
        unitText: "m²",
      },
    },
  ],
};

export default function VelkoformatoveObkladyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Velkoformátové obklady v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Pokládáme obklady od 60x120 po 120x260 cm. Minimum spár, čistý
          moderní vzhled. Buttering-floating technika, nivelační systém,
          vakuové přísavky. V Ostravě děláme velkoformáty od roku 2018.
        </p>

        {/* Formats */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Formáty, které pokládáme
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Každý formát má svá specifika. Čím větší deska, tím přísnější
          požadavky na podklad a tím pomalejší pokládka. Ale výsledek stojí
          za to.
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>60x120 cm</strong> — nejběžnější velkoformát. Váha 8–12 kg
            na kus. Zvládne jeden obkladač. Vhodné na stěny i podlahu.
          </li>
          <li>
            <strong>75x150 cm</strong> — méně obvyklý formát, hlavně Marazzi
            a Fondovalle. Vyžaduje přísavky.
          </li>
          <li>
            <strong>120x120 cm</strong> — čtvercové velké desky. Oblíbené na
            podlahu. Vejdou se do výtahu.
          </li>
          <li>
            <strong>120x260 cm</strong> — celá stěna jednou deskou. Laminam,
            Marazzi Grande, Sapien. Váha 30–40 kg. Vždy dva lidé.
          </li>
        </ul>

        {/* Technique */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Technika pokládky
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Velkoformáty vyžadují jiný přístup než standardní obklady. Nestačí
          nanést lepidlo na stěnu. Každý krok musí být přesný.
        </p>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Příprava podkladu</strong> — rovinnost max. 1,5 mm/2 m.
            Vyrovnání stěrkou Weber.floor 4150 nebo Mapei Nivoplan Plus.
          </li>
          <li>
            <strong>Buttering-floating</strong> — lepidlo na stěnu i na desku.
            Pokrytí min. 95 % plochy. Mapei Keraflex Maxi S1 nebo Ceresit CM 17.
          </li>
          <li>
            <strong>Nivelace</strong> — nivelační klipsy a klíny. Zajistí
            rovinu mezi deskami. U formátů nad 60 cm povinné.
          </li>
          <li>
            <strong>Řezání</strong> — lištový řezač Sigma nebo Rubi na
            rovné řezy. Úhlová bruska s diamantovým kotoučem na výřezy.
          </li>
          <li>
            <strong>Spárování</strong> — tenké spáry 1,5–2 mm. Mapei
            Ultracolor Plus nebo Keracolor FF. Silikonové spáry v rozích.
          </li>
        </ol>

        {/* Transport */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Přeprava a manipulace
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Desky 120x260 cm se přepravují ve svislé poloze na stojanu.
          Do panelákových bytů v Porubě nebo na Dubině nosíme po schodech ve
          dvou. Vakuové přísavky Sigma drží desku bezpečně. Počítejte
          s příplatkem 2 500–5 000 Kč za vynášku do vyšších pater.
        </p>

        {/* Prices */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Ceník velkoformátových obkladů
        </h2>
        <PriceTable
          headers={["Položka", "Cena", "Poznámka"]}
          rows={[
            ["Pokládka 60×120 cm", "850–1 100 Kč/m²", "Buttering-floating, nivelace"],
            ["Pokládka 120×120 cm", "950–1 200 Kč/m²", "Včetně nivelace"],
            ["Pokládka 120×260 cm", "1 100–1 500 Kč/m²", "2 obkladači, přísavky"],
            ["Materiál RAKO Extra 60×120", "od 890 Kč/m²", "Základní řada"],
            ["Materiál Marazzi Grande 120×260", "od 1 200 Kč/m²", "Prémiová řada"],
            ["Materiál Laminam 120×260", "od 1 800 Kč/m²", "Ultratenký 3–5 mm"],
            ["Vynáška nad 3. patro", "2 500–5 000 Kč", "Závisí na počtu desek"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu (pokud není uvedeno jinak). Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample text="Koupelna 7 m² v novostavbě v Zábřehu, Ostrava. Obklad Laminam 120x260 cm na 3 stěny (16,4 m²). Podlaha 120x120 cm. Buttering-floating Mapei Keraflex Maxi S1. Nivelace Rubi. Řezání lištovým řezačem Sigma 130 cm. Spáry Mapei Ultracolor Plus 1,5 mm. Práce trvala přibližně 8 dní. Pokládka: 78 000 Kč bez materiálu. Materiál: 48 000 Kč." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Plánujete velkoformátové obklady?"
          description="Přijedeme, zaměříme a poradíme s výběrem formátu. Cenovou nabídku zpracujeme obvykle do 3 pracovních dnů. Zaměření zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Obklady kuchyní", href: "/sluzby/obklady-kuchyni" },
            { title: "Rekonstrukce koupelny na klíč", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
