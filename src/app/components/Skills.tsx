import React from 'react';
import Image from 'next/image';
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5';
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { IoLogoJavascript } from "@react-icons/all-files/io5/IoLogoJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";


const Skills = () => {
  return (
    <section className="h-auto w-screen flex flex-wrap bg-gradient-to-t from-gray-700 via-gray-200 to-slate-300 mt-1 py-10 md:h-auto">
        <div className="bg-slate-950  w-5/6 transform translate-y-auto mx-auto py-4 md:h-3/4 md:pb-20">
            <h2 className="text-2xl mb-4 text-slate-400 font-bold text-center md:text-5xl">What I do</h2>

            <div className="px-3 flex flex-wrap gap-8 justify-center md:gap-14 md:align-middle md:mt-14">
                <div className="h-28 w-16">
                    <FaHtml5 className='h-20 w-12 text-orange-600 mx-auto md:min-h-28 md:w-16'/>
                    <h3 className="flex justify-center text-slate-300">HTML</h3>
                </div>
                <div className="h-28 w-16">
                    <FaCss3Alt className='h-20 w-12 text-blue-700 mx-auto md:min-h-28 md:w-16'/>
                    <h3 className="flex justify-center text-slate-300">CSS</h3>
                </div>
                <div className="h-28 w-16">
                    <IoLogoJavascript className='h-20  w-12 text-yellow-300 mx-auto md:min-h-28 md:w-16'/>
                    <h3 className="flex justify-center text-slate-300">Javascript</h3>
                </div>
                <div className="h-28 w-16">
                    <SiTypescript className='h-20  w-12 text-sky-600 mx-auto md:min-h-28 md:w-16' />
                    <h3 className="flex justify-center text-slate-300">Typescript</h3>
                </div>
                <div className="h-28 w-16">
                    <SiNextDotJs className='h-20  w-12 text-slate-100 mx-auto md:min-h-28 md:w-16'/>
                    <h3 className="flex justify-center text-slate-300">Next js</h3>
                </div>
                <div className="h-28 w-16">
                    <FiFigma className='h-20 text-slate-100 w-12 mx-auto md:min-h-28 md:w-16'/>
                    <h3 className="flex justify-center text-slate-300">Next js</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;