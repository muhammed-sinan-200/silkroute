"use client";

export default function FreightInfoItem({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-3 rounded-2xl bg-white p-4 border border-gray-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                {icon}
            </div>

            <div>
                <p className="text-sm font-semibold text-gray-950">{title}</p>
                <p className="mt-1 text-sm text-gray-600">{text}</p>
            </div>
        </div>
    );
}