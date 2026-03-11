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
  title: "Obklady koupelen Ostrava | OBK",
  description:
    "Pokládka obkladů v koupelně v Ostravě. Od 600 Kč/m² standardní formát, od 850 Kč/m² velkoformát. Hydroizolace, spárování, záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/sluzby/obklady-koupelen" },
};

const breadcrumbs = [
  { label: "Služby", href: "/sluzby" },
  { label: "Obklady koupelen" },
];

const faqItems = [
  {
    question: "Jak dlouho trvá obložení koupelny?",
    answer:
      "Standardní koupelna 4–6 m² zabere přibližně 5–7 pracovních dní. Velkoformátové obklady trvají obvykle o 1–2 dny déle kvůli přípravě podkladu a preciznímu řezání.",
  },
  {
    question: "Musím si hydroizolaci objednat zvlášť?",
    answer:
      "Ne. Hydroizolaci děláme automaticky jako součást pokládky v mokrých zónách. Je to povinné dle ČSN 74 4505 a v naší ceně obkladů je zahrnuta.",
  },
  {
    question: "Jaký formát obkladů doporučujete do malé koupelny?",
    answer:
      "Do koupelny do 5 m² doporučuji formát 30x60 cm. Opticky zvětšuje prostor. Pokládáme na výšku s horizontálním spárováním. RAKO Concept nebo Cersanit Concept jsou ověřené řady.",
  },
  {
    question: "Děláte i obklady na podlahu koupelny?",
    answer:
      "Ano, pokládáme i dlažbu. Na podlahu koupelny používáme protiskluzovou dlažbu třídy R10 nebo R11. Formáty 30x30 až 60x60 cm. Cena od 550 Kč/m².",
  },
  {
    question: "Odstraníte staré obklady?",
    answer:
      "Ano. Bourání starých obkladů stojí 180–300 Kč/m² plus odvoz suti. U panelákových koupelen s umakartovým jádrem bourání řešíme jako součást rekonstrukce.",
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
      name: "Obklady koupelen Ostrava",
      description:
        "Pokládka obkladů a dlažby v koupelnách v Ostravě. Standardní i velkoformátové obklady.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CZK",
        price: "600",
        unitText: "m²",
      },
    },
  ],
};

export default function ObkladyKoupelenPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obklady koupelen v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Pokládáme obklady v koupelnách po celé Ostravě. Standardní formáty
          30x60 i velkoformáty 60x120 cm. Vždy s hydroizolací, vždy s nivelací.
          Záruka 60 měsíců na práci.
        </p>

        {/* Process */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Jak postupujeme
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Každá koupelna začíná diagnostikou podkladu. Změříme rovinnost latí
          2 m. Kontrolujeme vlhkost. Ověříme přilnavost stávající omítky
          poklepem.
        </p>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Diagnostika podkladu</strong> — rovinnost, vlhkost, přilnavost.
            Odchylka nad 3 mm/2 m = vyrovnání stěrkou.
          </li>
          <li>
            <strong>Penetrace</strong> — Ceresit CT 17 nebo Mapei Primer G.
            Schnutí min. 4 hodiny.
          </li>
          <li>
            <strong>Hydroizolace</strong> — dvouvrstvá, Mapei Mapelastic nebo
            Baumacol Proof. Bandáž rohů a prostupů. Schnutí 24 hodin mezi
            vrstvami.
          </li>
          <li>
            <strong>Pokládka obkladů</strong> — Ceresit CM 17 nebo Mapei
            Keraflex. Hřebenový šíř. 10 mm. Buttering-floating u formátů nad
            60 cm.
          </li>
          <li>
            <strong>Spárování</strong> — Mapei Keracolor GG nebo Ceresit CE 40.
            Silikonové spáry v rozích a u sanity. Schnutí 24 hodin.
          </li>
        </ol>

        {/* Materials */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Materiály a formáty
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Nejčastěji pokládáme RAKO Extra, Cersanit Concept a Marazzi Grande.
          Formáty od 20x20 po 120x260 cm. Pro koupelny v panelácích v Porubě
          a na Dubině doporučujeme 30x60 — snadno se řeže, dobře sedí na úzké
          stěny.
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>30x60 cm</strong> — standard pro koupelny do 6 m². RAKO
            Concept od 380 Kč/m²
          </li>
          <li>
            <strong>60x60 cm</strong> — podlaha i stěna. Cersanit Concept od
            420 Kč/m²
          </li>
          <li>
            <strong>60x120 cm</strong> — moderní velkoformát. Méně spár, čistý
            vzhled. RAKO Extra od 890 Kč/m²
          </li>
          <li>
            <strong>120x260 cm</strong> — celé desky bez spár. Marazzi Grande,
            Laminam. Od 1 200 Kč/m²
          </li>
        </ul>

        {/* Prices */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Ceník obkladů koupelen
        </h2>
        <PriceTable
          headers={["Typ práce", "Cena", "Poznámka"]}
          rows={[
            ["Pokládka obkladů do 60×60 cm", "600–850 Kč/m²", "Včetně lepidla a spárování"],
            ["Pokládka velkoformátů nad 60×60 cm", "850–1 250 Kč/m²", "Buttering-floating, nivelace"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapei Mapelastic / Baumacol"],
            ["Pokládka dlažby na podlahu", "550–800 Kč/m²", "Včetně vyrovnání"],
            ["Bourání starých obkladů", "180–300 Kč/m²", "Odvoz suti 4 500–6 000 Kč"],
            ["Silikonové spáry", "100–150 Kč/bm", "Sanitární silikon Mapei"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample text="Koupelna 4,5 m² v paneláku v Porubě, Ostrava. Obklad RAKO Concept 30x60 cm na stěny (12,8 m²), dlažba RAKO Extra 60x60 na podlahu. Dvouvrstvá hydroizolace Mapei Mapelastic v celé sprchové zóně. Lepidlo Ceresit CM 17. Spáry Mapei Keracolor. Práce trvala přibližně 6 dní. Cena za pokládku: 48 500 Kč bez materiálu." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete obložit koupelnu?"
          description="Zavolejte a domluvíme zaměření zdarma. Obvykle do 3 pracovních dnů dostanete cenovou nabídku s přesným rozpočtem."
        />

        <RelatedLinks
          links={[
            { title: "Rekonstrukce koupelny na klíč", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Hydroizolace koupelny", href: "/sluzby/hydroizolace" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
            { title: "Podlahové topení pod dlažbu", href: "/sluzby/podlahove-topeni" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
