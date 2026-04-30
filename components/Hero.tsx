"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Hero() {
    const scrollToCalculator = () => {
        const section = document.getElementById("calculator");
        if (!section) return;

        const isMobile = window.innerWidth < 640;
        const offset = isMobile ? 8 : 10;
        const y = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative flex min-h-screen w-full items-center overflow-hidden px-4 py-24 sm:px-6">
            <Image
                src="/logistics3.jpg"
                alt="Logistics background"
                fill
                priority
                className="absolute inset-0 z-0 object-cover"
            />

            <div className="absolute inset-0 z-10 bg-slate-950/25" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/5 to-black/35" />

            <div className="relative z-20 mx-auto w-full max-w-7xl">
                <motion.div
                    className="mx-auto max-w-4xl text-center"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.12 }}
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md"
                    >
                        <MapPin size={16} className="shrink-0 text-orange-300" />
                        <span className="truncate">Guangzhou to Jebel Ali</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl"
                    >
                        Know your freight cost{" "}
                        <span className="text-orange-400">before you ship.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
                    >
                        Enter your shipment details and get a clear cost estimate in seconds.
                    </motion.p>

                    <motion.button
                        variants={fadeUp}
                        type="button"
                        onClick={scrollToCalculator}
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white"
                    >
                        Calculate Now
                        <ArrowDown size={16} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}