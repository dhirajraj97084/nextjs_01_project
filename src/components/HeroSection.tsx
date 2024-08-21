import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import Link from 'next/link';
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div>
      <div className=" w-full md:h-[40rem] h-[30rem] rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className=" left-0 md:left-60 -top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            WELCOME TO DHIRAJ WEBSITES.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out of
            copy.
          </p>
          <div className=' flex justify-center items-center pt-5 md:pt-10'>
            <Link href={'/explore'}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore More..
              </Button>
              <div>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
