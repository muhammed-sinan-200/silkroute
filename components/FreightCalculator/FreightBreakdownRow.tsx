"use client";

export default function FreightBreakdownRow({
    step,
    text,
}: {
    step: string;
    text: string;
}) {
    return (
        <div className="flex min-w-0 gap-3 rounded-2xl border border-gray-200 bg-white p-3 text-sm text-gray-700">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-orange-700">
                {step}
            </span>
            <p className="min-w-0 break-words leading-6">{text}</p>
        </div>
    );
}