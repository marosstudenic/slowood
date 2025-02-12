import Image from "next/image"
import Link from "next/link"

export const AboutUs = () => {
    return (
        <div className="max-md:bg-[#f6f6f0] py-6">
            <h2 className="text-twCent text-xl font-bold pb-2 uppercase tracking-wide max-md:px-6">O nás</h2>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-4">
                <div className="w-full h-full max-md:hidden">
                    <Image src='/images/slowoodplus.jpeg' alt='slowoodplus' width={400} height={400} className="object-cover w-full h-full" />
                </div>
                <div className="w-full space-y-8 gap-4 text-primary-text leading-7 tracking-wide h-full max-md:text-sm max-md:px-6">
                    <p>
                        V SloWood Studio veríme, že každý kus dreva má svoj príbeh, a že každý príbeh si zaslúži svoj jedinečný výraz. Preto sa snažíme svoju vášeň pre tento ušľachtilý materiál vyprecizovať v každom jednom kúsku, ktorý vytvárame.
                    </p>
                    <p>
                        Príbeh dreva sme začali rozprávať spolu s realizáciami pre našich klientov od roku 2020, pôvodne pod inou značkou a so zameraním predovšetkým na exteriérové realizácie. Túto časť našej DNA neopúšťame, no pridali sme k nej i precíznu tvorbu rôznych solitérnych prvkov, či nábytkov.
                    </p>
                    <p>
                        Ako odkazuje i náš názov, nie sme veľkou fabrikou, ale skôr menším štúdiom, kde ku každej realizácii pristupujeme osobne.

                    </p>

                    <div className="flex justify-between">
                        <Link href="/o-nas" className="uppercase tracking-wider border px-4 py-2 text-sm border-black text-black w-auto hover:scale-105 transition-all max-md:text-xs">
                            O nás
                        </Link>
                    </div>
                </div>

                <div className="w-full h-full md:hidden">
                    <Image src='/images/onas.jpeg' alt='slowoodplus' width={400} height={400} className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}