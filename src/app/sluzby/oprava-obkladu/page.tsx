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
  title: "Oprava obkladů Ostrava — výměna prasklé dlaždice, spárování | OBK",
  description:
    "Oprava obkladů a dlažby v Ostravě. Výměna jedné dlaždice, oprava prasklin, přespárování, oprava silikonu. Bez bourání celé koupelny. Od 350 Kč.",
  alternates: { canonical: "https://obklady-ostrava.cz/sluzby/oprava-obkladu" },
};

const breadcrumbs = [
  { label: "Služby", href: "/sluzby" },
  { label: "Oprava obkladů" },
];

const faqItems = [
  {
    question: "Lze vyměnit jen jednu prasklou dlaždici, nebo musí pryč celá stěna?",
    answer:
      "Lze vyměnit jen jednu. Diamantovou korunkou opatrně provrtáme spáru kolem dlaždice, vybouráme ji bez poškození sousedních. Pokud máte stejnou dlaždici (rezervu z původní zakázky), vyměníme za 30–60 minut. Cena 350–600 Kč včetně práce a spárování.",
  },
  {
    question: "Co když nemám rezervní dlaždici, výrobce už nedělá?",
    answer:
      "Najdeme náhradu. Foto pošlete přes WhatsApp, vyhledáme nejbližší shodu v RAKO, Cersanit, Marazzi nebo SIKO outletu. Pokud přesný odstín nelze sehnat, doporučíme dekorativní vložku v kontrastní barvě — z chyby se stane design.",
  },
  {
    question: "Jak často je potřeba přespárovat koupelnu?",
    answer:
      "Cementové spáry vydrží 8–15 let. Pokud vidíte plíseň ve spárách, drolení nebo barevné změny — je čas přespárovat. Vyřízneme starou spáru pilkou Fein, vyčistíme, naneseme novou Mapei Ultracolor Plus. 5 m² koupelna: 4–6 hodin práce, 1 800–3 000 Kč.",
  },
  {
    question: "Silikon u vany se trhá a černá. Lze opravit bez bourání?",
    answer:
      "Ano, to je nejčastější oprava v Ostravě. Stržení starého silikonu nožem, vyčištění alkoholem, nový sanitární silikon Den Braven nebo Soudal s protiplísňovou ochranou (5 let bez plísně). Cena 350–500 Kč za běžný metr. Hotovo za 1–2 hodiny.",
  },
  {
    question: "Lze opravit hlučný/dutý zvuk při poklepu na dlažbu?",
    answer:
      "Dutý zvuk znamená, že dlaždice nedrží — pod ní vzduchová bublina, lepidlo nepřilnulo. Pokud je 1–2 dlaždice, vyměníme. Pokud duní celá podlaha, je to chyba pokládky a doporučujeme kompletní výměnu — opravy stojí v součtu víc než nová pokládka.",
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
      name: "Oprava obkladů a dlažby Ostrava",
      description:
        "Výměna prasklých dlaždic, oprava spár, výměna silikonu v koupelně. Mikroopravy bez bourání.",
      areaServed: { "@type": "City", name: "Ostrava" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        lowPrice: "350",
        highPrice: "5000",
      },
    },
  ],
};

