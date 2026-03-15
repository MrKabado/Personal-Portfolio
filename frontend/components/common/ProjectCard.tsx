"use client";
import Image from "next/image";
import { Globe } from "lucide-react";

type Props = {
  ImageSrc: string;
  ImageAlt: string;
  ProjectTitle: string;
  ProjectDescription: string;
  ProjectStack: string[];
  ProjectLink: string;
};

export default function ProjectCard({
  ImageSrc,
  ImageAlt,
  ProjectTitle,
  ProjectDescription,
  ProjectStack,
  ProjectLink,
}: Props) {

  return (
    <div className="shadow-[0_0_4px_rgba(0,0,0,0.3)] bg- rounded-md hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-shadow duration-200 cursor-pointer">
      <Image
        src={ImageSrc || "https://res.cloudinary.com/dedef9fpx/image/upload/v1772987691/fd22bff2-ab37-4436-8cd3-6c1e87f2ec87.png"}
        alt={ImageAlt || "Image Title"}
        className="object-cover rounded-t-md"
        width={400}
        height={400}
        loading="eager"
      />

      <div className="p-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">{ProjectTitle}</h1>
          <p className="text-[12px] font-normal text-gray-600 leading-4 text-justify">
            {ProjectDescription}
          </p>
        </div>

        <div className="flex gap-2 mt-5">
          {(ProjectStack || []).map((stack, i) => (
            <h1
              key={i}
              className="text-[10px] font-medium bg-gray-200 p-1 rounded-sm"
            >
              {stack}
            </h1>
          ))}
        </div>

        <button
          className="flex gap-1 items-center text-[11px] font-semibold bg-black text-white px-2 mt-4 rounded-md 
          cursor-pointer hover:bg-[#333333]"
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
