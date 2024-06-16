import { TerminalSquareIcon } from "lucide-react";
import ProjectCards from "./project-cards";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "../ui/button";

export default function ProjectOverview() {
  return (
    <div className="flex flex-col space-y-4 my-6">
      {/* header */}
      <header className="flex items-center space-x-2 px-1">
        <TerminalSquareIcon className="size-6" />

        <Link href="/projects">
          <h2 className="text-xl font-bold hover:underline">Projects</h2>
        </Link>
      </header>

      <section className="flex flex-col space-y-4">
        <ProjectCards overview />
      </section>

      <div className="flex items-center space-x-1">
        <Divider orientation="horizontal" className="flex-1" />
        <Link href="/projects">
          <Button size="sm" variant="outline" className="rounded-full">
            More
          </Button>
        </Link>
        <Divider orientation="horizontal" className="flex-1" />
      </div>
    </div>
  );
}
