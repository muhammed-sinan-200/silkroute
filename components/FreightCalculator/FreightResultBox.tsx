"use client";

export default function FreightResultBox({
    label,
    value,
    active = false,
}: {
    label: string;
    value: string;
    active?: boolean;
}) {
    return (
        <div
            className={`rounded-2xl border p-4 ${
              active
    ? "border-orange-500 bg-orange-500 text-white shadow-sm"
    : "border-gray-200 bg-white"
            }`}
        >
            <p className={active ? "text-xs text-orange-50" : "text-xs text-gray-500"}>
                {label}
            </p>
            <p className="mt-2 text-lg font-bold break-words">
                {value}
            </p>
        </div>
    );
}