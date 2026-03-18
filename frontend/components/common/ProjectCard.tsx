"use client";
import Image from "next/image";
import { Globe, Pencil, Trash2 } from "lucide-react";

type Props = {
  ImageSrc: string;
  ImageAlt: string;
  ProjectTitle: string;
  ProjectDescription: string;
  ProjectStack: string[];
  ProjectLink: string;
  isAdmin: boolean;
};

export default function ProjectCard({
  ImageSrc,
  ImageAlt,
  ProjectTitle,
  ProjectDescription,
  ProjectStack,
  ProjectLink,
  isAdmin
}: Props) {
  return (
    <div className="shadow-[0_0_4px_rgba(0,0,0,0.3)] rounded-md 
      hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-shadow duration-200
      dark:bg-[#1A1A1A] dark:shadow-[0_0_6px_rgba(255,255,255,0.1)]">
      
      <Image
        src={
          ImageSrc ||
          "https://res.cloudinary.com/dedef9fpx/image/upload/v1772987691/fd22bff2-ab37-4436-8cd3-6c1e87f2ec87.png"
        }
        alt={ImageAlt || "Image Title"}
        className="object-cover rounded-t-md"
        width={400}
        height={400}
        loading="eager"
      />

      <div className="p-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold dark:text-gray-100">{ProjectTitle}</h1>

            <div className={`flex justify-end gap-2 ${isAdmin ? "block" : "hidden"}`}>
              <Pencil className="w-5 text-blue-800 hover:text-blue-300 dark:text-blue-400 dark:hover:text-blue-300" />
              <Trash2 className="w-5 text-red-800 hover:text-red-300 dark:text-red-500 dark:hover:text-red-400" />
            </div>
            
          </div>
          <p className="text-[13px] text-gray-500 leading-4 text-justify dark:text-gray-300">
            {ProjectDescription}
          </p>
        </div>

        <div className="flex gap-2 mt-5">
          {(ProjectStack || []).map((stack, i) => (
            <h1
              key={i}
              className="text-[10px] font-medium bg-gray-200 p-1 rounded-sm dark:bg-[#333333] dark:text-gray-300"
            >
              {stack}
            </h1>
          ))}
        </div>

        <button
          className="flex gap-1 items-center text-[11px] font-semibold bg-black text-white px-2 mt-4 rounded-md
            cursor-pointer hover:bg-[#333333] dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400"
          onClick={() => window.open(`${ProjectLink}`)}
        >
          <span>
            <Globe className="w-3" />
          </span>
          Website
        </button>
      </div>
    </div>
  );
}