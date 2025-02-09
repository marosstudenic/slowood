import { sendEmail } from '@/app/actions/sendMail';
import React, { useState } from 'react';

interface QuoteModalProps {
    onClose?: () => void;
}
const ErrorMessage = () => {
    return <div>
        <p className="text-red-500">Nastala chyba pri odosielaní emailu</p>
        <p className="text-black">Napíšte nám priamo na slowood@gmail.com</p>
    </div>
}

const SuccessMessage = ({ closeModal }: { closeModal: () => void }) => {

    return <div className='py-12'>
        <p className="font-twCent text-xl font-bold">Ste bližšie k Vášej vysnívanej stavbe z dreva.</p>
        <p className="text-black pb-2">
            Váš kontakt bol zaznamenaný, čoskoro sa Vám ozveme.
        </p>

        <button className="bg-black text-white px-16 py-2 font-twCent uppercase"
            onClick={closeModal}
        >
            Zavrieť
        </button>
    </div>
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ onClose }) => {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleYesClick = () => {
        setShowEmailInput(true);
    };

    const handleNoClick = () => {
        if (onClose) {
            onClose();
        }
    };

    const closeModal = () => {
        if (onClose) {
            onClose();
        }
    }


    async function sendContactEmail(formData: FormData) {
        const rawFormData = {
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
        }

        if (!rawFormData.email && !rawFormData.phone) {
            return { error: 'Email alebo telefón je povinný' }
        }
        try {
            await sendEmail({ email: rawFormData.email, name: '', phone: rawFormData.phone, message: 'Vyplneny kontaktny modal' });
            return { success: 'Email bol odoslaný' }
        } catch (error) {
            console.error(error);
            return { error: 'Nastala chyba pri odosielani emailu' }
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        const formData = new FormData(e.currentTarget);
        const result = await sendContactEmail(formData);
        console.log(result);
        if (result.success) {
            setSuccess(true);
            setError(false);
        } else {
            setSuccess(false);
            setError(true);
        }
        setIsSending(false);
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Modal container */}
            <div className="bg-white p-6 shadow-lg z-10 w-[600px]">
                {success && <SuccessMessage closeModal={closeModal} /> ||
                    <>
                        <p className='font-bold text-2xl font-twCent '>
                            Zistite, čo je pre vás najlepšie!
                        </p>
                        <p className="text-lg  mb-4 font-twCent pb-8">
                            Máte záujem o bezplatnú konzultáciu a cenovú ponuku?
                        </p>

                        {!showEmailInput ? (
                            <div className="flex gap-4">
                                <button
                                    className="bg-black text-white px-16 py-2 font-twCent "
                                    onClick={handleYesClick}
                                >
                                    Áno
                                </button>
                                <button
                                    className="text-black border border-black px-4 py-2 "
                                    onClick={handleNoClick}
                                >
                                    Nie
                                </button>
                            </div>
                        ) : (
                            <div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h2 className="text-lg font-bold uppercase pt-2">Zanechajte nám Váš email alebo telefón</h2>
                                    {/* create input fields for name, email, phone, message, with gray text and input with only bottom line, with state variables */}

                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="EMAIL"
                                        className="border-b border-black w-full py-2 px-1 focus:outline-none placeholder:text-[#5f5f5f]"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="TELEFÓN"
                                        className="border-b border-black w-full py-2 px-1 focus:outline-none placeholder:text-[#5f5f5f]"
                                    />
                                    {error && <ErrorMessage /> || <button type="submit" className="border border-black text-center text-xs py-2 px-4 flex justify-center items-center text-black uppercase w-full md:w-40 h-10 tracking-wider">
                                        {
                                            isSending ? 'Odosielam...' : 'Odoslať'
                                        }
                                    </button>
                                    }
                                </form>

                            </div>
                        )}
                    </>
                }
            </div>
        </div>
    );
}; 