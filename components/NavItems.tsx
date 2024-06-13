"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/constants/navItems";

export default function NavItems() {
  const pathName = usePathname();

  return (
    <Tabs variant="light" selectedKey={pathName} className="dark">
      {navItems.map((item) => (
        <Tab key={item.key} title={item.title} as={Link} href={item.href} />
      ))}
    </Tabs>
  );
}
