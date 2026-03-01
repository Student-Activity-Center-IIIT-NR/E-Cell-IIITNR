import { useEffect, useState } from "react";
import "./Preloader.css";

// Copy from e-summit-2026: src/assets/Video_Background_Removal_For_Logo.mp4 → src/assets/E-Summit/2026/
import videoBackground from "../../assets/E-Summit/2026/Video_Background_Removal_For_Logo.mp4";

const Preloader = ({ onComplete, audioRef }) => {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    // Don't autoplay audio on mobile to save bandwidth
    if (audioRef?.current && !isMobile) {
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
    }

    // Faster preload on mobile (4s instead of 8s)
    const duration = isMobile ? 4000 : 8000;
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, audioRef, isMobile]);

  if (!isVisible) return null;

  return (
    <div className="esummit-preloader">
      <video
        className="esummit-preloader-video"
        autoPlay={!isMobile} // Don't autoplay on mobile
        muted
        playsInline
        preload={isMobile ? "none" : "auto"} // Don't preload on mobile
        onEnded={() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;
