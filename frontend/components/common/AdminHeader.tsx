"use client";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname(); // Get current path

  const navItems = [
    { name: "Home", link: "" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Blogs", link: "blog" },
    { name: "Contact", link: "contact" },
  ];

  // 🔥 Hide / Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
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
        px-6 md:px-12 py-3
        shadow-md bg-white/50 backdrop-blur-lg
        transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg text-gray-700">Jerson Jay Bonghanoy</h1>
          <h1 className="text-gray-500 text-sm">Aspiring Dev</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="flex items-center space-x-4">
          <h1 className="font-medium text-md text-gray-700">Admin Page</h1>
          <ModeToggle />
        </nav>
      </div>

    </header>
  );
}
