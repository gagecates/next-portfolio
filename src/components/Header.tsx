import Nav from "./Nav";

export function Header() {
  const name = () => {
    return ["G", "a", "g", "e", " ", "C", "a", "t", "e", "s"].map(
      (letter: string, idx: number) => (
        <span
          key={`name-${idx}-${letter}`}
          className="hover:text-indigo-800 transform cursor-pointer"
        >
          {letter}
        </span>
      )
    );
  };
  return (
    <div className="lg:ml-16 lg:pt-24 mt-4 flex flex-col items-center lg:items-start">
      <div className="text-3xl mobile:text-5xl mb-4 title-font">{name()}</div>
      <div className="lg:w-5/6">
        <div className="ml-1 typewriter text-xs mobile:text-lg tracking-tighter">
          Full-stack Software Engineer
        </div>
      </div>
      <Nav />
    </div>
  );
}
