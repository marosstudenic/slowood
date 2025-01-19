import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/zahradny-domcek/cubic.png"
      title="Záhradný domček - Cubic"
      column1={{
        title: "Záhradný domček Cubic od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Tento moderný záhradný domček od Slowood je ideálnym riešením pre tých, ktorí hľadajú funkčnosť a štýlový dizajn v jednom. Vďaka čistým líniám a kvalitným materiálom je vhodný nielen na uskladnenie záhradného náradia, ale aj ako priestor na relax alebo prácu.</p>
          <h2>Hlavné vlastnosti:</h2>
          <ul>
            <li><strong>Elegantný dizajn</strong> – čisté línie a moderné drevené lamely.</li>
            <li><strong>Všestranné využitie</strong> – môže slúžiť ako úložný priestor, kancelária alebo hobby miestnosť.</li>
            <li><strong>Odolné materiály</strong> – vyrobené z kvalitného dreva s povrchovou úpravou odolnou voči poveternostným podmienkam.</li>
            <li><strong>Integrované osvetlenie</strong> – zabudované svetlá zaručujú príjemnú atmosféru aj večer.</li>
          </ul>
        </div>
      }}
      column2={{
        title: "Prečo si vybrať tento záhradný domček od Slowood:",
        textChild:
          <div>
            <ul>
              <li><strong>Prispôsobenie na mieru</strong> – možnosť úpravy rozmerov, interiéru a detailov podľa vašich potrieb.</li>
              <li><strong>Ekologický prístup</strong> – použitím udržateľných materiálov chránime životné prostredie.</li>
              <li><strong>Minimalistický štýl</strong> – hodí sa do každého záhradného priestoru.</li>
              <li><strong>Trvácnosť a kvalita</strong> – domček je navrhnutý tak, aby vám slúžil dlhé roky.</li>
            </ul>
            <p>Či už hľadáte úložný priestor, miesto na relax alebo funkčnú miestnosť na svoje aktivity, tento záhradný domček od Slowood vám ponúka riešenie, ktoré splní všetky vaše očakávania. S moderným dizajnom a precíznym spracovaním je ideálnym doplnkom každej záhrady.</p>
          </div>
      }}

      iframeUrl="https://app.sketchup.com/viewer/3dw?WarehouseModelId=78835d7f-de2b-498a-b197-814ad253d6c3"

      illustrationImages={["/images/zahradny-domcek/cubic-2.png", "/images/zahradny-domcek/cubic-3.png"]}
    />
  )
}


export default Page;