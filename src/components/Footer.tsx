import Image from "next/image";
import Link from "next/link";

const Newsletter = () => {
    return (
        <div>
            <h2 className="font-bold text-md text-white uppercase">newsletter</h2>

            <form className="flex flex-col">
                <input type="email" placeholder="Váš email" className="bg-transparent border-b border-white text-white py-2  mb-2  focus:outline-none focus:border-b-2" />
                <button className="border border-white text-white py-2 px-4">Prihlásiť sa</button>
            </form>
        </div>
    );
}

export const Footer = () => {
    return (
        <footer className="bg-black w-full py-8">
            <div className="max-w-[1300px] px-6 md:px-[120px] flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 lg:grid-cols-5 mx-auto justify-start">
                <div className="md:hidden block">
                    <Newsletter />
                </div>
                <div>
                    <Image src="/logo-white.svg" alt="logo" width={100} height={80} className="pb-4 hidden md:block" />
                    <div className="text-sm text-white">
                        <p>SloWood Studio s.r.o.</p>
                        <p>Nad Ostrovom 7a, 841 04
                            Karlova Ves, Bratislava
                            Slovenská republika</p>
                        <p>
                            IČO: 12 345 678
                        </p>
                        <p className="hidden md:block">
                            © 2024 slowood.sk
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-md text-white uppercase">Informácie</h2>
                    <div className="text-white text-sm flex flex-col">
                        <Link href="/ponuka"> Hlavná ponuka</Link>
                        <Link href="/slowood-plus"> Slowood Plus</Link>
                        <Link href="/studio"> Štúdio</Link>
                        <Link href="/o-nas">O nás</Link>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-md text-white uppercase">Slowood plus</h2>
                    <div className="text-white text-sm flex flex-col">
                        <Link href="/faq"> FAQ</Link>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-md text-white uppercase">Kontakty</h2>
                    <div className="text-white text-sm flex flex-col">
                        <Link href="mailto: slowood@gmail.com"> slowood@gmail.com</Link>
                        <Link href="tel:+421912987654"> +421 912 987 654</Link>
                        <Link href="https://www.instagram.com/slowood.sk/" target="__blank"> Instagram</Link>
                    </div>
                </div>

                <div className="md:block hidden">
                    <Newsletter />
                </div>

                <div className="w-full flex md:hidden flex-col justify-center items-center">
                    <Image src="/logo-white.svg" alt="logo" width={100} height={80} className="pb-2" />
                    <p className="text-white text-sm">
                        © 2024 slowood.sk
                    </p>
                </div>
            </div>
        </footer>
    )
}