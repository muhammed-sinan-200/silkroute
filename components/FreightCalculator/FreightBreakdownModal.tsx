"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FreightBreakdownRow from "./FreightBreakdownRow";
import type { FreightCalculationResult } from "../../utils/calculateFreight";

export default function FreightBreakdownModal({
    open,
    onClose,
    weightNumber,
    result,
    formatCurrency,
}: {
    open: boolean;
    onClose: () => void;
    weightNumber: number;
    result: FreightCalculationResult;
    formatCurrency: (amount: number) => string;
}) {
    useEffect(() => {
        if (!open) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 py-6 backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                >
                    <motion.div
                        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-5 shadow-xl sm:p-6"
                        onClick={(event) => event.stopPropagation()}
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.97 }}
                        transition={{
                            duration: 0.24,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-orange-600">
                                    Calculation Breakdown
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                                    How your estimate was calculated
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    A simple step-by-step view of the chargeable CBM, freight
                                    cost, and documentation fee.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close calculation breakdown"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="mt-6 space-y-3">
                            <FreightBreakdownRow
                                step="01"
                                text={`Weight CBM = ${weightNumber} ÷ 500 = ${result.weightCbm.toFixed(
                                    2
                                )} CBM`}
                            />
                            <FreightBreakdownRow
                                step="02"
                                text={`Chargeable CBM selected: ${result.chargeableCbm.toFixed(
                                    2
                                )} CBM`}
                            />
                            <FreightBreakdownRow
                                step="03"
                                text={`Freight cost = ${result.chargeableCbm.toFixed(
                                    2
                                )} × $265 = ${formatCurrency(result.freightCost)}`}
                            />
                            <FreightBreakdownRow
                                step="04"
                                text={`Total = freight cost + ${formatCurrency(
                                    result.documentationFee
                                )} documentation fee`}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="mt-6 w-full rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
                        >
                            Got it
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}