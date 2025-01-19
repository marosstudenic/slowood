import { BackButton } from "@/components/BackButton";
import { MamZaujem } from "@/components/MamZaujem";
import { ArrowRight } from "lucide-react";
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
  showContant = false
}: {
  heroImage: string;
  title: string;
  columns: Column[];
  offerOptions?: OfferOption[];
  actions?: ReactNode,
  illustrationImages?: string[];
  showContant?: boolean;
}
) => {
  return (
    <main className="py-6">
      <div className="px-6 pb-6 md:px-0 md:pb-2">
        <BackButton />
        <h2 className="text-2xl font-bold uppercase pt-2">{title}</h2>
      </div>
      <Image src={heroImage} alt={title} width={1200} height={1200} className="hidden md:block w-full h-[550px] object-cover md:pb-4" />
      <section className="flex flex-col gap-10 md:grid grid-cols-2">
        {columns.map((column, index) => (
          <div key={index} className="px-6 md:px-0">
            <h3 className="font-bold text-lg pb-2 uppercase">{column.title}</h3>
            <div className="text-[#5f5f5f]">{column.textChild}</div>
          </div>
        ))}
      </section>

      {offerOptions && offerOptions.length > 0 && (
        <section className="py-12">
          <h3 className="uppercase text-xl px-6 md:px-0 font-bold md:pb-2">ponuka</h3>
          <div className="flex flex-col md:grid grid-cols-3 gap-8">
            {offerOptions.map((option, index) => (
              <Link href={option.link} key={index} className="flex flex-col-reverse  md:flex-col items-start h-full hover:scale-105 transition-transform duration-300">
                <Image src={option.image} alt={option.title} width={400} height={400} className="h-60 object-cover" />
                <div className="flex justify-between items-center w-full px-6 md:px-0  py-2">
                  <p className="uppercase">{option.title}</p>
                  <p className="underline uppercase text-sm max-md:block hidden"> <ArrowRight strokeWidth={1} /></p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0 pt-8">
        {actions}
        {showContant && (
          <MamZaujem />
        )}
      </div >


      {illustrationImages && illustrationImages.length > 0 && (
        <div className="py-6 md:hidden">
          {illustrationImages?.map((image, index) => (
            <Image key={index} src={image} alt={title} width={400} height={400} />
          ))}
        </div>
      )}
    </main >
  )

}