import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type LinkBtn = {
  title: string;
  icon: IconType;
  href: string;
};

export const linkBtns = [
  {
    title: "GitHub",
    icon: FaGithub,
    href: "https://github.com/shawfeg218",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/shawn218",
  },
];
