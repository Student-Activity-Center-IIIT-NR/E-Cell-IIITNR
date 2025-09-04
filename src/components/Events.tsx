import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Events() {
    const testimonials = [
        {
            quote:
                "E-Summit was an incredible platform that connected me with industry leaders and fellow entrepreneurs. The networking opportunities were invaluable for my startup journey.",
            name: "E-Summit",
            designation: "Annual Entrepreneurship Summit",
            src: "/home/events/esummit.jpg",
        },
        {
            quote:
                "The E-Cell Awards recognized our innovative business model and gave us the confidence to scale our operations. It's amazing to be celebrated for entrepreneurial excellence.",
            name: "E-Cell Awards",
            designation: "Entrepreneurial Excellence Recognition",
            src: "/home/events/awards.jpg",
        },
        {
            quote:
                "Participating in E-Cell Debates sharpened my critical thinking and helped me understand different perspectives on business challenges. Great learning experience!",
            name: "E-Cell Debates",
            designation: "Business Case Study Discussions",
            src: "/home/events/case-study.jpg",
        },
        {
            quote:
                "The E-Cell Hackathon pushed our team to think creatively and build innovative solutions under pressure. We learned so much about rapid prototyping and market validation.",
            name: "E-Cell Hackathons",
            designation: "Innovation & Problem Solving",
            src: "/home/events/hackathon.jpg",
        },
        {
            quote:
                "E-Cell Quiz tested our knowledge of entrepreneurship, economics, and business strategy. It was both challenging and educational for aspiring entrepreneurs.",
            name: "E-Cell Quiz",
            designation: "Entrepreneurship Knowledge Challenge",
            src: "/home/events/quiz.jpg",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
