
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];


function HoverCards() {
    return (
        <div>
            <div className="main bg-gray-600">
                <div className="div">
                    <div className="pt-10 text-center">
                        <h1 className='text-base text-teal-600 font-semibold tracking-wide'>SOME PROJECTS</h1>
                        <p className='text-3xl sm:text-4xl font-extrabold leading-8 tracking-tight mt-2 text-white'>
                            Learn With Best
                        </p>
                    </div>
                </div>
                <div className="div">
                    <div className="max-w-7xl mx-auto md:px-8 px-4">
                        <HoverEffect items={projects} />
                    </div>

                </div>
                <div className="div">
                    <div className="flex justify-center py-3">
                        <Link href={'/courses'}>
                            <button className='px-4 py-1.5 text-black bg-white font-semibold tracking-tight hover:bg-white/85'>
                                View All Courses
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverCards
