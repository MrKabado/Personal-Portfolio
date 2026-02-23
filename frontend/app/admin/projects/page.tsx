"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProjectCard from "@/components/common/ProjectCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InserProjectModal from "@/components/common/InsertProjectModal";

export default function ProjectsPage() {
  const handleTechStackChange = (techStack: string[]) => {
    console.log("Selected Tech Stack:", techStack);
  };

  return (
    <div className="admin-default-div flex flex-col">
      <Dialog>
        <DialogTrigger className="bg-black text-gray-200 py-1 px-3 rounded-md flex justify-center items-center w-fit cursor-pointer gap-2">
          Add new project
          <Plus className="w-4 h-4" />
        </DialogTrigger>

        <DialogContent>
          <InserProjectModal
            onSave={(project) => {
              console.log("Project submitted:", project);
              // Send to backend or update state
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
