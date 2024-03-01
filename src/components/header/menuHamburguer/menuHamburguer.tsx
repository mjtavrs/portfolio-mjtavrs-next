"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative">
            <div
                className="flex flex-col gap-1 w-8 cursor-pointer"
                onClick={toggleMenu}
            >
                <motion.div
                    className="w-full h-1 bg-beige"
                    initial={false}
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        translateY: isOpen ? 2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="w-full h-1 bg-beige"
                    initial={false}
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.1 }}
                />
                <motion.div
                    className="w-full h-1 bg-beige"
                    initial={false}
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        translateY: isOpen ? -14 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-6 right-0 w-15 bg-beige border-[1px] border-black py-2 px-4 shadow-md rounded-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col gap-2 items-center text-black">
                            <li className="pb-2 border-b-[1px] border-lighter-gray"><Link href="#habilidades">Habilidades</Link></li>
                            <li className="pb-2 border-b-[1px] border-lighter-gray"><Link href="#projetos">Projetos</Link></li>
                            <li><Link href="curriculum">Currículo</Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}