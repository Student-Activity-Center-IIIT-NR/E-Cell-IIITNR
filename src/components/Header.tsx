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
        <header className="w-full bg-black sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Desktop / Tablet */}
                <div className="hidden md:grid grid-cols-7 items-center h-24">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/teams">Team</NavLink>
                    <NavLink to="/#about">About Us</NavLink>

                    <div className="flex items-center justify-center">
                        <ECellLogo className="h-20 w-20" />
                    </div>

                    <div className="flex items-center justify-end">
                        <NavLink to="/events">Events</NavLink>
                    </div>
                    <div className="flex items-center justify-end">
                        <NavLink to="/#e-summit">E‑Summit</NavLink>
                    </div>
                    <div className="flex items-center justify-end">
                        <NavLink to="/#contact">Contact Us</NavLink>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between h-20">
                    <ECellLogo className="h-16 w-16 shrink-0" />

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 text-white hover:text-neutral-300 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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