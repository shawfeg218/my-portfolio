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
      {projectData.concat(projectData).map((project, i) => (
        <Card key={i} className="bg-secondary/70 max-w-2xl">
          <CardHeader className="space-y-0 w-fit">
            <div className="flex flex-row items-center space-y-0 space-x-1 group">
              <CardTitle className="group-hover:underline group-hover:cursor-pointer">
                {project.title}
              </CardTitle>

              <ArrowRight className="hidden size-5 group-hover:cursor-pointer group-hover:block" />
            </div>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <StackChip key={i} tool={tool}>
                  {tool}
                </StackChip>
              ))}
            </div>

            <p className="text-muted-foreground">
              This is my portfolio website. It was built with Next.js and NextUI.
            </p>
          </CardContent>

          <CardFooter>
            <Link href={"/"}>
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
