"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const testimonials = [
  {
    quote:
      "Working with Dhiraj kumar Tiwari. was a great experience. Their attention to detail and ability to turn ideas into functional designs is outstanding",
    name: "Akash Chopda",
    title: "A Tale of Two Cities",
  },
  {
    quote:"Working with  Dhiraj kumar tiwari. on our e-commerce website redesign was an absolute pleasure. They brought our vision to life with a modern, responsive design that has significantly improved our user experience. Their attention to detail and ability to translate .",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "I've had the privilege of working alongside  Dhiraj kumar tiwari. on several projects, and their expertise in front-end development is truly impressive. They have a deep understanding of the latest web technologies and always strive to create clean, .",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "I approached  Dhiraj kumar tiwari. to create a portfolio website that would reflect my brand as a photographer, and they exceeded my expectations. They crafted a visually stunning site that perfectly showcases my work, with seamless navigation and responsive design. ",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Our mobile app needed a landing page that was both visually appealing and effective in converting visitors into users. Dhiraj kumar tiwari. delivered exactly what we needed. The landing page is sleek, responsive, and optimized for conversion. They were attentive to .",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

function MovingCard() {
  return (
    <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.6] ">
      <div className=" pt-5 md:pt-10 text-center">
        <h1 className='text-2xl md:text-4xl leading-8 text-white font-bold tracking-wide'>What Others Say</h1>
      </div>
      <div className="md:h-[40rem] h-[30rem] rounded-md flex   flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  )
}

export default MovingCard
