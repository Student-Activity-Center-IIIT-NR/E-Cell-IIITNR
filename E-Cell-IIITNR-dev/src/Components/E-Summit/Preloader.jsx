import { useEffect, useState } from "react";
import "./Preloader.css";

// Copy from e-summit-2026: src/assets/Video_Background_Removal_For_Logo.mp4 → src/assets/E-Summit/2026/
import videoBackground from "../../assets/E-Summit/2026/Video_Background_Removal_For_Logo.mp4";

const Preloader = ({ onComplete, audioRef }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete, audioRef]);

  if (!isVisible) return null;

  return (
    <div className="esummit-preloader">
      <video
        className="esummit-preloader-video"
        autoPlay
        muted
        playsInline
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
