import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/**
 * Drop this file anywhere (e.g., app/components/ECELLChrome.tsx or pages/_app wrappers).
 * TailwindCSS expected. No SVGs/vectors are used — only simple div placeholders.
 */

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
    to,
    children,
    onClick,
    className = '',
}) => (
    <Link
        to={to}
        className={`text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap ${className}`}
        onClick={onClick}
    >
        {children}
    </Link>
);

interface LogoProps {
    className?: string;
    title?: string;
}

export const ECellLogo: React.FC<LogoProps> = ({
    className = '',
    title = 'E-Cell Logo',
}) => (
    <img
        src="/EcellLogo3D.png"
        alt={title}
        width={72}
        height={72}
        className={className}
        loading="eager" // similar to priority
    />
);
/** Header: 7-column grid to mimic the reference screenshot layout */
export const ECellHeader: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="w-full bg-black sticky top-0 z-[9999]">
            <nav className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                {/* Desktop / Tablet */}
                <div className="hidden md:grid grid-cols-7 items-center h-24 justify-items-center w-full">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/team">Team</NavLink>
                    <NavLink to="/#about">About Us</NavLink>

                    <div className="flex items-center justify-center">
                        <ECellLogo className="h-20 w-20" />
                    </div>
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/esummit">E‑Summit</NavLink>
                    <NavLink to="/#contact">Contact Us</NavLink>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-end h-20 w-full">
                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="p-4 mr-4 text-white hover:text-white/80 transition-all duration-300"
                        aria-label="Toggle mobile menu"
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                            <span className={`block w-7 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-7 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                            <span className={`block w-7 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`md:hidden fixed inset-0 bg-black/95 z-[10001] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {/* Close button in top-right corner */}
                    <button
                        onClick={closeMobileMenu}
                        className="absolute top-4 right-4 p-4 text-white hover:text-white/80 transition-all duration-300"
                        aria-label="Close mobile menu"
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center">
                            <span className="block w-7 h-0.5 bg-current rotate-45"></span>
                            <span className="block w-7 h-0.5 bg-current -rotate-45 absolute"></span>
                        </div>
                    </button>

                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <NavLink to="/" onClick={closeMobileMenu} className="text-2xl font-bold">
                            Home
                        </NavLink>
                        <NavLink to="/teams" onClick={closeMobileMenu} className="text-2xl font-bold">
                            Team
                        </NavLink>
                        <NavLink to="/#about" onClick={closeMobileMenu} className="text-2xl font-bold">
                            About Us
                        </NavLink>
                        <NavLink to="/events" onClick={closeMobileMenu} className="text-2xl font-bold">
                            Events
                        </NavLink>
                        <NavLink to="/#e-summit" onClick={closeMobileMenu} className="text-2xl font-bold">
                            E‑Summit
                        </NavLink>
                        <NavLink to="/#contact" onClick={closeMobileMenu} className="text-2xl font-bold">
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};