import { ECellHeader } from "./Header";
import { ECellLogo } from "./Header";

/** Footer: Beautiful and modern footer with reduced whitespace */
export const ECellFooter: React.FC = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-black to-neutral-900 text-white/90 mt-16 border-t border-neutral-800">
            {/* Main footer content */}
            <div className="h-20"></div>
            <div className="w-full py-16">
                <div className="w-full px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                        <div className=""></div>
                        {/* Logo and description */}
                        <div className="text-center lg:text-left lg:col-span-1">
                            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">

                                <ECellLogo className="h-12 w-12" />
                                <span className="text-2xl font-bold tracking-wide text-white">
                                    E-Cell IIITNR
                                </span>
                            </div>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                Empowering the next generation of entrepreneurs through innovation, mentorship, and collaboration.
                            </p>
                            {/* Follow us section */}
                            <div>
                                <h4 className="text-white font-semibold mb-4 text-lg h-10">Follow Us</h4>
                                <div className="flex items-center gap-6 justify-center lg:justify-start">
                                    <a href="https://www.instagram.com/ecell_iiitnr/" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group">
                                        <svg className="w-5 h-5 text-neutral-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>

                                    {/* Contact Information */}
                                    <div className="text-center lg:text-left">
                                        <p className="text-neutral-400 text-sm mb-1">ecell@iiitnr.edu.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
                            <ul className="space-y-3 text-sm text-neutral-400">
                                <li><a href="#home" className="hover:text-white transition-colors cursor-pointer">Home</a></li>
                                <li><a href="#events" className="hover:text-white transition-colors cursor-pointer">Events</a></li>
                                <li><a href="#teams" className="hover:text-white transition-colors cursor-pointer">Our Team</a></li>
                                <li><a href="#gallery" className="hover:text-white transition-colors cursor-pointer">Gallery</a></li>
                                <li><a href="/esummit" className="hover:text-white transition-colors cursor-pointer">E-Summit</a></li>
                            </ul>
                        </div>

                        {/* Programs */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-white font-semibold mb-4 text-lg">Programs</h3>
                            <ul className="space-y-3 text-sm text-neutral-400">
                                <li className="hover:text-white transition-colors cursor-pointer">Startup Incubation</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Workshops</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Mentorship</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Networking Events</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Innovation Challenges</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="h-24"></div>
        </footer >
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
