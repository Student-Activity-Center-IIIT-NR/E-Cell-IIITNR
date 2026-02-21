import React from 'react';
import "./OurEvents.css";
import events from "../../assets/Data/ourevents.js";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';
import ContactUs from "../Contact Us/ContactUs.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});
const OurEvents = () => {
  return (
    <div className='our-eve-main' id="event">
      <div className="oureve-heading" data-aos="zoom-in" data-aos-duration="300">
        <h1>OUR EVENTS</h1>
      </div>
      <div className="oureve-cards" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="150">
          {events.map((event) => (
              <Card sx={{ maxWidth: 345 }} key={event.key}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={event.img}
                    alt={event.title}
                    className='card-img'
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.title}
                    </Typography>
                    <Typography variant="body2"  style={{color: "rgba(255, 255, 255, 1)"}}>
                      {event.details}
                    </Typography>
                  </CardContent>
              </Card>
          ))}
      </div>
      <div className="img-cont">
      <div className="bulb-img"></div>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
};

export default OurEvents;
