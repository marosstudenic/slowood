import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/altanok/standard.png"
      title="Altánok Standard"
      column1={{
        title: "Altánok od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Altánok od Slowood je dokonalým miestom na oddych v tieni alebo na príjemné posedenie s priateľmi a rodinou. Je vyrobený z kvalitného dreva, ktoré dodáva celému dizajnu prirodzený a elegantný vzhľad.</p>
          <h2>Výhody altánku:</h2>
          <ul>
            <li><strong>Stabilná drevená konštrukcia</strong> – pevný a odolný základ.</li>
            <li><strong>Tradičný dizajn</strong> – klasický vzhľad, ktorý zapadne do akéhokoľvek prostredia.</li>
            <li><strong>Odolnosť voči počasiu</strong> – ideálne riešenie na celoročné využitie.</li>
            <li><strong>Univerzálne využitie</strong> – vhodné na posedenie, grilovanie alebo ako dekoratívny prvok.</li>
            <li><strong>Prispôsobiteľné rozmery</strong> – možnosť vyhotovenia na mieru.</li>
          </ul>
        </div>
      }}
      column2={{
        title: "prečo si vybrať slowood",
        textChild:
          <div>
            <p>Altánky od Slowood sú vyrábané s dôrazom na kvalitu a estetiku. Používame len udržateľné materiály a overené stavebné techniky, aby sme zabezpečili dlhú životnosť a funkčnosť altánku.</p>
            <p>Nech už plánuješ miesto na relax, záhradné párty alebo len ochranu pred slnkom a dažďom, altánok od Slowood je spoľahlivým riešením. S nadčasovým dizajnom a precíznym spracovaním sa stane ozdobou tvojej záhrady.</p>
          </div>
      }}

      iframeUrl="https://app.sketchup.com/viewer/3dw?WarehouseModelId=0e965853-0ac3-42ac-9da1-15cca69358a2"

      illustrationImages={["/images/altanok/standard-2.png", "/images/altanok/standard-3.png"]}
    />
  )
}


export default Page;