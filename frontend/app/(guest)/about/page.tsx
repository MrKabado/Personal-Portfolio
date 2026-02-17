import Image from "next/image";
import { Images } from "@/assets/Images";
import { BriefcaseBusiness, Linkedin, Facebook, Github, LucideIcon, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type SocialType = {
  name: string;
  icon: LucideIcon;
}

export default function AboutPage() {
  const Socials = [
    {name: "LinkedIn", icon: Linkedin},
    {name: "Github", icon: Github},
    {name: "Facebook", icon: Facebook},
  ];

  const Contacts = [
    "jersonjaybonghanoy@gmail.com",
    "+63 991 533 7883",
    "Cebu, Philippines"
  ]

  return (
    <div className="default-div">
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

      <div className="flex flex-row gap-4 my-10">
        <div className="w-[80%] border border-transparent shadow-[0_0_2px_gray] p-5 rounded-md">

          <div className="flex items-center mb-5 gap-1">
            <BriefcaseBusiness className="w-8"/>
            <h1 className="text-xl font-semibold">About</h1>
          </div>

          <p className="text-justify">
            Hi there, I’m 
            
            <span className="border border-gray-200 mx-2 text-xs p-1 rounded-md">Jerson Jay Bonghanoy</span>
            
            , an Information Technology
            student and aspiring software developer passionate about building
            practical and reliable systems.
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
              <h1 className="text-lg font-semibold text-gray-700 mb-2">Socials</h1>
              <ul className="flex flex-col gap-4">
                {Socials.map(({icon: Icon, name}, i) => (
                  <li key={i} className="text-sm flex gap-2 items-center cursor-pointer hover:text-gray-600">
                    <Icon className="w-4 h-4"/>
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
                <h1 className="text-lg font-semibold text-gray-700 mb-2">Contact</h1>
                <ul className="flex flex-col gap-4">
                  {Contacts.map((contact, i) => (
                    <li key={i} className="text-sm flex gap-2 items-center cursor-pointer hover:text-gray-600">
                      {contact}
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          <Button className="mt-2 cursor-pointer">
            Download Resume
          </Button>
        </div>

        <div className="w-[20%] border border-transparent shadow-[0_0_2px_gray] p-5 rounded-md">
          <div className="flex items-center mb-5 gap-1">
            <Building2 className="w-8"/>
            <h1 className="text-xl font-semibold">Experience</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
