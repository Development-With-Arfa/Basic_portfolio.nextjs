'use client'

import {  FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";


export default function Contact() {
  async function handleSubmit(e: any) {
      e.preventDefault();
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              access_key: "1d55e920-43c4-42dc-98b3-45f0ced53148",
              name: e.target.name.value,
              email: e.target.email.value,
              message: e.target.message.value,
          }),
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
      }
  }


return (
  <>
    <form onSubmit={handleSubmit} className="h-auto w-screen bg-slate-700 my-1 py-5 px-9">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-gray-300">Lets Connect</h2>
      </div>
      
      <div className="flex flex-col gap-5 mx-auto mt-8 border border-slate-950 rounded-md py-5 md:border-hidden">
        <input type='text' name="name" placeholder="Your Name" required className="w-3/4 rounded self-center px-1 md:w-1/3 md:px-3 md:py-1 border"></input>
        <input type='email' name="email" placeholder="Your email" required className="w-3/4 rounded self-center px-1 md:w-1/3 md:px-3 md:py-1"></input>
        <textarea name="message" placeholder="Your Message" required className="w-3/4 rounded self-center px-1 md:w-1/3 md:px-3 md:py-1"></textarea>
        <button type="submit" className="flex gap-4 self-center bg-slate-950 rounded-sm text-neutral-400 px-4 py-1 justify-center md:w-1/3 hover:bg-slate-500 hover:text-slate-950"> Submit <FaArrowRight className='mt-1'/> </button>
      </div>
    </form>
  </>
);
}