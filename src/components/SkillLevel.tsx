"use client";

import useSectionView from "@/hooks/useSectionView";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  name: string;
  width: string;
  logo: any;
};

export default function SkillLevel({ name, width, logo }: Props) {
  const [ref, inView] = useSectionView();

  return (
    <div ref={ref} className="flex gap-4">
      <Image src={logo} alt={name} width={40} height={60} />
      {/* <div className="min-w-16">{name}</div> */}
      <div
        className={classNames(`${width} rounded-2xl h-9`, {
          "animated-fill": inView,
        })}
      />
    </div>
  );
}
