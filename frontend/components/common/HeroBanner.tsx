"use client";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Github, Phone } from "lucide-react";
import Profile from "../../assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const icons = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/",
    },
    { icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy" },
    { icon: Github, link: "https://github.com/MrKabado" },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-base md:text-lg text-green-700">
            Reach Out
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight
          dark:text-gray-200">
            Hello there! I am Jerson Jay
          </h1>

          <p className="text-gray-800 text-sm sm:text-base leading-6 mt-2 dark:text-gray-300">
            Aspiring web developer passionate about building websites, web
            applications, mobile apps, and custom software that are functional,
            user-friendly, and visually engaging. Focused on learning new
            technologies and creating practical solutions that solve real
            problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <Link href="/contact" passHref
            className="text-gray-200 rounded-lg px-5 bg-[#1A1A1A] flex items-center justify-center gap-2 w-full sm:w-auto 
             dark:bg-[#333333] dark:border-2 dark:border-[#FF9000] dark:text-[#FF9000] dark:hover:bg-[#444444]"
          >
            <Phone size={20} />
            Contact Me
          </Link>

          <Link
            href={"/projects"} passHref
            className="py-2 px-4 w-full sm:w-auto dark:text-gray-100 border rounded-lg"
          >
            Explore Projects
          </Link>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-2">
          {icons.map(({ icon: Icon, link }) => (
            <Icon
              key={link}
              size={22}
              className="text-gray-400 transition-all duration-300 cursor-pointer hover:text-black hover:-translate-y-1 dark:text-gray-200"
              onClick={() => window.open(link, "_blank")}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={Profile}
          alt="Profile"
          className="w-2/3 sm:w-1/2 md:w-full max-w-sm md:max-w-md lg:max-w-lg border rounded-xl object-cover"
          priority
        />
      </div>
    </div>
  );
}
