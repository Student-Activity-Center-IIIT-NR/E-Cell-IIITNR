import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Preloader from "../../Components/E-Summit/Preloader";
import Masonry from "../../Components/E-Summit/Masonry";
import "./ESummit2026.css";

// Assets: copy e-summit-2026/src/assets/* into src/assets/E-Summit/2026/ (and gallery/, events/ subdirs)
import heroImage from "../../assets/E-Summit/2026/4 1.png";
import edgeStrip from "../../assets/E-Summit/2026/e-summit'26 4.png";
import summitWordmark from "../../assets/E-Summit/2026/e summit yellow.png";
import openUnstop from "../../assets/E-Summit/2026/OPEM UNSTOP.png";
import navLogo from "../../assets/E-Summit/2026/W 1 (1).png";
import scheduleHeading from "../../assets/E-Summit/2026/schedule.png";
import eventsHeading from "../../assets/E-Summit/2026/EVENTS.png";
import hackathonBadge from "../../assets/E-Summit/2026/HACKATHON_12.png";
import grungeBackground from "../../assets/E-Summit/2026/grunge-style-starburst-background.jpg";
import mehboobaMusic from "../../assets/E-Summit/2026/Mehbooba Mehbooba Song.mp3";
import img1 from "../../assets/E-Summit/2026/gallery/IMG_3162.JPG";
import img2 from "../../assets/E-Summit/2026/gallery/IMG_4011.JPG";
import img3 from "../../assets/E-Summit/2026/gallery/IMG_4015.JPG";
import img4 from "../../assets/E-Summit/2026/gallery/_DSC3228.JPG";
import img5 from "../../assets/E-Summit/2026/gallery/_DSC3292.JPG";
import img6 from "../../assets/E-Summit/2026/gallery/_DSC3297.JPG";
import img7 from "../../assets/E-Summit/2026/gallery/_DSC3304.JPG";
import img8 from "../../assets/E-Summit/2026/gallery/_DSC3310.JPG";
import img9 from "../../assets/E-Summit/2026/gallery/_DSC4129.JPG";
import img10 from "../../assets/E-Summit/2026/gallery/_DSC4157.JPG";
import img11 from "../../assets/E-Summit/2026/gallery/_DSC4190.JPG";
import artistShow from "../../assets/E-Summit/2026/events/artist show.JPG";
import firstDay from "../../assets/E-Summit/2026/events/first day.JPG";
import hackathonEvent from "../../assets/E-Summit/2026/events/hackathon.JPG";
import iplAuction from "../../assets/E-Summit/2026/events/ipl auction.JPG";
import startupShow from "../../assets/E-Summit/2026/events/startup show.JPG";
import uiUx from "../../assets/E-Summit/2026/events/ui_ux.JPG";

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
  { id: 11, img: img11, height: 360, url: "#gallery" },
];

const eventItems = [
  { id: 1, name: "Artist Show", img: artistShow },
  { id: 2, name: "First Day", img: firstDay },
  { id: 3, name: "Hackathon", img: hackathonEvent },
  { id: 4, name: "IPL Auction", img: iplAuction },
  { id: 5, name: "Startup Show", img: startupShow },
  { id: 6, name: "UI/UX", img: uiUx },
];

