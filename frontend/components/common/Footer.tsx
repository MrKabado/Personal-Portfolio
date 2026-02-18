"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const Pages = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about" },
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
    <div>
      <div className="py-12 mx-34 grid grid-cols-4 gap-24 items-baseline"> 
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[19px] text-gray-900 mb-2">Jerson Bonghanoy</h2>
          <p className="text-gray-700 text-sm">Aspiring Web Developer</p>
          <p className="text-gray-700 text-sm flex items-center gap-1">
            <span>
              <MapPin className="w-4 inline-block text-green-800" />
            </span>
            Cebu, Philippines
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-[19px] text-gray-900 mb-2">Pages</h1>
          <ul className="flex flex-col gap-1">
            {Pages.map((page, i) => (
              <Link href={`/${page.href}`} key={i} className="hover:underline">
                <li className="text-gray-700 text-sm">{page.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-[19px] text-gray-900 mb-2">Tech Stack</h1>
          <ul className="flex flex-col gap-1">
            {TechStack.map((stack, i) => (
              <li key={i} className="text-sm text-gray-700">
                {stack}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-[19px] text-gray-900 mb-2">Connect</h1>
          <ul className="flex flex-col gap-1">
            {ConnectContent.map((connect, i) => (
              <li
                key={i}
                className="text-sm text-gray-700 cursor-pointer hover:underline"
                onClick={() => window.open(`${connect.link}`)}
              >
                {connect.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-center text-[16px] text-gray-600">© 2026 Jerson Jay Bonghanoy. All rights reserved.</h1>
      </div>
    </div>
  );
}
