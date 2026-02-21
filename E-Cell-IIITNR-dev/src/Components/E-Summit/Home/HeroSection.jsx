import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import esummitLogo from "../../../assets/E-Summit/logo/esummit-logo.png";
import image from "../../../assets/E-Summit/Images/esummitherosection.png";

export default function HeroSection() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-14T00:00:00Z");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateTimer, 1000); // Update every second

    // Initial call to set the timer right away
    updateTimer();

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Helper function to format numbers with leading zeros
  const formatNumber = (number) => String(number).padStart(2, "0");

  return (
    <div className="esummit-hero-section">
      <div className="esummit-hero-section-image">
        <img
          src={esummitLogo}
          alt="esummit"
          className="esummit-hero-section-img1"
        />
        <img src={image} alt="esummit" className="esummit-hero-section-img2" />
        <div className="esummit-countdown"></div>
      </div>
    </div>
  );
}
