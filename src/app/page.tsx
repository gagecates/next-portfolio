import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { Creds } from "@/components/Creds";
import { Header } from "@/components/Header";
import Image from "next/image";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="main">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:pb-16">
          <Header />
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
