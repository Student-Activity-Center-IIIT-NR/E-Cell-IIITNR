import React from 'react';
import { TimelineConnector } from './TimelineConnector';

interface TimelineDateProps {
  date: string;
  direction: 'left' | 'right';
  className?: string;
}

export const TimelineDate: React.FC<TimelineDateProps> = ({
  date,
  direction,
  className = ""
}) => {
  return (
    <div className={`flex items-center ${direction === 'left' ? 'justify-end pr-8' : 'justify-start pl-8'} ${className}`}>
      <TimelineConnector direction={direction} />
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/40 rounded-lg px-6 py-4 shadow-xl group-hover:shadow-white/20 transition-all duration-500 ml-6">
        <span className="text-lg lg:text-xl font-bold tracking-wider text-white group-hover:text-gray-100 transition-colors duration-300">
          {date}
        </span>
      </div>
    </div>
  );
};