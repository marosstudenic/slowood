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
    buttonLink: '/ponuka/terasa',
    buttonText: 'Zistiť viac',
  },
  {
    id: 3,
    text: "Pergoly",
    image: '/images/pergola/pergola-na-mieru.jpeg',
    buttonLink: '/ponuka/pergola',
    buttonText: 'Zistiť viac',
  },
  {
    id: 4,
    text: "Drevené obklady",
    image: '/images/drevene-obklady/drevene-obklady-na-mieru.jpeg',
    buttonLink: '/ponuka/drevene-obklady',
    buttonText: 'Zistiť viac',
  },
  {
    id: 4,
    text: "Altánky",
    image: '/images/altanok/na-mieru-2.png',
    buttonLink: '/ponuka/antanok',
    buttonText: 'Zistiť viac',
  },
  {
    id: 5,
    text: "Prístrešky",
    image: '/images/pristresok/pristresok-na-mieru.png',
    buttonText: "zistiť viac",
    buttonLink: '/ponuka/pristresok',
  },
  {
    id: 6,
    image: '/images/zahradny-domcek/zahradny-domcek-na-mieru.jpeg',
    text: "zahradné domčeky",
    buttonLink: '/ponuka/zahradny-domcek',
    buttonText: "zistiť viac",
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
