import SectionWrapper from "@/components/SectionWrapper";
import ExperienceDetails from "./ExperienceDetails";

export default function Experience() {
  const jobs = [
    {
      date: "Dec 2021 - Present",
      company: "Cedar Systems",
      position: "Full-stack Engineer",
      duties: [
        "Helped build a Pest Control SaaS prouduct from the ground up to help over 50 customers run their service companies",
        "Scheduling and routing, payment processing, QuickBooks integration, and much more",
        "Direct customer support and interaction",
        "Front-end, back-end, DevOps, Release management",
      ],
      stack: ["React", "Python", "Flask", "Postgresql", "GCP"],
    },
    {
      date: "June 2021 - Present",
      company: "MRGN",
      position: "Full-stack Engineer",
      duties: [
        "Contributed to the creation of a next level financial business inteligence and budgeting platform",
        "Financial modeling, simulations, and analytics",
        "Front-end, back-end",
      ],
      stack: ["React", "Redux", "Node.js", "MongoDB", "AWS", "GCP"],
    },
    {
      date: "July 2021 - Nov 2021",
      company: "Come With",
      position: "Full-stack Engineer",
      duties: [
        "Developing a social app to meet and share experiences with",
        "Scheduling, live messaging between accounts, integration with 3rd parties",
        "Front-end, back-end",
      ],
      stack: ["React", "Python", "Django", "Postgresql"],
    },
  ];
  return (
    <SectionWrapper id="experience">
      <div>
        <h1 className="text-xl mb-6 text-indigo-800">Experience</h1>
        <div className="flex flex-col gap-10 flex-grow">
          {jobs.map((j: any) => (
            <ExperienceDetails key={`job-listing-${j.title}`} job={j} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
