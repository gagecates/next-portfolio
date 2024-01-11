import SectionView from "./SectionView";

type Props = {
  job: {
    title: string;
    date: string;
    company: string;
    position: string;
    duties: string[];
    stack: string[];
  };
};
export default function ExperienceDetails({ job }: Props) {
  return (
    <SectionView>
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="hidden lg:block min-w-44 text-sm text-gray-500 lg:mt-1">
          {job.date}
        </div>
        <div>
          <div className="flex items-center gap-4">
            <div className="text-2xl text-indigo-800">{job.company}</div>
            <div className="lg:hidden min-w-44 text-sm text-gray-500">
              {job.date}
            </div>
          </div>
          <div className="text-sm pt-1 pb-3 text-gray-400">{job.position}</div>
          {job.duties.map((duty) => (
            <ul
              key={`job-duty-${job.title}`}
              className="text-sm mb-2 list-disc marker:text-indigo-800"
            >
              <li>{duty}</li>
            </ul>
          ))}
          <div className="flex gap-2.5 flex-wrap mt-4">
            {job.stack.map((item: any) => (
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
    </SectionView>
  );
}
