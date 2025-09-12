import React from "react";
import "./ESummitHome.css";
import Navbar from "../../../Components/E-Summit/Navbar/Navbar";
import HeroSection from "../../../Components/E-Summit/Home/HeroSection";
import Esummit_Aboutus from "../Aboutus/Aboutus";
import Events_esummit from "../Events_esummit/Events_esummit";
import Past_events_esummit from "../Past_events/Past_events";
import Glimpse_esummit from "../Glimpse/Glimpse";
import EsummitContactUs from "../ContactUs/EsummitContactUs";
import Load from "../../../Components/Load_Page/Load";
export default function ESummitHome() {
  let [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    const timer2 = setTimeout(() => {
      setLoad(false);
    }, 3000);
    return () => clearTimeout(timer2);
  }, [load]);

  React.useState(() => {
    // document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = "visible";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="esummit-home" id="e-home">
      {load === true && <Load />}
      <Navbar />
      <HeroSection />
      <Glimpse_esummit />
      <Esummit_Aboutus />
      <Events_esummit />
      <Past_events_esummit />
      <EsummitContactUs />
    </div>
  );
}
