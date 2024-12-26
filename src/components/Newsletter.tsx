"use client";
import { subscribeEmail } from "@/app/actions/newsletter";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
    const { toast } = useToast();

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        // Create FormData object
        const formData = new FormData(form);

        // Retrieve email field value
        const email = formData.get("email") as string;

        if (!email) {
            toast({
                variant: "destructive",
                title: "Zadajte platný email",
                duration: 5000,
            });
            return;
        }

        // Call subscribeEmail with the email
        const response = await subscribeEmail(email);

        // Toast feedback
        if (response?.status) {
            toast({
                title: "Prihlásenie do newslettera prebehlo úspešne",
                duration: 5000,
            });
        } else {
            toast({
                variant: "destructive",
                title: "Chyba pri prihlásení do newslettera",
                duration: 5000,
            });
        }
    };

    return (
        <div>
            <h2 className="font-bold text-md text-white uppercase">Newsletter</h2>
            <form className="flex flex-col" onSubmit={handleSubscribe}>
                <input
                    type="email"
                    name="email"
                    placeholder="Váš email"
                    className="bg-transparent border-b border-white text-white py-2 mb-2 focus:outline-none focus:border-b-2"
                />
                <button
                    type="submit"
                    className="border border-white text-white py-2 px-4"
                >
                    Prihlásiť sa
                </button>
            </form>
        </div>
    );
};