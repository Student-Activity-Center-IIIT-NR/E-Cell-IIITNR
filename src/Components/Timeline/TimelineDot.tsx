import React from 'react';

interface TimelineDotProps {
  isActive?: boolean;
  position: 'left' | 'center';
  className?: string;
}

export const TimelineDot: React.FC<TimelineDotProps> = ({ 
  isActive = false, 
  position,
  className = "" 
}) => {
  const positionStyles = {
    left: "left-5 transform -translate-x-1/2",
    center: "left-1/2 transform -translate-x-1/2"
  };

  return (
    <div
      className={`absolute w-4 h-4 md:w-6 md:h-6 bg-white rounded-full z-20 shadow-2xl shadow-white/60 border-4 border-black group-hover:scale-125 group-hover:shadow-white/80 transition-all duration-500 ease-out ${positionStyles[position]} ${className}`}
      style={{ top: "60px" }}
    >
      <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-70"></div>
      <div className="absolute inset-1 bg-gradient-to-br from-white/90 to-gray-200/80 rounded-full"></div>
    </div>
  );
};