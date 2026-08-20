"use client";

import Container from "@/components/common/Container";
import AboutHeader from "@/components/features/guest/about/AboutHeader";
import AboutContent from "@/components/features/guest/about/AboutContent";
import AboutTechStacks from "@/components/features/guest/about/AboutTechStacks";
import AboutExperienceTimeline from "@/components/features/guest/about/AboutExperienceTimeline";

export default function AboutPage() {
  return (
    <Container>
      <AboutHeader />

      <div className="flex flex-col lg:flex-row gap-6 my-10">
        <AboutContent />
        <AboutExperienceTimeline />
      </div>

      <AboutTechStacks />
    </Container>
  );
}
