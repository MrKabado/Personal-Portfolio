import Image from "next/image";
import { Images } from "@/assets/Images";

export default function AboutHeader() {
  return (
          <div>
            <Image
              src={Images.BackgroundImage}
              alt="Background Image"
              className="w-full h-40 sm:h-52 md:h-60 object-cover rounded-2xl"
            />
            <div className="ml-4 sm:ml-10 -mt-16 sm:-mt-20 flex flex-col sm:flex-row sm:items-end items-center text-center sm:text-left gap-2">
              <div className="border-4 border-blue-600 rounded-full p-0.5">
                <Image
                  src={Images.Profile}
                  alt="Profile Picture"
                  className="w-28 sm:w-32 md:w-40 rounded-full"
                />
              </div>
              <div className="sm:mx-4 sm:mb-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-300">
                  Jerson Jay Bonghanoy
                </h1>
                <p className="text-gray-600 text-sm sm:text-md italic dark:text-gray-400">
                  Aspiring Web Developer
                </p>
              </div>
            </div>
          </div>
  )
}