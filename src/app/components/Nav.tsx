import React from 'react';
import { FaGithub}from "@react-icons/all-files/fa/FaGitHub";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { IoLogoVercel } from "@react-icons/all-files/io5/IoLogoVercel";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const Nav = () => {
  return (
    <nav className="h-16 w-screen bg-slate-900 px-6 py-3" >
        <div className="flex justify-end">
            <a href="mailto:arfa.naved0906@gmail.com" target='_main'>
                <MdEmail className='text-slate-300 h-6 w-12 hover:scale-150 md:w-14 md:h-8'/>
            </a>
            <a href="https://github.com/Development-With-Arfa" target='_main'>
                <FaGithub className='text-slate-300 h-6 w-12 hover:scale-150 md:w-14 md:h-8'/>
            </a>
            <a href="https://vercel.com/arfa-naveeds-projects" target='_main'>
                <IoLogoVercel className='text-slate-300 h-6 hover:scale-150 w-12 md:w-14 md:h-8'/>
            </a>
            <a href="https://www.linkedin.com/in/arfa-naveed/" target='_main'>
                <FaLinkedin className='text-slate-300 h-6 w-12 hover:scale-150 md:w-14 md:h-8'/>
            </a>
        </div>
    </nav>
  )
}

export default Nav