import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
    return (
        <OfferPage
            heroImage="/images/altanok.jpeg"
            title="Altánok"
            columns={[
                {
                    title: "ELEGANTNÉ ÚTOČIŠKO VO VAŠEJ ZÁHRADE",
                    textChild:
                        <div>
                            <p>Altánok nemusí byť len obyčajnou záhradnou stavbou. V SloWood Studio sa snažíme vytvárať miesta, ktoré zlučujú funkčné využitie exteriéru s pohodlím a dizajnom. Okrem samotnej ochrany pred slnkom, dažďom, či poryvmi vetra pridávame do rovnice aj estetiku, ktorá dopomôže vytvoreniu nového stredobodu pre chvíle pohody s rodinou či priateľmi. Funkčnosť a estetika nami tvorených altánkov je podporená materiálmi najvyššej kvality a remeselnou zručnosťou, čo prispieva k zvýšenej trvácnosti našich realizácií.</p>
                            <p>Okrem základných typov altánkov, ktoré ponúkame v materialite podľa Vašich preferencií a s rôznymi doplnkami, radi zrealizujeme i altánky na mieru špecifickým požiadavkám.</p>
                        </div>
                },
                {
                    title: "Lorem ipsum",
                    textChild: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec urna ac nisi tincidunt ultricies. Curabitur ac lig
                        ula sit amet nunc varius lacinia. Donec et nunc ac libero tincidunt ultricies. Donec ac libero tincidunt, ultricies orci nec, ultrices
                        nunc. Sed nec urna ac nisi tincidunt ultricies. Curabitur ac ligula sit amet nunc varius lacinia. Donec et nunc ac libero tincidunt
                        ultricies. Donec ac libero tincidunt, ultricies orci nec, ultrices nunc. Sed nec urna ac nisi tincidunt ultricies. Curabitur ac ligula
                        sit amet nunc varius lacinia. Donec et nunc ac libero tincidunt ultricies. Donec ac libero tincidunt, ultricies orci nec, ultrices nunc.
                        Sed nec urna ac nisi tincidunt ultricies. Curabitur ac ligula sit amet nunc varius lacinia. Donec et nunc ac libero tincidunt ultricies.
                        Donec ac libero tincidunt, ultricies orci nec, ultrices nunc. Sed nec urna ac nisi tincidunt ultricies. Curabitur ac ligula
                    </p>
                },
            ]}
            offerOptions={[
                {
                    image: '/images/altanok.jpeg',
                    title: "altánok na mieru",
                    link: "/ponuka/altanok/na-mieru"
                },
                {
                    image: '/images/altanok/altanok-abc.png',
                    title: "altánok abc",
                    link: "/ponuka/altanok/abc"
                },
                {
                    image: '/images/zahradny-domcek.jpeg',
                    title: "altanok def",
                    link: "/ponuka/altanok/def"
                },
            ]}
        />
    )

}

export default AltanokPage;