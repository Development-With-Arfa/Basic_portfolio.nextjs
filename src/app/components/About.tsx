import React from 'react';

const About = () => {
  return (
    <section className="h-auto w-screen bg-slate-300 py-5 ">  
        <h2 className="text-4xl text-center text-slate-600 font-bold">ABOUT</h2>
        <div className='md:flex md:my-4'>
          <div className="md:w-1/2">
              <p className="w-full text-center text-slate-700 flex flex-wrap px-3 my-5 md:text-justify">Hi there, I am Arfa passionate web developer with a knack for creating clean, user-friendly, responsive websites. I specialize in front-end development, focusing on HTML, CSS, JavaScript, and modern frameworks like Next.js. As a student looking forward to learn Gen.AI. 
              <br></br>    
                  I love staying on top of the latest industry trends and technologies, constantly learning and refining my skills to ensure that I deliver the best results for my clients.
              <br></br> 
                  <span className="font-semibold mx-auto mt-4">Lets connect and build something amazing together!</span>
              </p>
              <div className="h-[3px] w-1/2 rounded-md mx-auto bg-slate-600 md:hidden"></div>
          </div>
          

          <div className="flex flex-col my-5 text-center md:w-1/2  md:px-5 md:ml-6 md:mt-8 md:flex-row">
            <div className=' md:flex md:gap-5 md:flex-col'>
              <div className="pb-4 md:px-4">
                <h3 className="text-md text-slate-600  font-bold md:text-lg">Residence</h3>
                <p className="text-slate-800">Karachi, Pakistan</p>
              </div>
              <div className="pb-4 md:px-4">
                <h3 className="text-md text-slate-600 font-bold md:text-lg">Born</h3>
                <p className="text-slate-800">2005</p>
              </div>
            </div>

            <div className="md:flex md:flex-col md:gap-5">
              <div className="pb-4 md:px-4">
                <h3 className="text-md text-slate-600 font-bold md:text-lg">Hobbies</h3>
                <p className="text-slate-800">Art & Craft, Development</p>
              </div>
              <div className="pb-4 md:px-3">
                <h3 className="text-md text-slate-600 font-bold md:text-lg">Education</h3>
                <p className="text-slate-800">Inter In Computer Science</p>
              </div>
            </div>
            
            <div className="-ml-5">
              <div className="pb-4 md:px-4">
                <h3 className="text-md text-slate-600 font-bold md:text-lg">Email</h3>
                <p className="text-slate-800">arfa.naved0906@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About;