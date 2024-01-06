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
    { ref: "#projects", title: "Projects" },
    { ref: "#contact", title: "Contact" },
  ];

  const animationCheck = (linkText: string) => {
    if (activeLink === linkText) return "animate-pulse text-indigo-800";
  };

  return (
    <div className="mt-16 ml-1">
      <div className="flex flex-col gap-6">
        {links.map((l: Record<string, string>) => (
          <Link key={`nav-link-${l.ref}`} href={l.ref}>
            <span
              className={classNames(
                "hover:text-indigo-800 hover:relative hover:left-1 inline",
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
