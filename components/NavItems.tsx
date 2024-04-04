"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Projects",
  },
  "/about": {
    name: "About",
  },
  "/skills": {
    name: "Skills",
  },
  "/contact": {
    name: "Contact",
  },
};

export default function NavItems() {
  const router = useRouter();

  return (
    <Tabs
      variant="light"
      onSelectionChange={(key) => {
        router.push(key as string);
      }}
    >
      <Tab key="/" title="Home" />
      <Tab key="/projects" title="Projects" />
      <Tab key="/about" title="About" />
      <Tab key="/skills" title="Skills" />
      <Tab key="/contact" title="Contact" />
    </Tabs>
  );
}
