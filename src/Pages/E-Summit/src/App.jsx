import "./App.css";
import { useState, useRef } from "react";
import Preloader from "./Preloader";
import heroImage from "./assets/4 1.png";
import edgeStrip from "./assets/e-summit'26 4.png";
import summitWordmark from "./assets/e summit yellow.png";
import openUnstop from "./assets/OPEM UNSTOP.png";
import navLogo from "./assets/W 1 (1).png";
import scheduleHeading from "./assets/schedule.png";
import eventsHeading from "./assets/EVENTS.png";
import galleryTile from "./assets/gallery.png";
import hackathonBadge from "./assets/HACKATHON_12.png";
import mehboobaMusic from "./assets/Mehbooba Mehbooba Song.mp3";
import grungeBackground from "./assets/grunge-style-starburst-background.jpg";
import Masonry from "./Masonry";
import img1 from "./assets/gallery/IMG_3162.JPG";
import { ECellFooter } from "../../../components/Footer";
import { ESummitHeader } from "./ESummitHeader";
import img2 from "./assets/gallery/IMG_4011.JPG";
import img3 from "./assets/gallery/IMG_4015.JPG";
import img4 from "./assets/gallery/_DSC3228.JPG";
import img5 from "./assets/gallery/_DSC3292.JPG";
import img6 from "./assets/gallery/_DSC3297.JPG";
import img7 from "./assets/gallery/_DSC3304.JPG";
import img8 from "./assets/gallery/_DSC3310.JPG";
import img9 from "./assets/gallery/_DSC4129.JPG";
import img10 from "./assets/gallery/_DSC4157.JPG";
import img11 from "./assets/gallery/_DSC4190.JPG";
import artistShow from "./assets/events/artist show.JPG";
import firstDay from "./assets/events/first day.JPG";
import hackathonEvent from "./assets/events/hackathon.JPG";
import iplAuction from "./assets/events/ipl auction.JPG";
import startupShow from "./assets/events/startup show.JPG";
import uiUx from "./assets/events/ui_ux.JPG";

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const galleryItems = [
    { id: 1, img: img1, height: 520, url: "#gallery" },
    { id: 2, img: img2, height: 420, url: "#gallery" },
    { id: 3, img: img3, height: 360, url: "#gallery" },
    { id: 4, img: img4, height: 420, url: "#gallery" },
    { id: 5, img: img5, height: 520, url: "#gallery" },
    { id: 6, img: img6, height: 360, url: "#gallery" },
    { id: 7, img: img7, height: 420, url: "#gallery" },
    { id: 8, img: img8, height: 360, url: "#gallery" },
    { id: 9, img: img9, height: 520, url: "#gallery" },
    { id: 10, img: img10, height: 420, url: "#gallery" },
    { id: 11, img: img11, height: 360, url: "#gallery" }
  ];

  const eventItems = [
    { id: 1, name: "Artist Show", img: artistShow },
    { id: 2, name: "First Day", img: firstDay },
    { id: 3, name: "Hackathon", img: hackathonEvent },
    { id: 4, name: "IPL Auction", img: iplAuction },
    { id: 5, name: "Startup Show", img: startupShow },
    { id: 6, name: "UI/UX", img: uiUx }
  ];

  return (
    <div className="page" style={{ "--hero-bg": `url(${grungeBackground})` }}>
      <audio 
        ref={audioRef} 
        loop 
        preload="none"
        crossOrigin="anonymous"
      >
        <source src={mehboobaMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} audioRef={audioRef} />}
      {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}
      <ESummitHeader logoSrc={navLogo} />
      <img
        className="edge-strip"
        src={edgeStrip}
        alt=""
        aria-hidden="true"
      />

      <main>
        <section id="home" className="hero">
          <button className="music-btn" onClick={toggleMusic} aria-label="Toggle music">
            <span className="music-icon">{musicPlaying ? "🔊" : "🔇"}</span>
          </button>
          <div className="hero-card">
            <img className="hero-image" src={heroImage} alt="E-Summit 26" loading="eager" />
          </div>
        </section>

        <section id="hackathon" className="hackathon-intro">
          <div className="section-title section-title--image" style={{ marginBottom: "10px", marginTop: "30px", position: "relative", zIndex: 10 }}>
            <img src={summitWordmark} alt="E-Summit 2026" loading="lazy" style={{ maxWidth: "340px", width: "80%", margin: "0 auto", display: "block" }} />
          </div>
          <div className="intro" style={{ marginTop: 0, alignItems: "center", paddingTop: "20px" }}>
            <div className="intro-media" style={{ padding: "0 2vw", display: "flex", alignItems: "center" }}>
              <p style={{ margin: 0, fontSize: "clamp(16px, 3.5vw, 24px)", color: "#f8d325", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.02em" }}>
                Welcome to the flagship event of Entrepreneur Cell of IIIT Naya
                Raipur, where dreams take flight and ventures succeed. Join us in
                shaping tomorrow&apos;s innovations.
              </p>
            </div>
            <div className="intro-divider" aria-hidden="true" style={{ height: "100px", minHeight: "80px", width: "2px", background: "rgba(255, 255, 255, 0.5)" }} />
            <div className="intro-media intro-media--right" style={{ padding: "0 2vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <a
                className="intro-link"
                href="https://unstop.com/college-fests/e-summit-2026-international-institute-of-information-technology-iiit-naya-raipur-441702"
                aria-label="Open Unstop"
              >
                <img src={openUnstop} alt="Open Unstop" loading="lazy" style={{ maxWidth: "100%", height: "auto" }} />
              </a>
            </div>
          </div>
        </section>

        <section id="schedule" className="schedule">
          <div className="section-title section-title--image">
            <img src={scheduleHeading} alt="Schedule" loading="lazy" />
          </div>
          <div style={{ textAlign: "center", fontSize: "2rem", padding: "40px", fontFamily: "'Bungee', sans-serif", color: "#f8d325" }}>
            Coming Soon
          </div>
          {/* <div className="timeline">
            <div className="timeline-row">
              <div className="event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" loading="lazy" />
              </div>
              <div className="timeline-mid"><span className="dot" /></div>
              <div className="event-badge right">
                <img src={hackathonBadge} alt="Hackathon 12 March" loading="lazy" />
              </div>
            </div>
            <div className="timeline-row">
              <div className="event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" loading="lazy" />
              </div>
              <div className="timeline-mid"><span className="dot" /></div>
              <div className="event-badge right">
                <img src={hackathonBadge} alt="Pitch Competition 14 March" loading="lazy" />
              </div>
            </div>
            <div className="timeline-row">
              <div className="event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" loading="lazy" />
              </div>
              <div className="timeline-mid"><span className="dot" /></div>
              <div className="event-badge right">
                <img src={hackathonBadge} alt="Pitch Competition 14 March" loading="lazy" />
              </div>
            </div>
          </div> */}
        </section>

        <section id="events" className="events">
          <div className="section-title section-title--image">
            <img src={eventsHeading} alt="Events" loading="lazy" />
          </div>
          <div className="events-carousel-container">
            <div className="events-carousel">
              {eventItems.map((event) => (
                <div key={event.id} className="event-card-carousel">
                  <img src={event.img} alt={event.name} className="event-card-image" loading="lazy" />
                  <h3 className="event-card-name">{event.name}</h3>
                </div>
              ))}
              {eventItems.map((event) => (
                <div key={`duplicate-${event.id}`} className="event-card-carousel">
                  <img src={event.img} alt={event.name} className="event-card-image" loading="lazy" />
                  <h3 className="event-card-name">{event.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="section-title section-title--image">
            <img src={galleryTile} alt="Gallery" loading="lazy" />
          </div>
          <div className="gallery-masonry">
            <Masonry items={galleryItems} />
          </div>
        </section>
      </main>

      <ECellFooter />
      <img
        className="edge-strip edge-strip--bottom"
        src={edgeStrip}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}

export default App;