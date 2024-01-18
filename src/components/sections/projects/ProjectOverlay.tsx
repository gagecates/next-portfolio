import { Span } from "next/dist/trace";

type Props = {
  info: {
    name: string;
    desc: string;
    url: string;
    github: string;
    stack: string[];
  };
};

export default function ProjectOverlay({ info }: Props) {
  const { name, desc, url, github, stack } = info;
  return (
    <div className=" text-center p-4 rounded-xl absolute top-0 left-0 w-full h-full bg-gray-200 bg-opacity-90 flex gap-1 justify-between items-center flex-col text-black animate-slideDown duration-1000">
      <div className="text-xl text-indigo-800">{name}</div>
      <div className="text-xs mobile:text-lg">{desc}</div>
      <div className="flex gap-2 flex-wrap">
        {stack.map((item) => (
          <div
            key={`${name}-stack-${item}`}
            className="text-xs bg-indigo-700 bg-opacity-90 px-3 py-1 rounded-2xl text-gray-300 mobile:text-smallish"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center text-indigo-800 text-smallish">
        <a href={url} target="_blank" className="hover:text-black">
          View live site
        </a>
        <a href={github} target="_blank" className="hover:text-black">
          View code
        </a>
      </div>
    </div>
  );
}
