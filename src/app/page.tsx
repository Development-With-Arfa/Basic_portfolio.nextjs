import Image from "next/image";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="m-0 p-0 container">
      <Nav/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Contact/>
    </main>
  );
}


