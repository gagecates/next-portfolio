"use client";
import React from "react";

type Props = {
  children: any;
  id?: string;
};

export default function SectionWrapper({ children, id }: Props) {
  return (
    <section
      id={id}
      className={
        "mb-16 flex flex-col items-center justify-center p-8 rounded-lg lg:mr-4 bg-opacity-5 w-full min-h-screen"
      }
    >
      {children}
    </section>
  );
}
