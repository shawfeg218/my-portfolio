"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import NavItems from "./NavItems";
import Menu from "./Menu";
import pyramidIcon from "@/public/svg/pyramid720.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { navItems } from "@/constants/navItems";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <header className="sticky z-20 border-b top-0 px-6 py-3 bg-background/70 backdrop-filter backdrop-blur-lg">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <Link className="hidden sm:block" href="/">
          <div className="size-10 rounded-lg overflow-hidden relative">
            <Image alt="SF" src={pyramidIcon} style={{ objectFit: "fill" }} />
          </div>
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <div className="hidden sm:block">
          <ModeToggle />
        </div>

        <div className="flex space-x-2 items-center sm:hidden">
          {pathName !== "/" ? (
            <>
              <ArrowLeft
                onClick={() => {
                  router.back();
                }}
              />

              <span className="text-lg font-semibold">
                {navItems.find((item) => item.href === pathName)?.title}
              </span>
            </>
          ) : (
            <div className="size-10 rounded-lg overflow-hidden relative">
              <Image alt="SF" src={pyramidIcon} style={{ objectFit: "fill" }} />
            </div>
          )}
        </div>

        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
}
