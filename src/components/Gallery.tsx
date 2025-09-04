import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-6xl mx-auto">
            {galleryImages.map((image, i) => (
                <BentoGridItem
                    key={i}
                    header={
                        <div className="w-full h-full rounded-lg overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    }
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}

const galleryImages = [
    { src: "/home/gallery/1.png", alt: "Gallery Image 1" },
    { src: "/home/gallery/2.png", alt: "Gallery Image 2" },
    { src: "/home/gallery/3.png", alt: "Gallery Image 3" },
    { src: "/home/gallery/4.png", alt: "Gallery Image 4" },
    { src: "/home/gallery/5.png", alt: "Gallery Image 5" },
    { src: "/home/gallery/6.png", alt: "Gallery Image 6" },
    { src: "/home/gallery/7.png", alt: "Gallery Image 7" },
    { src: "/home/gallery/8.png", alt: "Gallery Image 8" },
    { src: "/home/gallery/9.png", alt: "Gallery Image 9" },
    { src: "/home/gallery/10.png", alt: "Gallery Image 10" },
    { src: "/home/gallery/11.png", alt: "Gallery Image 11" },
    { src: "/home/gallery/12.png", alt: "Gallery Image 12" },
    { src: "/home/gallery/13.png", alt: "Gallery Image 13" },
    { src: "/home/gallery/14.png", alt: "Gallery Image 14" },
    { src: "/home/gallery/15.png", alt: "Gallery Image 15" },
    { src: "/home/gallery/16.png", alt: "Gallery Image 16" },
    { src: "/home/gallery/17.png", alt: "Gallery Image 17" },
    { src: "/home/gallery/18.png", alt: "Gallery Image 18" },
    { src: "/home/gallery/19.png", alt: "Gallery Image 19" },
];
