"use client";
import { linkBtns } from "@/constants/linkBtn";
import { FileText, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import avatarFallbackImg from "@/public/svg/pyramid720.svg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid gap-4">
      <Link
        href="https://github.com/shawfeg218"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full w-fit"
      >
        <Avatar className="size-32">
          <AvatarImage src="https://github.com/shawfeg218.png" alt="@shawfeg218" />
          <AvatarFallback>
            <div className="size-32 rounded-full overflow-hidden relative bg-secondary/70">
              <Image
                className="opacity-50"
                alt="SF"
                src={avatarFallbackImg}
                style={{ objectFit: "fill" }}
              />
            </div>
          </AvatarFallback>
        </Avatar>
      </Link>

      <div className="space-y-2 tracking-wide">
        <h2 className="text-2xl font-bold">Shawn Feng</h2>
        <p>MIS Engineer based in Taiwan</p>
        <p>
          Maintain and optimize Oracle EBS to support daily operations and ensure that the system
          effectively meets the organization&apos;s business needs.
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

        <Link href="/resume.pdf" target="_blank">
          <Button size="lg" className="px-2">
            <FileText className="size-6 mr-1" />
            Resume
          </Button>
        </Link>

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
