"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import api from "../../lib/api";
import Link from "next/link";
import { ArrowRight, Search, FolderKanban } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

type ProjectData = {
  id: number;
  title: string;
  description: string;
  web_link: string;
  techstacks: string[];
  image?: string;
  cover_image?: File;
};

type Props = {
  limit: boolean;
  isAdmin: boolean;
  isHome: boolean;
};

export default function ProjectHolder({ limit, isAdmin, isHome }: Props) {
  const context = useContext(DataContext);
  if (!context) return null;

  const { projects } = context;
  const [searchProject, setSearchProject] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchProject.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(searchProject.toLowerCase());

    return matchesSearch;
  });

  let loading = "Oops, It looks like you haven't added any projects yet.";
  if (isAdmin === false) {
    loading =
      "It looks like Jerson Jay Bonghanoy hasn’t added any projects yet. Please check back later to see his amazing work!";
  }

  return (
    <div className="mt-10">
      {isHome && (
        <div className="mt-16 md:mt-32 lg:mt-40 mb-10">
          <div className="flex flex-col items-left gap-3">
            <h1 className="text-left font-bold text-2xl sm:text-3xl md:text-4xl leading-tight dark:text-gray-100 flex items-center gap-2">
              Recent Projects I’ve Built{" "}
              <FolderKanban size={40} className="inline" />
            </h1>

            <p className="text-sm sm:text-base text-gray-700 max-w-xl dark:text-gray-300">
              I’ve worked on diverse web projects, combining creativity and
              functionality. Take a look at some of my standout work.
            </p>
          </div>
        </div>
      )}

      {projects.length == 0 ? (
        <div className="mt-10 text-center">
          <h1 className="text-base md:text-lg italic text-gray-400">
            {loading}
          </h1>
        </div>
      ) : (
        <>
          <h1
            className={`font-medium text-base md:text-lg mt-10 dark:text-gray-100 ${
              limit ? "hidden" : "block"
            }`}
          >
            All Projects
          </h1>

          {!limit && (
            <div className="w-full my-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent 
                transition-all duration-200 bg-gray-50 focus:bg-white dark:bg-[#333333] dark:border-gray-600"
                  value={searchProject}
                  onChange={(e) => setSearchProject(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-6 gap-5 md:gap-6 items-stretch">
            {(!limit ? filteredProjects : filteredProjects.slice(0, 3)).map(
              (project) => (
                <div
                  key={project.id}
                  className="h-full flex"
                >
                  <ProjectCard
                    ImageSrc={project.image || "/placeholder.png"}
                    ImageAlt={`${project.title} cover image`}
                    ProjectTitle={project.title}
                    ProjectDescription={project.description}
                    ProjectStack={project.techstacks || []}
                    ProjectLink={project.web_link}
                    isAdmin={isAdmin}
                  />
                </div>
              )
            )}
          </div>

          <Link
            href={"/projects"}
            className={`flex items-center justify-center md:justify-start text-gray-800 gap-1 ${
              !limit ? "hidden" : "flex"
            }`}
          >
            <h1 className="text-sm md:text-md font-semibold dark:text-gray-200">
              See all projects
            </h1>
            <ArrowRight className="w-5 dark:text-gray-200" />
          </Link>
        </>
      )}
    </div>
  );
}