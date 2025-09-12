"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ events }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black text-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-white font-bold">
          Events Timeline
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-md">
          A quick look at our journey through amazing events.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {events.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-10 relative pt-12 md:pt-32"
          >
            {/* Left section (dot + title) */}
            <div className="sticky flex items-start md:items-center z-40 top-28 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="absolute left-4 md:left-3 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-700 border border-neutral-500" />
              </div>
              {/* Title (desktop) */}
              <h3 className="hidden md:block text-4xl font-bold text-neutral-400 pl-20">
                {item.title}
              </h3>
            </div>

            {/* Right section (content) */}
            <div className="relative pl-16 md:pl-4 w-full">
              {/* Title (mobile) */}
              <h3 className="block md:hidden text-2xl font-bold text-neutral-300 mb-3">
                {item.title}
              </h3>

              {/* Event Details */}
              <div className="bg-neutral-900/60 rounded-xl p-4 sm:p-6 border border-neutral-800 shadow-lg">
                <p className="text-sm text-purple-400 font-semibold mb-1">
                  {item.date}
                </p>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.subheading}
                </h4>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-4 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition">
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
