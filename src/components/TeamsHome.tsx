import React from "react"
import { CardCarousel, CarouselItem } from "./ui/card-carousel"

const TeamsHome: React.FC = () => {
    const teamMembers: CarouselItem[] = [
        // Executive Leadership
        {
            src: "/teams/shaily.jpeg",
            position: "President",
            name: "Shaily Awasthi",
        },
        {
            src: "/teams/BHARGAV.jpg",
            position: "Vice President",
            name: "Bhargava Teja",
        },

        // Website Team
        {
            src: "/teams/sumit.jpeg",
            position: "Website",
            name: "Sumit Sahoo",
        },
        {
            src: "/teams/sandeep.jpeg",
            position: "Website",
            name: "Sandeep Sidar",
        },

        // Event Operations Team
        {
            src: "/teams/Arjun.jpg",
            position: "Event Operations",
            name: "Kumbham Arjun",
        },
        {
            src: "/teams/Aayushi Bagmar.jpg",
            position: "Event Operations",
            name: "Ayushi Bagmar",
        },
        {
            src: "/teams/Krishna.jpg",
            position: "Event Operations",
            name: "Krishna Sharma",
        },
        {
            src: "/teams/shivali.jpg",
            position: "Event Operations",
            name: "Shivali Pandey",
        },

        // Events and PR Team
        {
            src: "/teams/Avishi.jpeg",
            position: "Events & PR",
            name: "Avishi Verma",
        },
        {
            src: "/teams/sanvee.jpg",
            position: "Events & PR",
            name: "Sanvee Bhale",
        },
        {
            src: "/teams/Trishi Thakur.jpg",
            position: "Events & PR",
            name: "Trishi Thakur",
        },
        {
            src: "/teams/Soumya Verma.jpg",
            position: "Events & PR",
            name: "Soumya Verma",
        },
        {
            src: "/teams/Vihaan.png",
            position: "Events & PR",
            name: "Vihaan Choubey",
        },

        // Design Team
        {
            src: "/teams/Archit Agrawal.jpeg",
            position: "Design",
            name: "Archit Agrawal",
        },
        {
            src: "/teams/vanya.jpg",
            position: "Design",
            name: "Vanya Angare",
        },
        {
            src: "/teams/jaswanth.jpg",
            position: "Design",
            name: "Jaswanth Sai",
        },
        {
            src: "/teams/Astha.jpeg",
            position: "Design",
            name: "Astha Kujur",
        },
        {
            src: "/teams/Ujjwal.png",
            position: "Design",
            name: "Ujjwal Nishad",
        },
        {
            src: "/teams/Ritika.jpg",
            position: "Design",
            name: "Ritika Verma",
        },

        // Documentation Team
        {
            src: "/teams/Ankit Agarwal.jpg",
            position: "Documentation",
            name: "Ankit Agarwal",
        },
        {
            src: "/teams/perlin.png",
            position: "Documentation",
            name: "Perlin Rhooney",
        },
        {
            src: "/teams/Niharika_.jpg",
            position: "Documentation",
            name: "Niharika Kujur",
        },

        // Social Media Team
        {
            src: "/teams/Vipin Rawat_.jpg",
            position: "Social Media",
            name: "Vipin Rawat",
        },
        {
            src: "/teams/TOSHIKASAHU.jpg",
            position: "Social Media",
            name: "Toshika Sahu",
        },
        {
            src: "/teams/Ishant thakur.png",
            position: "Social Media",
            name: "Ishant Thakur",
        },
        {
            src: "/teams/Ashwin_.png",
            position: "Social Media",
            name: "Ashwin Roger Baxla",
        },
    ]

    return (
        <div className="w-full">
            <CardCarousel
                images={teamMembers}
                autoplayDelay={2000}
                showPagination={false}
                showNavigation={true}
            />
        </div>
    )
}

export default TeamsHome
