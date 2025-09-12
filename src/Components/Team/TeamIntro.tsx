import React from 'react';

export const TeamIntro: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-16 md:mb-20">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-poppins leading-tight">
            Meet the{" "}
            <span className="text-gray-300">
              Visionaries
            </span>
          </h2>
          <div className="h-2"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full mb-4"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-poppins">
            Behind every great movement are exceptional leaders who
            dare to dream, innovate, and inspire others to reach
            beyond their limits.
          </p>
          <div className="h-2"></div>

        </div>
      </div>

    </div >
  );
};