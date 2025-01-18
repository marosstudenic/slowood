import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/altanok/altanok-na-mieru.jpeg"
      title="Altánok na mieru"
      column1={{
        title: "Altánok na mieru od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Altánok na mieru od Slowood je ideálnym riešením pre tých, ktorí hľadajú jedinečný a funkčný doplnok do svojej záhrady. S možnosťou prispôsobenia každého detailu ti vyrobíme altánok, ktorý dokonale zapadne do tvojho prostredia a splní všetky tvoje požiadavky.</p>
          <h2>Čo ponúkame:</h2>
          <ul>
            <li><strong>Dizajn na mieru</strong> – vyber si veľkosť, tvar, materiály a doplnky presne podľa svojich predstáv.</li>
            <li><strong>Kvalitné materiály</strong> – používame udržateľné drevo a spoľahlivé stavebné komponenty.</li>
            <li><strong>Praktické funkcie</strong> – altánok môže byť vybavený osvetlením, zábradlím, podlahou či inými detailmi.</li>
            <li><strong>Dlhá životnosť</strong> – vďaka precíznemu spracovaniu a kvalitným materiálom je altánok odolný voči poveternostným vplyvom.</li>
          </ul>

        </div>
      }}
      column2={{
        title: "obľúbené doplnky",
        textChild:
          <div>
            <ul>
              <li>vedenie elektroinštalácie v trámoch</li>
              <li>integrované ambientné osvetlenie</li>
              <li>vonkajšie sedenie prispôsobené rozmerom prístrešku</li>
              <li>strešné okná / svetlíky</li>
            </ul>
          </div>
      }}

      iframeUrl=""

      illustrationImages={["/images/altanok/na-mieru-2.png", "/images/altanok/na-mieru-3.png"]}
    />
  )
}


export default Page;