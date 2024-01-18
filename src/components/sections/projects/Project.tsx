"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectOverlay from "./ProjectOverlay";
import SectionView from "../SectionView";

type Props = {
  info: {
    image: any;
    name: string;
    url: string;
    desc: string;
    github: string;
    stack: string[];
  };
};

type ProjectModalType = {
  info: {
    image: any;
    name: string;
    desc: string;
    url: string;
    github: string;
    stack: string[];
  };
};

export default function Project({ info }: Props) {
  const [projectOverlay, setProjectOverlay] = useState<ProjectModalType | null>(
    null
  );

  return (
    <SectionView>
      <div
        onClick={() => setProjectOverlay({ info })}
        className="w-64 h-64 lg:w-80 lg:h-80 relative"
        onMouseLeave={() => setProjectOverlay(null)}
      >
        <Image
          src={info.image}
          alt={info.name}
          className="rounded-xl lg:opacity-30 hover:opacity-100 transition-opacity cursor-pointer w-full h-full"
        />
        {projectOverlay && <ProjectOverlay {...projectOverlay} />}
      </div>
    </SectionView>
  );
}
