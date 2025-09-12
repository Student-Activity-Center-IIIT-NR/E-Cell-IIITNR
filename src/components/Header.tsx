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
    style?: React.CSSProperties;
}

export const NavLink: React.FC<NavLinkProps> = ({
    to,
    children,
    onClick,
    className = '',
    style,
}) => (
    <Link
        to={to}
        className={`text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap text-center ${className}`}
        onClick={onClick}
        style={style}
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

    const handleSectionClick = (sectionId: string) => {
        closeMobileMenu();
        // Small delay to ensure menu closes before scrolling
        setTimeout(() => {
            const element = document.getElementById(sectionId.replace('#', ''));
            if (element) {
                const headerHeight = 96; // Approximate header height (h-24 = 96px)
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const handleDesktopSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            const headerHeight = 96; // Approximate header height (h-24 = 96px)
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="w-full sticky top-0 z-[9999]" style={{ width: '100%', position: 'sticky', margin: 0, padding: 0, backgroundColor: '#000000' }}>
            <nav style={{ width: '100%', maxWidth: '100%', padding: '0 clamp(2rem, 5vw, 6rem)', margin: 0, boxSizing: 'border-box' }}>
                {/* Desktop / Tablet */}
                <div className="hidden md:grid grid-cols-7 items-center h-24 w-full place-items-center" style={{ placeItems: 'center', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', width: '100%', maxWidth: '100%', minWidth: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <NavLink to="/" style={{ textAlign: 'center' }}>Home</NavLink>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <NavLink to="/team" style={{ textAlign: 'center' }}>Team</NavLink>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <NavLink to="/events" style={{ textAlign: 'center' }}>Events</NavLink>
                    </div>

                    <div className="flex items-center justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ECellLogo className="h-20 w-20" />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <button onClick={() => handleDesktopSectionClick('#gallery')} className="text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap cursor-pointer" style={{ textAlign: 'center' }}>Gallery</button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <NavLink to="/esummit" style={{ textAlign: 'center' }}>E‑Summit</NavLink>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <button onClick={() => handleDesktopSectionClick('#footer')} className="text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap cursor-pointer" style={{ textAlign: 'center' }}>Contact Us</button>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between h-20 w-full">
                    {/* Mobile Logo */}
                    <div className="flex items-center ml-4">
                        <ECellLogo className="h-12 w-12" />
                    </div>

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
                        <button onClick={() => handleSectionClick('#home')} className="text-2xl font-bold text-white/95 hover:text-white transition cursor-pointer">
                            Home
                        </button>
                        <NavLink to="/team" onClick={closeMobileMenu} className="text-2xl font-bold">
                            Team
                        </NavLink>
                        <button onClick={() => handleSectionClick('#events')} className="text-2xl font-bold text-white/95 hover:text-white transition cursor-pointer">
                            Events
                        </button>
                        <button onClick={() => handleSectionClick('#teams')} className="text-2xl font-bold text-white/95 hover:text-white transition cursor-pointer">
                            Our Team
                        </button>
                        <button onClick={() => handleSectionClick('#gallery')} className="text-2xl font-bold text-white/95 hover:text-white transition cursor-pointer">
                            Gallery
                        </button>
                        <NavLink to="/esummit" onClick={closeMobileMenu} className="text-2xl font-bold">
                            E‑Summit
                        </NavLink>
                        <button onClick={() => handleSectionClick('#footer')} className="text-2xl font-bold text-white/95 hover:text-white transition cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};