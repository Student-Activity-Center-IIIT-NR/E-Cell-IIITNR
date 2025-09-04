import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: false, // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: "ondemand" as const,
        arrows: false, // Disable arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src="/home/gallery/1.png" alt="Image 1" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/home/gallery/2.png" alt="Image 2" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/home/gallery/3.png" alt="Image 3" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/home/gallery/4.png" alt="Image 4" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/home/gallery/5.png" alt="Image 5" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/home/gallery/6.png" alt="Image 6" style={{ width: "100%", height: "auto" }} />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;