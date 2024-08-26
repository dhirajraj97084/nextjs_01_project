"use client";
import React from 'react';
import Link from 'next/link';

import { BackgroundGradient } from "./ui/background-gradient";

const datas = [
    {
        id: 1,
        title: "digiswarm.in",
        desc: "At Digiswarm, we are more than just a digital marketing agency; we are your strategic ally in navigating the dynamic and ever-evolving digital landscape. With a passion for innovation.",
        button: "Click me",
        link: "https://www.digiswarm.in/",
    },
    {
        id: 2,
        title: "National production industries(npi)",
        desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles.",
        button: "Click me",
        link:"https://npi-companies.vercel.app/",
    },
    {
        id: 3,
        title: "Photography(silk)",
        desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        button: "Click me",
        link:"https://silk-self.vercel.app/",
    },
    {
        id: 4,
        title: "portfolio",
        desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        button: "Click me",
        link:"https://nextjs-01-project.vercel.app/",
    },
    {
        id: 5,
        title: "calculator",
        desc: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        button: "Click me",
        link:"https://react-calculator-kappa-black.vercel.app/",
    },
];

function FeaturedCourses() {
    return (
        <div className="main bg-gray-800">
            <div className="pt-10 text-center">
                <h1 className='text-base text-teal-600 font-semibold tracking-wide'>SOME PROJECTS</h1>
                <p className='text-2xl sm:text-3xl font-extrabold leading-8 tracking-tight mt-2 text-white'>
                    FULLY RESPONSIVE PROJECTS
                </p>
            </div>

            <div className="flex justify-center mt-10">
                <div className="card">
                    <div className="main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8 gap-4">
                        {datas.map((item, index) => (
                            <div key={index} className="sub">
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {item.desc}
                                    </p>
                                    {item?.link ? (
                                        <Link href={item.link}>
                                            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                                <span>{item.button}</span>
                                            </button>
                                        </Link>
                                    ) : (
                                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                            <span>{item.button}</span>
                                        </button>
                                    )}
                                </BackgroundGradient>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-6">
                <Link href={'/project'}>
                    <button className='px-4 py-1.5 text-black bg-white font-semibold tracking-tight hover:bg-white/85'>
                        View All Projects
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;
