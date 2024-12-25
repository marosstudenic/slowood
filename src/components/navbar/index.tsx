// components/Navbar.js
"use client";
import TwoLineHamburgerIcon from '@/components/navbar/TwoLineHamburgerIcon';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

    return (
        <header className="font-twCent w-full bg-white flex justify-center">
            {/* Desktop Nav */}
            <div className="py-4 space-y-[40px] max-w-[1300px] w-full hidden md:block px-[120px]">
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
                <div className='w-full flex justify-between px-[25px] py-[12px] z-20'>
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
                            className="fixed top-0 right-0 h-screen w-full bg-white flex flex-col items-start justify-center z-50 px-[25px] z-10"
                        >

                            <nav className="flex flex-col space-y-[20px] text-xl font-bold text-left">
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


        </header>
    )
}