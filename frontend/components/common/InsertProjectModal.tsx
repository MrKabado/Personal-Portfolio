"use client";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ButtonSubmit } from "./Button";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

type ProjectData = {
  title: string;
  description: string;
  cover_image?: File;
  link: string;
  techStack: string[];
};

type Props = {
  onSave: (project: ProjectData) => void;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultCoverImage?: string;
  defaultLink?: string;
  submitted: boolean;
};

export default function InsertProjectModal({
  onSave,
  defaultTitle = "",
  defaultDescription = "",
  defaultCoverImage = "",
  defaultLink = "",
  submitted=false,

}: Props) {
  const [projectTitle, setProjectTitle] = useState<string>(defaultTitle);
  const [projectDescription, setProjectDescription] = useState<string>(defaultDescription);
  const [projectLink, setProjectLink] = useState<string>(defaultLink);
  const [projectCoverImage, setProjectCoverImage] = useState<File | null>(null);
  const [techStack, setTechStack] = useState<string[]>([]);

  const handleCheckboxChange = (tech: string, checked: boolean) => {
    const updatedStack = checked
      ? [...techStack, tech]
      : techStack.filter(t => t !== tech);

    setTechStack(updatedStack);
  };

  const handleSubmit = () => {
    onSave({
      title: projectTitle,
      description: projectDescription,
      link: projectLink,
      techStack,
      cover_image: projectCoverImage || undefined,
    });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-semibold text-xl">
          Add new project 
        </DialogTitle>
        <DialogDescription>
          Fill in the required details below to create a new project. Click save
          once you're done.
        </DialogDescription>
      </DialogHeader>

      <FieldGroup className="overflow-y-auto">
        <Field>
          <Label htmlFor="title">Title<span className="text-red-600">*</span></Label>
          <Input
            id="title"
            name="title"
            placeholder="Project title"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </Field>

        <Field>
          <Label htmlFor="description">Description<span className="text-red-600">*</span></Label>
          <Input
            id="description"
            name="description"
            placeholder="Project description..."
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </Field>

        <Field>
          <Label>Cover Image</Label>
          <Input 
            type="file"
            id="project_cover_image"
            name="proj_cover_image"
            className="cursor-pointer"
            onChange={(e) => {
              if (e.target.files) {
                setProjectCoverImage(e.target.files[0]);
              }
            }}
          />
        </Field>

        <Field>
          <Label className="mb-2">Tech Stack<span className="text-red-600">*</span></Label>
          <div className="grid grid-cols-4 gap-2">
            {[
              "Next.js",
              "Express",
              "TailwindCSS",
              "ShadCN",
              "MongoDB",
              "Neon",
              "React.js",
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 p-2 rounded-md w-fit"
              >
                <Checkbox
                  id={tech.toLowerCase().replace(/\./g, "")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(tech, checked as boolean)
                  }
                />
                <Label htmlFor={tech.toLowerCase().replace(/\./g, "")}>
                  {tech}
                </Label>
              </div>
            ))}
          </div>
        </Field>

        <Field>
          <Label htmlFor="web-link">Website Link<span className="text-red-600">*</span></Label>
          <Input
            id="web-link"
            name="web-link"
            placeholder="Website link"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
          />
        </Field>
      </FieldGroup>

      <DialogFooter className="flex justify-end gap-2">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <ButtonSubmit 
          props={{
            btnOnClick: handleSubmit,
            submitted: submitted,
            buttonType: "button",
            btnText: "Save Changes",
            btnLoadingText: "Saving Changes"
          }}
        />

      </DialogFooter>
    </>
  );
}