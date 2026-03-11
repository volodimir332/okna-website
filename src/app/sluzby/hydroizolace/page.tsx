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
  title: "Hydroizolace koupelny Ostrava | OBK",
  description:
    "Hydroizolace koupelny v Ostravě dle ČSN 74 4505. Jednovrstvá od 250 Kč/m², dvouvrstvá od 450 Kč/m². Mapei Mapelastic, Baumacol Proof. Záruka 60 měsíců.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/sluzby/hydroizolace",
  },
};

const breadcrumbs = [
  { label: "Služby", href: "/sluzby" },
  { label: "Hydroizolace koupelny" },
];

const faqItems = [
  {
    question: "Je hydroizolace v koupelně povinná?",
    answer:
      "Ano. Norma ČSN 74 4505 vyžaduje hydroizolaci pod obklady v mokrých zónách. Sprchový kout, vana a umyvadlo musí mít stěrkovou hydroizolaci na stěnách do výšky min. 200 cm a na podlaze celé koupelny.",
  },
  {
    question: "Kolik vrstev hydroizolace je potřeba?",
    answer:
      "Minimálně dvě vrstvy. První vrstva se nanese, nechá zaschnout 12–24 hodin, pak druhá vrstva kolmo na první. V rozích a u prostupů přidáváme bandáž — pružný pás vtlačený do první vrstvy.",
  },
  {
    question: "Jaký materiál na hydroizolaci používáte?",
    answer:
      "Mapei Mapelastic Aquadefense nebo Baumacol Proof. Obě jsou stěrkové, jednosložkové. Spotřeba 1,2–1,5 kg/m² na vrstvu. Na bandáž používáme Mapei Mapeband nebo Baumacol Band.",
  },
  {
    question: "Co se stane, když hydroizolaci vynechám?",
    answer:
      "Voda pronikne pod obklady do konstrukce. Za 2–5 let se objeví plíseň, mokré skvrny na stropě souseda pod vámi, opadávající obklady. Oprava stojí 3–5x víc než správná hydroizolace.",
  },
  {
    question: "Jak poznám, že stávající hydroizolace je v pořádku?",
    answer:
      "Pokud pod sprchový kout neteče voda do stropu souseda a obklady drží, je pravděpodobně funkční. Jistotu dá zkouška vlhkoměrem. Při rekonstrukci ale vždy děláme novou — stará izolace se při bourání poškodí.",
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
      name: "Hydroizolace koupelny Ostrava",
      description:
        "Dvouvrstvá stěrková hydroizolace koupelen dle ČSN 74 4505. Mapei, Baumacol.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CZK",
        price: "250",
        unitText: "m²",
      },
    },
  ],
};

