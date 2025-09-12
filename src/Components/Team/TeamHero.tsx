import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const TeamHero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16">
      <div className="w-full px-4 sm:px-6 md:px-8 flex flex-col items-center">
        <div className="max-w-6xl mx-auto w-full text-center">
          {/* Simplified Title */}
          <div className="relative mb-8 sm:mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.1em] text-white font-poppins">
              <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                TEAM
              </span>
            </h1>

            {/* Subtle Decorative Line */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Scroll Indicator - Desktop */}
          <div className="hidden sm:flex justify-center mb-6 sm:mb-8">
            <div className="text-center">
              <div className="relative">
                <LazyLoadImage
                  src="/mouse.png"
                  alt="Scroll indicator"
                  width={80}
                  height={120}
                  className="mx-auto opacity-70 w-16 h-auto sm:w-20"
                />
              </div>

            </div>
          </div>

          {/* Mobile Hint */}
          <div className="block sm:hidden mb-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-0.5 bg-white/20 rounded-full"></div>
              <p className="text-white text-sm font-poppins tracking-wide opacity-60">
                Scroll to explore
              </p>
              <div className="h-16"></div>

              <div className="w-6 h-0.5 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};