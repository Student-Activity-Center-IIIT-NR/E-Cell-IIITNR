// import React from "react";
// const Gallery = () => {
//   return (
//     <div className="gallery">
 
//     </div>
//   )
// }

// export default Gallery
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import images from "../../../assets/Data/GalleryImages.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});
const Gallery = () => {
  // Detect mobile for performance optimization
  const isMobile = window.innerWidth <= 630;

  const settings = {
    infinite:true,
    easing:'linear',
    autoplaySpeed: isMobile ? 4000 : 1500, // Slower on mobile
    autoplay:true,
    dots: !isMobile, // Disable dots on mobile to reduce DOM
    speed: 400, // Slightly faster transition
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplaySpeed: 4500
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 5000 // Even slower on small screens
        }
      }
    ]
  }
  ;

  return (
    <div className='Slider' id="gallery">
      <div className='text' data-aos="zoom-in" data-aos-duration="300"><div className='heading' >OUR GALLERY</div></div>
    <div data-aos="zoom-in" data-aos-duration="300"style={{ width: '86vw', margin: '0 auto'  }}  >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}   >
            <div className='boxed'   style={{ 
                boxSizing:'border-box', 
                padding:'0.7rem',
                height: '16rem',
              }}>
            <img 
              src={image.img} 
              alt={`Slide ${index}`}
              loading="lazy"
              style={{ 
                boxSizing:'border-box',
                width: '100%',
                borderRadius: '0.1rem', 
                height:'100%',
                objectFit: 'cover',
                border: '0.1rem solid #0803FF',
                willChange: 'transform'
              }} 
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Gallery;
