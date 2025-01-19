import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/zahradny-domcek/zahradny-domcek-na-mieru.jpeg"
      title="Záhradný domček na mieru"
      column1={{
        title: "Záhradný domček na mieru",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Záhradný domček na mieru od Slowood je ideálnym riešením pre tých, ktorí chcú presne splniť svoje požiadavky na dizajn, funkčnosť a priestor. Nezáleží na tom, či potrebujete úložný priestor, miesto na prácu, alebo oddychovú zónu – navrhneme a vyrobíme domček, ktorý sa dokonale prispôsobí vašim predstavám.</p>
          <h2>Hlavné vlastnosti:</h2>
          <ul>
            <li><strong>Jedinečný dizajn</strong> – každý domček je prispôsobený vašim potrebám a štýlu.</li>
            <li><strong>Praktické využitie</strong> – od úložného priestoru po hobby miestnosť, domček na mieru je univerzálnym riešením.</li>
            <li><strong>Odolnosť a kvalita</strong> – používame kvalitné drevo a materiály odolné voči poveternostným podmienkam.</li>
            <li><strong>Profesionálne spracovanie</strong> – precízna výroba, ktorá zaručuje dlhú životnosť.</li>
          </ul>
        </div>
      }}
      column2={{
        title: "Prečo si vybrať záhradný domček na mieru:",
        textChild:
          <div>
            <ul>
              <li><strong>Prispôsobenie na mieru</strong> – veľkosť, rozloženie, interiér a exteriér presne podľa vašich potrieb.</li>
              <li><strong>Ekologické riešenie</strong> – vyrábame z udržateľných materiálov s dôrazom na ochranu prírody.</li>
              <li><strong>Štýlový doplnok</strong> – moderný dizajn, ktorý harmonicky zapadne do vašej záhrady.</li>
              <li><strong>Kompletný servis</strong> – od návrhu cez výrobu až po montáž.</li>
            </ul>
            <p>Záhradný domček na mieru od Slowood nie je len funkčný, ale aj esteticky príjemný. Či už potrebujete priestor na skladovanie, relaxáciu alebo prácu, s naším prístupom na mieru vytvoríme domček, ktorý naplní vaše očakávania. Stačí nás kontaktovať a spoločne premeníme vaše predstavy na realitu.</p>
          </div>
      }}

      iframeUrl=""

      illustrationImages={["/images/zahradny-domcek/na-mieru-2.png", "/images/zahradny-domcek/na-mieru-3.png"]}
    />
  )
}


export default Page;