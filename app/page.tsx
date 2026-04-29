"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FreightCalculator from "../components/FreightCalculator/FreightCalculator";
import Footer from "../components/Footer";
import AppLoader from "../components/AppLoader";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1400);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [loading]);

    return (
        <main className="min-h-screen overflow-x-hidden text-slate-950">
            <AppLoader loading={loading} />

            {!loading && (
                <>
                    <Navbar />
                    <Hero />
                    <FreightCalculator />
                    <Footer />
                </>
            )}
        </main>
    );
}