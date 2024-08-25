"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Responsive Design",
    description:
      "Crafting layouts that adapt seamlessly to any device, ensuring a consistent and enjoyable user experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
      // <div className="img">
      //   <img src="https://img.freepik.com/free-vector/colorful-web-design-concept-with-flat-design_23-2147945601.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid" alt="" />
      // </div>
    ),
  },
  {
    title: "Interactive UI/UX",
    description:
      "Implementing intuitive and engaging interfaces that enhance user interaction and satisfaction.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <div className="img">
          <img src="https://img.freepik.com/premium-photo/professional-branding-image-corporate-identity_1199394-107996.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid" alt="" />
        </div> */}
         <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Focusing on fast load times and smooth performance to keep users engaged and content.",
    content: (
      // <div className="img">
      //   <img src="https://img.freepik.com/free-vector/website-setup-concept-landing-page_52683-26187.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid" alt="" />
      // </div>
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Accessibility",
    description:
      "Building accessible websites that cater to all users, including those with disabilities, following best practices and guidelines",
    content: (
      // <div className="img">
      //   <img src="https://img.freepik.com/free-photo/website-design-content-layout-graphic_53876-21203.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid" alt="" />
      // </div>
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--red-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
];

function ScrollContent() {
  return (
    <div>
      <div className="p-10">
        <div className="pt-10 text-center">
          <p className='text-3xl sm:text-4xl font-bold leading-8 tracking-tight mt-2 text-white'>
            WHAT I DO ?
          </p>
        </div>
        <StickyScroll content={content} />
      </div>
    </div>
  )
}

export default ScrollContent
