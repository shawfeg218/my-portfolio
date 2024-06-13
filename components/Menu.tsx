"use client";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { Divider } from "@nextui-org/divider";
import { Tab, Tabs } from "@nextui-org/tabs";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/constants/navItems";

export default function Menu() {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="rounded-lg"
          size="icon"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="py-10">
        <Tabs
          variant="light"
          selectedKey={pathName}
          isVertical={true}
          fullWidth
          onSelectionChange={() => {
            setIsOpen(false);
          }}
        >
          {navItems.map((item) => (
            <Tab key={item.key} title={item.title} as={Link} href={item.href} />
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
