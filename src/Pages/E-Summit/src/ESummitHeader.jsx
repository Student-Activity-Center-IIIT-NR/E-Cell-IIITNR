import React, { useState } from "react";

export const ESummitLogo = ({
    src,
    className = '',
    title = 'E-Summit Logo',
}) => (
    <img
        src={src}
        alt={title}
        className={className}
        loading="eager"
        style={{ objectFit: 'contain' }}
    />
);

export const ESummitHeader = ({ logoSrc }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleDesktopSectionClick = (sectionId) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            const headerHeight = 96;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleMobileSectionClick = (sectionId) => {
        closeMobileMenu();
        setTimeout(() => {
            const element = document.getElementById(sectionId.replace('#', ''));
            if (element) {
                const headerHeight = 96;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <header className="w-full sticky top-0 z-[9999]" style={{ backgroundColor: '#000000' }}>
            <nav className="w-full max-w-full px-8 md:px-24">
                {/* Desktop / Tablet */}
                <div className="hidden md:flex items-center justify-between h-24 w-full relative">

                    <div className="flex gap-8 lg:gap-12">
                        <button onClick={() => handleDesktopSectionClick('#home')} className="text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap cursor-pointer text-lg">Home</button>
                        <button onClick={() => handleDesktopSectionClick('#schedule')} className="text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap cursor-pointer text-lg">Schedule</button>
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                        <div className="pointer-events-auto">
                            <ESummitLogo src={logoSrc} className="h-20 w-20" />
                        </div>
                    </div>

                    <div className="flex gap-8 lg:gap-12">
                        <button onClick={() => handleDesktopSectionClick('#events')} className="text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap cursor-pointer text-lg">Events</button>
                        <button onClick={() => handleDesktopSectionClick('#gallery')} className="text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap cursor-pointer text-lg">Gallery</button>
                        <button onClick={() => handleDesktopSectionClick('#footer')} className="text-white/95 hover:text-white transition font-semibold tracking-tight whitespace-nowrap cursor-pointer text-lg">Contact Us</button>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="md:flex hidden items-center justify-between h-20 w-full md:!hidden">
                    {/* Handled by tailwind correctly: flex on sm, hidden on md */}
                </div>

                <div className="md:hidden flex items-center justify-between h-20 w-full">
                    {/* Mobile Logo */}
                    <div className="flex items-center ml-4">
                        <ESummitLogo src={logoSrc} className="h-12 w-12" />
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="p-4 mr-4 text-white hover:text-white/80 transition-all duration-300 bg-transparent border-none"
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
                <div className={`md:hidden fixed inset-0 z-[10001] bg-black/95 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {/* Close button in top-right corner */}
                    <button
                        onClick={closeMobileMenu}
                        className="absolute top-4 right-4 p-4 text-white hover:text-white/80 transition-all duration-300 bg-transparent border-none"
                        aria-label="Close mobile menu"
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center">
                            <span className="block w-7 h-0.5 bg-current rotate-45 absolute"></span>
                            <span className="block w-7 h-0.5 bg-current -rotate-45 absolute"></span>
                        </div>
                    </button>

                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <button onClick={() => handleMobileSectionClick('#home')} className="text-2xl font-bold text-white transition hover:text-white/80 bg-transparent border-none cursor-pointer">
                            Home
                        </button>
                        <button onClick={() => handleMobileSectionClick('#schedule')} className="text-2xl font-bold text-white transition hover:text-white/80 bg-transparent border-none cursor-pointer">
                            Schedule
                        </button>
                        <button onClick={() => handleMobileSectionClick('#events')} className="text-2xl font-bold text-white transition hover:text-white/80 bg-transparent border-none cursor-pointer">
                            Events
                        </button>
                        <button onClick={() => handleMobileSectionClick('#gallery')} className="text-2xl font-bold text-white transition hover:text-white/80 bg-transparent border-none cursor-pointer">
                            Gallery
                        </button>
                        <button onClick={() => handleMobileSectionClick('#footer')} className="text-2xl font-bold text-white transition hover:text-white/80 bg-transparent border-none cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
