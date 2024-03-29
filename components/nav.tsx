import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { Button } from "@nextui-org/react";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "blog",
  },
  "/guestbook": {
    name: "guestbook",
  },
};

export default function Navbar() {
  return (
    <header className="sticky top-0 inset-0 flex justify-between">
      {/* nav */}
      <div className="flex flex-row space-x-0 pr-10">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 text-lg"
            >
              {name}
            </Link>
          );
        })}
      </div>

      <ModeToggle />
    </header>
  );
}
