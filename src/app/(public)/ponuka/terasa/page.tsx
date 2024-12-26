import { LinkButton } from "@/components/LinkButton";
import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
    return (
        <OfferPage
            heroImage="/images/terasy.jpeg"
            title="Terasa"
            columns={[
                {
                    title: "Estetické, ekologické, efektné",
                    textChild:
                        <div className="space-y-4">
                            <p>Pri úvahách o kultivovaní Vášho exteriéroveho priestoru a dosiahnutí súzvuku medzi výzorom domu a záhrady prostredníctvom terasy predstavuje drevo ako jej materiál skvelú voľbu. Terasy navrhujeme tak, aby vytvorili miesto jednak pohodlné, no zároveň štýlove a sediace do prostredia, pričom drevo poskytuje mnoho výhod - od jeho tepelnej stability v porovnaní s inými materiálmi, cez dizajnovú flexibilitu až po ekologickosť.</p>
                            <p>Procesom výberu optimálnej dreviny Vás radi prevedieme a vytvoríme pre Vás koncept, ktorý skvelo zapasuje do Vášho prostredia a splní Vaše požiadavky. Čo všetko je vhodné pri plánovaní terasy zvážiť si môžete prečítať aj nižšie.</p>
                        </div>
                },
                {
                    title: "Prečo zvoliť drevenú terasu?",
                    textChild:
                        <div className="space-y-4">
                            {
                                [
                                    {
                                        title: "Estetika a štýl",
                                        text: "Drevo prirodzene zapadá do každého prostredia a vytvára útulnú atmosféru, či už preferujete moderný alebo rustikálny dizajn."
                                    },

                                    {
                                        title: "Prírodný komfort",
                                        text: "Drevo je príjemné na dotyk, nekĺže a v letných mesiacoch sa neprehrieva – ideálne na chôdzu naboso."
                                    },

                                    {
                                        title: "Ekologická voľba",
                                        text: "Drevené terasy sú vyrobené z obnoviteľných zdrojov, čím prispievate k ochrane životného prostredia."
                                    },

                                    {
                                        title: "Dlhá životnosť",
                                        text: "Kvalitné dreviny a správna údržba zabezpečujú trvácnosť a odolnosť voči poveternostným podmienkam."
                                    },

                                    {
                                        title: "Dizajnová flexibilita",
                                        text: "Drevo ponúka širokú škálu možností v tvare, farebnom prevedení a spôsobe kladenia, aby vyhovovalo presne Vašim potrebám."
                                    },

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
                "/images/terasa/terasa-na-mieru.jpeg",
            ]}

            actions={
                <div className="px-6 py-6 md:px-0">
                    <h2 className="text-xl uppercase font-bold pb-2">Ako na terasu</h2>
                    <LinkButton link="/files/ako-zvolit-drevene-obklady.pdf" text={"Stiahnuť pdf"} color="black" weight="thin" className="" />
                </div>
            }
            showContant={true}

        />
    )

}

export default AltanokPage;