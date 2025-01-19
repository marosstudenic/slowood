import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/zahradny-domcek/open-field.png"
      title="Záhradný domček - Open Field Zone"
      column1={{
        title: "OpenField od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Záhradný domček OpenField od Slowood je moderné a praktické riešenie pre vonkajší priestor, ktoré kombinuje funkčnosť s elegantným dizajnom. Svojou vzdušnou konštrukciou a uzavretými stenami ponúka ideálne miesto na relaxáciu, posedenie alebo ochranu pred poveternostnými vplyvmi.</p>
          <h2>Hlavné vlastnosti:</h2>
          <ul>
            <li><strong>Moderný dizajn</strong> – horizontálne lamely pre elegantný a vzdušný vzhľad.</li>
            <li><strong>Pevná konštrukcia</strong> – vyrobený z kvalitného a odolného dreva.</li>
            <li><strong>Integrované osvetlenie</strong> – zabudované svetlá vytvárajú príjemnú atmosféru.</li>
            <li><strong>Všestranné využitie</strong> – vhodný ako priestor na posedenie, úkryt pred dažďom alebo grilovanie.</li>
          </ul>

        </div>
      }}
      column2={{
        title: "Prečo si vybrať OpenField od Slowood:",
        textChild:
          <div>
            <ul>
              <li><strong>Ochrana a súkromie</strong> – steny z lamiel poskytujú súkromie a zároveň zachovávajú otvorený pocit.</li>
              <li><strong>Prispôsobenie na mieru</strong> – možnosť úpravy veľkosti a detailov podľa tvojich potrieb.</li>
              <li><strong>Odolnosť voči počasiu</strong> – domček je navrhnutý tak, aby odolal dažďu, vetru a slnečnému žiareniu.</li>
              <li><strong>Ekologický prístup</strong> – vyrobený z udržateľných materiálov, ktoré rešpektujú životné prostredie.</li>
            </ul>
            <p>OpenField od Slowood je dokonalým spojením štýlu a funkčnosti. Či už ho využiješ na relax, rodinné stretnutia alebo ako estetický doplnok záhrady, bude ti poskytovať pohodlie a ochráni tvoj priestor.</p>
          </div>
      }}

      iframeUrl="https://app.sketchup.com/viewer/3dw?WarehouseModelId=d3bea8df-7238-470a-81b6-bd1d7a225d85"

      illustrationImages={["/images/zahradny-domcek/open-field-2.png", "/images/zahradny-domcek/open-field-3.png"]}
    />
  )
}


export default Page;