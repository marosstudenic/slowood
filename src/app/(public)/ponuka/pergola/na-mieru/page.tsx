import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/pergola/pergola-na-mieru.jpeg"
      title="Pergola Linda"
      column1={{
        title: "Pergola Linda od Slowood",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>Pergola Linda je elegantné a praktické riešenie pre tvoj vonkajší priestor. Je navrhnutá tak, aby poskytovala štýlový tieň, ochranu pred slnkom a zároveň dotvárala moderný vzhľad tvojej záhrady alebo terasy.</p>
          <h2>Hlavné vlastnosti:</h2>
          <ul>
            <li><strong>Čistý a moderný dizajn</strong> – minimalistické línie a estetický vzhľad.</li>
            <li><strong>Odolné materiály</strong> – vysokokvalitné drevo a pevná konštrukcia.</li>
            <li><strong>Variabilné využitie</strong> – vhodná na terasu, záhradu alebo priestor pri bazéne.</li>
            <li><strong>Jednoduchá údržba</strong> – povrchová úprava zaručuje dlhú životnosť a odolnosť voči poveternostným vplyvom.</li>
          </ul>
        </div>
      }}
      column2={{
        title: "prečo si vybrať pergolu Linda od slowood",
        textChild:
          <div>
            <ul>
              <li><strong>Prispôsobenie na mieru</strong> – možnosť výberu rozmerov a ďalších úprav podľa tvojich potrieb.</li>
              <li><strong>Jednoduchá inštalácia</strong> – rýchla a efektívna montáž.</li>
              <li><strong>Ekologické riešenie</strong> – pergola je vyrobená z udržateľných materiálov.</li>
              <li><strong>Estetický prvok</strong> – zvýrazní každý vonkajší priestor a pridá mu eleganciu.</li>
            </ul>
            <p>Linda od Slowood je nielen funkčná, ale aj štýlová pergola, ktorá skrášli tvoj exteriér. Nech už ju využiješ ako miesto na relax, vonkajšie posedenie, alebo ochranu pred slnkom, jej moderný dizajn ťa nesklame.</p>
          </div>
      }}

      iframeUrl=""

      illustrationImages={["/images/pergola/na-mieru-2.png", "/images/pergola/na-mieru-3.png"]}
    />
  )
}


export default Page;