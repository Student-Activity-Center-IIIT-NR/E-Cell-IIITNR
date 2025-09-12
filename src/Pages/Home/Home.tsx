"use client";

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ECellHeader } from "../../components/Header";
import { ECellFooter } from "../../components/Footer";
import TeamsHome from "../../components/TeamsHome";
import { Events } from "../../components/Events";
import Gallery from "../../components/Gallery";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-poppins">
      <main className="bg-black text-white selection:bg-neutral-800 selection:text-white w-full relative min-h-screen">
        {/* Background SVG Pattern */}
        <div
          className="absolute inset-0 w-full h-full opacity-90 pointer-events-none z-0"
          style={{
            backgroundImage: `url('/background-pattern.svg')`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            filter: 'brightness(3) contrast(1.5)',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <ECellHeader />
          {/* Hero Section */}
          <section className="relative w-full flex flex-col items-center">
            <div className="w-full px-8 sm:px-12 lg:px-16 py-16 sm:py-24 lg:py-28 flex flex-col items-center">
              <div className="flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto">
                <div className="flex flex-row items-baseline justify-center w-full">
                  <h1
                    className="font-karantina text-white text-[25vw] sm:text-[20rem] lg:text-[30rem] leading-none text-center"
                    style={{ fontFamily: "karantina, serif" }}
                  >
                    E-CELL
                  </h1>
                  <span
                    className="font-karantina ml-4 sm:ml-16 text-[12vw] sm:text-9xl lg:text-[10rem] tracking-widest text-center"
                    style={{ fontFamily: "karantina, serif" }}
                  >
                    IIITNR
                  </span>
                </div>
              </div>
              {/* Scroll Indicator */}
              <div className="hidden sm:flex justify-center mb-3">
                <div className="text-center">
                  <LazyLoadImage
                    src="/mouse.png"
                    alt="Scroll indicator"
                    width={108}
                    height={155}
                    className="mx-auto"
                  />
                  <p className="text-white text-sm mb-10 font-poppins">Scroll Down</p>
                  <div className="h-16 bg-black"></div>

                </div>
              </div>
              <div className="mt-24 sm:mt-32 md:mt-40 lg:mt-48 grid md:grid-cols-2 gap-8 relative max-w-6xl mx-auto px-4 md:px-0">
                <div className="space-y-3 text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-neutral-300 font-poppins">
                    DARE TO DREAM,
                  </h2>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-neutral-300 font-poppins">
                    VENTURE TO SUCCEED.
                  </h3>
                  <div className="h-6 bg-black"></div>

                  <p className="text-xl sm:text-xl md:text-xl text-neutral-300 leading-6 font-poppins">
                    Welcome to the Entrepreneur Cell of IIIT Naya Raipur, where
                    dreams take flight and ventures succeed.
                    <br />
                    Join us in shaping
                    tomorrow's innovations!
                  </p>

                  {/* E-Cell Logo */}
                  <div className="flex justify-center md:justify-start mt-8">
                    <img
                      src="/EcellLogo3D.png"
                      alt="E-Cell Logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
                    />
                  </div>
                </div>
                {/* Vertical white line separator for md and up */}
                <div
                  className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/80 -translate-x-1/2"
                  aria-hidden="true"
                ></div>
                <div className="text-xl sm:text-xl md:text-xl text-neutral-300 leading-6 text-center md:text-left">
                  <p className="mb-3 font-poppins">
                    E‑Cell IIIT Naya Raipur is a non‑profit student‑run
                    organization where we explore the evolving world of
                    entrepreneurship and startups. We host webinars, lectures,
                    podcasts and book summaries, ideation games and competitions.
                  </p>
                  <br />
                  <p className="font-poppins ">
                    Our mission is to help answer essential questions like: "How
                    does entrepreneurship affect day‑to‑day life?" and "How can I
                    transform a startup idea into a functional business model?"
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-16"></div>

          {/* EVENTS */}
          <section
            id="events"
            className="py-24 w-full"
          >
            <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col items-center">
              <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-8">
                  <div className="h-16 bg-black"></div>

                  <h2 className="text-5xl md:text-6xl font-extrabold tracking-[0.3em] px-4">
                    EVENTS
                  </h2>
                  <div className="h-16 bg-black"></div>

                </div>
                <div className="flex justify-center w-full">
                  <Events />
                </div>
              </div>
            </div>
          </section>

          {/* Spacing between Events and Teams */}
          <div className="h-16"></div>

          {/* TEAMS */}
          <section
            id="teams"
            className="py-24 w-full !block"
          >
            <div className="w-full px-8 sm:px-12 lg:px-16 flex flex-col items-center">
              <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                  <h2 className="text-6xl md:text-7xl font-extrabold tracking-[0.3em] mb-6">
                    OUR TEAM
                  </h2>

                </div>
                <TeamsHome />
                {/* Call to Action */}
              </div>
            </div>
          </section>

          {/* Spacing between Teams and Gallery */}
          <div className="h-16"></div>

          {/* GALLERY */}
          <section
            id="gallery"
            className="py-24 w-full !block"
          >
            <div className="w-full px-8 sm:px-12 lg:px-16 flex flex-col items-center">
              <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-[0.3em] text-center">
                  GALLERY
                </h2>
                <div className="h-16"></div>
                <Gallery />
                <div className="h-26"></div>

              </div>
            </div>
          </section>

          <ECellFooter />
        </div>
      </main>
    </div>
  );
}
