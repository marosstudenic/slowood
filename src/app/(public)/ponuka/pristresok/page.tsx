import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
    return (
        <OfferPage
            heroImage="/images/pristresok.jpeg"
            title="prístrešok"
            columns={[
                {
                    title: "Efektný úkryt",
                    textChild:
                        <div className="space-y-4">
                            <p>Prístrešok od SloWood Studio nie je len úkrytom pre Vaše auto či záhradné vybavenie – je to harmonický prvok, ktorý v sebe spája praktickosť s estetickým vzhľadom. Naše prístrešky poskytujú spoľahlivú ochranu pred prírodnými vplyvmi, zatiaľ čo zároveň obohacujú Váš exteriér svojím vkusným a citlivým dizajnom.</p>
                            <p>Prístrešky vždy navhujeme s citom pre okolie a s imperatívom funkčnosti a trvácnosti. Či už potrebujete prístrešok pre Vaše vozidlo, úložný priestor alebo vonkajšie posedenie, v SloWood Studio Vám ponúkame riešenia, ktoré prispôsobíme Vašim požiadavkám a vkusu. Aj dva prístrešky rovnakých rozmerov totiž môžu v závislosti od použitých materiálov vyzerať unikátne.</p>
                        </div>
                },
            ]}
            offerOptions={[
                {
                    image: '/images/pristresok/pristresok-na-mieru.jpeg',
                    title: "prístrešok na mieru",
                    link: "/ponuka/pristresok/na-mieru"
                },
                {
                    image: '/images/pristresok/pristresok-abc.png',
                    title: "prístrešok abc",
                    link: "/ponuka/pristresok/abc"
                },
                {
                    image: '/images/pristresok/pristresok-def.png',
                    title: "prístrešok def",
                    link: "/ponuka/pristresok/def"
                },
            ]}
        />
    )

}

export default AltanokPage;