import { BackButton } from "@/components/BackButton";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Column {
    title: string;
    textChild: ReactNode
}

interface OfferOption {
    image: string;
    title: string;
    link: string;
}

export const OfferPage = ({
    heroImage,
    title,
    columns,
    offerOptions,
    actions,
    illustrationImages,
}: {
    heroImage: string;
    title: string;
    columns: Column[];
    offerOptions?: OfferOption[];
    actions?: ReactNode,
    illustrationImages?: string[];
}
) => {
    return (
        <main className="py-6">
            <div className="px-6 pb-6">
                <BackButton />
                <h2 className="text-2xl font-bold uppercase pt-2">{title}</h2>
            </div>
            <Image src={heroImage} alt={title} width={400} height={400} className="hidden md:block" />
            <section className="flex flex-col gap-10 md:grid grid-cols-2">
                {columns.map((column, index) => (
                    <div key={index} className="px-6">
                        <h3 className="font-bold text-lg pb-2 uppercase">{column.title}</h3>
                        <div className="text-[#5f5f5f]">{column.textChild}</div>
                    </div>
                ))}
            </section>

            {offerOptions && offerOptions.length > 0 && (
                <section className="py-12">
                    <h3 className="uppercase text-xl px-6 font-bold">ponuka</h3>
                    <div className="flex flex-col md:grid grid-cols-3 gap-8">
                        {offerOptions.map((option, index) => (
                            <Link href={option.link} key={index} className="flex flex-col-reverse md:flex-col items-start">
                                <Image src={option.image} alt={option.title} width={400} height={400} />
                                <p className="px-6 md:px-0 uppercase py-2">{option.title}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {actions}

            {illustrationImages && illustrationImages.length > 0 && (
                <div className="py-6">
                    {illustrationImages?.map((image, index) => (
                        <Image key={index} src={image} alt={title} width={400} height={400} />
                    ))}
                </div>
            )}
        </main>
    )

}