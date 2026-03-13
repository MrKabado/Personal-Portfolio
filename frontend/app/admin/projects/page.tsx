"use client";

import { Plus } from "lucide-react";
import ProjectCard from "@/components/common/ProjectCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InserProjectModal from "@/components/common/InsertProjectModal";
import { useState, useEffect } from "react";
import api from "@/lib/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type ProjectData = {
  id: number;
  title: string;
  description: string;
  web_link: string; // web link
  techstacks: string[];
  image?: string; // URL from backend
  cover_image?: File;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Fetch projects on mount
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

  // Handle adding a new project locally
  const handleSubmitProject = (newProject: ProjectData) => {
    setProjects((prev) => [...prev, newProject]);
  };

  return (
    <div className="admin-default-div flex flex-col">
      {/* Add Project Dialog */}
      <Dialog>
        <DialogTrigger className="bg-black text-gray-200 py-1 px-3 rounded-md flex justify-center items-center w-fit cursor-pointer gap-2 hover:opacity-80 transition-all duration-150">
          Add new project
          <Plus className="w-4 h-4" />
        </DialogTrigger>

        <DialogContent className="max-w-md h-120 w-full">
          <InserProjectModal
            submitted={submitted}
            onSave={async (project) => {
              if (
                !project.title.trim() ||
                !project.description.trim() ||
                !project.link.trim() ||
                project.techStack.length === 0
              ) {
                toast.error("Please fill in all required fields.");
                return;
              }

              setSubmitted(true);

              const formData = new FormData();
              formData.append("proj_title", project.title);
              formData.append("proj_description", project.description);
              formData.append("proj_link", project.link);

              if (project.cover_image) {
                formData.append("proj_cover_image", project.cover_image);
              }

              project.techStack.forEach((tech) =>
                formData.append("proj_tech_stack", tech)
              );

              try {
                const response = await api.post("/api/admin/projects", formData);
                console.log("Uploaded: ", response.data);

                toast.success("Successfully added new project!");
                handleSubmitProject(response.data.data); // add newly created project

                setSubmitted(false);
              } catch (error) {
                console.error("Upload failed:", error);
                toast.error("Failed to add project.");
                setSubmitted(false);
              }
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Projects Grid */}
      <div className="mt-10">
        

        {
          projects.length == 0 
          ?
          <div>
            <h1 className="text-lg italic text-gray-400">It looks like you haven’t added any projects yet. Start by creating your first project!</h1>
          </div>
          :
          <>
          <h1 className="font-medium text-lg">All Projects</h1>
          <div className="grid grid-cols-3 mt-10 mb-5 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer"
              onClick={() => window.open(project.web_link, "_blank", "noopener,noreferrer")}
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
        </>
        }
        
      </div>
    </div>
  );
}