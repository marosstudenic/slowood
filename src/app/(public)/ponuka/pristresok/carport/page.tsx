import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/pristresok/carport.png"
      title="Prístrešok Carport"
      column1={{
        title: "Carport od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Chráni tvoje auto pred dažďom, snehom a horúcim slnkom. Poskytuje dostatok miesta pre dve vozidlá a vďaka drevenej konštrukcii pôsobí prirodzene a nadčasovo.</p>
          <ul>
            <li>- Odolné drevo a kvalitné kovové spoje.</li>
            <li>- Otvorený priestor pre lepšie vetranie.</li>
            <li>- Jednoduchý prístup zo všetkých strán.</li>
            <li>- Dizajn, ktorý sa hodí k tvojmu domu či chate.</li>
            <li>- Možnosť prispôsobenia rozmerov (šírka aj výška) podľa tvojich potrieb.</li>
          </ul>
        </div>
      }}
      column2={{
        title: "Prečo prístrešok od Slowood ?",
        textChild:
          <div>
            <p>Carport od Slowood má príjemný vzhľad, ktorý nevyruší tvoj exteriér. Montáž je rýchla. Celá konštrukcia je pevná a zvládne aj väčšie SUV. Drevo od Slowood je spoľahlivé a vyžaduje iba bežnú starostlivosť.</p>
            <p>Ak hľadáš jednoduché a funkčné riešenie, Carport od Slowood je voľba, ktorá ochráni tvoje autá a pridá tvojmu pozemku moderný drevený prvok.</p>
          </div>
      }}

      iframeUrl="https://app.sketchup.com/viewer/3dw?WarehouseModelId=13206159-37db-49c7-8f5c-b3e3cfaf1105"

      illustrationImages={["/images/pristresok/carport-2.png", "/images/pristresok/carport-3.png"]}
    />
  )
}


export default Page;