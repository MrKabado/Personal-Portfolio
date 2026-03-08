"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProjectCard from "@/components/common/ProjectCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InserProjectModal from "@/components/common/InsertProjectModal";
import { useState } from "react";

type ProjectData = {
  title: string,
  description: string;
  link: string;
  techStack: string[];
}

export default function ProjectsPage() {
  const handleTechStackChange = (techStack: string[]) => {
    console.log("Selected Tech Stack:", techStack);
  };

  const [projects, setProjects] = useState<ProjectData[]>([]);

  const handleSubmitProject = (newProject: ProjectData) => {
      setProjects(prev => [...prev, newProject]);

  }


  return (
    <div className="admin-default-div flex flex-col">
      <Dialog>
        <DialogTrigger className="bg-black text-gray-200 py-1 px-3 rounded-md flex justify-center items-center w-fit cursor-pointer gap-2 hover:opacity-80 transition-all duration-150">
          Add new project
          <Plus className="w-4 h-4" />
        </DialogTrigger>

        <DialogContent className="max-w-md max-h-md h-full w-full">
          <InserProjectModal
            onSave={(project) => {
              console.log("Project submitted:", project);
              handleSubmitProject(project);
              
              const formData = new FormData();
              formData.append("proj_title", project.title);
              formData.append("proj_description", project.title);
              formData.append("proj_link", project.link);
              formData.append("proj_cover_image", project.cover_image!); // the File object
              project.techStack.forEach((tech) => formData.append("proj_tech_stack", tech));


              //NEXT TO DO IS CREATE API BACKEND FOR RECEIVING THE FORMS
            }}
          />
        </DialogContent>
      </Dialog>

      <div className="mt-10">
        <h1 className="font-medium text-lg">All Projects</h1>

        <div className="grid grid-cols-3 mt-10 mb-5 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
