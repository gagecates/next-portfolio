import SectionWrapper from "@/components/SectionWrapper";
import connectFourLogo from "../../public/images/connect4.webp";
import Project from "./Project";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h1 className="text-xl mb-6 text-indigo-800">My Work</h1>
      <div className="grid grid-flow-col grid-rows-2 gap-20">
        <Project name="Connnect Four" image={connectFourLogo} />
        <Project name="Grid Graph" image={connectFourLogo} />
        <Project name="Let me check my schedule" image={connectFourLogo} />
        <Project name="Where to?" image={connectFourLogo} />
      </div>
    </SectionWrapper>
  );
}
