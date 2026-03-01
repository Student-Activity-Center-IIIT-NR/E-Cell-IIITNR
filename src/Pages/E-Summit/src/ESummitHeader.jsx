import React, { useState } from "react";

const navBtnStyle = {
    color: '#f8f3e8',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Yatra One', 'Rozha One', serif",
    fontSize: '16px',
    letterSpacing: '0.08em',
    padding: '4px 0',
    position: 'relative',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
};

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
        <header className="w-full sticky top-0 z-[9999]" style={{ backgroundColor: 'rgba(12,21,58,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(248,211,37,0.25)', boxShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
            <nav style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 40px', boxSizing: 'border-box' }}>
                {/* Desktop / Tablet */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px', width: '100%', position: 'relative', gap: 0 }} className="hidden md:flex">

                    {/* Left nav links */}
                    <div style={{ display: 'flex', gap: '32px', flex: 1, justifyContent: 'flex-end', paddingRight: '60px' }}>
                        <button onClick={() => handleDesktopSectionClick('#home')} style={{ color: '#f8f3e8', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Yatra One', 'Rozha One', serif", fontSize: '16px', letterSpacing: '0.08em', padding: '4px 0', position: 'relative', transition: 'color 0.2s' }} className="esummit-nav-btn">Home</button>
                        <button onClick={() => handleDesktopSectionClick('#schedule')} style={{ color: '#f8f3e8', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Yatra One', 'Rozha One', serif", fontSize: '16px', letterSpacing: '0.08em', padding: '4px 0', position: 'relative', transition: 'color 0.2s' }} className="esummit-nav-btn">Schedule</button>
                    </div>

                    {/* Centered Logo */}
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                        <ESummitLogo src={logoSrc} style={{ height: '64px', width: '64px', objectFit: 'contain' }} className="h-16 w-16" />
                    </div>

                    {/* Right nav links */}
                    <div style={{ display: 'flex', gap: '32px', flex: 1, justifyContent: 'flex-start', paddingLeft: '60px' }}>
                        <button onClick={() => handleDesktopSectionClick('#events')} style={{ color: '#f8f3e8', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Yatra One', 'Rozha One', serif", fontSize: '16px', letterSpacing: '0.08em', padding: '4px 0', position: 'relative', transition: 'color 0.2s' }} className="esummit-nav-btn">Events</button>
                        <button onClick={() => handleDesktopSectionClick('#gallery')} style={{ color: '#f8f3e8', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Yatra One', 'Rozha One', serif", fontSize: '16px', letterSpacing: '0.08em', padding: '4px 0', position: 'relative', transition: 'color 0.2s' }} className="esummit-nav-btn">Gallery</button>
                        <button onClick={() => handleDesktopSectionClick('#footer')} style={{ color: '#f8f3e8', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Yatra One', 'Rozha One', serif", fontSize: '16px', letterSpacing: '0.08em', padding: '4px 0', position: 'relative', transition: 'color 0.2s' }} className="esummit-nav-btn">Contact Us</button>
                    </div>
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
                <div className={`md:hidden fixed inset-0 z-[10001] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} style={{ backgroundColor: 'rgba(12,21,58,0.98)' }}>
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

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '40px' }}>
                        <ESummitLogo src={logoSrc} style={{ height: '60px', width: '60px', objectFit: 'contain', marginBottom: '16px' }} />
                        <button onClick={() => handleMobileSectionClick('#home')} style={{ ...navBtnStyle, fontSize: '26px', letterSpacing: '0.12em', color: '#f8f3e8' }}>Home</button>
                        <button onClick={() => handleMobileSectionClick('#schedule')} style={{ ...navBtnStyle, fontSize: '26px', letterSpacing: '0.12em', color: '#f8f3e8' }}>Schedule</button>
                        <button onClick={() => handleMobileSectionClick('#events')} style={{ ...navBtnStyle, fontSize: '26px', letterSpacing: '0.12em', color: '#f8f3e8' }}>Events</button>
                        <button onClick={() => handleMobileSectionClick('#gallery')} style={{ ...navBtnStyle, fontSize: '26px', letterSpacing: '0.12em', color: '#f8f3e8' }}>Gallery</button>
                        <button onClick={() => handleMobileSectionClick('#footer')} style={{ ...navBtnStyle, fontSize: '26px', letterSpacing: '0.12em', color: '#f8d325' }}>Contact Us</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
