import { BackButton } from "@/components/BackButton";
import studioData from "./data";
import { StudioItem } from "./Item";

const Page = () => {
  return (
    <main className="py-6">
      <div className="px-6 pb-6 md:px-0 md:pb-2">
        <BackButton />
        <h2 className="text-2xl font-bold uppercase pt-2">Slowood Štúdio</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  px-6 md:px-0 md:gap-8 gap-2">
        {studioData.map((item) => (
          <StudioItem key={item.slug} item={item} />
        ))}

      </div>

    </main >
  )

}

export default Page;