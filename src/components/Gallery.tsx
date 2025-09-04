"use client"

import React from "react"

import { Badge } from "./ui/badge"

import ImageCursorTrail from "./ui/image-cursortrail"

const images = [
    "/home/gallery/1.png",
    "/home/gallery/2.png",
    "/home/gallery/3.png",
    "/home/gallery/4.png",
    "/home/gallery/5.png",
    "/home/gallery/6.png",
    "/home/gallery/7.png",
    "/home/gallery/8.png",
    "/home/gallery/9.png",
    "/home/gallery/10.png",
    "/home/gallery/11.png",
    "/home/gallery/12.png",
    "/home/gallery/13.png",
    "/home/gallery/14.png",
    "/home/gallery/15.png",
    "/home/gallery/16.png",
    "/home/gallery/17.png",
    "/home/gallery/18.png",
    "/home/gallery/19.png",
    "/home/gallery/20.png",
]

export function Gallery() {
    return (
        <section className="mx-auto w-full max-w-4xl rounded-[24px] p-2 shadow-sm md:rounded-t-[44px]">
            <div className="relative mx-auto flex w-full flex-col rounded-[24px] bg-neutral-800/5  shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">
                <ImageCursorTrail
                    items={images}
                    maxNumberOfImages={10}
                    distance={9}
                    imgClass="sm:w-40 w-28 sm:h-48 h-34 sm:h-44  "
                    className=" max-w-4xl rounded-3xl "
                >
                    <article className="relative z-50 flex flex-col items-center justify-center ">
                        <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight text-white">
                        </h1>
                    </article>
                </ImageCursorTrail>
            </div>
        </section>
    )
}
