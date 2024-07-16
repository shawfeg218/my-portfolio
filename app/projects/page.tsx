import type { Metadata } from "next";
import ProjectCards from "@/components/projects/project-cards";
import { TerminalSquareIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've worked on",
};

export default function page() {
  return (
    <div className="flex flex-col space-y-4 my-6">
      {/* header */}
      <header className="flex items-center space-x-2 px-1">
        <TerminalSquareIcon className="size-6" />

        <h2 className="text-2xl font-bold">Projects</h2>
      </header>

      <section className="flex flex-col space-y-4">
        <ProjectCards />
      </section>
    </div>
  );
}
