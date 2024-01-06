import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { Creds } from "@/components/Creds";
import { Header } from "@/components/Header";
import Image from "next/image";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="main">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:pt-24 lg:pb-16">
          <Header />
          <Creds />
        </div>
        <div className="pt-24 lg:w-2/3 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}
