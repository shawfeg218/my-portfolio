"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { navItems } from "./Navbar";

export default function NavItems() {
  const pathName = usePathname();

  useEffect(() => {
    console.log("pathName", pathName);
  }, [pathName]);

  return (
    <Tabs variant="light" selectedKey={pathName}>
      {navItems.map((item) => (
        <Tab key={item.href} title={item.title} href={item.href} />
      ))}
    </Tabs>
  );
}
