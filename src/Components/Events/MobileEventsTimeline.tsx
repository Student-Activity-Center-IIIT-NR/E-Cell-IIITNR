import React from "react";
import { MobileEventCard } from "./MobileEventCard";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  subheading: string;
  description: string;
  buttonText: string;
}

interface MobileEventsTimelineProps {
  events: TimelineEvent[];
}

export const MobileEventsTimeline: React.FC<MobileEventsTimelineProps> = ({
  events,
}) => {
  return (
    <div className="relative w-full px-6 py-12">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "grid-move 20s linear infinite",
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-4 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-32 left-8 w-40 h-40 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-2xl animate-float-slow"></div>
      </div>

      {/* Main Timeline Container */}
      <div className="relative z-10 max-w-sm mx-auto">
        {/* Timeline Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-white/20 to-white/10 rounded-full border border-white/30 backdrop-blur-sm mb-6">
            <p className="text-white text-sm font-semibold font-poppins tracking-widest">
              TIMELINE
            </p>
          </div>
          <div className="w-1 h-10 bg-gradient-to-b from-white/60 to-transparent mx-auto"></div>
        </div>

        {/* Events List */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <MobileEventCard
              key={event.id}
              {...event}
              index={index}
              isLast={index === events.length - 1}
            />
          ))}
        </div>

        {/* Timeline Footer */}
        <div className="text-center mt-12 pt-8">
          <div className="w-1 h-10 bg-gradient-to-t from-white/60 to-transparent mx-auto mb-6"></div>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
            <p className="text-white/70 text-xs font-medium font-poppins tracking-wider">
              MORE EVENTS COMING SOON
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
