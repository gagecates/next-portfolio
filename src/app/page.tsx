import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/experience/Experience";
import { Creds } from "@/components/Creds";
import { Header } from "@/components/Header";
import Image from "next/image";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <main id="main">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:pb-16">
          <div className="absolute top-0 right-5 mobile:relative">
            <Header />
          </div>
          <div className="hidden lg:block">
            <Creds />
          </div>
        </div>
        <div className="w-auto lg:w-2/3 flex flex-col items-center">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <div className="lg:hidden mb-6 lg:mb-0">
            <Creds />
          </div>
        </div>
      </div>
    </main>
  );
}
