import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
    return (
        <OfferPage
            heroImage="/images/pristresok.jpeg"
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
            ]}
            offerOptions={[
                {
                    image: '/images/zahradny-domcek/zahradny-domcek-na-mieru.jpeg',
                    title: "zahradný domček na mieru",
                    link: "/ponuka/zahradny-domcek/na-mieru"
                },
                {
                    image: '/images/zahradny-domcek/zahradny-domcek-abc.png',
                    title: "zahradný domček abc",
                    link: "/ponuka/zahradny-domcek/abc"
                },
                {
                    image: '/images/zahradny-domcek/zahradny-domcek-def.png',
                    title: "zahradný domček def",
                    link: "/ponuka/zahradny-domcek/def"
                },
            ]}
        />
    )

}

export default AltanokPage;