"use client";

import { useMemo, useState } from "react";
import { FileText, Package, Scale, BadgeDollarSign, Info, Ruler } from "lucide-react";
import { calculateFreight } from "../../utils/calculateFreight";
import FreightInputField from "./FreightInputField";
import FreightResultBox from "./FreightResultBox";
import FreightInfoItem from "./FreightInfoItem";
import FreightBreakdownModal from "./FreightBreakdownModal";

export default function FreightCalculator() {
    const [grossWeight, setGrossWeight] = useState("");
    const [volume, setVolume] = useState("");
    const [documentationNeeded, setDocumentationNeeded] = useState(false);
    const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);

    const weightNumber = Number(grossWeight);
    const volumeNumber = Number(volume);
    const isValid = weightNumber > 0 && volumeNumber > 0;

    const result = useMemo(() => {
        if (!isValid) return null;
        return calculateFreight(weightNumber, volumeNumber, documentationNeeded);
    }, [weightNumber, volumeNumber, documentationNeeded, isValid]);

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2,
        }).format(amount);

    return (
        <section
            id="calculator"
            className="w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_28rem),linear-gradient(180deg,#fffdf8_0%,#fff7ed_45%,#ffffff_100%)] pb-20 pt-16 lg:pt-20"
        >
            <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6">
                <div className="mb-8 text-center">
                    <p className="text-sm font-semibold text-orange-600 uppercase">

                        Freight Estimator
                    </p>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                        Calculate your shipment cost
                    </h3>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
                        Enter cargo details and review the estimate instantly.
                    </p>
                </div>

                <div className="grid min-w-0 gap-6 lg:grid-cols-[1fr_0.9fr]">

                    <div className="min-w-0 rounded-[2rem] border border-gray-200 bg-white p-5 md:p-8">

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-950">
                                Shipment Details
                            </h3>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                                Provide the weight and volume to calculate the chargeable CBM.
                            </p>
                        </div>

                        <div className="mt-6 space-y-5">
                            <FreightInputField
                                label="Gross Weight"
                                unit="kg"
                                value={grossWeight}
                                onChange={setGrossWeight}
                                placeholder="Example: 2000"
                                icon={<Package size={18} />}
                                error={
                                    grossWeight && weightNumber <= 0
                                        ? "Enter a valid weight greater than 0."
                                        : ""
                                }
                            />

                            <FreightInputField
                                label="Volume"
                                unit="CBM"
                                value={volume}
                                onChange={setVolume}
                                placeholder="Example: 2"
                                icon={<Ruler size={18} />}
                                error={
                                    volume && volumeNumber <= 0
                                        ? "Enter a valid volume greater than 0."
                                        : ""
                                }
                            />

                            <div className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-orange-200 hover:shadow-sm">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex min-w-0 items-start gap-3">
                                        <div className="rounded-xl bg-orange-50 p-2 text-orange-600">
                                            <FileText size={18} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-gray-900">
                                                Local Documentation
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                {documentationNeeded
                                                    ? "A $150 documentation fee is included."
                                                    : "Add this only when local documentation is needed."}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setDocumentationNeeded(!documentationNeeded)}
                                        aria-pressed={documentationNeeded}
                                        className={`relative h-8 w-16 shrink-0 rounded-full p-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-orange-100 ${documentationNeeded ? "bg-orange-500" : "bg-gray-300"
                                            }`}
                                    >
                                        <span
                                            className={`block h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-out ${documentationNeeded ? "translate-x-8" : "translate-x-0"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-0 rounded-[2rem] border border-gray-200 bg-white p-5 md:p-8">

                        <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-orange-600">
                                    Estimated Cost
                                </p>

                                {result ? (
                                    <>
                                        <h3 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                                            {formatCurrency(result.totalCost)}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">
                                            Final estimate based on chargeable CBM and selected documentation.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="mt-4 text-2xl font-bold text-gray-950 md:text-3xl">
                                            Ready to calculate
                                        </h3>
                                        <p className="mt-3 text-sm text-gray-600">
                                            Enter valid weight and volume to see the freight estimate.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        {result ? (
                            <>
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    <FreightResultBox label="Weight CBM" value={`${result.weightCbm.toFixed(2)} CBM`} />
                                    <FreightResultBox label="Actual Volume" value={`${result.actualCbm.toFixed(2)} CBM`} />
                                    <FreightResultBox label="Chargeable CBM" value={`${result.chargeableCbm.toFixed(2)} CBM`} active />
                                    <FreightResultBox label="Freight Cost" value={formatCurrency(result.freightCost)} />
                                    <FreightResultBox label="Documentation Fee" value={formatCurrency(result.documentationFee)} />
                                    <FreightResultBox label="Rate" value="$265 / CBM" />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsBreakdownOpen(true)}
                                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-orange-50/40 px-4 py-3 text-sm font-semibold text-orange-700 transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                >
                                    <Info size={18} />
                                    View calculation breakdown
                                </button>
                            </>
                        ) : (
                            <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-5">
                                <div className="flex items-start gap-3">
                                    <div className="rounded-xl bg-orange-50 p-2 text-orange-600">
                                        <Info size={18} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-950">
                                            Estimate preview
                                        </p>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Enter shipment details to view cost, chargeable CBM, and fee breakdown.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-3">
                                    <FreightInfoItem
                                        icon={<Scale size={18} />}
                                        title="Chargeable CBM"
                                        text="Uses the higher value between weight CBM and actual volume."
                                    />
                                    <FreightInfoItem
                                        icon={<BadgeDollarSign size={18} />}
                                        title="Clear cost summary"
                                        text="Shows freight cost, documentation fee, and final total."
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {result && (
                    <FreightBreakdownModal
                        open={isBreakdownOpen}
                        onClose={() => setIsBreakdownOpen(false)}
                        weightNumber={weightNumber}
                        result={result}
                        formatCurrency={formatCurrency}
                    />
                )}

            </div>
        </section>
    );
}