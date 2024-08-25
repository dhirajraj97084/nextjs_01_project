import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import Link from 'next/link';
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div>
      <div className=" w-full md:h-[42rem] h-[35rem] rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className=" left-0 md:left-60 -top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
           HII , I'M DHIRAJ KUMER TIWARI.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
          Welcome to my portfolio! I specialize in creating visually appealing, responsive, and user-friendly websites that deliver exceptional user experiences. With a passion for coding and a keen eye for design, I turn ideas into interactive, accessible,&apos; and engaging&apos; web applications.
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
