import Link from "next/link"

export const Studio = () => {
    return (
        <div>
            <h2 className="text-xl uppercase font-bold tracking-wide pb-2 max-md:hidden">Štúdio</h2>
            <div className="flex flex-col py-4 items-center max-md:justify-between justify-center  bg-[url('/images/studio.jpeg')] bg-cover bg-center h-80 max-md:h-screen ">
                <div className="flex justify-start w-full px-6 md:hidden">
                    <h2 className="text-md uppercase font-bold tracking-wide">Štúdio</h2>
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl text-white tracking-wide text-center"> Dekoratívnô <br />
                        Aj Funkčnô
                    </h2>
                    <div>
                        <Link href={"/studio"} className="border-2 border-white text-center py-2 px-4 flex justify-center items-center text-white uppercase max-md:text-xs font-bold tracking-wider">
                            Zobraziť
                        </Link>
                    </div>
                </div>
                <div className="md:hidden">
                    {/* placehpder */}
                </div>
            </div>
        </div>

    )
}