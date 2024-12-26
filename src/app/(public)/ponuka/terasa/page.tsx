import Link from "next/link";
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
            ]}
            illustrationImages={[
                "/images/terasa/terasa-na-mieru.jpeg",
            ]}

            actions={
                <div className="px-6 py-6">
                    <h2 className="text-xl uppercase font-bold pb-2">Ako na terasu</h2>
                    <Link href='/files/ako-zvolit-drevene-obklady.pdf' target="__blank" className="border uppercase px-8 py-2 text-xs border-black">Stiahnuť pdf</Link>
                </div>
            }

        />
    )

}

export default AltanokPage;