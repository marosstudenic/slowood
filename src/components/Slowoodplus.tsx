import Image from "next/image"
import Link from "next/link"

export const Slowoodplus = () => {
    return (
        <div className="max-md:bg-[#f6f6f0] py-6">
            <h2 className="text-twCent text-xl font-bold pb-2 uppercase tracking-wide max-md:px-6">Slowood plus</h2>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                <div className="w-full h-full max-md:hidden">
                    <Image src='/images/slowoodplus.jpeg' alt='slowoodplus' width={400} height={400} className="object-cover w-full h-full" />
                </div>
                <div className="w-full space-y-8 gap-4 text-primary-text leading-7 tracking-wide h-full max-md:text-sm max-md:px-6">
                    <p>
                        Veríme, že drevo je materiál s nekonečným potenciálom. Potenciálom, ktorý prekračuje hranice našej štandardnej ponuky. Práve preto si nekreslíme hranice a ponúkame Vám službu SloWood Plus, prostredníctvom ktorej radi na mieru zrealizujeme Vašu predstavu o originálnom kuse nábytku, ktorý zosobní Váš štýl, atypickej záhradnej stavbe či dekoratívnom prvku..
                    </p>
                    <p>
                        SloWood Plus predstavuje službu začínajúcu rozhovorom o Vašich predstavách a potrebách, ktoré sú stredobodom budúceho návrhu. Jeho realizácia je procesom s najvyššou remeselnou precíznosťou, zaručujúcim originálny výsledok špičkovej kvality.
                    </p>

                    <div className="flex justify-between">
                        <Link href="/kontakt" className="uppercase tracking-wider border px-4 py-2 text-sm border-black text-black w-auto hover:scale-105 transition-all max-md:text-xs">
                            Kontakt
                        </Link>
                    </div>
                </div>

                <div className="w-full h-full md:hidden">
                    <Image src='/images/slowoodplus.jpeg' alt='slowoodplus' width={400} height={400} className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}