"use client";

import classnames from "classnames";
import React, { useEffect, useState, useRef } from "react";

export default function SectionView({ children }: { children: any }) {
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

  return (
    <div
      ref={ref}
      className={classnames(
        "transition-opacity w-full",
        !inView ? "mobile:opacity-10" : ""
      )}
    >
      {children}
    </div>
  );
}
