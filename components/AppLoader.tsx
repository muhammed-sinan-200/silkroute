"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AppLoader({ loading }: { loading: boolean }) {
    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-white px-6"
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1], 
                    }}
                >
                    <div className="flex flex-col items-center text-center">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative h-20 w-20 sm:h-24 sm:w-24"
                        >
                            <Image
                                src="/logoa.png"
                                alt="SilkRoute logo"
                                fill
                                priority
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            className="mt-4 text-xl font-semibold tracking-tight text-slate-950"
                        >
                            Silk<span className="text-orange-500">Route</span>
                        </motion.h1>

                        <div className="relative mt-6 h-[2px] w-40 overflow-hidden bg-slate-200">
                            <motion.div
                                className="absolute left-0 top-0 h-full w-20 bg-orange-500"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}