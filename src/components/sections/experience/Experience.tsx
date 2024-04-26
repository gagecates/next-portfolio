import SectionWrapper from "@/components/sections/SectionWrapper";
import ExperienceDetails from "./ExperienceDetails";

export default function Experience() {
  const jobs = [
      {
      date: "Jan 2024 - Present",
      company: "MRGN",
      position: "Full-stack Engineer",
      description:
        "MRGN is a next level business intelligence platform. Providing all the tools to help businesses of all sizes visualize and act on vital financial aspects. From burn rate to dynamic simulations to make proactive decisions",
      duties: [
        "Used the newest technologies to create a user friendly dashboard full of key metrics and KPIs",
        "Re-created the existing tables to make a globally re-usable and easy to implement component that reduced thousands of lines of code",
        "Handled an integration with a third party that captured user input and then mapped it accordingly to a MongoDB",
        "Utilized Google Tag Manger to provide tracking throughout the use of the application",
      ],
      stack: ["React", "Redux", "Node.js", "MongoDB", "AWS", "GCP"],
    },
    {
      date: "Dec 2021 - Jan 2024",
      company: "Cedar Systems",
      position: "Full-stack Engineer",
      description:
        "Cedar provides modern software solutions for pest control managers and technicians. From scheduling and routing to payment processing and invoicing. Cedar does everything needed to optimally run a business",
      duties: [
        "Helped build and maintain features to help over 50 customers",
        "Lead a QuickBooks integration that allowed customers to seamlessly sync their accounting data",
        "Designated as the release manager in charge of scheduled staging and production releases",
        "Built a routing and optimal routing system that helped technicians save time and money while completing their day to day routes",
        "Handled integrating a payment processing system that allowed users to directly make payments and register their payment methods",
        "Provided direct customer support and interaction",
        "Core contributor of creating a user friendly drag and drop calendar system that made scheduling jobs a breeze",
      ],
      stack: ["React", "Python", "Flask", "PostgreSQL", "GCP"],
    },
    {
      date: "Jul 2021 - Nov 2021",
      company: "Come With",
      position: "Full-stack Engineer",
      description:
        "Come With is a social platform that makes creating experiences with others not only easier but more enjoyable. Offering the ability to create meetups with other like minded individuals",
      duties: [
        "Core contributor to a live messaging feature between accounts",
        "Lead an integration with a third party that asynchronously created accounts for users, saving time and effort for users",
        "Helped provide an key insights to the data and models via an admin panel",
      ],
      stack: ["React", "Python", "Django", "Postgresql"],
    },
  ];
  return (
    <SectionWrapper id="experience">
      <div>
        <div className="flex flex-col gap-16 flex-grow">
          {jobs.map((j: any) => (
            <ExperienceDetails key={`job-listing-${j.title}`} job={j} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
