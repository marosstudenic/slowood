import Image from "next/image"
import Link from "next/link"
import { TStudioItem } from "./data"

export const StudioItem = ({
    item }: {
        item: TStudioItem
    }
) => {
    return (
        <Link key={item.slug} href={`/studio/${item.slug}`} className="hover:scale-105 transition-transform duration-300">
            <div className="relative h-48 md:h-64 lg:h-80">
                <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h3 className="text-md  pt-2 uppercase">{item.name}</h3>
            <p>{item.price}</p>
        </Link>
    )
}
