"use client";
import { linkBtns } from "@/constants/linkBtn";
import { FileText, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function HeroSection() {
  return (
    <section className="grid gap-4">
      <div className="space-y-2 text-lg tracking-wide">
        <h2 className="text-4xl font-bold">Shawn Feng</h2>
        <p>
          Frontend Developer based in Taiwan. Passionate about integrating design with advanced
          technology to enhance web applications.
        </p>
        <p>
          Focused on using Next.js and other cutting-edge tools to improve user experience and
          accessibility, aiming to make the web a more inclusive and efficient space.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {linkBtns.map((link, i) => (
          <Link key={i} href={link.href} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="px-3">
              <link.icon className="size-6 mr-2" />
              {link.title}
            </Button>
          </Link>
        ))}

        <Button
          onClick={() => {
            console.log("hello");
          }}
          size="lg"
          className="px-2"
        >
          <FileText className="size-6 mr-1" />
          Resume
        </Button>

        <Link href="mailto:shawnfeng610@gmail.com" target="_blank" rel="noopener noreferrer">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <Send className="size-4" />
            <span>Contact Me</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </section>
  );
}
