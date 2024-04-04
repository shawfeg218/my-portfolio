"use client";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const words = [
  {
    text: "Welcome to my portfolio!",
    className: "text-2xl font-bold tracking-tighter sm:text-2xl xl:text-5xl",
  },
];

export default function HeroSection() {
  return (
    <section className="grid gap-4">
      <div>
        <TypewriterEffectSmooth words={words} className="my-3" />
        <p className="text-base tracking-wide text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Hello! I'm Shawn, a frontend web developer based in Taiwan. This portfolio showcases a
          selection of my best work and projects.
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => {
            console.log("hello");
          }}
        >
          Resume
        </Button>

        <a href="#contact-form">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <Send className="size-4" />
            <span>Contact Me</span>
          </HoverBorderGradient>
        </a>
      </div>
    </section>
  );
}
