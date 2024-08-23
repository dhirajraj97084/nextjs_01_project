"use client";
import AnimetedTool from "@/components/AnimetedTool"
import React from 'react'
import { WavyBackground } from './ui/wavy-background';

function Instuction() {
  return (
    <div>
      <div className="main h-[40rem] flex justify-center items-center relative overflow-hidden">
        <WavyBackground className='max-w-7xl'>
            <h1 className='md:text-4xl lg:text-6xl font-extrabold sm:text-3xl text-2xl mb-8 mx-auto flex flex-col items-center justify-center'>Meet Our Instructor</h1 >
            <p className='text-base md:text-lg text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, harum?</p>
            <div className="box flex justify-center py-3">
                <AnimetedTool/>
            </div>
        </WavyBackground>

      </div>
    </div>
  )
}

export default Instuction
