"use client";
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LinkButton } from './LinkButton';

export interface SlideShowItem {
    id: number;
    image: string;
    text: string;
    buttonText: string;
    buttonLink: string;
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0
    })
}

export default function MotionSlider({ slides }: { slides: SlideShowItem[] }) {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    const nextSlide = () => {
        setDirection(1)
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="relative w-full h-[400px] max-md:h-[90dvh] overflow-hidden bg-black">
            <AnimatePresence custom={direction}>
                <motion.div
                    key={slides[current].id}
                    className="absolute w-full h-full"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].text}
                        fill
                        className="object-cover brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4">
                        <h2 className="text-5xl max-md:text-3xl max-md:max-w-60 leading-snug font-bold uppercase font-twCent tracking-wider text-center">{slides[current].text}</h2>
                        <LinkButton link={slides[current].buttonLink} className=''>
                            <p className='uppercase tracking-widest text-md font-bold max-md:text-xs'>
                                {slides[current].buttonText}
                            </p>
                        </LinkButton>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={
                            idx === current
                                ? 'w-8 h-[1px] bg-white transition-all'
                                : 'w-2 h-[1px] bg-white/50 transition-all'
                        }
                    />
                ))}
            </div>

            {/* Next / Prev buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-2xl"
                aria-label="Prev slide"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-2xl"
                aria-label="Next slide"
            >
                ›
            </button>
        </div>
    )
}