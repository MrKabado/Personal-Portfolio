"use client";

import Container from "@/components/common/Container";
import AboutHeader from "@/components/features/about/AboutHeader";
import AboutContent from "@/components/features/about/AboutContent";
import AboutTechStacks from "@/components/features/about/AboutTechStacks";

export default function AboutPage() {
  return (
    <Container>
      <AboutHeader />

      <div className="flex flex-col lg:flex-row gap-6 my-10">
        <AboutContent />
      </div>

      <AboutTechStacks />
    </Container>
  );
}
