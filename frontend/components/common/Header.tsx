"use client";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";

type HeaderProps = {
  isVisited: string;
  setIsVisited: (value: string) => void;
};

export default function Header({ isVisited, setIsVisited }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", link: "" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Blogs", link: "blog"},
    { name: "Contact", link: "contact" },
  ];

  // 🔥 Hide / Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        px-6 md:px-34 py-3
        shadow-md bg-white/20 backdrop-blur-lg
        transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex flex-col">
          <h1 className="font-semibold">Jerson Jay Bonghanoy</h1>
          <h1 className="text-gray-500 text-sm">Aspiring Dev</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4 items-center">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  setIsVisited(item.name);
                  window.location.href = `/${item.link}`
                }}
                className={`
                  ${
                    isVisited === item.name
                      ? "bg-red-700 text-white"
                      : "bg-transparent text-gray-500"
                  }
                  text-sm cursor-pointer rounded-sm
                  px-3 py-1 text-center
                  transition-all duration-200
                  hover:text-black
                `}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        <ModeToggle />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  setIsVisited(item.name);
                  setOpen(false);
                }}
                className={`
                  ${
                    isVisited === item.name
                      ? "bg-red-700 text-white"
                      : "bg-gray-100"
                  }
                  text-sm cursor-pointer rounded-sm
                  px-4 py-2 text-center
                  transition-all duration-200
                `}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
