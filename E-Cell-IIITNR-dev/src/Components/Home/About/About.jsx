import React from 'react'
import './About.css'
import Cover_Image from '../../../assets/Images/Cover_Images/About-Cover-Image.jpeg'
import AboutUs  from '../About_Us/AboutUs'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});
const About = () => {
  return (
    <div className="about" id="about">
      <AboutUs/>
        <div className="box">
            <div className="sub-box" data-aos="zoom-in"
     data-aos-duration="200">
                <h1>WHO ARE WE ?</h1>
                <img src={Cover_Image} alt="" />
            </div>
            <h3 data-aos="zoom-in"
     data-aos-duration="200">E-Cell IIIT Naya Raipur took its start back in 2015 and has been growing and heightening ever since. We are here to foster and encourage all the entrepreneurship enthusiasts by providing them dynamic, informative and fun experiences through events and contests.</h3>
            <Link to="/team"><button>Read More</button></Link>
        </div>
    </div>
  )
}

export default About
