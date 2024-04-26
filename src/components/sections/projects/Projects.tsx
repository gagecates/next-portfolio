import SectionWrapper from "@/components/sections/SectionWrapper";
import connectFourLogo from "/public/images/connect4.webp";
import gridGraphLogo from "/public/images/grid-graph.webp";
import schedulerLogo from "/public/images/calendar-image.webp";
import sportsNStuffLogo from "/public/images/sports-n-stuff.png";
import cattleDetectionLogo from "/public/images/cattle-detection.png";
import Project from "./Project";

export default function Projects() {
  const projects = [
      {
      name: "Cattle Detection",
      image: cattleDetectionLogo,
      url: "",
      desc: "Flutter mobile app that uses YOLOv5 fully trained object detection model to find cattle in images.",
      github: "https://github.com/gagecates/cattle-detection",
      stack: ["Flutter", "Dart", "Firebase"],
    },
    {
      name: "Sports n' Stuff",
      image: sportsNStuffLogo,
      url: "https://golf-stuff-cvxqycsrp-gagecates.vercel.app/",
      desc: "Have a favorite sport you like to keep up with? Check out Sports n' Stuff to get the most recent sports news of your liking. Built with Next.js.",
      github: "https://github.com/gagecates/golf-stuff",
      stack: ["React", "Next.js"],
    },
    {
      name: "Grid Graph",
      image: gridGraphLogo,
      url: "https://grid-graph-bf4b1268c069.herokuapp.com/",
      desc: "Create a visual representation of a portion of the electrical grid. Utilizing an breath first search algorithm and Matplotlib.",
      github: "https://github.com/gagecates/grid-graph",
      stack: ["React", "Python", "Flask", "Heroku"],
    },
      {
      name: "Connnect Four",
      image: connectFourLogo,
      url: "https://gagecates.github.io/connect-four/",
      desc: "A classic game of Connect4! Play alone or with a friend to see who the champion is. Built with React.useReducer and Material UI.",
      github: "https://github.com/gagecates/connect-four",
      stack: ["React", "GitHub Pages"],
    },

  ];
  return (
    <SectionWrapper id="projects">
      <div className="grid grid-flow-col grid-rows-4 lg:grid-rows-2 gap-16">
        {projects.map((proj) => (
          <div key={`project-${proj.name}`}>
            <Project info={proj} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
