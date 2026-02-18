"use client";
import Image from "next/image";
import { Images } from "@/assets/Images";
import { h1 } from "framer-motion/client";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";


export default function ProjectCard() {
  const techStack = [
    "NextJs",
    "ShadCN",
    "TailwindCSS"
  ]
  return (
    <div className="shadow-[0_0_4px_rgba(0,0,0,0.3)] bg- rounded-md hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-shadow duration-200 cursor-pointer">
      <Image 
        src={Images.CpcLibrary}
        alt="Cpc Library"
        className="object-cover rounded-t-md"
      />

     <div className="p-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Cpc Library</h1>
          <p className="text-[12px] font-normal text-gray-600 leading-4">CPC Library empowers students and faculty with easy access to academic resources, organized collections, and digital services—supporting research, learning, and knowledge sharing while creating a seamless library experience focused on academic success.</p>
        </div>

        <div className="flex gap-2 mt-5">
          {techStack.map((stack, i) => (
            <h1 
              key={i}
              className="text-[10px] font-medium bg-gray-200 p-1 rounded-sm"
            >
              {stack}
            </h1>
          ))}
        </div>

        <button 
          className="flex gap-1 items-center text-[11px] font-semibold bg-black text-white px-2 mt-4 rounded-md">
          <span>
            <Globe className="w-3"/>
          </span>
          Website
        </button>
     </div>

    </div>
  )
}