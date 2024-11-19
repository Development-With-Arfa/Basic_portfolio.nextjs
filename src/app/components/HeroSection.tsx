'use client'

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const HeroSection = () => {
  
  return (
    <section className="h-auto w-screen bg-gradient-to-b from-gray-900 to-gray-500 flex flex-col md:h-auto md:pb-10">
        <div className='mt-6 md:flex'>
        <div className="flex flex-col ml-5 md:mt-6 md:justify-start md:w-1/2">
            <h2 className='text-3xl text-slate-400 font-bold mx-auto my-3 md:text-4xl md:ml-6'>Hi I am Arfa</h2>
            <TypeAnimation
      sequence={[
        'Web Developer',
        1000, 
        'UI/UX Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      className="text-4xl text-slate-200 font-extrabold m-auto flex-wrap md:text-5xl md:ml-6 md:my-8"
      repeat={Infinity}
    />
        </div>
       
        <div>
            <Image 
                src="/hero-image.png"
                alt="img"
                height={100}
                width={100}
                className="mt-6 mx-auto h-72 w-64 md:h-96 md:w-96 md:mx-8 "
            />
        </div>

        </div>
    </section>
  )
}

export default HeroSection;