export default function OpravaObkladuPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Oprava obkladů a dlažby v Ostravě
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Mikroopravy bez bourání celé koupelny. Vyměníme prasklou
          dlaždici, opravíme spáry, vyměníme silikon u vany. Pro Ostravu
          a okolí — přijedeme i kvůli jedné dlaždici. Hotovo zpravidla
          za 1–3 hodiny.
        </p>

        <PriceTable
          headers={["Oprava", "Cena", "Doba"]}
          rows={[
            ["Výměna 1 dlaždice (vlastní rezerva)", "350–600 Kč", "30–60 min"],
            ["Výměna 1 dlaždice (sehnání náhrady)", "600–1 200 Kč", "1–2 hodiny"],
            ["Výměna 2–5 dlaždic", "250–400 Kč/ks", "1–3 hodiny"],
            ["Oprava praskliny ve spáře", "200–350 Kč/bm", "30 min"],
            ["Přespárování koupelny 4–6 m²", "1 800–3 000 Kč", "4–6 hodin"],
            ["Přespárování epoxy spárou", "550–800 Kč/m²", "Trvanlivost 25+ let"],
            ["Výměna silikonu u vany / sprchy", "350–500 Kč/bm", "1–2 hodiny"],
            ["Oprava odpadlého obkladu", "400–700 Kč/ks", "1 hodina"],
            ["Diagnostika dutého zvuku", "500 Kč fix", "30 min, sleva při opravě"],
            ["Výjezd do Ostravy", "zdarma", "Kdekoli ve městě"],
          ]}
          caption="Ceny bez DPH. Materiál (lepidlo, spárovačka, silikon) v ceně. Náhradní dlaždice nese klient nebo seženeme za poplatek."
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Tři nejčastější opravy v panelových koupelnách
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          <strong>1. Prasklá dlaždice na podlaze</strong> — typicky pod
          dvířky pračky nebo u prahu. Vznik: spadlá těžká věc, nedostatečné
          lepení. Diamantovou korunkou Bosch obvrtáme spáru kolem dlaždice,
          vybijeme jádrovým bouracím kladívkem, slepidlo nahradíme C2TE,
          dáme stejnou dlaždici, spárujeme.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          <strong>2. Černá plíseň ve spárách</strong> — koupelny T06B
          v Porubě, Dubině. Cementová spára po 10–15 letech ztratí
          impregnaci. Vyřízneme starou spáru pilkou Fein Multimaster
          (ne ručně!), vysajeme prach, naneseme Mapei Ultracolor Plus
          s antibakteriální přísadou.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          <strong>3. Trhající se silikon u vany</strong> — vlivem teplotních
          rozdílů a dilatace vany. Strhneme ostře, vyčistíme líh, naneseme
          Den Braven SAS (sanitární antiplísňový silikon), uhladíme
          plastovou stěrkou. Trvanlivost 5–7 let.
        </p>

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 mt-10">
          Kdy oprava NEMÁ smysl
        </h2>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Pokud duní víc než 30 % dlažby — chyba pokládky, oprava
          jednotlivých kusů nepomůže. Doporučíme rekonstrukci.
        </p>
        <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
          Pokud je hydroizolace prasklá a do stropu sousedů teče voda —
          povrchová oprava neřeší příčinu. Bez bourání to nevyřešíme.
        </p>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
          Pokud je obklad pod 60×30 cm na sádrokartonu bez vrstvy
          hydroizolace v sprchovém koutu — voda za 2–3 roky proteče
          a opadnou další obklady. Lepší kompletní oprava sprchy.
        </p>

        <PracticeExample
          text="Byt 3+1, Ostrava-Poruba, ul. Opavská. Klient zavolal kvůli prasklé dlaždici u dveří koupelny — spadlo zrcadlo. Přijeli jsme druhý den, dlaždice RAKO Stones 60×60 (antracit) z roku 2019. Klient měl 2 ks rezervu v komoře. Diamantovou korunkou Bosch GBM 13 obvrtání spáry, vybíjení sekáčem 5 minut, vysátí prachu, lepidlo Mapei Keraflex Maxi S1, vsazení nové dlaždice, klipy pro rovinu. Po 6 hodinách spára Mapei Ultracolor Plus. Celkem 45 minut práce + 1 návrat na spárování. Cena 480 Kč."
        />

        <FAQSection items={faqItems} />

        <CTASection
          title="Potřebujete drobnou opravu?"
          description="Pošlete foto na WhatsApp +420 737 540 605. Do 4 hodin víte cenu a termín. V Ostravě jsme zpravidla do 48 hodin u vás."
        />

        <RelatedLinks
          links={[
            { title: "Obklady koupelen", href: "/sluzby/obklady-koupelen" },
            { title: "Hydroizolace", href: "/sluzby/hydroizolace" },
            { title: "Rekonstrukce koupelny", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Ceník obkladačských prací", href: "/cenik/obkladacske-prace" },
            { title: "Všechny služby", href: "/sluzby" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
