export type Tool =
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "React"
  | "Next.js"
  | "NextUI"
  | "CSS"
  | "Tailwind CSS"
  | "React Query"
  | "ShadcnUI"
  | "OpenAI";

type Project = {
  title: string;
  tools: Tool[];
  description: string;
  link: string;
};

export const projectData: Project[] = [
  {
    title: "Portfolio Website",
    tools: ["TypeScript", "Next.js", "React", "NextUI", "ShadcnUI", "Tailwind CSS"],
    description: "This is my portfolio website. It was built with Next.js and NextUI.",
    link: "/",
  },
  {
    title: "Portfolio Website",
    tools: ["TypeScript", "Next.js", "React", "NextUI", "ShadcnUI", "Tailwind CSS"],
    description: "This is my portfolio website. It was built with Next.js and NextUI.",
    link: "/",
  },
];
