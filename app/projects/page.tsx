import React from "react";

export default function page() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">
          Recent Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Here are some of my recent projects. Click on the images to view them in more detail.
        </p>
      </div>
      <div className="grid gap-4 items-start sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">Project One</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Description of the project. This was a very interesting project because...
          </p>
        </div>
        <img
          alt="Project One"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          height="310"
          src="/placeholder.svg"
          width="550"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">Project Two</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Description of the project. This was a very interesting project because...
          </p>
        </div>
        <img
          alt="Project Two"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          height="310"
          src="/placeholder.svg"
          width="550"
        />
      </div>
    </section>
  );
}
