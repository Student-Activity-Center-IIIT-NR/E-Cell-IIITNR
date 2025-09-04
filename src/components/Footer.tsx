import { ECellHeader } from "./Header";
import { ECellLogo } from "./Header";

/** Footer: matches the reference design with centered multi-column layout */
export const ECellFooter: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white/90 mt-24" style={{ alignSelf: 'stretch' }}>
            {/* Main footer content */}
            <div className="w-full flex justify-center py-16">
                <div className="w-full max-w-5xl px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo and description */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                                <ECellLogo className="h-8 w-8" />
                                <span className="text-lg font-semibold tracking-wide">
                                    E-Cell
                                </span>
                            </div>
                            <div className="h-9"></div>
                            {/* Follow us section */}
                            <div className="mt-8">
                                <h4 className="text-white font-medium mb-4">Follow us</h4>
                                <div className="flex gap-3 justify-center lg:justify-start">
                                    <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer">
                                        <ECellLogo className="h-5 w-5" />
                                    </div>
                                    <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer">
                                        <ECellLogo className="h-5 w-5" />
                                    </div>
                                    <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer">
                                        <ECellLogo className="h-5 w-5" />
                                    </div>
                                    <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer">
                                        <ECellLogo className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product column */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-white font-medium mb-4">Product</h3>
                            <ul className="space-y-3 text-sm text-neutral-400">
                                <li className="hover:text-white transition-colors cursor-pointer">E-Summit</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Startup Incubation</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Workshops</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Mentorship</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Networking</li>
                            </ul>
                        </div>

                        {/* Use Cases column */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-white font-medium mb-4">Use Cases</h3>
                            <ul className="space-y-3 text-sm text-neutral-400">
                                <li className="hover:text-white transition-colors cursor-pointer">Entrepreneurs</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Students</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Startups</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Innovators</li>
                            </ul>
                        </div>

                        {/* Company column */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-white font-medium mb-4">Company</h3>
                            <ul className="space-y-3 text-sm text-neutral-400">
                                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Team</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Events</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Gallery</li>
                                <li className="hover:text-white transition-colors cursor-pointer">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-16"></div>
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
