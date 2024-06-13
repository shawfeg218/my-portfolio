import StackChip from "@/components/StackChip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projectData } from "./projectData";

export default function ProjectCards() {
  return (
    <>
      {projectData.map((project, i) => (
        <Card key={i} className="bg-secondary/70 max-w-2xl">
          <CardHeader className="space-y-0 w-fit pb-3">
            <Link
              className="flex flex-row items-center space-x-1 group"
              href={project.link}
              target="_blank"
            >
              <CardTitle className="group-hover:underline group-hover:cursor-pointer">
                {project.title}
              </CardTitle>

              <ArrowRight className="hidden size-5 group-hover:cursor-pointer group-hover:block" />
            </Link>
          </CardHeader>

          <CardContent className="space-y-2">
            <p className="text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <StackChip key={i} tool={tool}>
                  {tool}
                </StackChip>
              ))}
            </div>
          </CardContent>

          <CardFooter>
            <Link href={project.link} target="_blank">
              <Button size="sm">
                <FaGithub className="size-4 mr-1" />
                GitHub
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
