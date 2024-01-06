"use client";
import React, { useState, useEffect, useRef } from "react";

import classNames from "classnames";

type Props = {
  children: any;
  id?: string;
};

export default function SectionWrapper({ children, id }: Props) {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef(null);

  // check if section is in viewpoint for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null, // relative to document viewport
        rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 1.0, // it means 100% of the observed box should be visible within the root
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  console.log("in view", inView, id);

  return (
    <section
      id={id}
      className={classNames(
        "mb-16 flex flex-col justify-center bg-gray-400 p-8 rounded-lg flex-grow mr-4 bg-opacity-5 transition-text-colors",
        !inView && "text-gray-900"
      )}
      ref={ref}
    >
      {children}
    </section>
  );
}
