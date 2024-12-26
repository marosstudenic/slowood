import Link from "next/link";
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
            ]}
            illustrationImages={[
                "/images/drevene-obklady/drevene-obklady-na-mieru.jpeg",
            ]}

            actions={
                <div className="px-6 py-6">
                    <h2 className="text-xl uppercase font-bold pb-2">Aký obklad zvoliť</h2>
                    <Link href='/files/ako-zvolit-drevene-obklady.pdf' target="__blank" className="border uppercase px-8 py-2 text-xs border-black">Stiahnuť pdf</Link>
                </div>
            }

        />
    )

}

export default AltanokPage;