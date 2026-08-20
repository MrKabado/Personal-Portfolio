"use client"

import { Code, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react";

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
  const backend = ["Express.js", "REST", "Laravel"];
  const authentication = ["JWT", "Laravel Sanctum"];
  const database = ["MongoDB", "MySQL", "Neon"];
  const cloudHosting = ["Vercel", "Render", "Docker"];
  const developerTools = ["Github", "Postman", "Figma", "VS Code", "Git"];

export default function AboutTechStacks() {
  const [moreTechStacks, setMoreTechStacks] = useState(false);
  
  return (
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
  )
}