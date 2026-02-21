import React from 'react';

export const TeamCTA: React.FC = () => {
  return (
    <div className="text-center mt-16 sm:mt-20 md:mt-24">
      <div className="relative max-w-3xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sm:p-10 md:p-12 relative">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-poppins leading-tight">
                Ready to{" "}
                <span className="text-gray-300">
                  Join Us?
                </span>
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full mx-auto"></div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-poppins">
              Be part of something extraordinary. Connect with us and
              help shape the future of entrepreneurship at our
              university.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <button className="bg-white text-black px-6 py-3 rounded-xl font-poppins font-semibold transition-all duration-300 hover:bg-gray-100 min-w-[160px]">
                Get In Touch
              </button>

              <button className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-xl font-poppins font-semibold transition-all duration-300 hover:border-white/50 min-w-[160px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};