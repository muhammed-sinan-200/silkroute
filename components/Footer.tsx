export default function Footer() {
    return (
        <footer className="border-t border-orange-100 bg-white px-4 py-6 text-center sm:px-6">
            <p className="text-sm text-slate-500">
                © 2026{" "}
                <span className="font-semibold text-slate-800">
                    Silk<span className="text-orange-500">Route</span>
                </span>
                . All rights reserved.
            </p>

            <p className="mt-1 text-xs text-slate-400">
                Crafted by <span className="font-medium text-slate-600">Sinan</span>
            </p>
        </footer>
    );
}