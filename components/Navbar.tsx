"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ease-out ${
        scrolled
          ? "border-b border-orange-100 bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-2.5" : "py-3.5"
        }`}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className={`relative transition-all duration-300 ${
              scrolled ? "h-9 w-9" : "h-11 w-11"
            }`}
          >
            <Image
              src="/logoa.png"
              alt="SilkRoute Freight Calculator logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1
              className={`font-bold tracking-tight transition ${
                scrolled
                  ? "text-gray-950"
                  : "text-white drop-shadow-md"
              }`}
            >
              Silk<span className="text-orange-400">Route</span>
            </h1>

            <p
              className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition ${
                scrolled
                  ? "text-gray-500"
                  : "text-white/80"
              }`}
            >
              Freight Calculator
            </p>
          </div>
        </div>

        {/* Route */}
        <div
          className={`hidden items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-300 sm:flex ${
            scrolled
              ? "border-orange-100 bg-orange-50/70 py-1.5 text-orange-700"
              : "border-white/40 bg-white/20 py-2 text-white backdrop-blur-sm"
          }`}
        >
          <span>China</span>
          <span className="text-orange-300">→</span>
          <span>UAE</span>
        </div>
      </div>
    </header>
  );
}