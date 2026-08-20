import { Building2, Circle } from "lucide-react";

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

export default function AboutExperienceTimeline() {
  return (
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
  );
}
