import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Events() {
    const testimonials = [
        {
            quote:
                "E-Summit was an incredible platform that connected me with industry leaders and fellow entrepreneurs. The networking opportunities were invaluable for my startup journey.",
            name: "E-Summit",
            designation: "Annual Entrepreneurship Summit",
            src: "/home/events/1.png",
        },
        {
            quote:
                "The Disrupt event was an exciting platform for pitching innovative ideas and engaging in thought-provoking debates. It provided a great opportunity to showcase our business model and connect with industry leaders through competitive discussions.",
            name: "Disrupt",
            designation: "   ",
            src: "/home/events/2.png",
        },
        {
            quote:
                "A night filled with laughter, music, and good vibes - it was an absolutely incredible experience when Vivek Samtani graced our stage with his amazing performance. The energy was electric and the crowd was mesmerized by his captivating presence and musical talent.",
            name: "Artist Night",
            designation: " ",
            src: "/home/events/3.png",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
