"use client";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function AdminHeader() {
  const [openNav, setOpenNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", link: "dashboard" },
    { name: "Recent Tasks", link: "recentTask" },
    { name: "Projects", link: "projects" },
    { name: "Contacts/Messages", link: "messages" },
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
    px-4 sm:px-6 md:px-12 py-3
    shadow-md bg-white/50 backdrop-blur-lg
    transition-transform duration-300 ease-in-out
    ${hidden ? "-translate-y-full" : "translate-y-0"}
  `}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex flex-col leading-tight">
          <h1 className="font-semibold text-sm sm:text-base md:text-lg text-gray-700">
            Jerson Jay Bonghanoy
          </h1>
          <h1 className="text-gray-500 text-xs sm:text-sm">Aspiring Dev</h1>
        </div>

        {/* Right Side */}
        <nav className="flex items-center gap-2 sm:gap-4">
          {/* Hide on small screens */}
          <h1 className="hidden sm:block font-medium text-sm md:text-md text-gray-700">
            Admin Page
          </h1>

          <ModeToggle />

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition">
              <Menu size={20} />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="lg:hidden w-48">
              {navItems.map((item, i) => (
                <div key={i}>
                  <Link href={`/admin/${item.link}`}>
                    <DropdownMenuItem className="cursor-pointer">
                      {item.name}
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