export default function HydroizolacePage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Hydroizolace koupelny v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Hydroizolace pod obklady je základ každé koupelny. Bez ní voda
          pronikne do konstrukce a za pár let máte plíseň, mokrý strop
          a opravu za stovky tisíc. Děláme ji dle ČSN 74 4505. Dvě vrstvy,
          bandáž rohů, záruka 60 měsíců.
        </p>

        {/* Why */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Proč je hydroizolace nutná
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Spáry mezi obklady nejsou vodotěsné. Voda pronikne do lepidla, do
          omítky, do betonu. V paneláku na Dubině nebo v Porubě je strop
          souseda pod vámi 15–18 cm betonu. Voda ho nasákne za 2–3 roky.
          Pak teče.
        </p>
        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
          Norma ČSN 74 4505 vyžaduje hydroizolaci ve všech mokrých zónách.
          To je sprchový kout, prostor u vany, podlaha celé koupelny. Bez
          hydroizolace nemáte nárok na reklamaci u pojišťovny ani u nás.
        </p>

        {/* Materials */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Materiály, které používáme
        </h2>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Mapei Mapelastic Aquadefense</strong> — jednosložková
            stěrková izolace. Modrá barva — vidíte pokrytí. Spotřeba 1,2 kg/m²
            na vrstvu. Schnutí 12 hodin.
          </li>
          <li>
            <strong>Baumacol Proof</strong> — dvousložková stěrková izolace.
            Šedá barva. Spotřeba 1,5 kg/m² na vrstvu. Schnutí 24 hodin.
            Levnější varianta.
          </li>
          <li>
            <strong>Mapei Mapeband</strong> — elastická bandáž do rohů
            a k prostupům. Šířka 12 cm. Vtlačí se do první vrstvy izolace.
          </li>
          <li>
            <strong>Baumacol Band</strong> — alternativa k Mapeband.
            Samolepící pás pro rohy a spoje stěn s podlahou.
          </li>
        </ul>

        {/* Process */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Postup aplikace
        </h2>
        <ol className="list-decimal list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Příprava podkladu</strong> — podklad musí být čistý, suchý,
            bez prachu. Penetrace Mapei Primer G nebo Ceresit CT 17. Schnutí
            4 hodiny.
          </li>
          <li>
            <strong>Bandáž rohů a prostupů</strong> — elastický pás Mapei
            Mapeband do všech rohů (stěna-podlaha, stěna-stěna) a kolem
            odpadů, přípojek vody.
          </li>
          <li>
            <strong>První vrstva</strong> — stěrka válečkem nebo štětcem.
            Tloušťka 0,5–0,8 mm. Bandáž se vtlačí do mokré vrstvy. Schnutí
            12–24 hodin.
          </li>
          <li>
            <strong>Druhá vrstva</strong> — kolmo na první. Stejná tloušťka.
            Po zaschnutí musí být celistvá plocha bez mezer. Schnutí 24 hodin
            před pokládkou obkladů.
          </li>
          <li>
            <strong>Kontrola</strong> — vizuální kontrola pokrytí.
            U Mapei Aquadefense musí být povrch rovnoměrně modrý. Žádná
            průsvitná místa.
          </li>
        </ol>

        {/* Zones */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Zóny hydroizolace v koupelně
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          Ne celá koupelna potřebuje stejnou úroveň izolace. Norma rozlišuje
          zóny podle intenzity namáhání vodou.
        </p>
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-8">
          <li>
            <strong>Zóna 1 — přímý kontakt s vodou</strong> — sprchový kout,
            vana. Stěny do výšky 200 cm. Podlaha celá. Dvouvrstvá izolace
            + bandáž.
          </li>
          <li>
            <strong>Zóna 2 — stříkající voda</strong> — okolí umyvadla,
            30 cm od hrany vany. Stěny do výšky 120 cm. Dvouvrstvá izolace.
          </li>
          <li>
            <strong>Zóna 3 — vlhkost</strong> — zbytek koupelny. Podlaha
            celá. Stěny nemusí, ale doporučuji alespoň jednu vrstvu do výšky
            30 cm.
          </li>
        </ul>

        {/* Prices */}
        <h2 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
          Ceník hydroizolace
        </h2>
        <PriceTable
          headers={["Typ izolace", "Cena", "Poznámka"]}
          rows={[
            ["Jednovrstvá stěrková izolace", "250–400 Kč/m²", "Mapei Aquadefense nebo Baumacol Proof"],
            ["Dvouvrstvá stěrková izolace", "450–650 Kč/m²", "Mapei Aquadefense nebo Baumacol Proof"],
            ["Bandáž rohů a prostupů", "120–180 Kč/bm", "Mapei Mapeband 12 cm"],
            ["Izolace kolem prostupů (trubka)", "300 Kč/ks", "Manžeta + stěrka"],
            ["Penetrace podkladu", "60–100 Kč/m²", "Mapei Primer G"],
          ]}
          caption="Ceny jsou orientační, bez DPH a bez materiálu. Platné pro Ostravu a okolí do 50 km. Přesnou kalkulaci zdarma do 24 hodin."
        />

        <PracticeExample text="Sprchový kout walk-in 120x90 cm v koupelně v Porubě, Ostrava. Hydroizolace Mapei Mapelastic Aquadefense — podlaha 4,2 m² + stěny do výšky 200 cm (6,8 m²). Celkem 11 m² izolované plochy. Bandáž Mapeband v 8 rozích a kolem 3 prostupů. Dvě vrstvy, schnutí cca 48 hodin. Cena: 8 200 Kč včetně materiálu. Práce trvala přibližně 2 dny (s technologickými pauzami na schnutí)." />

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete hydroizolaci koupelny?"
          description="Zavolejte a domluvíme termín. Hydroizolaci děláme jako součást rekonstrukce i samostatně. Zaměření zdarma."
        />

        <RelatedLinks
          links={[
            { title: "Rekonstrukce koupelny na klíč", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Podlahové topení pod dlažbu", href: "/sluzby/podlahove-topeni" },
            { title: "Ceník obkladačských prací", href: "/cenik" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
