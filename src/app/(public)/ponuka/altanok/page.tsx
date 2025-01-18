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
            <div className="space-y-2">
              <p>Altánok nemusí byť len obyčajnou záhradnou stavbou. V SloWood Studio sa snažíme vytvárať miesta, ktoré zlučujú funkčné využitie exteriéru s pohodlím a dizajnom. </p>

              <p> Okrem samotnej ochrany pred slnkom, dažďom, či poryvmi vetra pridávame do rovnice aj estetiku, ktorá dopomôže vytvoreniu nového stredobodu pre chvíle pohody s rodinou či priateľmi. </p>

              <p>Funkčnosť a estetika nami tvorených altánkov je podporená materiálmi najvyššej kvality a remeselnou zručnosťou, čo prispieva k zvýšenej trvácnosti našich realizácií.</p>
            </div>
        },
        {
          title: "Vytvoríme vám altánok na mieru",
          textChild: <p>Okrem základných typov altánkov, ktoré ponúkame v materialite podľa Vašich preferencií a s rôznymi doplnkami, radi zrealizujeme i altánky na mieru špecifickým požiadavkám.</p>

        },
      ]}
      offerOptions={[
        {
          image: '/images/altanok.jpeg',
          title: "altánok na mieru",
          link: "/ponuka/altanok/na-mieru"
        },
        {
          image: '/images/altanok/standard.png',
          title: "altánok standard",
          link: "/ponuka/altanok/standard"
        },
      ]}
    />
  )

}

export default AltanokPage;