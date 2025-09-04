import { ECellHeader } from "./Header";
import { ECellLogo } from "./Header";

/** Footer: matches the simple, blocky style with square placeholders */
export const ECellFooter: React.FC = () => {
    return (
        <footer className="w-full bg-black border-t border-neutral-900 text-white/90 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-10 md:grid-cols-3">
                <div className="flex items-center gap-3">
                    <ECellLogo className="h-10 w-10" />
                    <span className="text-sm tracking-[0.2em] text-neutral-400 uppercase">
                        E‑Cell IIIT Naya Raipur
                    </span>
                </div>

                <div>
                    <h3 className="font-semibold tracking-wide">EVENTS</h3>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                        <li>E‑Summit</li>
                        <li>Hackathon</li>
                        <li>Workshop</li>
                        <li>Pitchathon</li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold tracking-wide">ABOUT US</h3>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                            <li>Teams</li>
                            <li>Committee</li>
                            <li>College</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wide">SOCIAL</h3>
                        <div className="mt-3 flex gap-2">
                            <ECellLogo className="h-5 w-5" />
                            <ECellLogo className="h-5 w-5" />
                            <ECellLogo className="h-5 w-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-neutral-500 pb-8">
                © {new Date().getFullYear()} E‑Cell IIIT Naya Raipur
            </div>
        </footer>
    );
};

/** Example page wrapper to preview header & footer */
export default function ExamplePage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <ECellHeader />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
                <div className="border border-neutral-800 rounded-lg p-10 text-neutral-300">
                    <p className="text-lg">Main content goes here.</p>
                    <p className="mt-2 text-sm">Header and footer match the provided reference. Logo areas are square placeholders (no SVG).</p>
                </div>
            </section>

            <ECellFooter />
        </main>
    );
}
