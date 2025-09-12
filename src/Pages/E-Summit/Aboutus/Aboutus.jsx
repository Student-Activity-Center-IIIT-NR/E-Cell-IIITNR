import React from "react";
import "./Aboutus.css";
import title from "../../../assets/Images/aboutus_title.png";

export default function Aboutus() {
  return (
    <div className="e-about-us" id="esummitaboutus">
      <div className="aboutus_box">
        <img src={title} className="title" alt="About Us Title" />
      </div>
      <div className="Aboutus">
        <div className="Aboutus_0">
          <div className="Aboutus_box2">
            <p id="writings">
              E-Summit 2025 was the flagship event of E-Cell IIIT-NR in 2025,
              where the captivating magic of Hogwarts meets the ingenuity of
              entrepreneurship. It aims to foster entrepreneurial spirits with
              its magical and innovative activities. Our objective is to
              inspire, empower, and equip individuals with the knowledge,
              skills, and platform to transform innovative ideas into successful
              ventures and cultivating a network of innovative leaders. Get
              ready to wield the wand of innovation, and brew potions of success
              to showcase your innovation, talents, and creativity through
              various games. The magical theme sets the stage for transforming
              dreams into reality. Let the entrepreneurship sorcery commence !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
