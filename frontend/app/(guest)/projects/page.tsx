import ProjectCard from "@/components/common/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="default-div">
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-bold text-[37px]">My Projects</h1>
        <p className="text-gray-700 text-[17px]">
          A collection of my work showcasing my skills and experience in web
          development.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-10 mb-5 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
