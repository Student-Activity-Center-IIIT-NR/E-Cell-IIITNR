import React from "react";
import { Link } from "react-router-dom";
import { ECellLogo } from "./Header";

export const ECellFooter: React.FC = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] text-white border-t border-white/10 font-poppins flex flex-col" style={{ minHeight: "340px" }}>

            {/* Main Footer Content — vertically centered */}
            <div className="flex-1 flex items-center justify-center max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-20 py-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Brand Column */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center gap-8">
                            <ECellLogo className="h-12 w-12 object-contain flex-shrink-0" />
                            <div>
                                <h2 className="text-lg font-bold text-white tracking-wide">E-Cell IIITNR</h2>
                                <p className="text-xs text-neutral-500 mt-0.5">IIIT Naya Raipur</p>
                            </div>
                        </div>

                        <p className="text-neutral-400 text-sm leading-7 max-w-sm">
                            Empowering the next generation of entrepreneurs through innovation, mentorship, and collaboration at IIIT Naya Raipur.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-1">
                            <a
                                href="https://www.instagram.com/ecell_iiitnr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-transparent transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://in.linkedin.com/company/e-cell-iiit-naya-raipur"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:ecell@iiitnr.edu.in"
                                aria-label="Email"
                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", to: "/" },
                                { label: "Our Team", to: "/team" },
                                { label: "Events", to: "/events" },
                                { label: "E-Summit", to: "/esummit" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-neutral-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-white transition-colors duration-200"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="md:col-span-4">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Programs</h4>
                        <ul className="space-y-4">
                            {[
                                "Startup Incubation",
                                "Workshops & Seminars",
                                "Mentorship Sessions",
                                "Networking Events",
                                "Innovation Challenges",
                            ].map((item) => (
                                <li key={item} className="text-neutral-400 text-sm flex items-center gap-2 group cursor-pointer hover:text-white transition-colors duration-200">
                                    <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-white transition-colors duration-200"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/8">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
                    <p>© 2026 E-Cell IIIT Naya Raipur. All rights reserved.</p>
                    <p>Designed & Developed with ❤️ by E-Cell IIITNR</p>
                </div>
            </div>

        </footer>
    );
};

export default ECellFooter;
