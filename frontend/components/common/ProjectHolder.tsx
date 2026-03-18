"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import api from "../../lib/api";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

type ProjectData = {
  id: number;
  title: string;
  description: string;
  web_link: string; // web link
  techstacks: string[];
  image?: string; // URL from backend
  cover_image?: File;
};

type Props = {
  limit: boolean;
  isAdmin: boolean;
  isHome: boolean;
};

export default function ProjectHolder({ limit, isAdmin, isHome }: Props) {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/api/projects");
        setProjects(response.data.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  let loading = "It looks like you haven’t added any projects yet. Start by creating your first project!"
  if (!isAdmin) {
    loading = "It looks like Jerson Jay Bonghanoy hasn’t added any projects yet. Please check back later to see his amazing work!"
  }

  return (
    <div className="mt-10">
      {isHome && (
        <div className="mt-16 md:mt-32 lg:mt-40">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-sm md:text-md bg-gray-200 rounded-md px-2 py-1 w-fit dark:bg-[#333333] dark:text-gray-300">
              Recent Projects
            </h1>

            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight dark:text-gray-100">
              Check out my recent work
            </h1>

            <p className="text-sm sm:text-base text-gray-700 max-w-xl dark:text-gray-300">
              I’ve worked on a variety of projects, from simple websites to
              <br className="hidden sm:block" /> complex web applications. Here
              are a few of my favorites.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-6 gap-5 md:gap-6">
            {(limit ? projects : projects.slice(0, 3)).map((project) => (
              <div
                key={project.id}
                className="cursor-pointer"
                onClick={() =>
                  window.open(project.web_link, "_blank", "noopener,noreferrer")
                }
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
            ))}
          </div>

          <Link
            href={"/projects"}
            className={`flex items-center justify-center md:justify-start text-gray-800 gap-1 ${
              !limit ? "hidden" : "flex"
            }`}
          >
            <h1 className="text-sm md:text-md font-semibold dark:text-gray-200">More Projects</h1>
            <ArrowRight className="w-5 dark:text-gray-200" />
          </Link>
        </>
      )}
    </div>
  );
}
