import { Footer } from "@/components/Footer";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-white font-twCent max-md:pt-20 pt-28">
            <Navbar />
            <div className="w-full max-w-[1300px] mx-auto px-[120px] max-md:px-0">
                {children}
            </div>
            <Footer />
        </main>
    );
}
