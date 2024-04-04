"use client";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="grid gap-4 mt-4">
      <div className="space-y-2">
        <h1 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-4xl/none">
          Shawn Feng
        </h1>
        <p className="text-base tracking-wide text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Hello! I'm Shawn, a frontend web developer based in Taiwan. This portfolio showcases a
          selection of my best work and projects. Take a look around, and let's connect!
        </p>
      </div>

      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button
          onClick={() => {
            console.log("hello");
          }}
        >
          Resume
        </Button>
        <a
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 hover:cursor-pointer"
          href="#contact-form"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
