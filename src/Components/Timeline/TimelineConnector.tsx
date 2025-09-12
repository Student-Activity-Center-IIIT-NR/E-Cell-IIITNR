import React from 'react';

interface TimelineConnectorProps {
  direction: 'left' | 'right';
  className?: string;
}

export const TimelineConnector: React.FC<TimelineConnectorProps> = ({ 
  direction, 
  className = "" 
}) => {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {direction === 'right' && (
        <>
          <div
            className="w-24 lg:w-32 h-0.5 opacity-70 group-hover:opacity-100 transition-all duration-500"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, white 0, white 8px, transparent 8px, transparent 16px)",
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))",
            }}
          ></div>
          
          <div className="relative p-4 bg-gray-800/50 rounded-full border border-gray-600/60 shadow-2xl group-hover:shadow-white/30 transition-all duration-500 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </>
      )}
      
      {direction === 'left' && (
        <>
          <div className="relative p-4 bg-gray-800/50 rounded-full border border-gray-600/60 shadow-2xl group-hover:shadow-white/30 transition-all duration-500 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          
          <div
            className="w-24 lg:w-32 h-0.5 opacity-70 group-hover:opacity-100 transition-all duration-500"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, white 0, white 8px, transparent 8px, transparent 16px)",
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))",
            }}
          ></div>
        </>
      )}
    </div>
  );
};