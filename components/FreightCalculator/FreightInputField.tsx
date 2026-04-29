"use client";

export default function FreightInputField({
    label,
    unit,
    value,
    onChange,
    placeholder,
    icon,
    error,
}: {
    label: string;
    unit: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    icon: React.ReactNode;
    error?: string;
}) {
    return (
        <div className="min-w-0">
            <div className="mb-2 flex items-center justify-between gap-3">
                <label className="text-sm font-semibold text-gray-800">{label}</label>
                <span className="shrink-0 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
                    {unit}
                </span>
            </div>

            <div className="relative min-w-0">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {icon}
                </div>

                <input
                    type="number"
                    min="0"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`block w-full rounded-2xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                        error
                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                            : "border-gray-200 focus:border-orange-500 focus:ring-orange-100"
                    }`}
                />
            </div>

            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
}