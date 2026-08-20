import {
  BriefcaseBusiness,
  LucideIcon,
  Linkedin,
  Facebook,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { JSX } from "react";

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
  "Creative Web Design - TESDA Certification (2025)",
  "Programming (JAVA) NCIII - TESDA Certification (2024)",
];

export default function AboutContent() {
  return (
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
        I focus on developing clean and functional web applications using modern
        technologies. I’ve worked on projects involving JavaScript, React,
        Express, and MongoDB, including systems for managing items, debts, and
        ordering processes. I also explore hardware integration using Arduino.
        My goal in every project is simple — make the system easy to use,
        efficient, and understandable.
        <br />
        <br />
        As I continue studying and improving my skills, I offer programming
        services such as debugging, optimizing code, and creating custom
        solutions. I enjoy solving real problems through code and helping turn
        ideas into working software. Outside of coding, I’m also into cycling,
        which keeps me disciplined and consistent — the same mindset I bring
        into development.
        <br />
        <br />
        Currently, I’m focused on strengthening my full-stack development skills
        and building projects that prepare me for real-world software
        engineering work while working toward financial stability and supporting
        my family.
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

      <a
        download
        className="bg-black hover:bg-[#333333] p-2 px-3 rounded-md text-gray-100 cursor-pointer mt-2 w-full sm:w-auto dark:bg-[#333333] dark:border-gray-600 dark:text-gray-300 
            dark:hover:bg-[#444444]"
        href="/Jerson_Jay_CV.pdf"
      >
        Download Resume
      </a>
    </div>
  );
}
