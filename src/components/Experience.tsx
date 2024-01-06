import SectionWrapper from "@/components/SectionWrapper";

export default function Experience() {
  const jobs = [
    {
      date: "Dec 2021 - Present",
      title: "Cedar Systems",
      position: "Full-stack Engineer",
      description:
        "Helped build a Pest Control SaaS prouduct from the ground up. With over 50 live customers, I handled frontend, backend, and devops. As well as interacting with customers.",
      stack: ["React", "Python", "Flask", "Postgresql", "GCP"],
    },
    {
      date: "June 2021 - Present",
      title: "MRGN",
      position: "Full-stack Engineer",
      description: "Finance",
      stack: ["React", "Node.js", "MongoDB", "AWS", "GCP"],
    },
    {
      date: "July 2021 - Nov 2021",
      title: "Come With",
      position: "Full-stack Engineer",
      description: "Social",
      stack: ["React", "Python", "Django", "Postgresql"],
    },
  ];
  return (
    <SectionWrapper id="experience">
      <h1>Experience</h1>
      <div className="flex flex-col gap-6">
        {jobs.map((j: any) => (
          <div key={`job-listing-${j.title}`} className="flex gap-4">
            <div className="min-w-44">{j.date}</div>
            <div>
              <div className="text-lg">{j.title}</div>
              <div className="text-sm pt-1 pb-3 text-gray-400">
                {j.position}
              </div>
              <div className="text-sm mb-4">{j.description}</div>
              <div className="flex gap-2.5">
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
    </SectionWrapper>
  );
}
