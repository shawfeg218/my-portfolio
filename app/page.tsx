import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import HeroSection from "@/components/main/HeroSection";

export default function Page() {
  return (
    <main className="grid gap-6 sm:gap-12 lg:gap-16 items-start px-4 md:px-6">
      <HeroSection />

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
      <section className="grid gap-6 lg:grid-cols-[200px_1fr]">
        <img
          alt="Jane Smith"
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center justify-self-start"
          height="200"
          src="/placeholder.svg"
          width="200"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">About Me</h2>
          <p className="text-gray-500 dark:text-gray-400">
            I'm a passionate and creative Web Developer with a love for building beautiful and
            functional websites. I enjoy learning new technologies and am always looking for ways to
            improve my skills.
          </p>
          <div className="grid gap-1">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Expertise
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              HTML, CSS, JavaScript, React, Node.js, MongoDB
            </p>
          </div>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">Skills</h2>
          <ul className="grid gap-2">
            <li>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                HTML
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                CSS
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                JavaScript
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                React
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                Node.js
              </div>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div id="contact-form" className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">
            Contact Me
          </h2>
          <form className="flex flex-col gap-4 max-w-sm">
            <Input className="w-full" placeholder="Name" type="text" />
            <Input className="w-full" placeholder="Email" type="email" />
            <Textarea className="min-h-[150px]" placeholder="Message" />
            <Button className="self-start" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
