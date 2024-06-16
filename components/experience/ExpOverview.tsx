import { Divider } from "@nextui-org/divider";
import { FileText } from "lucide-react";
import Link from "next/link";
import ExperienceCards from "./experience-cards";
import { Button } from "../ui/button";

export default function ExpOverview() {
  return (
    <div className="flex flex-col space-y-4 my-6">
      <header className="flex items-center justify-between px-1">
        <div className="flex items-center space-x-2">
          <FileText className="size-6" />

          <Link href="/experience">
            <h2 className="text-xl font-bold hover:underline">Education & Experience</h2>
          </Link>
        </div>
      </header>

      <section className="flex flex-col pl-[15px]">
        <div className="border-s-2 border-muted-foreground/70">
          <ExperienceCards overview />
        </div>
      </section>

      <div className="flex items-center space-x-1">
        <Divider orientation="horizontal" className="flex-1" />
        <Link href="/experience">
          <Button size="sm" variant="outline" className="rounded-full">
            More
          </Button>
        </Link>
        <Divider orientation="horizontal" className="flex-1" />
      </div>
    </div>
  );
}
