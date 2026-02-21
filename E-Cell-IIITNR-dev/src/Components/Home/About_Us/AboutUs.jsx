import React from 'react'
import './AboutUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});
const AboutUs = () => {
  return (
    <div className="about-us" id="aboutUsPage">
           <div className="box2">
        <div className="box2-head" data-aos="zoom-in" data-aos-duration="500">ABOUT US</div>
        <div className="box2-text" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300">E-Cell IIIT NAYA RAIPUR is a non-profit student run organization where we crave and explore the constantly evolving world of entrepreneurship and start-up cult. In our quest to promote the spirit of entrepreneurship among the community, we try to answer essential questions like “How this realm of entrepreneurship affects us in our day-to-day lives?” and the likes of “Can I construct my start-up idea into a functional business model?” To spread this very essence, we host various seminars/webinars, lectures, podcasts and book summaries, innovative games, brainstorming sessions, competitions. Besides that, we host the most prominent annual entrepreneurial summit of central India, which includes numerous informative events about entrepreneurship.</div>
      </div>
    </div>
  )
}

export default AboutUs