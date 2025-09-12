import React from "react";
import { Hexagon, CircleFadingArrowUp, Badge } from "lucide-react";

interface MobileEventCardProps {
  id: number;
  title: string;
  date: string;
  subheading: string;
  description: string;
  buttonText: string;
  index: number;
  isLast?: boolean;
}

export const MobileEventCard: React.FC<MobileEventCardProps> = ({
  id,
  title,
  date,
  subheading,
  description,
  buttonText,
  index,
  isLast = false,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative mb-12 transform transition-all duration-700 hover:scale-[1.02] ${
        isEven ? "animate-fade-in-left" : "animate-fade-in-right"
      }`}
      style={{
        animationDelay: `${index * 200}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Animated Hexagons */}
        <div
          className={`absolute ${
            isEven ? "top-6 right-6" : "top-6 left-6"
          } opacity-10`}
        >
          <Hexagon
            size={24}
            className="text-white animate-spin-slow"
            style={{ animationDuration: "8s" }}
          />
        </div>

        {/* Pulse Wave */}
        <div
          className={`absolute ${
            isEven ? "bottom-8 left-8" : "bottom-8 right-8"
          } opacity-15`}
        >
          <CircleFadingArrowUp
            size={20}
            className="text-gray-300 animate-pulse"
          />
        </div>

        {/* Gradient Orb */}
        <div
          className={`absolute ${
            isEven ? "top-1/2 left-4" : "top-1/2 right-4"
          } opacity-20`}
        >
          <Badge
            size={16}
            className="text-gray-400 animate-bounce"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </div>

      {/* Main Card Container */}
      <div className="relative group">
        {/* Glassmorphism Card */}
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:border-white/40">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

          {/* Content Container */}
          <div className="relative z-10">
            {/* Header Section with Creative Layout */}
            <div
              className={`flex ${
                isEven ? "flex-row" : "flex-row-reverse"
              } items-start justify-between mb-8`}
            >
              {/* Event Number Badge */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg">
                  <span className="text-white text-lg font-bold font-poppins">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                {/* Floating Dot */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/40 rounded-full animate-ping"></div>
              </div>

              {/* Title Section */}
              <div
                className={`flex-1 ${
                  isEven ? "ml-6 text-left" : "mr-6 text-right"
                }`}
              >
                <h3 className="text-xl font-bold text-white font-poppins mb-3 tracking-wide">
                  {title}
                </h3>
                <div
                  className={`h-0.5 bg-gradient-to-r ${
                    isEven
                      ? "from-white to-transparent"
                      : "from-transparent to-white"
                  } w-20 ${isEven ? "" : "ml-auto"} mb-4`}
                ></div>
                <p className="text-sm text-gray-300 font-medium">{date}</p>
              </div>
            </div>

            {/* Subheading with Creative Styling */}
            <div className="mb-6">
              <div
                className={`inline-block px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 rounded-full border border-white/25 backdrop-blur-sm ${
                  isEven ? "" : "float-right"
                }`}
              >
                <p className="text-sm text-white font-semibold font-poppins tracking-wider">
                  {subheading}
                </p>
              </div>
              <div className="clear-both"></div>
            </div>

            {/* Description with Enhanced Typography */}
            <div className="mb-8">
              <p className="text-sm text-gray-300 leading-relaxed font-poppins opacity-90 px-2">
                {description}
              </p>
            </div>

            {/* Interactive Button with Micro-animations */}
            <div
              className={`flex ${
                isEven ? "justify-start" : "justify-end"
              } mt-6`}
            >
              <button className="group/btn relative overflow-hidden bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white text-sm font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm shadow-lg hover:shadow-white/20 transform hover:scale-105">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>

                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-3">
                  {buttonText}
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Corner Accents */}
            <div
              className={`absolute ${
                isEven ? "top-0 right-0" : "top-0 left-0"
              } w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-2xl transform ${
                isEven ? "rotate-45" : "-rotate-45"
              } opacity-30`}
            ></div>
            <div
              className={`absolute ${
                isEven ? "bottom-0 left-0" : "bottom-0 right-0"
              } w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl transform ${
                isEven ? "-rotate-45" : "rotate-45"
              } opacity-20`}
            ></div>
          </div>
        </div>

        {/* Connection Line to Next Card */}
        {!isLast && (
          <div
            className={`absolute ${
              isEven ? "right-8" : "left-8"
            } bottom-0 transform translate-y-full`}
          >
            <div className="w-0.5 h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
            <div
              className={`absolute top-6 ${
                isEven ? "-right-1" : "-left-1"
              } w-3 h-3 bg-white/60 rounded-full animate-pulse`}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
