import { BackButton } from "@/components/BackButton";
import Image from "next/image";


export default function Page(
) {
  return (
    <main className="py-0 md:py-6">
      <div className="px-6 pb-2 md:px-0 md:pb-2 max-md:pt-4">
        <BackButton />
        <h1 className="text-2xl font-bold uppercase pt-2 max-md:hidden">O nás</h1>
      </div>
      <div className="md:pb-6 h-[550px] max-md:hidden">
        <Image src="/images/o-nas/o-nas.jpeg" alt={"slowood"} className="h-full" height={1200} width={1200} />
      </div>
      <h2 className="text-xl font-bold uppercase pt-2 block md:hidden px-6 pb-6">O nás</h2>
      <section className="flex flex-col gap-10 md:grid grid-cols-2">
        <div className="px-6 md:px-0">
          <div className="">
            <h3 className="font-bold text-lg pb-2 uppercase">Čo je slowood</h3>
            <div className="text-[#5f5f5f]">
              <p>Slowood je spoločnosť, ktorá sa špecializuje na tvorbu unikátnych drevených stavieb pre exteriér aj interiér. Využívame krásu, všestrannosť a udržateľnosť dreva, aby sme vytvorili produkty, ktoré nielen slúžia svojmu účelu, ale aj esteticky obohacujú každý priestor.</p>
              <h2>Naša misia</h2>
              <p>Veríme, že kvalitné a precízne spracované drevo dokáže premeniť obyčajný priestor na miesto, ktoré je harmonické, praktické a zároveň nadčasové. Naším cieľom je prinášať klientom riešenia, ktoré spájajú funkčnosť, štýl a rešpekt k prírode.</p>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="font-bold text-lg pb-2 uppercase px-6 md:px-0 ">Čo vyrábame</h3>
          <div className="text-[#5f5f5f] px-6 md:px-0">
            <ul>
              <li><strong>Prístrešky:</strong> Od ochrany vozidiel po elegantné riešenia pre vonkajšie posedenie.</li>
              <li><strong>Altánky:</strong> Miesta pre oddych a rodinné stretnutia, ktoré esteticky zapadnú do každej záhrady.</li>
              <li><strong>Terasy:</strong> Štýlové a funkčné riešenia na rozšírenie obytného priestoru.</li>
              <li><strong>Drevené stavby:</strong> Záhradné domčeky, pergoly a ďalšie konštrukcie vyrobené na mieru podľa vašich potrieb.</li>
            </ul>
            <h2>Prečo Slowood</h2>
            <ul>
              <li><strong>Kvalita a precíznosť:</strong> Používame len najlepšie dreviny a zaručujeme dlhú životnosť našich produktov.</li>
              <li><strong>Riešenia na mieru:</strong> Každý projekt prispôsobujeme vašim požiadavkám a vkusu.</li>
              <li><strong>Ekologický prístup:</strong> Drevo pochádza z udržateľných zdrojov a rešpektujeme prírodu vo všetkých aspektoch výroby.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 md:grid grid-cols-2 mt-20 pb-20">
        <Image src="/images/o-nas/profil.png" height={1000} width={1000} className="h-full w-full object-cover" alt="Profile picture slowood" />
        <div className="flex justify-between text-[#5f5f5f] flex-col gap-10 max-md:px-6">
          <div className="space-y-4">
            <p className="">Od malička ma fascinovalo drevo. Už ako dieťa som trávil hodiny v dielni môjho starého otca, kde som sa učil základom práce s drevom. Miloval som sledovať, ako obyčajný kus dreva pod rukami získava tvar a stáva sa niečím funkčným a krásnym.</p>
            <p>Táto vášeň ma neopustila ani neskôr. Po rokoch skúseností a učenia som si uvedomil, že chcem spojiť lásku k drevu s dizajnom a vytvárať jedinečné stavby, ktoré ľuďom prinášajú radosť. Od pergol a prístreškov až po altánky a terasy, každá moja realizácia je navrhnutá s dôrazom na detaily a harmóniu s okolím.</p>
            <p>Dnes, cez Slowood, pomáham klientom premeniť ich predstavy na skutočnosť. Vyrábam stavby, ktoré nielen slúžia svojmu účelu, ale aj esteticky obohacujú záhrady a exteriéry. Pre mňa je drevo viac než len materiál – je to živý prvok, ktorý do každého projektu prináša jedinečnosť a nadčasovosť.</p>
          </div>

          <div>
            <p className="text-black uppercase ">Simon Šinkovic</p>
            <p className="uppercase text-black text-xs">Slowood Studio Managing Director</p>
          </div>

        </div>
      </section>

    </main >
  )

}