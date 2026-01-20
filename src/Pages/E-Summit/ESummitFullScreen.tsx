import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import esummitBg from "../../assets/E-Summit/2026/ecell-website.png";
import esummitBgSmall from "../../assets/E-Summit/2026/ecell-website-small.png";

// Main full-screen E-Summit component
const ESummitFullScreen: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Handle window resize for responsive image
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            // Re-enable scrolling on unmount
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Home button in top center */}
            <Link
                to="/"
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10000,
                    padding: '0.75rem 2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#1A1A1A',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    fontWeight: '700',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF6B35';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.color = '#1A1A1A';
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                }}
            >
                Home
            </Link>

            {/* Full screen image */}
            <img
                src={isSmallScreen ? esummitBgSmall : esummitBg}
                alt="E-Summit Background"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
        </div>
    );
};

export default ESummitFullScreen;
