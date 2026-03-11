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
  title: "Rekonstrukce koupelny na klíč Ostrava | OBK",
  description:
    "Kompletní rekonstrukce koupelny na klíč v Ostravě. Práce bez materiálu od 45 000 Kč. Bourání, rozvody, hydroizolace, obklady, sanita. Záruka 60 měsíců.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/sluzby/rekonstrukce-koupelny",
  },
};

const breadcrumbs = [
  { label: "Služby", href: "/sluzby" },
  { label: "Rekonstrukce koupelny" },
];

const faqItems = [
  {
    question: "Jak dlouho trvá kompletní rekonstrukce koupelny?",
    answer:
      "Malá koupelna (do 4 m²) zabere přibližně 8–12 pracovních dní. Střední koupelna (4–6 m²) trvá obvykle 12–16 dní. Velká (6–10 m²) — počítejte cca s 16–22 dny. Závisí na rozsahu bouracích prací a složitosti rozvodů.",
  },
  {
    question: "Co všechno je zahrnuto v ceně balíčku?",
    answer:
      "Bourání starých obkladů a dlažby, odvoz suti, nové rozvody vody a odpadu, hydroizolace, pokládka obkladů a dlažby, instalace sanity, výmalba a úklid. Materiál (obklady, dlažba, sanita) hradíte zvlášť.",
  },
  {
    question: "Můžu v koupelně bydlet během rekonstrukce?",
    answer:
      "Koupelnu ne — bude bez vody přibližně 3–5 dní. V bytě bydlet můžete. Prašné práce (bourání) trvají obvykle 1–2 dny. Chráníme podlahy a dveře fólií. Večer uklízíme.",
  },
  {
    question: "Pomůžete s výběrem obkladů a sanity?",
    answer:
      "Ano. Poradíme s formátem, barvou i značkou. Spolupracujeme s prodejnami RAKO, Cersanit a Siko v Ostravě. Můžeme vás doprovodit do showroomu. 3D vizualizaci děláme za 3 000 Kč (při objednávce zdarma).",
  },
  {
    question: "Řešíte i bourání umakartového jádra v paneláku?",
    answer:
      "Ano. Bourání umakartového jádra stojí 8 000–15 000 Kč. Odvoz suti 4 500–6 000 Kč. Nové stěny vyzdíme z příčkovek YTONG tl. 75 mm. Koupelna získá přibližně 10–15 cm navíc oproti umakartovému jádru.",
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
      name: "Rekonstrukce koupelny na klíč Ostrava",
      description:
        "Kompletní rekonstrukce koupelny od návrhu po předání. 3 cenové balíčky.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        lowPrice: "45000",
        highPrice: "140000",
      },
    },
  ],
};

export default function RekonstrukceKoupelnyPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Rekonstrukce koupelny na klíč v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Kompletní rekonstrukce koupelny od zaměření po předání. Bourání,
          rozvody, hydroizolace, obklady, sanita. Jeden mistr, jedna cena,
          žádné překvapení. Záruka 60 měsíců. V Ostravě děláme 60–80
          koupelen ročně.
        </p>

        {/* Process */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Postup rekonstrukce krok za krokem
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Každá koupelna prochází stejným postupem. Osvědčených 8 kroků. Nic
          nevynecháme, nic nepřidáváme bez vašeho souhlasu.
        </p>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Zaměření</strong> — přijedeme, změříme koupelnu, probereme
            požadavky. Zdarma, trvá 30–45 minut.
          </li>
          <li>
            <strong>3D návrh</strong> — vizualizace koupelny s vybranými
            obklady a sanitou. Přibližně do 5 pracovních dní.
          </li>
          <li>
            <strong>Bourání</strong> — staré obklady, dlažba, případně
            umakartové jádro. Odvoz suti na skládku. Obvykle 1–2 dny.
          </li>
          <li>
            <strong>Rozvody vody a odpadu</strong> — nové trubky Wavin nebo
            PPR. Přípojky pro pračku, umyvadlo, sprchu/vanu. Cca 2–3 dny.
          </li>
          <li>
            <strong>Vyzdění a omítky</strong> — YTONG příčkovky, omítka
            Baumit. Případně sádrokartonové předstěny. Cca 2–3 dny.
          </li>
          <li>
            <strong>Hydroizolace</strong> — dvouvrstvá Mapei Mapelastic.
            Bandáž rohů, prostupů. Schnutí 48 hodin.
          </li>
          <li>
            <strong>Obklady a dlažba</strong> — pokládka obkladů a dlažby
            dle návrhu. Spárování. Přibližně 4–8 dní dle rozsahu.
          </li>
          <li>
            <strong>Sanita a dokončení</strong> — montáž umyvadla, WC,
            sprchového koutu/vany, baterie. Geberit, Grohe, Cersanit.
            Výmalba, úklid, předání.
          </li>
        </ol>

        {/* Packages */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          3 cenové balíčky
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Ceny zahrnují veškerou práci. Materiál (obklady, dlažba, sanita)
          hradíte zvlášť. Přesnou cenu stanovíme po zaměření.
        </p>
        <PriceTable
          headers={["Koupelna", "Cena (práce bez materiálu)", "Plocha", "Co zahrnuje"]}
          rows={[
            [
              "Malá koupelna",
              "45 000–65 000 Kč",
              "Do 4 m²",
              "Bourání, rozvody, hydroizolace, obklady, dlažba, sanita, úklid",
            ],
            [
              "Střední koupelna",
              "65 000–95 000 Kč",
              "4–6 m²",
              "Vše z Malé + vyzdění příček, předstěny, náročnější rozvody",
            ],
            [
              "Velká koupelna",
              "95 000–140 000 Kč",
              "6–10 m²",
              "Vše ze Střední + velkoformáty, walk-in sprcha, podlahové topení",
            ],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        {/* What's included */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Co je v ceně a co ne
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              V ceně
            </h3>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
              <li>Bourání starých obkladů a dlažby</li>
              <li>Odvoz suti na skládku</li>
              <li>Nové rozvody vody a odpadu</li>
              <li>Dvouvrstvá hydroizolace</li>
              <li>Pokládka obkladů a dlažby</li>
              <li>Montáž sanity</li>
              <li>Výmalba stropu a ostění</li>
              <li>Denní úklid a finální úklid</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Mimo cenu
            </h3>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
              <li>Obklady, dlažba (materiál)</li>
              <li>Sanitární keramika a baterie</li>
              <li>Sprchový kout / vana</li>
              <li>Elektroinstalace (řeší elektrikář)</li>
              <li>Podlahové topení (příplatek)</li>
              <li>3D vizualizace (3 000 Kč, při objednávce zdarma)</li>
            </ul>
          </div>
        </div>

        <PracticeExample text="Střední koupelna 5,5 m² v paneláku v Zábřehu, Ostrava. Bourání umakartového jádra, vyzdění YTONG 75 mm, nové rozvody Wavin, hydroizolace Mapei Mapelastic, obklady RAKO Extra 30x60 na stěny (14,2 m²), dlažba 60x60 na podlahu. Sanita Cersanit — umyvadlo, WC, sprchový kout 90x90. Baterie Grohe. Práce trvala přibližně 14 pracovních dní. Cena za práci: 82 000 Kč bez materiálu. Materiál (obklady + sanita): 42 000 Kč." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Chcete novou koupelnu?"
          description="Zavolejte a domluvíme zaměření zdarma. Obvykle do 5 pracovních dnů dostanete 3D vizualizaci a pevnou cenovou nabídku."
        />

        <RelatedLinks
          links={[
            { title: "Ceník rekonstrukcí koupelen", href: "/cenik/rekonstrukce-koupelny" },
            { title: "Hydroizolace koupelny", href: "/sluzby/hydroizolace" },
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
            { title: "Podlahové topení pod dlažbu", href: "/sluzby/podlahove-topeni" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
