import { BackButton } from "@/components/BackButton";
import { SledujteNas } from "@/components/SledujeteNas";
import { ContactForm } from "./ContactForm";
import { InstagramFeed } from "./InstagramFeed";

const Page = () => {
  return (
    <main className="py-6">
      <div className="px-6 pb-6 md:px-0 md:pb-2">
        <BackButton />
        <h2 className="text-lg font-bold uppercase pt-2">Kontakt</h2>
      </div>
      <section className="flex flex-col gap-10 md:grid grid-cols-2">
        <div className="px-6 md:px-0">
          <div className="text-[#5f5f5f]">
            <p>+421 948 123 456</p>
            <p>slowood@gmail.com </p>
            <p>Nad Ostrovom 7a </p>
            <p> 841 04 Karlova Ves, Bratislava</p>
          </div>
          <ContactForm />
        </div>

        <div>
          <p className="px-6 text-primary-text">Snívate o dizajnovom exteriérovom objekte, alebo o unikátnych interiérových kusoch nábytku? Kontaktujte nás a my Vám radi pomôžeme - od návrhu až po realizáciu.</p>
          <InstagramFeed />
          <SledujteNas />
        </div>
      </section>
    </main >
  )
}

export default Page;