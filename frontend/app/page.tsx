"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Github, Calendar } from "lucide-react";
import John from "../assets/john.jpg"
import Image from "next/image";

export default function HomePage() {

  const icons = [
    {icon: Linkedin},
    {icon: Facebook},
    {icon: Github}
  ]

  return (
    <div className="p-20">
      <div className="border border-black flex flex-row justify-evenly">

        <div className="border border-black w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg text-green-800">Message me</h1>
            <h1 className="text-5xl font-bold">Hey, I am Jerson Jay</h1>
            <p className="text-gray-800 mt-3">A passionate Software Developer dedicated on building websites, web applications, mobile apps, and custom software that are not only highly functional but also visually captivating.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="default" className="text-gray-200 text-md py-6 px-4 bg-[#1A1A1A] cursor-pointer">
              <Calendar size={24} />
              Free Consultation
            </Button>
            <Button variant="outline" className="py-6 px-4 cursor-pointer">
              Explore Projects
            </Button>
          </div>
          <div className="flex flex-row gap-3">
            {icons.map(({icon: Icon}) => (
              <Icon 
                size={24} 
                className="
                  text-gray-400 transition-all duration-300 transform cursor-pointer
                  hover:text-black hover:-translate-y-1
                "
              />
            ))}
          </div>
        </div>

        <div className="border border-black w-full">
          <Image 
            src={John}
            alt="Profile"
            className="w-50"
          />
        </div>
        
      </div>
    </div>
  )
}