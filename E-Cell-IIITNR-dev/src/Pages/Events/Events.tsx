"use client";
import { ECellHeader } from "../../components/Header";
import { ECellFooter } from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Timeline } from "../../Components/Timeline/Timeline";
import { MobileEventsTimeline } from "../../Components/Events/MobileEventsTimeline";

export default function Events() {
  const timelineEvents = [
    {
      id: 1,
      title: "E-SUMMIT",
      date: "Feb 2026",
      subheading: "E-Summit",
      description:
        "E-Summit is our flagship event where the captivating magic of Hogwarts meets the ingenuity of entrepreneurship. It aims to foster entrepreneurial spirits with its magical and innovative activities, inspiring individuals to transform innovative ideas into successful ventures.",
      buttonText: "READ MORE",
    },
    {
      id: 2,
      title: "DISRUPT",
      date: "Nov 2025",
      subheading: "Disrupt",
      description:
        "Disrupt is a platform where you compete in teams to debate and defend your ideas while challenging others' perspectives in an intellectual battle of wits",
      buttonText: "READ MORE",
    },
    {
      id: 3,
      title: "Pitch Perfect",
      date: "To be Announced",
      subheading: "Pitch Perfect",
      description:
        "Pitch Perfect is a platform where you compete in teams to pitch your ideas and sell the products that are given to you on spot",
      buttonText: "READ MORE",
    },
    {
      id: 4,
      title: "To be Announced",
      date: "To be Announced",
      subheading: "To be Announced",
      description:
        "To be Announced",
      buttonText: "READ MORE",
    },
  ];

  return (
    <div className="w-full min-h-screen font-poppins">
      <main className="bg-black text-white selection:bg-neutral-800 selection:text-white w-full relative min-h-screen overflow-hidden">
        {/* Enhanced Background Elements */}
        <div
          className="absolute inset-0 w-full h-full opacity-70 sm:opacity-80 md:opacity-90 pointer-events-none z-0"
          style={{
            backgroundImage: `url('/background-pattern.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
            filter: "brightness(3) contrast(1.5)",
          }}
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/60 pointer-events-none z-1"></div>

        {/* Enhanced Hexagonal Elements - Responsive */}
        <div className="absolute inset-0 pointer-events-none z-5">
          {/* Mobile Hexagonal Elements */}
          <div className="block sm:hidden">
            <div className="absolute top-16 right-4 opacity-20">
              <div className="w-8 h-8 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
            <div className="absolute top-32 right-8 opacity-15">
              <div className="w-6 h-6 bg-gray-500 transform rotate-45 shadow-lg shadow-white/10"></div>
            </div>
            <div className="absolute bottom-20 left-4 opacity-20">
              <div className="w-10 h-10 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
          </div>

          {/* Tablet Hexagonal Elements */}
          <div className="hidden sm:block md:hidden">
            <div className="absolute top-20 right-8 opacity-25">
              <div className="w-12 h-12 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
            <div className="absolute top-36 right-16 opacity-20">
              <div className="w-10 h-10 bg-gray-500 transform rotate-45 shadow-lg shadow-white/10"></div>
            </div>
            <div className="absolute bottom-24 left-8 opacity-25">
              <div className="w-14 h-14 bg-gray-600 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
          </div>

          {/* Desktop Hexagonal Elements */}
          <div className="hidden md:block">
            <div className="absolute top-20 right-10 opacity-30">
              <div className="w-16 h-16 bg-gray-600 transform rotate-45 shadow-2xl shadow-white/10"></div>
            </div>
            <div className="absolute top-32 right-24 opacity-25">
              <div className="w-12 h-12 bg-gray-500 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
            <div className="absolute top-44 right-16 opacity-20">
              <div className="w-20 h-20 bg-gray-700 transform rotate-45 shadow-2xl shadow-white/10"></div>
            </div>
            <div className="absolute bottom-32 left-10 opacity-30">
              <div className="w-14 h-14 bg-gray-600 transform rotate-45 shadow-2xl shadow-white/10"></div>
            </div>
            <div className="absolute bottom-20 left-24 opacity-25">
              <div className="w-18 h-18 bg-gray-500 transform rotate-45 shadow-xl shadow-white/10"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <ECellHeader />

          {/* Enhanced Header Section - Mobile Responsive */}
          <section className="relative w-full flex flex-col items-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
            <div className="w-full px-4 sm:px-6 md:px-8 flex flex-col items-center">
              <div className="max-w-6xl mx-auto w-full text-center">
                {/* Responsive Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] text-white font-poppins mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl">
                  <span className="bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    EVENTS
                  </span>
                </h1>

                {/* Scroll Indicator - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:flex justify-center mb-6 sm:mb-8">
                  <div className="text-center">
                    <div className="relative">
                      <LazyLoadImage
                        src="/mouse.png"
                        alt="Scroll indicator"
                        width={108}
                        height={155}
                        className="mx-auto drop-shadow-lg w-16 h-auto sm:w-20 md:w-24 lg:w-28"
                      />
                    </div>
                    <p className="text-white text-xs sm:text-sm mt-3 sm:mt-4 font-poppins tracking-widest opacity-80">
                      Scroll Down
                    </p>
                  </div>
                </div>

                {/* Mobile Scroll Hint */}
                <div className="block sm:hidden mb-4">
                  <p className="text-white text-sm font-poppins tracking-wider opacity-70 animate-pulse">
                    Swipe up to explore
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Events Content Section */}
          <section className="relative w-full pb-12 sm:pb-16 md:pb-20">
            <div className="max-w-7xl mx-auto">
              {/* Creative Mobile Events Layout (sm and below) */}
              <div className="block sm:hidden">
                <MobileEventsTimeline events={timelineEvents} />
              </div>

              {/* Desktop/Tablet Timeline Layout (sm and above) */}
              <div className="hidden sm:block px-4 sm:px-6 md:px-8">
                <Timeline events={timelineEvents} />
              </div>
            </div>
          </section>
          <div className="h-16"></div>
          <ECellFooter />
        </div>
      </main>
    </div>
  );
}