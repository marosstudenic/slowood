import { OfferPage } from "../OfferPage";

const AltanokPage = () => {
  return (
    <OfferPage
      heroImage="/images/pergola/pergola-na-mieru.jpeg"
      title="pergola"
      columns={[
        {
          title: "S tieňom a estetikou",
          textChild:
            <div className="space-y-4">
              <p>Pergola je exteriérovým doplnkom, konštrukciou s dominantne estetickou funkciou, no zároveň nezanedbateľným funkčným aspektom vo forme poskytnutia tienenia. To je starostlivo zvažované i pri vyberaní natočenia pergoly s ohľadom na svetové strany, či smerovaní driev. Pergoly síce zväčša neposkytujú hermeticky uzavretú strešnú plochu na ochranu pred dažďom, no frekvencia ukladania drevených panelov umožňuje narábanie i s týmto aspektom.</p>
              <p>Pergoly sú vzdušné konštrukcie, čeliace prírodným živlom intenzívnejšie ako napríklad altánky, čo adresujeme i pri výbere materiality s klientom. Naše realizácie precízne vytvárame s citom pre detail z drevín a materiálov najvyššej kvality.</p>
              <p>Naše pergoly stavajú most medzi tradičnými a modernými riešeniami, pričom rešpektujú vaše potreby a osobný štýl. Sme tu, aby sme pre vás vytvorili priestor, ktorý splní všetky vaše očakávania.</p>

            </div>
        },
        {
          title: "Prečo prístrešok od Slowood:",
          textChild: <div className="space-y-4">
            <ul className="space-y-4">
              <li><strong>Flexibilné využitie:</strong> Pergoly slúžia nielen na tienenie, ale aj ako dizajnový prvok, ktorý môže definovať priestor vo vašej záhrade, na terase či pri bazéne. Ich otvorený charakter umožňuje prispôsobenie pre rôzne potreby a štýly.</li>
              <li><strong>Prispôsobenie na mieru:</strong> Pri návrhu pergoly zohľadňujeme jedinečné požiadavky klienta – od rozmerov, cez orientáciu podľa svetových strán, až po špecifické materiály.</li>
              <li><strong>Odolnosť a trvácnosť:</strong> Používame kvalitné dreviny a materiály, ktoré zabezpečujú, že pergoly odolajú prírodným živlom, či už ide o silné slnko, vietor alebo mierne dažde.</li>
              <li><strong>Dizajnové detaily:</strong> Priestor medzi drevenými panelmi môžete využiť nielen na tienenie, ale aj ako priestor pre popínavé rastliny, ktoré dodajú pergole prírodný šarm.</li>
              <li><strong>Spojenie estetiky a funkčnosti:</strong> Pergola je viac než len konštrukcia – je to elegantný spôsob, ako v exteriéri vytvoriť miesto na oddych, spoločné chvíle alebo estetické skrášlenie priestoru.</li>
            </ul>

          </div>
        }
      ]}
      offerOptions={[
        {
          image: '/images/pergola/pergola-na-mieru.jpeg',
          title: "pergola na mieru",
          link: "/ponuka/pergola/na-mieru"
        },
        {
          image: '/images/pergola/linda.png',
          title: "pergola linda",
          link: "/ponuka/pergola/linda"
        },
        {
          image: '/images/pergola/random.png',
          title: "pergola random",
          link: "/ponuka/pergola/random"
        },
      ]}
    />
  )

}

export default AltanokPage;