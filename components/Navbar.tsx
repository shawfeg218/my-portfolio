import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import MountainIcon from "./icons/MountainIcon";
import NavItems from "./NavItems";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <header className="sticky z-20 max-w-7xl mx-auto border top-0 px-4 py-3 flex items-center justify-between border-background bg-background/70 backdrop-filter backdrop-blur-lg">
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
    </header>
  );
}
