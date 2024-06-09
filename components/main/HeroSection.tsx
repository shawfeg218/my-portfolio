"use client";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function HeroSection() {
  return (
    <section className="grid gap-4">
      <div>
        <p className="text-xl tracking-wide text-muted-foreground">
          Hello! I&apos;m Shawn, a frontend web developer based in Taiwan. This portfolio showcases
          a selection of my best work and projects.
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

        <a href="/contact">
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
