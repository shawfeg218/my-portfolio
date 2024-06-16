import StackChip from "@/components/StackChip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projectData } from "@/constants/projectData";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type Props = {
  overview?: boolean;
};

export default function ProjectCards(props: Props) {
  const { overview } = props;

  const data = overview ? projectData.slice(0, 3) : projectData;

  return (
    <>
      {data.map((project, i) => (
        <Card key={i} className="bg-secondary/70">
          <CardHeader className="space-y-0 w-fit pb-3">
            <Link
              className="flex flex-row items-center space-x-1 group"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardTitle className="text-xl group-hover:underline group-hover:cursor-pointer">
                {project.title}
              </CardTitle>

              <ArrowUpRight className="hidden size-5 group-hover:cursor-pointer group-hover:block" />
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
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
