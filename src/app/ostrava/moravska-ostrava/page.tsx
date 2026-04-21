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
  title: "Obkladač Moravská Ostrava — rekonstrukce koupelen v centru | OBK",
  description:
    "Obkladač v Moravské Ostravě. Rekonstrukce koupelen v cihlových činžácích z přelomu století. Velké koupelny, vysoké stropy, staré rozvody. Záruka 60 měsíců.",
  alternates: { canonical: "https://obklady-ostrava.cz/ostrava/moravska-ostrava" },
};

const breadcrumbs = [
  { label: "Ostrava", href: "/ostrava" },
  { label: "Moravská Ostrava" },
];

const faqItems = [
  {
    question: "Jaká je zástavba v Moravské Ostravě?",
    answer:
      "Moravská Ostrava je historické centrum — cihlové činžáky z let 1890–1940, pár panelových domů na okrajích (Fifejdy). Typický byt má vysoké stropy 3,2–3,8 m, velké koupelny 5–9 m², často původní dlažbu a litinové rozvody.",
  },
  {
    question: "Kolik stojí rekonstrukce koupelny v centru Ostravy?",
    answer:
      "Střední koupelna 5–7 m² v cihlovém domě stojí 85 000–130 000 Kč za práci bez materiálu. Velká 7–10 m² 130 000–200 000 Kč. Cena je vyšší než v panelácích kvůli výměně starých rozvodů, křivým stěnám a náročnějšímu přístupu (schody, úzká auta do centra).",
  },
  {
    question: "Jak dlouho trvá rekonstrukce v cihlovém domě?",
    answer:
      "13–18 pracovních dní. Bourání cihlových příček je pomalejší než umakartu (1–2 dny), vyrovnání křivých stěn trvá 1–2 dny navíc. U memorandních domů pod památkovou ochranou se prodlužuje i schvalování.",
  },
  {
    question: "Řešíte i problémy s vlhkostí v přízemních bytech?",
    answer:
      "Ano. V přízemních bytech ze začátku 20. století se často objevuje vzlínající vlhkost. Sanační omítky, hydroizolace Schomburg Aquafin-2K, v extrémních případech injektážní krém do cihel. Sanaci kombinujeme s běžnou rekonstrukcí koupelny.",
  },
  {
    question: "Kde v Moravské Ostravě nejčastěji pracujete?",
    answer:
      "Masarykovo náměstí a přilehlé ulice, Fifejdy, Přívoz (starší zástavba), Mariánské Hory, Nádražní, 28. října. Parkování řešíme vydáním krátkodobé povolenky od magistrátu — vyřídíme za vás.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(faqItems),
    {
      "@type": "LocalBusiness",
      name: "OBK Obkladač Moravská Ostrava",
      telephone: "+420737540605",
      url: "https://obklady-ostrava.cz/ostrava/moravska-ostrava",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moravská Ostrava",
        addressRegion: "Moravskoslezský kraj",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Place",
        name: "Moravská Ostrava",
        containedInPlace: {
          "@type": "City",
          name: "Ostrava",
        },
      },
      priceRange: "od 550 Kč/m²",
    },
  ],
};

