import React from "react";
import { TimelineItem } from "./TimelineItem";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  subheading: string;
  description: string;
  buttonText: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  events,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full py-8 sm:py-12 md:py-16 lg:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="relative">
          {/* Enhanced Central Timeline Line - Desktop & Tablet */}
          <div
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent shadow-2xl shadow-white/30 hidden md:block"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "0",
              bottom: "0",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 80%, transparent 100%)",
            }}
          >
            {/* Animated pulse effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse"></div>
          </div>

          {/* Mobile Timeline Line - Left aligned for mobile */}
          <div
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent shadow-2xl shadow-white/30 block md:hidden"
            style={{
              left: "16px", // Adjusted for better mobile positioning
              top: "0",
              bottom: "0",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 80%, transparent 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse"></div>
          </div>

          {/* Timeline Items Container */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
            {events.map((event, index) => (
              <TimelineItem
                key={event.id}
                {...event}
                layout={index % 2 === 0 ? "left" : "right"}
                isLast={index === events.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
