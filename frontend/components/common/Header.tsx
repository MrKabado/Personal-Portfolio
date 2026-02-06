"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    {name: "Blogs"},
    { name: "Contact" }
  ];

  return (
    <header className="px-6 md:px-34 py-3 shadow-md bg-white/20 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex flex-col">
          <h1 className="font-semibold">Jerson Jay Bonghanoy</h1>
          <h1 className="text-gray-500 text-sm">Aspiring Dev</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4 items-center">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="
                  text-gray-500 text-sm cursor-pointer rounded-sm
                  px-3 py-1 w-15 text-center
                  transition-all duration-200
                  hover:text-black
                "
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

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
            {navItems.map((item, i) => (
              <li
                key={i}
                className="
                  text-sm cursor-pointer bg-gray-100 rounded-sm
                  px-4 py-2 text-center
                  transition-all duration-200
                  hover:font-semibold
                "
                onClick={() => setOpen(false)}
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