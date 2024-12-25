import Image from "next/image"

const offer = [
    {
        image: '/images/altanok.jpeg',
        title: "altánok"
    },
    {
        image: '/images/drevene-obklady.jpeg',
        title: "drevené obklady",
    },
    {
        image: '/images/zahradny-domcek.jpeg',
        title: "zahradný domček"
    },
    {
        image: '/images/pergola.jpeg',
        title: "pergola"
    },
    {
        image: '/images/terasy.jpeg',
        title: "terasa"
    },
    {
        image: '/images/pristresok.jpeg',
        title: "prístrešok"
    },
]
export const MainOffer = () => {
    return (
        <section>
            <h2 className="uppercase font-bold text-lg mb-2 max-md:px-6 tracking-wider"> hlavná ponuka</h2>
            <div className="grid grid-cols-3 max-md:grid-cols-2 gap-8 max-md:gap-8 max-sm:grid-cols-1">
                {offer.map((item, index) => (
                    <div key={index} className="w-full flex flex-col max-md:flex-col-reverse hover:scale-110 transition-all cursor-pointer">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="object-cover w-full h-40"
                        />
                        <p className="max-md:max-w-60 uppercase font-twCent tracking-wider text-md max-md:px-6 max-md:pb-4 pt-2">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )

}