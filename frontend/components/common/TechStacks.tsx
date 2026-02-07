"use client";
import { Images } from "@/assets/Images";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function TechStacks() {
  const stacks = [
    { image: Images.HTML, name: "HTML5" },
    { image: Images.CSS, name: "CSS3" },
    { image: Images.Javascript, name: "JavaScript" },
    { image: Images.MySql, name: "MySQL" },
    { image: Images.React, name: "React" },
    { image: Images.Figma, name: "Figma" },
    { image: Images.Express, name: "Express" },
    { image: Images.MongoDB, name: "MongoDB" },
    { image: Images.Nextjs, name: "Next.js" },
    { image: Images.Postman, name: "Postman" },
    { image: Images.Tailwindcss, name: "Tailwind CSS" },
    { image: Images.Typscript, name: "TypeScript" },
  ];

  return (
    <div className="max-w-xl w-full flex h-24 overflow-hidden items-center">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
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
                    bg-white flex flex-col justify-between
                  "
          >
            <Image
              src={stack.image || stack.image.src}
              alt={stack.name}
              width={40}
              height={40}
              unoptimized
              className="object-contain"
            />

            {stack.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
