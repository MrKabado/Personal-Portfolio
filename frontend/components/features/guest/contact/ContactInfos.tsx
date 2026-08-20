"use client";

import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const ContactInfo = [
  {
    heading: "Email",
    subheading: "jersonjaybonghanoy@gmail.com",
    description: "I usually email you back within an hour.",
    headingIcon: Mail,
    descriptionIcon: MessageSquare,
  },
  {
    heading: "Phone",
    subheading: "+63 991 533 7883",
    description: "I'm available weekdays from 9AM to 6PM",
    headingIcon: Phone,
    descriptionIcon: Clock,
  },
];

const SocialMedia = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/",
  },
  { icon: Github, link: "https://github.com/MrKabado" },
  { icon: Twitter, link: "https://x.com/Jay_zen2004" },
  { icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy" },
];

export default function ContactInfos() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {ContactInfo.map(
        (
          {
            headingIcon: Icon,
            descriptionIcon: Icon2,
            heading,
            description,
            subheading,
          },
          i,
        ) => (
          <div
            key={i}
            className="bg-[#222223] p-6 rounded-lg flex flex-col gap-3"
          >
            <h3 className="flex items-center gap-3 text-gray-200 font-medium text-lg">
              <Icon className="w-9 h-9 inline-block bg-[#343434] p-2 rounded-md" />
              {heading}
            </h3>

            <p className="text-gray-300 text-[16px]">{subheading}</p>

            <p className="flex items-center gap-2 text-gray-400 text-sm">
              <Icon2 className="w-4 inline-block" />
              {description}
            </p>
          </div>
        ),
      )}

      <div className="bg-[#222223] p-6 rounded-lg flex flex-col gap-3">
        <h1 className="flex items-center gap-3 text-gray-200 font-medium text-lg">
          <MessageSquare className="w-9 h-9 inline-block bg-[#343434] p-2 rounded-md" />
          Connect with me
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
          {SocialMedia.map(({ icon: Icon, link }, i) => (
            <div
              key={i}
              className="group border border-gray-600 bg-transparent py-4 flex items-center justify-center rounded-lg hover:bg-[#333333] transition-all duration-100 cursor-pointer"
              onClick={() => window.open(link)}
            >
              <Icon className="w-7 h-7 text-gray-300 opacity-90 transition-all duration-200 group-hover:bg-[#464646] p-1 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
