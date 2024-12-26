"use client";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const message = formData.get('message') as string;

        const response = await fetch('/api/form-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            }),
        });

        if (response.ok) {
            toast({
                title: 'Ďakujeme za správu',
                description: 'Čoskoro sa Vám ozveme.',
            });
        } else {
            toast({
                title: 'Chyba',
                description: 'Nepodarilo sa odoslať správu. Skúste to prosím telefonicky.',
                variant: "destructive",
            });
        }
        setIsSending(false);
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-lg font-bold uppercase pt-2">Napíšte nám</h2>
            {/* create input fields for name, email, phone, message, with gray text and input with only bottom line, with state variables */}
            <input
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="MENO*"
                className="border-b border-black w-full py-2 px-1 focus:outline-none placeholder:text-[#5f5f5f]"
            />
            <input
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL*"
                className="border-b border-black w-full py-2 px-1 focus:outline-none placeholder:text-[#5f5f5f]"
            />
            <input
                type="tel"
                name="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                placeholder="TELEFÓN*"
                className="border-b border-black w-full py-2 px-1 focus:outline-none placeholder:text-[#5f5f5f]"
            />
            <textarea
                name="message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                placeholder="SPRÁVA*"
                className="border-b border-black w-full py-2 px-1 focus:outline-none placeholder:text-[#5f5f5f]"
            />

            <button type="submit" className="border border-black text-center text-xs py-2 px-4 flex justify-center items-center text-black uppercase w-full md:w-40 h-10 tracking-wider">
                {
                    isSending ? 'Odosielam...' : 'Odoslať'
                }
            </button>

        </form>
    )
}