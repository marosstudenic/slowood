import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/pristresok/zasklenie.png"
      title="Prístrešok - Zasklenie"
      column1={{
        title: "Zasklenie od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Je ideálne riešenie pre ochranu tvojho priestoru pred poveternostnými vplyvmi, pričom zároveň ponúka moderný dizajn a pohodlie. Tento elegantný prístrešok je vhodný na vytvorenie krytého priestoru pre oddych, posedenie alebo ochranu tvojho majetku.</p>
          <h2>Výhody zasklenia:</h2>
          <ul>
            <li><strong>Ochrana pred poveternostnými vplyvmi</strong> – účinné krytie proti dažďu, vetru a snehu.</li>
            <li><strong>Moderný dizajn</strong> – drevo v kombinácii so sklom vytvára nadčasový a elegantný vzhľad.</li>
            <li><strong>Viacúčelové využitie</strong> – ideálne ako zimná záhrada, vonkajšia terasa alebo skladový priestor.</li>
            <li><strong>Vysoká kvalita spracovania</strong> – pevná drevená konštrukcia s odolným sklom.</li>
            <li><strong>Možnosť prispôsobenia</strong> – dostupné rôzne rozmery podľa tvojich požiadaviek.</li>
          </ul>
        </div>

      }}
      column2={{
        title: "Prečo si vybrať Slowood:",
        textChild:
          <div>
            <p>Zasklenie od Slowood kombinuje funkčnosť a estetiku, pričom sa ľahko integruje do akéhokoľvek prostredia. Používame len kvalitné materiály, ktoré zabezpečujú dlhú životnosť a minimálnu údržbu.</p>
            <p>Investuj do zasklenia, ktoré ti poskytne pohodlie a ochranu pre tvoju rodinu aj majetok. Vytvor si nový priestor pre relax alebo praktické využitie s dizajnom, ktorý nevyjde z módy.</p>
          </div>
      }}

      iframeUrl="https://app.sketchup.com/viewer/3dw?WarehouseModelId=e8033110-176d-4d5a-bfd3-75253d502ba8"

      illustrationImages={["/images/pristresok/zasklenie-2.png", "/images/pristresok/zasklenie-3.png"]}
    />
  )
}


export default Page;