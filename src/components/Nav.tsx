"use client";
import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [activeLink, setActiveLink] = useState<string>("About");

  const links = [
    { ref: "#main", title: "About" },
    { ref: "#experience", title: "Experience" },
    { ref: "#projects", title: "My work" },
    { ref: "#contact", title: "Contact" },
  ];

  const animationCheck = (linkText: string) => {
    if (activeLink === linkText) return "animate-pulse text-indigo-800";
  };

  return (
    <div className="lg:mt-16 mt-6 lg:ml-1">
      <div className="flex lg:flex-col gap-6">
        {links.map((l: Record<string, string>) => (
          <Link key={`nav-link-${l.ref}`} href={l.ref}>
            <span className="mr-2 text-xs mobile:text-sm">
              {activeLink === l.title ? "//" : "#"}
            </span>
            <span
              className={classNames(
                "hover:text-indigo-800 hover:relative hover:left-1 inline text-xs mobile:text-sm",
                animationCheck(l.title)
              )}
              onClick={() => setActiveLink(l.title)}
            >
              {l.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
