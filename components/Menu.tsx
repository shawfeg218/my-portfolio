"use client";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { navItems } from "./Navbar";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";
import { Divider } from "@nextui-org/divider";

export default function Menu() {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-lg" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="border border-blue-400">
        <Tabs variant="light" selectedKey={pathName} isVertical={true} fullWidth>
          {navItems.map((item) => (
            <Tab key={item.href} href={item.href} title={item.title} />
          ))}
        </Tabs>

        <Divider className="my-3" />

        <div className="flex justify-between items-center ">
          <p>Theme</p>
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
