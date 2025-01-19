import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
  return (
    <OfferPage
      heroImage="/images/pristresok.png"
      title="prístrešok"
      columns={[
        {
          title: "Efektný úkryt",
          textChild:
            <div className="space-y-4">
              <p>Prístrešok od SloWood Studio nie je len úkrytom pre Vaše auto či záhradné vybavenie – je to harmonický prvok, ktorý v sebe spája praktickosť s estetickým vzhľadom. Naše prístrešky poskytujú spoľahlivú ochranu pred prírodnými vplyvmi, zatiaľ čo zároveň obohacujú Váš exteriér svojím vkusným a citlivým dizajnom.</p>
              <p>Prístrešky vždy navhujeme s citom pre okolie a s imperatívom funkčnosti a trvácnosti. Či už potrebujete prístrešok pre Vaše vozidlo, úložný priestor alebo vonkajšie posedenie, v SloWood Studio Vám ponúkame riešenia, ktoré prispôsobíme Vašim požiadavkám a vkusu. Aj dva prístrešky rovnakých rozmerov totiž môžu v závislosti od použitých materiálov vyzerať unikátne.</p>
            </div>
        },
        {
          title: "Druhá strana výhod",
          textChild: <div className="space-y-4">
            <ul className="space-y-4">
              <li><strong>Ochrana v každom počasí:</strong> Naše prístrešky sú navrhnuté tak, aby zabezpečili spoľahlivú ochranu pred dažďom, snehom, slnkom či vetrom, a zároveň predĺžili životnosť vášho vozidla alebo záhradného vybavenia.</li>
              <li><strong>Individuálny dizajn:</strong> Pri návrhu prístreškov kladieme dôraz na vaše preferencie – od výberu materiálov až po dizajnové detaily, aby sme vytvorili prvok, ktorý dokonale zapadne do vášho exteriéru.</li>
              <li><strong>Ekologické riešenie:</strong> Používame udržateľné materiály a pracujeme s rešpektom k životnému prostrediu, pričom kombinujeme funkčnosť s prírodnou estetikou.</li>
              <li><strong>Všestranné využitie:</strong> Prístrešok nemusí slúžiť len na ochranu vozidla – môže byť zároveň priestorom na posedenie, grilovanie alebo úložiskom pre záhradné náčinie.</li>
              <li><strong>Dlhá životnosť:</strong> Kvalitné materiály a precízne spracovanie zaručujú, že náš prístrešok bude odolný a funkčný počas mnohých rokov.</li>
            </ul>
            <p>Naše prístrešky nie sú len praktickým riešením – sú estetickým doplnkom vášho domova, ktorý odráža váš jedinečný vkus a potreby. Dajte nám vedieť vaše predstavy a radi ich premeníme na skutočnosť.</p>

          </div>
        }
      ]}
      offerOptions={[
        {
          image: '/images/pristresok/pristresok-na-mieru.png',
          title: "prístrešok na mieru",
          link: "/ponuka/pristresok/na-mieru"
        },
        {
          image: '/images/pristresok/carport.png',
          title: "prístrešok carport",
          link: "/ponuka/pristresok/carport"
        },
        {
          image: '/images/pristresok/zasklenie.png',
          title: "prístrešok - zasklenie",
          link: "/ponuka/pristresok/zasklenie"
        },
      ]}
    />
  )

}

export default AltanokPage;