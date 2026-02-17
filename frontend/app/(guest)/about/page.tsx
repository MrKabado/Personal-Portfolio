"use client";

import Image from "next/image";
import { Images } from "@/assets/Images";
import {
  BriefcaseBusiness,
  Linkedin,
  Facebook,
  Github,
  LucideIcon,
  Building2,
  Circle,
  Code,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { div, p } from "framer-motion/client";
import { useState } from "react";
import Link from "next/link";

type SocialType = {
  name: string;
  icon: LucideIcon;
};

export default function AboutPage() {
  const Socials = [
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/" },
    { name: "Github", icon: Github, link: "https://github.com/MrKabado" },
    { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy" },
  ];

  const Contacts = [
    "jersonjaybonghanoy@gmail.com",
    "+63 991 533 7883",
    "Cebu, Philippines",
  ];

  const Experience = [
    {
      heading: "Studying",
      where: "Cordova Public College",
      when: "Jan. 2024 - Present",
    },
  ];

  const frontend = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Javascript",
    "HTML5",
    "CSS3",
    "ShadCN",
  ];
  const backend = ["Express.js", "REST"];
  const authentication = ["JWT"];
  const database = ["MongoDB", "MySQL", "Neon"];
  const cloudHosting = ["Vercel", "Render"];
  const developerTools = ["Github", "Postman", "Figma", "VS Code", "Git"];

  const [moreTechStacks, setMoreTechStacks] = useState(false);

  return (
    <div className="default-div">
      {/* heading w/ image */}
      <div>
        <Image
          src={Images.BackgroundImage}
          alt={"Background Image"}
          className="w-full h-60 object-cover rounded-2xl"
        />

        <div className="ml-10 -mt-20 flex flex-row items-end">
          <div className="border-4 border-blue-600 rounded-full p-0.5">
            <Image
              src={Images.Profile}
              alt={"Profile Picture"}
              className="w-40 rounded-full"
            />
          </div>

          <div className="mx-4 mb-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              Jerson Bonghanoy
            </h1>
            <p className="text-gray-600 text-md italic">
              Aspiring Web Developer
            </p>
          </div>
        </div>
      </div>

      {/* about and experience */}
      <div className="flex flex-row gap-4 my-10">
        <div className="w-[80%] border border-transparent shadow-[0_0_1px_gray] p-5 rounded-md">
          <div className="flex items-center mb-5 gap-1">
            <BriefcaseBusiness className="w-8" />
            <h1 className="text-xl font-semibold">About</h1>
          </div>

          <p className="text-justify">
            Hi there, I’m
            <span className="border border-gray-200 mx-2 text-xs p-1 rounded-md">
              Jerson Jay Bonghanoy
            </span>
            , an Information Technology student and aspiring software developer
            passionate about building practical and reliable systems.
            <br />
            <br />
            I focus on developing clean and functional web applications using
            modern technologies. I’ve worked on projects involving JavaScript,
            React, Express, and MongoDB, including systems for managing items,
            debts, and ordering processes. I also explore hardware integration
            using Arduino. My goal in every project is simple — make the system
            easy to use, efficient, and understandable.
            <br />
            <br />
            As I continue studying and improving my skills, I offer programming
            services such as debugging, optimizing code, and creating custom
            solutions. I enjoy solving real problems through code and helping
            turn ideas into working software. Outside of coding, I’m also into
            cycling, which keeps me disciplined and consistent — the same
            mindset I bring into development.
            <br />
            <br />
            Currently, I’m focused on strengthening my full-stack development
            skills and building projects that prepare me for real-world software
            engineering work while working toward financial stability and
            supporting my family.
          </p>

          <div className="my-4 flex gap-10">
            <div>
              <h1 className="text-lg font-semibold text-gray-700 mb-2">
                Socials
              </h1>
              <ul className="flex flex-col gap-4">
                {Socials.map(({ icon: Icon, name, link }, i) => (
                    <li
                    className="text-sm flex gap-2 items-center cursor-pointer hover:text-gray-600"
                    key={i}
                    onClick={() => window.open(`${link}`)}
                  >
                    <Icon className="w-4 h-4" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-700 mb-2">
                Contact
              </h1>
              <ul className="flex flex-col gap-4">
                {Contacts.map((contact, i) => (
                  <li
                    key={i}
                    className="text-sm flex gap-2 items-center cursor-pointer hover:text-gray-600"
                  >
                    {contact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button className="mt-2 cursor-pointer">Download Resume</Button>
        </div>

        <div className="w-[20%] border border-transparent shadow-[0_0_1px_gray] py-5 pl-5 rounded-md">
          <div className="flex items-center mb-5 gap-1">
            <Building2 className="w-8" />
            <h1 className="text-xl font-semibold">Experience</h1>
          </div>

          <div className="relative px-4">
            {/* vertical line */}
            <span className="absolute left-1.75 top-4 bottom-0 w-px bg-gray-300" />

            {Experience.map(({ heading, where, when }, i) => (
              <div className="flex items-start gap-2 -mx-3.5" key={i}>
                <Circle className="w-3 h-3 shrink-0 bg-white hover:bg-black rounded-full z-10" />

                <div className="flex flex-col gap-2 mb-5">
                  <h1 className="font-semibold text-md">{heading}</h1>
                  <p className="text-xs text-gray-600">{where}</p>
                  <p className="px-1 py-0.5 text-[10px] w-fit rounded-lg bg-gray-100 shadow-[0_0_1px_gray]">
                    {when}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border border-transparent shadow-[0_0_1px_gray] p-5 rounded-md">
        <div className="flex flex-row items-center gap-2 mb-5">
          <Code className="w-5" />
          <h1 className="font-semibold text-[22px]">Tech Stacks</h1>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <h1 className="font-semibold text-gray-800">Frontend</h1>
          <div className="flex gap-3">
            {frontend.map((tech, i) => (
              <p
                key={i}
                className="text-gray-800 text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <h1 className="font-semibold text-gray-800">Backend</h1>
          <div className="flex gap-3">
            {backend.map((tech, i) => (
              <p
                key={i}
                className="text-gray-800 text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <h1 className="font-semibold text-gray-800">
            Authentication & Security
          </h1>
          <div className="flex gap-3">
            {authentication.map((tech, i) => (
              <p
                key={i}
                className="text-gray-800 text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        {moreTechStacks && (
          <>
            <div className="flex flex-col gap-3 mb-4">
              <h1 className="font-semibold text-gray-800">Database</h1>
              <div className="flex gap-3">
                {database.map((tech, i) => (
                  <p
                    key={i}
                    className="text-gray-800 text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <h1 className="font-semibold text-gray-800">Cloud & Hosting</h1>
              <div className="flex gap-3">
                {cloudHosting.map((tech, i) => (
                  <p
                    key={i}
                    className="text-gray-800 text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <h1 className="font-semibold text-gray-800">Developer Tools</h1>
              <div className="flex gap-3">
                {developerTools.map((tech, i) => (
                  <p
                    key={i}
                    className="text-gray-800 text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}

        <button
          className="flex flex-row font-semibold text-gray-800 justify-center items-center gap-1 text-[14px] 
  shadow-[0_0_1px_gray] py-1 px-2 rounded-md hover:bg-gray-100 mt-7 cursor-pointer"
          onClick={() => setMoreTechStacks(!moreTechStacks)}
        >
          {moreTechStacks ? "Show Less" : "Show More"}{" "}
          {moreTechStacks ? (
            <ChevronUp className="inline-block w-4" />
          ) : (
            <ChevronDown className="inline-block w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
