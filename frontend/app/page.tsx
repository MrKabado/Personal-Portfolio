"use client";

import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Github, Calendar } from "lucide-react";
import Profile from "../assets/profile.jpg";
import Image from "next/image";
import { Images } from "../assets/Images"

export default function HomePage() {

  const icons = [
    {icon: Linkedin, link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/"},
    {icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy.5/"},
    {icon: Github, link: "https://github.com/MrKabado"}
  ]

  const stacks = [
    {image: Images.HTML, name: "HTML5"},
    {image: Images.CSS, name: "CSS3"},
    {image: Images.Javascript, name: "JavaScript"},
    {image: Images.MySql, name: "MySQL"},
    {image: Images.React, name: "React"},
    {image: Images.Figma, name: "Figma"},
    {image: Images.Express, name: "Express"},
    {image: Images.MongoDB, name: "MongoDB"},
    {image: Images.Nextjs, name: "Next.js"},
    {image: Images.Postman, name: "Postman"},
    {image: Images.Tailwindcss, name: "Tailwind CSS"},
    {image: Images.Typscript, name: "TypeScript"},
  ];
  

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
          <div className="max-w-xl w-full flex h-24 overflow-hidden items-center">
             <motion.div
              className="flex gap-4"
              animate={{x: ["0%", "-50%"]}}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
             >
              {[...stacks, ...stacks, ...stacks].map((stack, index) => (
                <div
                  key={index}
                  className="
                    whitespace-nowrap px-4 py-2
                    rounded-md
                    text-sm font-medium text-gray-800
                    bg-white
                  "
                >
                
                <Image 
                  src={stack.image || stack.image.src}
                  alt={stack.name}  // <-- important
                  width={40}        // size you want
                  height={40}
                  unoptimized
                  className="object-contain"
                />

                {stack.name}
                </div>
              ))}
             </motion.div>
          </div>
        </div>

        <div className="w-full">
          <Image 
            src={Profile}
            alt="Profile"
            className="w-50 md:w-100 border rounded-xl object-cover"
          />
        </div>
        
      </div>
    </div>
  )
}