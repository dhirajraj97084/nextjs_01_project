"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


// const content = [
//   {
//     title: "Responsive Design",
//     description:
//       "Crafting layouts that adapt seamlessly to any device, ensuring a consistent and enjoyable user experience.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Collaborative Editing
//         </div>
//       ),
//   },
//   {
//     title: "Interactive UI/UX",
//     description:
//       "Implementing intuitive and engaging interfaces that enhance user interaction and satisfaction.",
//       content: (
//         <div className="h-full w-full  flex items-center justify-center text-white">
//           <Image
//             src="/linear.webp"
//             width={300}
//             height={300}
//             className="h-full w-full object-cover"
//             alt="linear board demo"
//           />
//         </div>
//       ),
//   },
//   {
//     title: "Performance Optimization",
//     description:
//       "Focusing on fast load times and smooth performance to keep users engaged and content.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//           Version control
//         </div>
//       ),
//   },
//   {
//     title: "Accessibility",
//     description:
//       "Building accessible websites that cater to all users, including those with disabilities, following best practices and guidelines",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Running out of content
//         </div>
//       ),
//   },
// ];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
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
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
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
