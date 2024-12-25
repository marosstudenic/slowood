import { motion } from 'framer-motion'

export default function TwoLineHamburgerIcon({ open, onClick }: {
    open: boolean,
    onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            aria-label="Menu"
            className="relative w-8 h-8 z-20"
        >
            {/* Top line */}
            <motion.span
                className="absolute left-1/2 top-1/2 block w-5 h-px bg-black -translate-x-1/2 -translate-y-1/2"
                animate={{
                    rotate: open ? 45 : 0,
                    y: open ? 0 : -3
                }}
                transition={{ duration: 0.2 }}
            />
            {/* Bottom line */}
            <motion.span
                className="absolute left-1/2 top-1/2 block w-5 h-px bg-black -translate-x-1/2 -translate-y-1/2"
                animate={{
                    rotate: open ? -45 : 0,
                    y: open ? 0 : 3
                }}
                transition={{ duration: 0.2 }}
            />
        </button>
    )
}