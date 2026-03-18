import ProjectHolder from "@/components/common/ProjectHolder";
import Container from "@/components/common/Container";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-bold text-[37px] dark:text-gray-200">My Projects</h1>
        <p className="text-gray-700 text-[17px] dark:text-gray-400">
          A collection of my work showcasing my skills and experience in web
          development.
        </p>
      </div>

    <ProjectHolder 
      limit={false}
      isAdmin={false}
      isHome={false}
    />
    </Container>
  );
}
