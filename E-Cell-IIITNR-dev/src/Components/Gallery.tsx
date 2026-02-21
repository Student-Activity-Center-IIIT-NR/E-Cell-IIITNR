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
        autoplaySpeed: 1000,
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
                <div className="px-2">
                    <img src="/home/gallery/1.png" alt="Image 1" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/2.png" alt="Image 2" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/3.png" alt="Image 3" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/4.png" alt="Image 4" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/5.png" alt="Image 5" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/6.png" alt="Image 6" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/7.png" alt="Image 7" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/8.png" alt="Image 8" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/9.png" alt="Image 9" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/10.png" alt="Image 10" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/11.png" alt="Image 11" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/12.png" alt="Image 12" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
                <div className="px-2">
                    <img src="/home/gallery/13.png" alt="Image 13" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                </div>
            </Slider >
        </div >
    );
};

export default Carousel;