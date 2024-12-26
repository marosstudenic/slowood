import { AboutUs } from "@/components/AboutUs";
import { MainOffer } from "@/components/MainOffer";
import MotionSlider, { SlideShowItem } from "@/components/MotionSlider";
import { Slowoodplus } from "@/components/Slowoodplus";
import { Studio } from "@/components/Studio";

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
    <>
      <MotionSlider slides={slides} />
      <div className="mt-16">
        <MainOffer />
      </div>
      <div className="mt-16">
        <Slowoodplus />
      </div>

      <div className="mt-12 max-md:mt-0">
        <Studio />
      </div>

      <div className="mt-16">
        <AboutUs />
      </div>
    </>
  );
}
