import HeroSection from "@/components/main/HeroSection";
import ExpOverview from "@/components/experience/ExpOverview";
import ProjectOverview from "@/components/projects/ProjectOverview";

export default function Page() {
  return (
    <div className="flex flex-col space-y-12 my-6">
      <HeroSection />

      <ExpOverview />

      <ProjectOverview />
    </div>
  );
}
