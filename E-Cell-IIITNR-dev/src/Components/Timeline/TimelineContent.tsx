import React from 'react';

interface TimelineContentProps {
  title: string;
  subheading: string;
  description: string;
  buttonText: string;
  className?: string;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  title,
  subheading,
  description,
  buttonText,
  className = ""
}) => {
  return (
    <div className={`text-left space-y-8 ${className}`}>
      <div className="relative">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-wide text-white group-hover:text-gray-100 transition-colors duration-300 relative">
          {title}
          <div className="w-48 lg:w-56 h-1.5 bg-gradient-to-r from-white via-gray-300 to-transparent mt-3 group-hover:w-64 transition-all duration-700"></div>
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
        </h2>
      </div>
      
      <div className="space-y-8">
        <p className="text-white text-xl font-semibold tracking-wider opacity-90 group-hover:opacity-100 transition-opacity duration-300 relative">
          {subheading}
          <span className="absolute -right-4 top-0 w-1 h-6 bg-gradient-to-b from-white to-transparent opacity-60"></span>
        </p>
        
        <p className="text-gray-300 text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-w-lg relative">
          {description}
          <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </p>
        
        <button className="group/btn bg-white text-black px-10 py-5 text-sm font-bold tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden border-2 border-gray-300 hover:border-gray-400">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
          <span className="relative z-10 flex items-center gap-4">
            {buttonText}
            <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};