export default function MoravskaOstravaPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Obkladač v Moravské Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Moravská Ostrava je historické centrum města — cihlové činžáky
          z let 1890–1940. Koupelny jsou větší než v panelácích (5–9 m²),
          stropy vysoké (3,2–3,8 m), ale rozvody často původní litinové.
          Rekonstrukce tady je složitější než v paneláku — ale my s nimi
          máme 15+ let zkušeností. Pokládáme obklady, dlažby, velkoformátové
          obklady i přírodní kámen.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
          Specifika Moravské Ostravy
        </h2>
        <div className="prose prose-sm max-w-3xl text-[var(--text-secondary)] mb-8 space-y-3">
          <p>
            <strong>Staré rozvody</strong> — litina, ocel, měď. V bytech
            od 80+ let jsou zarostlé a prorezlé. Nutná kompletní výměna
            stoupaček (1–2 dny navíc oproti paneláku).
          </p>
          <p>
            <strong>Křivé stěny</strong> — odchylka 4–10 cm běžná. Před
            pokládkou velkoformátu vždy nivelace hmotou (cca 250 Kč/m²).
            Klasický formát 30×60 cm nerovnost skryje.
          </p>
          <p>
            <strong>Vysoké stropy</strong> — v koupelnách 3+ m vytvářejí
            efekt "komína". Někteří klienti volí polokruhový zavěšený
            strop v části koupelny, aby snížili dojem výšky.
          </p>
          <p>
            <strong>Přístup na stavbu</strong> — úzké uličky, schody,
            parkovací zóny. Materiál dovážíme ručně, vlastní elektrovozík
            pro velké formáty. Povolenku na parkování zařídíme.
          </p>
          <p>
            <strong>Památkově chráněné domy</strong> — některé činžáky
            v centru mají ochranu. Nutný souhlas NPÚ s rekonstrukcí
            (zvlášť u viditelných prvků). S dokumentací vám pomůžeme.
          </p>
        </div>

        <PriceTable
          headers={["Práce", "Cena", "Poznámka"]}
          rows={[
            ["Bourání cihlových příček", "12 000–25 000 Kč", "Pomalejší než umakart"],
            ["Výměna stoupaček (litina → PPR)", "15 000–30 000 Kč", "Včetně napojení"],
            ["Sanace vlhkosti (přízemí)", "8 000–18 000 Kč", "Injektáž + sanační omítka"],
            ["Vyrovnání křivých stěn", "200–400 Kč/m²", "Nivelační hmota"],
            ["Hydroizolace dvouvrstvá", "450–650 Kč/m²", "Mapelastic, bandáž"],
            ["Obklady 30×60 cm", "600–850 Kč/m²", "Pokládka + spárování"],
            ["Velkoformát 60×120 cm", "850–1 250 Kč/m²", "Buttering-floating"],
            ["Slab 120×260 cm (akcent)", "1 400–1 800 Kč/m²", "Vakuové přísavky"],
            ["Pokládka přírodního kamene", "900–1 600 Kč/m²", "Travertin, mramor, žula"],
            ["Kompletní rekonstrukce 5–7 m²", "85 000–130 000 Kč", "Práce bez materiálu"],
            ["Kompletní rekonstrukce 7–10 m²", "130 000–200 000 Kč", "Velké byty v centru"],
          ]}
          caption="Ceny orientační, bez DPH a bez materiálu. Platí pro Moravskou Ostravu a okolí. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample
          text="Byt 3+kk v secesním domě na Masarykově náměstí, koupelna 6,8 m². Rok stavby 1912, původní litinové stoupačky, křivé stěny (odchylka 7 cm), původní dlažba z 50. let. Kompletní bourání včetně staré dlažby, výměna stoupaček za PPR, odpadů za HT, vyrovnání stěn sádrokartonem s ocelovými profily, hydroizolace Mapelastic, obklady Atlas Concorde Marvel mramorový efekt 60×120 cm (bílošedá s jemnými žilami, 38 m²), dlažba Marazzi Grande 120×120 cm (světle šedá, 6,8 m²), sprchový kout walk-in 140×90 cm, volně stojící vana Ravak Flower, umyvadlo Laufen Pro, WC závěsné Geberit Duofix. Práce 16 pracovních dní, cena prací 118 000 Kč, materiál 94 000 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Rekonstrukci koupelny v Moravské Ostravě"
          description="Přijedeme na zaměření zdarma do centra Ostravy. Parkovací povolenku zařídíme. Kalkulace do 48 hodin, záruka 60 měsíců."
        />

        <RelatedLinks
          links={[
            { title: "Obkladač Ostrava — přehled", href: "/ostrava" },
            { title: "Obkladač Slezská Ostrava", href: "/ostrava/slezska-ostrava" },
            { title: "Obkladač Mariánské Hory", href: "/ostrava/marianske-hory" },
            { title: "Obkladač Ostrava-Poruba", href: "/ostrava/poruba" },
            { title: "Velkoformátové obklady", href: "/sluzby/velkoformatove-obklady" },
            { title: "Přírodní kámen", href: "/svet-kamene" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
