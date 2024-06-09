import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import MountainIcon from "./icons/MountainIcon";
import NavItems from "./NavItems";
import Menu from "./Menu";
import PyramidIcon from "./icons/PyramidIcon";

type NavItem = {
  key: string;
  href: string;
  title: string;
};

export const navItems: NavItem[] = [
  { key: "/", href: "/", title: "Home" },
  { key: "/experience", href: "/experience", title: "Experience" },
  { key: "/projects", href: "/projects", title: "Projects" },
  { key: "/contact", href: "/contact", title: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky z-20 border-b top-0 px-6 py-3 bg-background/70 backdrop-filter backdrop-blur-lg">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="size-8" />
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <div className="hidden sm:block">
          <ModeToggle />
        </div>

        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
}
