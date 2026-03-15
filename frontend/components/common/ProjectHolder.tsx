"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import api from "../../lib/api";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
};

export default function ProjectHolder({ limit }: Props) {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/api/admin/projects");
        console.log("GET PROJECTS:", response.data.data);
        setProjects(response.data.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="mt-10">
      {projects.length == 0 ? (
        <div>
          <h1 className="text-lg italic text-gray-400">
            It looks like you haven’t added any projects yet. Start by creating
            your first project!
          </h1>
        </div>
      ) : (
        <>
          <h1 className={`font-medium text-lg ${limit ? "hidden" : "block"}`}>
            All Projects
          </h1>
          <div className="grid grid-cols-3 mt-10 mb-5 gap-4">
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
                />
              </div>
            ))}
          </div>

          <Link
            href={"/about"}
            className={`flex items-center text-gray-800 gap-1 ${!limit ? "hidden" : "block"}`}
          >
            <h1 className="text-md font-semibold">More Projects</h1>
            <ArrowRight className="w-5" />
          </Link>
        </>
      )}
    </div>
  );
}
