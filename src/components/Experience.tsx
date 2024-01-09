import SectionWrapper from "@/components/SectionWrapper";

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
            <div
              key={`job-listing-${j.title}`}
              className="flex lg:flex-row flex-col gap-4"
            >
              <div className="hidden lg:block min-w-36 text-sm text-gray-500 lg:mt-1">
                {j.date}
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{j.company}</div>
                  <div className="lg:hidden min-w-44 text-sm text-gray-500">
                    {j.date}
                  </div>
                </div>
                <div className="text-sm pt-1 pb-3 text-gray-400">
                  {j.position}
                </div>
                {j.duties.map((duty: string[]) => (
                  <div key={`job-duty-${j.title}`} className="text-sm mb-2">
                    <span></span>
                    <span>{duty}</span>
                  </div>
                ))}
                <div className="flex gap-2.5 flex-wrap mt-4">
                  {j.stack.map((item: any) => (
                    <div
                      key={`job-stack-${item}`}
                      className="bg-indigo-700 bg-opacity-60 px-3 py-1 rounded-2xl text-gray-300 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
