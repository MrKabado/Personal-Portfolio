import ProjectHolder from "@/components/common/ProjectHolder";
import Container from "@/components/common/Container";
import ProjectHeader from "@/components/features/guest/projects/ProjectHeader";

export default function ProjectsPage() {
  return (
    <Container>
      <ProjectHeader />

      <ProjectHolder 
        limit={false}
        isAdmin={false}
        isHome={false}
      />
    </Container>
  );
}
