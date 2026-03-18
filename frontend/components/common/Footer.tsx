"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const Pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const TechStack = ["React / Next.js", "Express", "Neon / MySQL"];

  const ConnectContent = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/",
    },
    { name: "Github", link: "https://github.com/MrKabado" },
    { name: "Facebook", link: "https://www.facebook.com/jersonjay.bonghanoy" },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-34">
      <div className="py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 items-start mx-auto">
        
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[18px] md:text-[19px] text-gray-900 mb-2 dark:text-gray-300">
            Jerson Jay Bonghanoy
          </h2>
          <p className="text-gray-700 text-sm dark:text-gray-400">Aspiring Web Developer</p>
          <p className="text-gray-700 text-sm flex items-center gap-1 dark:text-gray-400">
            <MapPin className="w-4 text-green-800" />
            Cebu, Philippines
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-[18px] md:text-[19px] text-gray-900 mb-2 dark:text-gray-300">
            Pages
          </h1>
          <ul className="flex flex-col gap-1">
            {Pages.map((page, i) => (
              <Link href={`/${page.href}`} key={i} className="hover:underline">
                <li className="text-gray-700 text-sm dark:text-gray-400">{page.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-[18px] md:text-[19px] text-gray-900 mb-2 dark:text-gray-300">
            Tech Stack
          </h1>
          <ul className="flex flex-col gap-1">
            {TechStack.map((stack, i) => (
              <li key={i} className="text-sm text-gray-700 dark:text-gray-400">
                {stack}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-[18px] md:text-[19px] text-gray-900 mb-2 dark:text-gray-300">
            Connect
          </h1>
          <ul className="flex flex-col gap-1">
            {ConnectContent.map((connect, i) => (
              <li
                key={i}
                className="text-sm text-gray-700 cursor-pointer hover:underline dark:text-gray-400"
                onClick={() => window.open(connect.link, "_blank")}
              >
                {connect.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pb-8">
        <h1 className="text-center text-sm md:text-[16px] text-gray-600 dark:text-gray-300">
          © 2026 Jerson Jay Bonghanoy. All rights reserved.
        </h1>
      </div>
    </div>
  );
}