import { BackButton } from "@/components/BackButton";
import { MamZaujem } from "@/components/MamZaujem";
import Image from "next/image";
import { getStudioItem } from "../data";


type Params = Promise<{ slug: string }>

export default async function Page(props: {
  params: Params
}) {
  const params = await props.params;
  const slug = params.slug;
  const item = getStudioItem(slug);

  if (!item) {
    return null;
  }
  return (
    <main className="py-6">
      <div className="px-6 pb-6 md:px-0 md:pb-2">
        <BackButton />
        <h2 className="text-2xl font-bold uppercase pt-2">{item?.name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  px-0 md:px-0 md:gap-16 gap-2 pb-8">
        <div className="col-span-2">
          <div className="relative h-60 md:h-96">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h4 className="text-2xl  px-6 md:px-0 pt-4 uppercase font-bold pb-2">{item.descriptionTitle}</h4>
          <div className="space-y-4 px-6 md:px-0">
            {
              item.description.map((desc, index) => (
                <p key={index} className="text-primary-text">{desc}</p>
              ))
            }
          </div>
        </div>

        <div className="px-6 md:px-0">
          <div className="gap-6 hidden md:flex">
            {
              item.otherMedia.map((media, index) => (
                <div key={index} className="relative h-32 w-full">
                  <Image
                    src={media}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-full"
                  />
                </div>
              ))
            }
          </div>

          <h4 className="font-bold uppercase pt-4">Špecifikácia</h4>
          <ul className="text-primary-text text-md">
            {item.specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <p className="font-bold pt-4">{item.price}</p>
          <p className="text-primary-text pb-6">{item.priceNote}</p>

          <MamZaujem isRow={true} />

          <div className="gap-6 flex md:hidden pt-6">
            {
              item.otherMedia.map((media, index) => (
                <div key={index} className="relative h-32 w-full">
                  <Image
                    src={media}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-full"
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main >
  )
}