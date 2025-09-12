import React from 'react';
import { TimelineDot } from './TimelineDot';
import { TimelineContent } from './TimelineContent';
import { TimelineDate } from './TimelineDate';

interface TimelineItemProps {
  id: number;
  title: string;
  date: string;
  subheading: string;
  description: string;
  buttonText: string;
  layout: 'left' | 'right';
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  id,
  title,
  date,
  subheading,
  description,
  buttonText,
  layout,
  isLast = false
}) => {
  return (
    <div className={`relative ${isLast ? 'mb-20' : 'mb-20 md:mb-32 lg:mb-40'} group`}>
      {/* Timeline Dots */}
      <TimelineDot position="left" className="md:hidden" />
      <TimelineDot position="center" className="hidden md:block" />

      {/* Mobile Layout - Enhanced Responsiveness */}
      <div className="md:hidden pt-12 sm:pt-16 px-4 sm:pl-12">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-wide text-white relative leading-tight">
              {title}
              <div className="w-24 xs:w-28 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-white via-gray-300 to-transparent mt-2"></div>
              <div className="absolute -top-1 -left-1 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-white text-base sm:text-lg font-semibold tracking-wider opacity-90 mb-3 sm:mb-4">
                {subheading}
              </p>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed opacity-80 mb-6 sm:mb-8 max-w-full sm:max-w-md pr-2">
                {description}
              </p>
              
              <button className="group/btn bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden border-2 border-gray-300 w-full xs:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center xs:justify-start gap-2 sm:gap-3">
                  {buttonText}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-gray-700/30 mt-6 sm:mt-8">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white sm:w-6 sm:h-6"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-sm sm:text-base font-bold tracking-wider text-white">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet and Desktop Layout */}
      <div className="hidden md:block" style={{ paddingTop: "60px" }}>
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          {layout === 'left' ? (
            <>
              {/* Content Section - Left Side */}
              <div className="col-span-5 pr-4 md:pr-6 lg:pr-8">
                <TimelineContent
                  title={title}
                  subheading={subheading}
                  description={description}
                  buttonText={buttonText}
                />
              </div>
              
              {/* Spacer */}
              <div className="col-span-2"></div>
              
              {/* Date Section - Right Side */}
              <div className="col-span-5 pl-2 md:pl-4 lg:pl-0">
                <TimelineDate date={date} direction="right" />
              </div>
            </>
          ) : (
            <>
              {/* Date Section - Left Side */}
              <div className="col-span-5 pr-2 md:pr-4 lg:pr-0">
                <TimelineDate date={date} direction="left" />
              </div>
              
              {/* Spacer */}
              <div className="col-span-2"></div>
              
              {/* Content Section - Right Side */}
              <div className="col-span-5 pl-4 md:pl-6 lg:pl-8">
                <TimelineContent
                  title={title}
                  subheading={subheading}
                  description={description}
                  buttonText={buttonText}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};