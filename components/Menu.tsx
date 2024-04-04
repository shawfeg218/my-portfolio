import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { MenuIcon } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-full" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex flex-col divide-y-1">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link key={item.href} className="py-4" href={item.href}>
                {item.name}
              </Link>
            </SheetClose>
          ))}

          <div className="flex justify-between items-center py-2">
            <p>Theme</p>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
