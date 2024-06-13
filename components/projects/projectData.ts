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
  | "OpenAI"
  | "Azure"
  | "Firebase"
  | "Mqtt"
  | "Arduino"
  | "AWS"
  | "Socket.io"
  | "FFmpeg";

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
    description:
      "Explore my portfolio, built with Next.js, showcasing my projects and skills in a clean, user-friendly interface.",
    link: "https://github.com/shawfeg218/my-portfolio",
  },
  {
    title: "Unigate",
    tools: ["TypeScript", "Next.js", "React", "React Query", "ShadcnUI", "NextUI", "Tailwind CSS"],
    description:
      "A web3-integrated e-commerce platform, enabling secure, blockchain-based transactions and a modern shopping experience.",
    link: "https://github.com/FanxiTech",
  },
  {
    title: "AI Image Generator",
    tools: ["TypeScript", "Next.js", "React", "OpenAI", "Azure", "ShadcnUI", "Tailwind CSS"],
    description:
      "An AI-powered web application designed to create unique images based on user inputs, combining creativity with cutting-edge technology for endless possibilities.",
    link: "https://github.com/shawfeg218/ai-image-generator",
  },
  {
    title: "MemeBot Frontend",
    tools: ["JavaScript", "AWS", "Next.js", "React", "Arduino", "NextUI", "CSS", "Tailwind CSS"],
    description:
      "An interactive educational tool designed to engage students in the classroom. This webapp facilitates control of ESP32 robots through intuitive audio commands and features an AI-enhanced chat system, enhancing learning with technology.",
    link: "https://github.com/shawfeg218/esp32-robotArm-app",
  },
  {
    title: "MemeBot Server",
    tools: ["JavaScript", "Node.js", "AWS", "Socket.io", "Mqtt", "OpenAI"],
    description:
      "Powered by Express.js, this server integrates Socket.IO and MQTT for real-time classroom interactions and ESP32 robot control. It also supports API endpoints for AI chat and audio features",
    link: "https://github.com/shawfeg218/memebot-server",
  },
  {
    title: "Video Converter",
    tools: ["JavaScript", "Next.js", "React", "FFmpeg", "Tailwind CSS"],
    description: "An FFmpeg-powered tool for fast and easy video conversion.",
    link: "https://github.com/shawfeg218/video-convert",
  },
  {
    title: "Dropbox clone",
    tools: ["TypeScript", "Next.js", "React", "Firebase", "ShadcnUI", "Tailwind CSS"],
    description: "A Dropbox clone built with Next.js and Firebase.",
    link: "https://github.com/shawfeg218/dropbox-clone",
  },
];
