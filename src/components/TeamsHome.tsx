import React from "react"

import { CardCarousel } from "./ui/card-carousel"

const TeamsHome = () => {
    const images = [
        { src: "/home/teams/3.png", alt: "Ananya" },
        { src: "/home/teams/2.png", alt: "Asmit" },
        { src: "/home/teams/1.png", alt: "Fahmin" },
        { src: "/home/teams/4.png", alt: "Varun" },
        { src: "/home/teams/5.png", alt: "Varun" },
        { src: "/home/teams/6.png", alt: "Varun" },
        { src: "/home/teams/7.png", alt: "Varun" },
        { src: "/home/teams/8.png", alt: "Varun" },
        { src: "/home/teams/9.png", alt: "Varun" },
        { src: "/home/teams/10.png", alt: "Varun" },
        { src: "/home/teams/11.png", alt: "Varun" },
        { src: "/home/teams/12.png", alt: "Varun" },
        { src: "/home/teams/13.png", alt: "Varun" },
        { src: "/home/teams/14.png", alt: "Varun" },
        { src: "/home/teams/15.png", alt: "Varun" },
        { src: "/home/teams/16.png", alt: "Varun" },
        { src: "/home/teams/17.png", alt: "Varun" },
        { src: "/home/teams/18.png", alt: "Varun" },
        { src: "/home/teams/19.png", alt: "Varun" },
        { src: "/home/teams/20.png", alt: "Varun" },
        { src: "/home/teams/21.png", alt: "Varun" },
        { src: "/home/teams/22.png", alt: "Varun" },
        { src: "/home/teams/23.png", alt: "Varun" },
        { src: "/home/teams/24.png", alt: "Varun" },
        { src: "/home/teams/25.png", alt: "Varun" },
        { src: "/home/teams/26.png", alt: "Varun" },
        { src: "/home/teams/27.png", alt: "Varun" },
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
