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
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JSX, useState } from "react";
import Container from "@/components/common/Container";
import { toast } from "sonner";

// Reusable List Section Component
type ListSectionProps<T> = {
  title: string;
  items: T[];
  renderItem: (item: T, idx: number) => JSX.Element;
};

function ListSection<T>({ title, items, renderItem }: ListSectionProps<T>) {
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-700 mb-2 dark:text-gray-300">
        {title}
      </h1>
      <ul className="flex flex-col gap-3">{items.map(renderItem)}</ul>
    </div>
  );
}

type SocialType = {
  name: string;
  icon: LucideIcon;
  link?: string;
};

type ContactType = {
  name: string;
  icon: LucideIcon;
  link?: string;
};

export default function AboutPage() {
  const Socials: SocialType[] = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/",
    },
    { name: "Github", icon: Github, link: "https://github.com/MrKabado" },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/jersonjay.bonghanoy",
    },
  ];

  const Contacts: ContactType[] = [
    { name: "jersonjaybonghanoy@gmail.com", icon: Mail },
    { name: "+63 991 533 7883", icon: Phone },
    { name: "Cebu, Philippines", icon: MapPin },
  ];

  const Achievements: string[] = [
    "With Honors – Senior High School (MSHS, 2023)",
    "Creative Web Design NCIII - TESDA Certification (2025)",
    "JAVA Programming NCIII - TESDA Certification (2024)",
  ];

  const Experience = [
    {
      heading: "Studied (Transferred)",
      where: "University of Cebu - LM",
      when: "Sep. 2023 - Dec. 2023",
    },
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
    <Container>
      {/* Header Section */}
      <div>
        <Image
          src={Images.BackgroundImage}
          alt="Background Image"
          className="w-full h-40 sm:h-52 md:h-60 object-cover rounded-2xl"
        />
        <div className="ml-4 sm:ml-10 -mt-16 sm:-mt-20 flex flex-col sm:flex-row sm:items-end items-center text-center sm:text-left gap-2">
          <div className="border-4 border-blue-600 rounded-full p-0.5">
            <Image
              src={Images.Profile}
              alt="Profile Picture"
              className="w-28 sm:w-32 md:w-40 rounded-full"
            />
          </div>
          <div className="sm:mx-4 sm:mb-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-300">
              Jerson Jay Bonghanoy
            </h1>
            <p className="text-gray-600 text-sm sm:text-md italic dark:text-gray-400">
              Aspiring Web Developer
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 my-10">
        {/* About & Achievements Section */}
        <div className="w-full lg:w-[75%] border border-transparent shadow-[0_0_1px_gray] p-4 sm:p-5 rounded-md">
          <div className="flex items-center mb-5 gap-1 dark:text-gray-300">
            <BriefcaseBusiness className="w-6 sm:w-8" />
            <h1 className="text-lg sm:text-xl font-semibold">About</h1>
          </div>

          <p className="text-sm sm:text-base text-justify dark:text-gray-300">
            Hi there, I’m
            <span className="border border-gray-200 mx-2 text-xs p-1 rounded-md dark:bg-[#333333] dark:border-gray-600 dark:text-gray-300">
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

          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Socials */}
            <ListSection
              title="Socials"
              items={Socials}
              renderItem={({ icon: Icon, name, link }, i) => (
                <li
                  key={i}
                  className="text-sm flex gap-2 items-center cursor-pointer hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  onClick={() =>
                    link && window.open(link, "_blank", "noopener,noreferrer")
                  }
                >
                  <Icon className="w-4 h-4" />
                  {name}
                </li>
              )}
            />

            {/* Contacts */}
            <ListSection
              title="Contacts"
              items={Contacts}
              renderItem={({ icon: Icon, name }, i) => (
                <li
                  key={i}
                  className="text-sm flex gap-2 items-center cursor-pointer hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Icon className="w-4 h-4" />
                  {name}
                </li>
              )}
            />

            {/* Achievements */}
            <ListSection
              title="Achievements"
              items={Achievements}
              renderItem={(achieve, i) => (
                <li
                  key={i}
                  className="text-sm flex gap-2 items-center cursor-pointer hover:text-gray-600 dark:text-gray-400"
                >
                  {achieve}
                </li>
              )}
            />
          </div>

          <Button
            className="mt-2 w-full sm:w-auto dark:bg-[#333333] dark:border-gray-600 dark:text-gray-300 
            dark:hover:bg-[#444444]"
            onClick={() => {
              toast.error(
                "Oops… Jerson Jay still hasn’t gotten around to preparing his resume. Time flies!",
              );
            }}
          >
            Download Resume
          </Button>
        </div>

        {/* Experience Section */}
        <div className="w-full lg:w-[25%] border border-transparent shadow-[0_0_1px_gray] py-5 px-4 rounded-md">
          <div className="flex items-center mb-5 gap-1">
            <Building2 className="w-6 sm:w-8" />
            <h1 className="text-lg sm:text-xl font-semibold dark:text-gray-300">
              Experience
            </h1>
          </div>

          <div className="relative px-4">
            <span className="absolute left-1.5 top-4 bottom-0 w-px bg-gray-300" />

            {Experience.map(({ heading, where, when }, i) => (
              <div className="flex items-start gap-2 -mx-3.5" key={i}>
                <Circle className="w-3 h-3 shrink-0 bg-white hover:bg-black rounded-full z-10 dark:bg-[#333333]" />
                <div className="flex flex-col gap-2 mb-5">
                  <h1 className="font-semibold text-sm sm:text-md dark:text-gray-200">
                    {heading}
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {where}
                  </p>
                  <p className="px-1 py-0.5 text-[10px] w-fit rounded-lg bg-gray-100 shadow-[0_0_1px_gray] dark:bg-[#333333] dark:text-gray-300 dark:shadow-[0_0_1px_gray]">
                    {when}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stacks Section */}
      <div className="w-full border border-transparent shadow-[0_0_1px_gray] p-4 sm:p-5 rounded-md">
        <div className="flex flex-row items-center gap-2 mb-5">
          <Code className="w-5" />
          <h1 className="font-semibold text-lg sm:text-[22px] dark:text-gray-200">
            Tech Stacks
          </h1>
        </div>

        {[
          { title: "Frontend", data: frontend },
          { title: "Backend", data: backend },
          { title: "Authentication & Security", data: authentication },
        ].map((section, idx) => (
          <div key={idx} className="flex flex-col gap-3 mb-4">
            <h1 className="font-semibold text-gray-800 dark:text-gray-300">
              {section.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {section.data.map((tech, i) => (
                <p
                  key={i}
                  className="text-gray-800 text-xs sm:text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm dark:bg-[#333333] dark:border-gray-600 dark:text-gray-300"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}

        {moreTechStacks && (
          <>
            {[
              { title: "Database", data: database },
              { title: "Cloud & Hosting", data: cloudHosting },
              { title: "Developer Tools", data: developerTools },
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col gap-3 mb-4">
                <h1 className="font-semibold text-gray-800 dark:text-gray-300">
                  {section.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {section.data.map((tech, i) => (
                    <p
                      key={i}
                      className="text-gray-800 text-xs sm:text-[13px] shadow-[0_0_1px_gray] py-1 px-2 rounded-sm dark:bg-[#333333] dark:border-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        <button
          className="flex font-semibold text-gray-800 justify-center items-center gap-1 text-[14px] 
          shadow-[0_0_1px_gray] py-1 px-3 rounded-md hover:bg-gray-100 mt-7 cursor-pointer mx-auto dark:bg-[#333333] dark:border-gray-600 dark:text-gray-300 dark:hover:bg-[#444444]"
          onClick={() => setMoreTechStacks(!moreTechStacks)}
        >
          {moreTechStacks ? "Show Less" : "Show More"}
          {moreTechStacks ? (
            <ChevronUp className="w-4" />
          ) : (
            <ChevronDown className="w-4" />
          )}
        </button>
      </div>
    </Container>
  );
}
