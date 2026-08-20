"use client";
import ProjectHolder from "@/components/common/ProjectHolder";
import HeroBanner from "@/components/features/guest/home/HeroBanner";
import Container from "@/components/common/Container";

export default function HomePage() {
  return (
    <Container>
      <HeroBanner />
      <ProjectHolder limit={true} isAdmin={false} isHome={true} />
    </Container>
  );
}
