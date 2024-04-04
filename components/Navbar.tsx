import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import MountainIcon from "./icons/MountainIcon";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <header className="sticky border top-0 px-4 lg:px-6 h-14 flex items-center justify-between border-background bg-background/70 backdrop-filter backdrop-blur-lg">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>

      <NavItems />

      <ModeToggle />
    </header>
  );
}
