import React from "react";
import "./Glimpse.css";
import Navbar from "../../../Components/E-Summit/Navbar/Navbar";
import HeroSection from "../../../Components/E-Summit/Home/HeroSection";
import sample from "../../../assets/E-Summit/finalesummitreel.mp4";
import glimpse_pic from "../../../assets/E-Summit/glimpse.png";
export default function Glimpse() {
  return (
    <div className="Glimpse" id="glimpse">
      <div className="glimpse-pic">
        {" "}
        <img src={glimpse_pic} className="glimpse_pic" />
      </div>
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
}
