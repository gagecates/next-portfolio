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
    <div className="ml-16">
      <div className="text-5xl mb-4 title-font ">{name()}</div>
      <p className="ml-1">Full-stack Software Engineer</p>
      <Nav />
    </div>
  );
}
