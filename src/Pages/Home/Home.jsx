"use client";

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Karantina } from "next/font/google";
import { ECellHeader } from "../../components/Header";
import { ECellFooter } from "../../components/Footer";
import TeamsHome from "../../components/TeamsHome";
import { Events } from "../../components/Events";
import { Gallery } from "../../components/Gallery";

// const karantina = Karantina({
//   variable: "--font-karantina",
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
// });

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white">
        <ECellHeader />

        {/* Hero Section */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="flex flex-col sm:flex-row items-end lg:col-span-12">
                <div className="flex flex-col sm:flex-row items-end">
                  <h1 className="font-karantina text-white text-[20vw] sm:text-[15rem] lg:text-[25rem] leading-none text-center sm:text-left">
                    E-CELL
                  </h1>
                  <span className="font-karantina mt-4 sm:mt-0 sm:ml-16 text-[12vw] sm:text-9xl lg:text-[10rem] tracking-widest mb-2 sm:mb-4 lg:mb-6 text-center sm:text-left">
                    IIITNR
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5" />
            </div>
            {/* Scroll Indicator */}
            <div className="flex justify-center  mb-3">
              <div className="text-center">
                <LazyLoadImage
                  src="/mouse.png"
                  alt="Scroll indicator"
                  width={108}
                  height={155}
                  className="mx-auto"
                  priority
                />
                <p className="text-white text-sm mb-10">Scroll Down</p>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8 relative">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-neutral-300">
                  DARE TO DREAM,
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-neutral-300">
                  VENTURE TO SUCCEED
                </h3>
                <p className="text-xl sm:text-xl md:text-xl text-neutral-300 leading-6">
                  Welcome to the Entrepreneur Cell of IIIT Naya Raipur, where
                  dreams take flight and ventures succeed. Join us in shaping
                  tomorrow's innovations!
                </p>
              </div>
              {/* Vertical white line separator for md and up */}
              <div
                className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/80 -translate-x-1/2"
                aria-hidden="true"
              ></div>
              <div className="text-xl sm:text-xl md:text-xl text-neutral-300 leading-6">
                <p className="mb-3">
                  E‑Cell IIIT Naya Raipur is a non‑profit student‑run
                  organization where we explore the evolving world of
                  entrepreneurship and startups. We host webinars, lectures,
                  podcasts and book summaries, ideation games and competitions.
                </p>
                <p>
                  Our mission is to help answer essential questions like: "How
                  does entrepreneurship affect day‑to‑day life?" and "How can I
                  transform a startup idea into a functional business model?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="py-16 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-[0.3em]">
                EVENTS
              </h2>
            </div>
            <Events />
          </div>
        </section>

        {/* TEAMS */}
        <section id="teams" className="py-16 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-extrabold tracking-[0.3em] mb-6">
                OUR TEAM
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Meet the passionate individuals driving innovation and
                entrepreneurship at IIIT Naya Raipur
              </p>
            </div>
            <TeamsHome />
            {/* Call to Action */}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-16 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[0.3em] text-center">
              GALLERY
            </h2>
            <Gallery />
          </div>
        </section>

        <ECellFooter />
      </main>
    </div>
  );
}
