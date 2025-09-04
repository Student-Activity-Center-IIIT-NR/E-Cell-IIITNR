import React from "react"

import { CardCarousel } from "./ui/card-carousel"

const TeamsHome = () => {
    const images = [
        { src: "/teams/1.png", alt: "Asmit" },
        { src: "/teams/2.png", alt: "Navyansh" },
        { src: "/teams/3.png", alt: "Varun" },
        { src: "/teams/4.png", alt: "Varun" },
        { src: "/teams/5.png", alt: "Varun" },
        { src: "/teams/6.png", alt: "Varun" },
        { src: "/teams/7.png", alt: "Varun" },
        { src: "/teams/8.png", alt: "Varun" },
        { src: "/teams/9.png", alt: "Varun" },
        { src: "/teams/10.png", alt: "Varun" },
        { src: "/teams/11.png", alt: "Varun" },
        { src: "/teams/12.png", alt: "Varun" },
    ]

    return (
        <div className="w-full">
            <CardCarousel
                images={images}
                autoplayDelay={2000}
                showPagination={true}
                showNavigation={true}
            />
        </div>
    )
}

export default TeamsHome
