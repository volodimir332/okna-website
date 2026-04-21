import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content/ContentPage";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/content/Breadcrumbs";
import { CTASection } from "@/components/content/CTASection";
import { RelatedLinks } from "@/components/content/RelatedLinks";

export const metadata: Metadata = {
  title: "Partneři a dodavatelé | Autorizovaný realizátor RAKO, SIKO | OBK Ostrava",
  description:
    "Spolupracujeme s ověřenými výrobci a dodavateli — RAKO, Cersanit, Marazzi, Atlas Concorde, SIKO, Ptáček, Mapei, Geberit, Grohe. Materiály s původní zárukou výrobce.",
  alternates: {
    canonical: "https://obklady-ostrava.cz/partneri",
  },
};

const breadcrumbs = [{ label: "Partneři a dodavatelé" }];

const partners = [
  {
    name: "RAKO",
    url: "https://www.rako.cz",
    category: "Obklady a dlažby",
    description:
      "Největší český výrobce keramiky. Kolekce Concept, Stones, Extra, Board, Garda. Pokládáme každý týden — máme výborné vztahy s vzorkovnami v Ostravě.",
  },
  {
    name: "Cersanit",
    url: "https://www.cersanit.com/cs-cz",
    category: "Obklady, sanita",
    description:
      "Polská značka, cenově dostupná, široký sortiment. Populární kolekce Lara, Livi, Street Line. Sanita: umyvadla, WC, vany.",
  },
  {
    name: "Marazzi",
    url: "https://www.marazzi.it/cs/",
    category: "Premium obklady a dlažby",
    description:
      "Italská značka z Modeny. Velkoformáty 60×120 až 120×260, imitace mramoru, betonu. Pro luxusní rekonstrukce v Moravské Ostravě a Porubě.",
  },
  {
    name: "Atlas Concorde",
    url: "https://www.atlasconcorde.com/",
    category: "Velkoformáty, slab",
    description:
      "Italský výrobce specializovaný na velkoformáty. Kolekce Marvel (mramor), Boost (beton), AtlasPlan (slab 160×320 cm).",
  },
  {
    name: "Fiandre",
    url: "https://www.granitifiandre.it/",
    category: "Luxusní gres",
    description:
      "Italský luxusní gres, tloušťka 6–12 mm. Kolekce Marmi Maximum, Maxi Fiandre. Pro hotely a prémiové koupelny.",
  },
  {
    name: "SIKO",
    url: "https://www.siko.cz",
    category: "Řetězec vzorkoven",
    description:
      "Největší prodejce obkladů, dlažeb a koupelnových doplňků v ČR. Vzorkovna Ostrava na Rudné ulici. Klienty tam doprovázíme na výběr materiálu.",
  },
  {
    name: "Koupelny Ptáček",
    url: "https://www.koupelny-ptacek.cz",
    category: "Sanita a vybavení",
    description:
      "Specializovaná vzorkovna sanity a keramiky. Pobočka Ostrava-Zábřeh. Výborný výběr volně stojících van, sprchových koutů a baterií.",
  },
  {
    name: "Mapei",
    url: "https://www.mapei.com/cz/cs/",
    category: "Lepidla, hydroizolace",
    description:
      "Italský výrobce stavební chemie. Hydroizolace Mapelastic, lepidla Keraflex Maxi S1, spárovací hmoty Ultracolor Plus. Naše standardní volba pro koupelny.",
  },
  {
    name: "Baumit",
    url: "https://www.baumit.cz",
    category: "Sanační omítky, lepidla",
    description:
      "Rakouský výrobce. Sanační omítky Baumit SanovaPutz pro cihlové domy s vlhkostí. Hydroizolace Baumacol Proof.",
  },
  {
    name: "Geberit",
    url: "https://www.geberit.cz",
    category: "Sanita, předstěnové systémy",
    description:
      "Švýcarský výrobce. Závěsné WC Duofix, splachovadla, sprchové žlaby CleanLine. Nejkvalitnější předstěnové systémy na trhu.",
  },
  {
    name: "Grohe",
    url: "https://www.grohe.cz",
    category: "Baterie a sprchy",
    description:
      "Německá značka baterií. Kolekce Grohtherm (termostatické), Essence, Eurosmart. Doživotní záruka na kartuše.",
  },
  {
    name: "Ravak",
    url: "https://www.ravak.cz",
    category: "Sprchové kouty, vany",
    description:
      "Český výrobce z Příbrami. Sprchové kouty Pivot, Walk-in, akrylátové vany Rosa, Chrome. Nejlepší poměr cena/kvalita v sanitě.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumbs),
    {
      "@type": "CollectionPage",
      name: "Partneři a dodavatelé OBK Ostrava",
      description:
        "Výrobci a dodavatelé materiálů, se kterými spolupracujeme při rekonstrukcích koupelen.",
      publisher: {
        "@type": "Organization",
        name: "OBK Obkladač Ostrava",
      },
    },
  ],
};

export default function PartneriPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <div className="container-custom py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Partneři a dodavatelé
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
          Při rekonstrukci koupelny v Ostravě používáme pouze materiály
          od ověřených výrobců. Každý dodavatel prošel desítkami realizací
          — známe jejich silné i slabé stránky a umíme vám doporučit
          to nejvhodnější podle rozpočtu a typu koupelny. Všechny uvedené
          značky jsou k dispozici ve vzorkovnách v Ostravě — rádi vás
          doprovodíme na výběr.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 bg-white border border-[var(--border)] rounded-2xl hover:border-[#C7D2FE] hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#6B7AE8] transition-colors">
                  {partner.name}
                </h2>
                <span className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wide">
                  {partner.category}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {partner.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mb-8 p-5 sm:p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">
            Jste výrobce a chcete spolupracovat?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
            Pokud vyrábíte obklady, dlažby, sanitu nebo stavební chemii
            a máte zájem o spolupráci s realizační firmou v Ostravě,
            ozvěte se nám. Do katalogu zařadíme partnery s dlouhodobě
            kvalitním sortimentem a transparentními obchodními podmínkami.
          </p>
          <Link
            href="/kontakty"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7AE8] hover:text-[#5A68D6]"
          >
            Kontaktujte nás →
          </Link>
        </div>

        <CTASection
          title="Pomůžeme s výběrem materiálu"
          description="Jedeme s vámi na vzorkovnu v Ostravě, poradíme s výběrem, domluvíme slevu jako realizační firma. Zaměření i konzultace zdarma."
        />

        <RelatedLinks
          links={[
            { title: "O nás — OBK Ostrava", href: "/o-nas" },
            { title: "Naše realizace", href: "/realizace" },
            { title: "Rekonstrukce koupelny", href: "/sluzby/rekonstrukce-koupelny" },
            { title: "Ceník prací", href: "/cenik" },
            { title: "Rady — jak vybrat obklady", href: "/rady/jak-vybrat-obklady-a-dlazbu" },
          ]}
        />
      </div>
    </ContentPage>
  );
}
