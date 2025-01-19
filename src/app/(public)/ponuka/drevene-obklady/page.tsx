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
              <ul className="space-y-4">
                <li><strong>Všestranné použitie:</strong> Drevené obklady sú vhodné pre exteriér aj interiér, kde pridávajú funkčnosť a estetiku. V exteriéri chránia pred poveternostnými vplyvmi, v interiéri prinášajú útulnosť a eleganciu.</li>
                <li><strong>Prispôsobiteľný dizajn:</strong> Možnosť vytvoriť klasické aj moderné vzhľady, ktoré zvýraznia osobitosť Vášho priestoru.</li>
                <li><strong>Kvalitné spracovanie:</strong> Kombinácia tradičných techník a moderných technológií zabezpečuje vysokú odolnosť a dlhú životnosť.</li>
                <li><strong>Individuálny prístup:</strong> Obklady navrhneme a prispôsobíme presne Vašim potrebám a predstavám, aby dokonale zapadli do Vášho domova.</li>
                <li><strong>Estetika aj funkčnosť:</strong> Spojenie prirodzenej krásy dreva a praktických vlastností vytvára dizajnový prvok, ktorý vynikne v akomkoľvek prostredí.</li>
              </ul>
              <p>Nechajte si u nás vyrobiť drevené obklady, ktoré pridajú Vášmu priestoru jedinečnosť a nadčasový štýl.</p>
            </div>
        }
      ]}
      illustrationImages={[
        "/images/drevene-obklady/drevene-obklady-na-mieru.jpeg",
      ]}

      actions={
        <div className="md:px-6 py-6">
          <h2 className="text-xl uppercase font-bold pb-2">Aký obklad zvoliť</h2>
          <LinkButton link="/files/ako-zvolit-drevene-obklady.pdf" text={"Stiahnuť pdf"} color="black" weight="thin" className="" />
        </div>
      }
      showContant={true}

    />
  )

}

export default AltanokPage;