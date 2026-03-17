"use client";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Github, Calendar } from "lucide-react";
import Profile from "../../assets/profile.jpg";
import Image from "next/image";

export default function HeroBanner() {
  const icons = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/",
    },
    { icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy.5/" },
    { icon: Github, link: "https://github.com/MrKabado" },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-base md:text-lg text-green-700">
            Message me
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hey, I am Jerson Jay
          </h1>

          <p className="text-gray-800 dark:text-white text-sm sm:text-base leading-6 mt-2">
            A passionate Software Developer dedicated on building websites, web
            applications, mobile apps, and custom software that are not only
            highly functional but also visually captivating.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <Button className="text-gray-200 py-5 md:py-6 px-5 bg-[#1A1A1A] flex items-center justify-center gap-2 w-full sm:w-auto">
            <Calendar size={20} />
            Free Consultation
          </Button>

          <Button
            variant="outline"
            className="py-5 md:py-6 px-5 w-full sm:w-auto"
          >
            Explore Projects
          </Button>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-2">
          {icons.map(({ icon: Icon, link }) => (
            <Icon
              key={link}
              size={22}
              className="text-gray-400 transition-all duration-300 cursor-pointer hover:text-black hover:-translate-y-1"
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