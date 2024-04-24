"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Transition({
    children,
}: {
    children: React.ReactNode;
}) {
    const key = usePathname();

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={key}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
