import { Footer } from "@/components/Footer";
import Navbar from "@/components/navbar";
import { QuoteModalShow } from "@/components/QuoteModalShow";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-white font-twCent max-md:pt-20 pt-28">
            <Navbar />
            <div className="w-full max-w-[1300px] mx-auto px-[120px] max-md:px-0 pb-16">
                {children}
            </div>
            <Footer />
            <QuoteModalShow />
        </main>
    );
}
