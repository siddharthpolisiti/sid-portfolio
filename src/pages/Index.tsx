import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import WorldMapSection from "@/components/WorldMapSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import { caseStudies } from "@/data/caseStudies";

const Index = () => {
  const worldMapRef = useRef<HTMLDivElement>(null);

  const scrollToWorldMap = () => {
    worldMapRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorld = (worldNumber: number) => {
    const element = document.getElementById(`world-${worldNumber}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Game Start Screen */}
      <HeroSection onStartGame={scrollToWorldMap} />

      {/* World Map Section */}
      <div ref={worldMapRef}>
        <WorldMapSection onWorldSelect={scrollToWorld} />
      </div>

      {/* Case Study Sections - Each World */}
      {caseStudies.map((caseStudy) => (
        <CaseStudySection key={caseStudy.worldNumber} {...caseStudy} />
      ))}

      {/* Contact Section - Bonus Level */}
      <ContactSection />
    </div>
  );
};

export default Index;
