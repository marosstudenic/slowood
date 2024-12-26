import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
    return (
        <OfferPage
            heroImage="/images/pergola.jpeg"
            title="pergola"
            columns={[
                {
                    title: "S tieňom a estetikou",
                    textChild:
                        <div className="space-y-4">
                            <p>Pergola je exteriérovým doplnkom, konštrukciou s dominantne estetickou funkciou, no zároveň nezanedbateľným funkčným aspektom vo forme poskytnutia tienenia. To je starostlivo zvažované i pri vyberaní natočenia pergoly s ohľadom na svetové strany, či smerovaní driev. Pergoly síce zväčša neposkytujú hermeticky uzavretú strešnú plochu na ochranu pred dažďom, no frekvencia ukladania drevených panelov umožňuje narábanie i s týmto aspektom.</p>
                            <p>Pergoly sú vzdušné konštrukcie, čeliace prírodným živlom intenzívnejšie ako napríklad altánky, čo adresujeme i pri výbere materiality s klientom. Naše realizácie precízne vytvárame s citom pre detail z drevín a materiálov najvyššej kvality.</p>
                        </div>
                },
            ]}
            offerOptions={[
                {
                    image: '/images/pergola/pergola-na-mieru.jpeg',
                    title: "pergola na mieru",
                    link: "/ponuka/pergola/na-mieru"
                },
                {
                    image: '/images/pergola/pergola-abc.png',
                    title: "pergola abc",
                    link: "/ponuka/pergola/abc"
                },
                {
                    image: '/images/pergola/pergola-def.png',
                    title: "pergola def",
                    link: "/ponuka/pergola/def"
                },
            ]}
        />
    )

}

export default AltanokPage;