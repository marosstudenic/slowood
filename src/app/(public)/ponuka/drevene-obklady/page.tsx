import { LinkButton } from "@/components/LinkButton";
import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
    return (
        <OfferPage
            heroImage="/images/drevene-obklady.jpeg"
            title="Drevené obklady"
            columns={[
                {
                    title: "Nový rozmer priestoru",
                    textChild:
                        <div className="space-y-4">
                            <p>Drevenými obkladmi môžete do exteriéru aj interiéru vložiť jedinečný charakter a prirodzenú krásu dreva. Drevo vo svojich mnohých podobách dokáže obyčajné steny premeniť na pôsobivé dizajnové prvky, ktoré dodajú priestoru rozmer v podobe hĺbky a nadčasovej elegancie.</p>
                            <p>V SloWood Studio používame pri tvorbe drevených obkladov dreviny a materiály najvyššej kvality a opracúvame ich spôsobom zaručujúcim ich najvyššiu možnú odolnosť a životnosť v kontexte prostredia. Radi si vypočujeme Vaše predstavy a na mieru pre Vás vytvoríme prvok, ktorý citlivo zdôrazní architektúru exteriéru Vášho domu alebo zútulní jeho vnútro.</p>
                        </div>
                },

                {
                    title: "Prečo zvoliť drevené obklady?",
                    textChild:
                        <div className="space-y-4">
                            {
                                [
                                    {
                                        title: "Jedinečný charakter",
                                        text: "Drevené obklady dodávajú priestoru prirodzenú krásu a eleganciu, ktorá sa hodí do moderných aj tradičných interiérov a exteriérov."
                                    },
                                    {
                                        title: "Nadčasový dizajn",
                                        text: "Drevo je materiál, ktorý nikdy nevyjde z módy a svojou štruktúrou a farebnosťou dodáva hĺbku a dynamiku každému priestoru."
                                    },
                                    {
                                        title: "Prispôsobenie na mieru",
                                        text: "Obklady navrhujeme podľa Vašich predstáv tak, aby harmonicky zapadli do architektúry a zvýraznili jej unikátne prvky."
                                    },
                                    {
                                        title: "Kvalita a odolnosť",
                                        text: "Používame len dreviny a materiály najvyššej kvality, opracované tak, aby boli odolné voči poveternostným podmienkam aj mechanickému opotrebovaniu."
                                    },
                                    {
                                        title: "Funkčnosť a estetika",
                                        text: "Okrem estetického prínosu môžu obklady slúžiť aj ako dodatočná izolačná vrstva, ktorá zlepšuje energetickú účinnosť budovy."
                                    },
                                    {
                                        title: "Univerzálne využitie",
                                        text: "Vhodné pre interiéry na zútulnenie priestoru, ako aj pre exteriéry na zvýraznenie fasády alebo detailov domu."
                                    }
                                ].map((item, index) => (
                                    <div key={index}>
                                        <h3 className="font-bold uppercase">{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                }
            ]}
            illustrationImages={[
                "/images/drevene-obklady/drevene-obklady-na-mieru.jpeg",
            ]}

            actions={
                <div className="px-6 py-6 md:px-0">
                    <h2 className="text-xl uppercase font-bold pb-2">Aký obklad zvoliť</h2>
                    <LinkButton link="/files/ako-zvolit-drevene-obklady.pdf" text={"Stiahnuť pdf"} color="black" weight="thin" className="" />
                </div>
            }
            showContant={true}

        />
    )

}

export default AltanokPage;