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
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const [openNav, setOpenNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

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

    const logoutBtnSideBar = async () => {
    try {
      const response = await api.post('/api/admin/logout');

      if (response.data.success) {
        localStorage.removeItem("isAdminLoggedIn");
        toast.success("Logout successfully");
        router.push('/');
      }

    } catch (error) {
      toast.error("Error in logouting admin");
      console.log(error);
      return;
    }
  }

  return (
    <header
      className={`
    fixed top-0 left-0 w-full z-50
    px-3 md:px-10 py-3
    shadow-md bg-white/50 backdrop-blur-lg
    transition-transform duration-300 ease-in-out
    ${hidden ? "-translate-y-full" : "translate-y-0"}
    dark:bg-[#333333]/90 dark:shadow-lg
  `}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex flex-col leading-tight">
          <h1 className="font-semibold text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-100">
            Jerson Jay Bonghanoy
          </h1>
          <h1 className="text-gray-500 text-xs sm:text-sm dark:text-gray-400">
            Aspiring Dev
          </h1>
        </div>

        {/* Right Side */}
        <nav className="flex items-center gap-2 sm:gap-4">
          {/* Hide on small screens */}
          <h1 className="hidden sm:block font-medium text-sm md:text-md text-gray-700 dark:text-gray-200">
            Admin Page
          </h1>

          <ModeToggle />

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition">
              <Menu size={20} />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="lg:hidden w-48 shadow-md bg-white/50 backdrop-blur-lg border-0"
            >
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

              <DropdownMenuItem 
                onClick={logoutBtnSideBar}
                className="text-red-600 font-medium"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
