"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Github, Calendar } from "lucide-react";
import Profile from "../assets/profile.jpg";
import Image from "next/image";

export default function HomePage() {

  const icons = [
    {icon: Linkedin, link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/"},
    {icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy.5/"},
    {icon: Github, link: "https://github.com/MrKabado"}
  ]

  return (
    <div className="px-34 py-22">
      <div className="flex flex-row justify-evenly gap-10">

        <div className="w-full flex flex-col gap-4 mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg text-green-700">Message me</h1>
            <h1 className="text-5xl font-bold">Hey, I am Jerson Jay</h1>
            <p className="text-gray-800 mt-3 leading-6">A passionate Software Developer dedicated on building websites, web applications, mobile apps, and custom software that are not only highly functional but also visually captivating.</p>
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
            {icons.map(({icon: Icon, link}) => (
              <Icon
                key={link}
                size={24} 
                className="
                  text-gray-400 transition-all duration-300 transform cursor-pointer
                  hover:text-black hover:-translate-y-1
                "
                onClick={() => window.open(link, "_blank")}
              />
            ))}
          </div>

          {/* THE INFINITE SCROLL */}
          <div className="border border-black h-full">
            
          </div>
        </div>

        <div className="w-full">
          <Image 
            src={Profile}
            alt="Profile"
            className="w-full border rounded-xl object-cover"
          />
        </div>
        
      </div>
    </div>
  )
}