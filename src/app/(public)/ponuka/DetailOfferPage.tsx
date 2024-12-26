import { BackButton } from "@/components/BackButton";
import { MamZaujem } from "@/components/MamZaujem";
import Image from "next/image";
import { ReactNode } from "react";
import { IframeCover } from "./IframeCover";

interface Column {
    title: string;
    textChild: ReactNode
}

interface OfferOption {
    image: string;
    title: string;
    link: string;
}


export const DetailOfferPage = ({
    heroImage,
    title,
    column1,
    column2,
    illustrationImages,
    iframeUrl = ""
}: {
    heroImage: string;
    title: string;
    column1: Column;
    column2: Column;
    illustrationImages?: string[];
    iframeUrl?: string;
}
) => {
    return (
        <main className="py-0 md:py-6">
            <div className="px-6 pb-6 md:px-0 md:pb-2 hidden md:block">
                <BackButton />
                <h2 className="text-2xl font-bold uppercase pt-2">{title}</h2>
            </div>
            <div className="md:pb-6 h-[400px]">
                <IframeCover coverImageUrl={heroImage} iframeUrl={iframeUrl} />
            </div>
            <h2 className="text-xl font-bold uppercase pt-2 block md:hidden px-6 pb-6">{title}</h2>
            <section className="flex flex-col gap-10 md:grid grid-cols-2">
                <div className="px-6 md:px-0">
                    <div className="pb-6 block md:hidden">
                        <MamZaujem />
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg pb-2 uppercase">{column1.title}</h3>
                        <div className="text-[#5f5f5f]">{column1.textChild}</div>
                    </div>


                    <div className="pt-6 hidden md:block">
                        <MamZaujem />
                    </div>
                </div>

                <div className="">
                    <h3 className="font-bold text-lg pb-2 uppercase px-6 md:px-0 ">{column2.title}</h3>
                    <div className="text-[#5f5f5f] px-6 md:px-0">{column2.textChild}</div>

                    <h3 className="font-bold text-lg pb-2 uppercase pt-8 px-6 md:px-0">Ilustrančé fotografie</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {illustrationImages?.map((image, index) => (
                            <Image key={index} src={image} alt={title} width={400} height={400} />
                        ))}
                    </div>
                </div>


            </section>
        </main >
    )

}