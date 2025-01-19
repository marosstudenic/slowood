import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
  return (
    <OfferPage
      heroImage="/images/zahradny-domcek/zahradny-domcek-na-mieru.jpeg"
      title="Záhradný domček"
      columns={[
        {
          title: "Nielen úložný priestor",
          textChild:
            <div className="space-y-4">
              <p>Záhradný domček môže byť praktickým riešením na uskladnenie náradia a záhradného vybavenia, no môže sa stať aj miestom, kde si môžete vychutnať pokojné posedenie, stretnutia s priateľmi alebo bude praktizovať svoje hobby. Naše záhradné domčeky spájajú funkčnosť s útulným dizajnom, čím vytvárajú univerzálny priestor prispôsobený Vašim potrebám.</p>
              <p>Využívame kvalitné drevo a naše remeselné skúsenosti, aby sme vytvorili záhradné domčeky, ktoré sú nielen trvácne a odolné voči poveternostným podmienkam, ale aj esteticky príjemné. Či už hľadáte úložný priestor, alebo miesto na relax, záhradný domček môže byť odpoveďou. Ak máte konkrétnu predstavu, radi ju adresujeme výrobou domčeka na mieru.</p>
            </div>
        },
        {
          title: "Viac ako len záhrada",
          textChild: <div className="space-y-4">
            <p>Záhradný domček dokáže transformovať váš vonkajší priestor na multifunkčné miesto, ktoré sa stane prirodzenou súčasťou vášho životného štýlu. Môže slúžiť ako kreatívna dielňa, tiché útočisko na čítanie, či priestor na rodinné aktivity.</p>
            <p>Každý domček je navrhnutý s dôrazom na detaily a rešpektovanie vašich potrieb. Prispôsobujeme rozmery, materiály a štýl, aby sme vytvorili produkt, ktorý dokonale zapadne do vašej záhrady. Vďaka kombinácii praktickosti a dizajnu prinášajú naše záhradné domčeky hodnotu, ktorú oceníte počas mnohých rokov používania.</p>
          </div>
        }
      ]}
      offerOptions={[
        {
          image: '/images/zahradny-domcek/zahradny-domcek-na-mieru.jpeg',
          title: "zahradný domček na mieru",
          link: "/ponuka/zahradny-domcek/na-mieru"
        },
        {
          image: '/images/zahradny-domcek/open-field.png',
          title: "záhradný domček - Open Field zone",
          link: "/ponuka/zahradny-domcek/open-field-zone"
        },
        {
          image: '/images/zahradny-domcek/cubic.png',
          title: "zahradný domček cubic",
          link: "/ponuka/zahradny-domcek/cubic"
        },
      ]}
    />
  )

}

export default AltanokPage;