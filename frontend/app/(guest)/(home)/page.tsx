"use client";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Github, Calendar, ArrowRight } from "lucide-react";
import Profile from "../../../assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/common/ProjectCard";

export default function HomePage() {
  const icons = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/",
    },
    { icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy.5/" },
    { icon: Github, link: "https://github.com/MrKabado" },
  ];

  return (
    <div className="px-34 py-22">
      <div className="flex flex-row justify-evenly gap-10">
        <div className="w-full flex flex-col gap-4 mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg text-green-700">Message me</h1>
            <h1 className="text-5xl font-bold">Hey, I am Jerson Jay</h1>
            <p className="text-gray-800 mt-3 leading-6 dark:text-white">
              A passionate Software Developer dedicated on building websites,
              web applications, mobile apps, and custom software that are not
              only highly functional but also visually captivating.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="default"
              className="text-gray-200 text-md py-6 px-4 bg-[#1A1A1A] cursor-pointer"
            >
              <Calendar size={24} />
              Free Consultation
            </Button>
            <Button variant="outline" className="py-6 px-4 cursor-pointer">
              Explore Projects
            </Button>
          </div>

          <div className="flex flex-row gap-3">
            {icons.map(({ icon: Icon, link }) => (
              <Icon
                key={link}
                size={24}
                className="
                  text-gray-400 transition-all duration-300 transform cursor-pointer
                  hover:text-black hover:-translate-y-1
                "
                onClick={() => window.open(link, "_blank")}
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <Image
            src={Profile}
            alt="Profile"
            className="w-50 md:w-100 border rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="mt-40">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center text-md bg-gray-200 border border-transparent rounded-md p-1 w-fit">
            Recent Projects
          </h1>
          <h1 className="font-bold text-4xl">Check out my recent work</h1>
          <p className="">
            I’ve worked on a variety of projects, from simple websites to <br />{" "}
            complex web applications. Here are a few of my favorites.
          </p>
        </div>

        {/* PROJECT CARD HOLDER */}
        <div className="grid grid-cols-3 mt-10 mb-5 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <Link href={"/about"} className="flex items-center text-gray-800 gap-1">
          <h1 className="text-md font-semibold">More Projects</h1>
          <ArrowRight className="w-5" />
        </Link>
      </div>
    </div>
  );
}
