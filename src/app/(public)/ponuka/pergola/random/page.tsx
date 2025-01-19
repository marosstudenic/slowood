import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/pergola/random.png"
      title="Pergola Random"
      column1={{
        title: "Pergola Random od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Pergola Random je moderným a netradičným riešením pre tvoju záhradu alebo terasu. Vďaka unikátnemu dizajnu s nepravidelnými vzormi prináša originalitu a štýl do akéhokoľvek exteriéru.</p>
          <h2>Hlavné vlastnosti:</h2>
          <ul>
            <li><strong>Unikátny dizajn</strong> – nepravidelné línie vytvárajú jedinečný vzhľad.</li>
            <li><strong>Odolné materiály</strong> – vysokokvalitné drevo spracované na dlhodobú výdrž.</li>
            <li><strong>Vzdušnosť</strong> – otvorené časti zaisťujú prirodzené prúdenie vzduchu a príjemný tieň.</li>
            <li><strong>Flexibilné využitie</strong> – ideálna pre relax, posedenie alebo dekoráciu záhrady.</li>
          </ul>
        </div>
      }}
      column2={{
        title: "prečo si vybrať pergolu Linda od slowood",
        textChild:
          <div>
            <ul>
              <li><strong>Estetický prvok</strong> – pergola Random zvýrazní každý priestor a dodá mu moderný charakter.</li>
              <li><strong>Jednoduchá údržba</strong> – vďaka kvalitnému spracovaniu vyžaduje iba minimálnu starostlivosť.</li>
              <li><strong>Prispôsobenie na mieru</strong> – možnosť výberu rozmerov a úprav podľa tvojich predstáv.</li>
              <li><strong>Trvalá hodnota</strong> – kvalitné materiály a precízna výroba zaručujú dlhú životnosť.</li>
            </ul>
            <p>Pergola Random je ideálnou voľbou pre tých, ktorí chcú niečo originálne a funkčné. Prináša štýlový tieň a zároveň pôsobí ako zaujímavý dizajnový doplnok pre tvoj exteriér.</p>
          </div>
      }}

      iframeUrl="https://app.sketchup.com/viewer/3dw?WarehouseModelId=ab52796d-022a-4254-a07b-c337214b9f9a"

      illustrationImages={["/images/pergola/random-2.png", "/images/pergola/random-3.png"]}
    />
  )
}


export default Page;