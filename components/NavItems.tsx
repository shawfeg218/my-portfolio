"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navItems } from "./Navbar";
import Link from "next/link";

export default function NavItems() {
  const pathName = usePathname();

  useEffect(() => {
    console.log("pathName", pathName);
  }, [pathName]);

  return (
    <Tabs variant="light" selectedKey={pathName} className="dark">
      {navItems.map((item) => (
        <Tab key={item.key} title={item.title} as={Link} href={item.href} />
      ))}
    </Tabs>
  );
}
