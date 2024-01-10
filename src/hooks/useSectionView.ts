"use client"

import React, {useState, useEffect, useRef, RefObject} from 'react'

export default function useSectionView(): [RefObject<HTMLDivElement>, boolean] {
    const ref = useRef<any>(null);
    const [inView, setInView] = useState<boolean>(false);


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
  }, [ref]);

  return [ref, inView]
}