export default function ESummit2026() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.log("Audio play error:", err));
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  return (
    <div className="esummit2026-page" style={{ "--esummit-hero-bg": `url(${grungeBackground})` }}>
      <audio ref={audioRef} loop>
        <source src={mehboobaMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} audioRef={audioRef} />
      )}
      <img
        className="esummit2026-edge-strip esummit2026-edge-strip--top"
        src={edgeStrip}
        alt=""
        aria-hidden="true"
      />
      <header className="esummit2026-nav">
        <nav className="esummit2026-nav-links esummit2026-nav-links--left">
          <a href="#home">Home</a>
          <a href="#schedule">Schedule</a>
        </nav>
        <Link to="/" className="esummit2026-nav-logo">
          <img src={navLogo} alt="E-Cell" />
        </Link>
        <nav className="esummit2026-nav-links esummit2026-nav-links--right">
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <main>
        <section id="home" className="esummit2026-hero">

          <button
            type="button"
            className="esummit2026-music-btn"
            onClick={toggleMusic}
            aria-label="Toggle music"
          >
            <span className="esummit2026-music-icon">{musicPlaying ? "🔊" : "🔇"}</span>
          </button>
          <div className="esummit2026-hero-card">
            <img className="esummit2026-hero-image" src={heroImage} alt="E-Summit 26" />
          </div>
        </section>

        <section id="hackathon" className="esummit2026-intro">
          <div className="esummit2026-intro-row">
            <div className="esummit2026-intro-left">
              <img src={summitWordmark} alt="E-Summit 2026" className="esummit2026-intro-wordmark-img" />
              <p className="esummit2026-intro-para">
                Welcome to the flagship event of Entrepreneur Cell of IIIT Naya Raipur, where dreams
                take flight and ventures succeed. Join us in shaping tomorrow&apos;s innovations.
              </p>
            </div>
            <div className="esummit2026-intro-divider" aria-hidden="true" />
            <a
              className="esummit2026-intro-link"
              href="https://unstop.com/college-fests/e-summit-2026-international-institute-of-information-technology-iiit-naya-raipur-441702"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Unstop"
            >
              <img src={openUnstop} alt="Open Unstop" />
            </a>
          </div>
        </section>

        <section id="schedule" className="esummit2026-schedule">
          <div className="esummit2026-section-title esummit2026-section-title--image">
            <img src={scheduleHeading} alt="Schedule" />
          </div>
          <p className="esummit2026-coming-soon">Coming Soon</p>
          {/* Schedule timeline – uncomment when ready
          <div className="esummit2026-timeline">
            <div className="esummit2026-timeline-row">
              <div className="esummit2026-event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" />
              </div>
              <div className="esummit2026-timeline-mid">
                <span className="esummit2026-dot" />
              </div>
              <div className="esummit2026-event-badge right">
                <img src={hackathonBadge} alt="Hackathon 12 March" />
              </div>
            </div>
            <div className="esummit2026-timeline-row">
              <div className="esummit2026-event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" />
              </div>
              <div className="esummit2026-timeline-mid">
                <span className="esummit2026-dot" />
              </div>
              <div className="esummit2026-event-badge right">
                <img src={hackathonBadge} alt="Pitch Competition 14 March" />
              </div>
            </div>
            <div className="esummit2026-timeline-row">
              <div className="esummit2026-event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" />
              </div>
              <div className="esummit2026-timeline-mid">
                <span className="esummit2026-dot" />
              </div>
              <div className="esummit2026-event-badge right">
                <img src={hackathonBadge} alt="Pitch Competition 14 March" />
              </div>
            </div>
          </div>
          */}
        </section>

        <section id="events" className="esummit2026-events">
          <div className="esummit2026-section-title esummit2026-section-title--image">
            <img src={eventsHeading} alt="Events" />
          </div>
          <div className="esummit2026-events-carousel-container">
            <div className="esummit2026-events-carousel">
              {eventItems.map((event) => (
                <div key={event.id} className="esummit2026-event-card-carousel">
                  <img
                    src={event.img}
                    alt={event.name}
                    className="esummit2026-event-card-image"
                  />
                  <h3 className="esummit2026-event-card-name">{event.name}</h3>
                </div>
              ))}
              {eventItems.map((event) => (
                <div key={`duplicate-${event.id}`} className="esummit2026-event-card-carousel">
                  <img
                    src={event.img}
                    alt={event.name}
                    className="esummit2026-event-card-image"
                  />
                  <h3 className="esummit2026-event-card-name">{event.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="esummit2026-gallery">
          <h2 className="esummit2026-section-title">Gallery</h2>
          <div className="esummit2026-gallery-masonry">
            <Masonry items={galleryItems} />
          </div>
        </section>
      </main>

      <footer id="contact" className="esummit2026-footer">
        <div className="esummit2026-footer-brand">
          <img
            src={navLogo}
            alt="E-Cell"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
        </div>
        <div className="esummit2026-footer-col">
          <h3>About Us</h3>
          <a href="https://ecell.iiitnr.ac.in/">ECELL IIITNR</a>
          <a href="https://ecell.iiitnr.ac.in/team">Team</a>
          <a href="#home">Committee</a>
        </div>
        <div className="esummit2026-footer-col">
          <h3>Social</h3>
          <a
            href="https://www.instagram.com/ecell_iiitnr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
      <img
        className="esummit2026-edge-strip esummit2026-edge-strip--bottom"
        src={edgeStrip}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
