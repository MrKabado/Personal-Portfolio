"use client";

import Link from "next/link";

export default function Footer() {
  const Pages = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "projects"},
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  const TechStack = ["React / Next.js", "Express", "Neon / MySQL"];

  const ConnectContent = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/" },
    { name: "Github", link: "https://github.com/MrKabado" },
    { name: "Facebook", link: "https://www.facebook.com/jersonjay.bonghanoy" },
  ];

  return (
    <div className="default-div flex flex-row justify-between items-baseline">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg">Jerson Bonghanoy</h2>
        <p className="text-gray-700 text-sm">Aspiring Web Developer</p>
        <p className="text-gray-700 text-sm">Cebu, Philippines</p>
      </div>

      <div>
        <h1 className="font-semibold text-lg">Pages</h1>
        <ul className="flex flex-col gap-1">
          {Pages.map((page, i) => (
            <Link href={`/${page.href}`} key={i} className="hover:underline">
              <li className="text-gray-700 text-sm">{page.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="font-semibold text-lg">Tech Stack</h1>
        <ul className="flex flex-col gap-1">
          {TechStack.map((stack, i) => (
            <li key={i} className="text-sm text-gray-700">
              {stack}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="font-semibold text-lg">Connect</h1>
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
  );
}
