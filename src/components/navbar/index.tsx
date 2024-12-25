// components/Navbar.js
"use client";
import TwoLineHamburgerIcon from '@/components/navbar/TwoLineHamburgerIcon';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const parentVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-4rem" },
};

const childVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-2rem" },
};


const NAVIGATION = [
    {
        href: '/',
        label: 'HLAVNÁ PONUKA',
    },
    {
        href: '/slowood-plus',
        label: 'SLOWOOD PLUS',
    },
    {
        href: '/studio',
        label: 'ŠTÚDIO',
    },
    {
        href: '/o-nas',
        label: 'O NÁS',
    },
    {
        href: '/kontakt',
        label: 'KONTAKT',
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);

    function update(latest: number, prev: number): void {
        if (latest < prev) {
            setHidden(false);
            console.log("visible");
        } else if (latest > 100 && latest > prev) {
            setHidden(true);
            console.log("hidden");
        }
    }

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        update(latest, prevScroll);
        console.log(latest);
        setPrevScroll(latest);
    });


    return (
        <motion.nav className="font-twCent w-full bg-white flex justify-center fixed top-0 z-50"
            animate={hidden ? "hidden" : "visible"}
            variants={parentVariants}
            transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.3,
                staggerChildren: 0.05,
            }}>
            {/* Desktop Nav */}
            <div className="py-4 space-y-8 max-w-[1300px] w-full hidden md:block px-[120px]">
                {/* Logo */}
                <div className="text-lg font-bold">
                    <Link href="/">
                        <Image src='/logo.svg' alt='logo' width={100} height={80} />
                    </Link>
                </div>
                <div className="flex justify-between">
                    <nav className="flex space-x-6">
                        {
                            NAVIGATION.map((item, index) => (
                                <Link key={index} href={item.href} className='text-sm font-thin text-black'>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </nav>

                    {/* Instagram Icon (Desktop) */}
                    <div className="hidden md:block">
                        <Link href="https://instagram.com" target="_blank">
                            <Image src="/icons/insta.png" alt="Incstagram Icon" width={20} height={20} className='h-full aspect-square' />
                        </Link>
                    </div>

                </div>
            </div>


            {/* MOBILE  */}
            <div className='w-full max-md:block hidden'>
                <div className='w-full flex justify-between px-6 py-6 z-20'>
                    <div className="text-lg font-bold z-20">
                        <Link href="/">
                            <Image src='/logo.svg' alt='logo' width={100} height={80} />
                        </Link>
                    </div>
                    {/* Mobile Toggle */}
                    <TwoLineHamburgerIcon open={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </div>
                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobileNav"
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-full bg-white flex flex-col items-start justify-center z-10 px-6"
                        >

                            <nav className="flex flex-col space-y-6 text-xl font-bold text-left">
                                {
                                    NAVIGATION.map(item => (
                                        <Link key={item.href} href={item.href}>
                                            {item.label}
                                        </Link>
                                    ))
                                }
                                <Link href="https://instagram.com" target="_blank">
                                    <Image src='/icons/insta.png' height={20} width={20} alt='instagram icon' />
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


        </motion.nav>
    )
}