import { MainOffer } from "@/components/MainOffer";
import MotionSlider, { SlideShowItem } from "@/components/MotionSlider";
import Navbar from "@/components/navbar";

const slides: SlideShowItem[] = [
  {
    id: 1,
    text: "Drevené terasy",
    image: '/images/terasy.jpeg',
    buttonLink: '/ponuka/terasy',
    buttonText: 'Zistiť viac',
  },
  {
    id: 2,
    text: "Prístrešky",
    image: '/images/pristresok.jpeg',
    buttonLink: '/ponuka/pristresok',
    buttonText: 'Zistiť viac',
  }
]

export default function Home() {
  return (
    <main className="bg-white font-twCent">
      <Navbar />
      <div className="w-full max-w-[1300px] mx-auto px-[120px] max-md:px-0">
        <MotionSlider slides={slides} />
        <div className="mt-10">
          <MainOffer />
        </div>
      </div>
      {/* <MainOffer /> */}

    </main>
  );
}
