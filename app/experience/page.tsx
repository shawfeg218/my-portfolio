import type { Metadata } from "next";
import ExperienceCards from "@/components/experience/experience-cards";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "My education and work experience",
};

export default function page() {
  return (
    <div className="flex flex-col space-y-4 my-6">
      <header className="flex items-center space-x-2 px-1">
        <FileText className="size-6" />

        <h2 className="text-2xl font-bold">Education & Experience</h2>
      </header>

      <section className="flex flex-col pl-[15px]">
        <div className="border-s-2 border-muted-foreground/70">
          <ExperienceCards />
        </div>
      </section>
    </div>
  );
}
