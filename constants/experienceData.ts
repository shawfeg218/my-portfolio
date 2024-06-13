type Experience = {
  place: string;
  chip?: string;
  title: string;
  date: string;
  description: string;
};

export const experienceData: Experience[] = [
  {
    place: "Tamkang University",
    title: "Bachelor of Information Management",
    date: "Sep, 2020 - Jun, 2024",
    description:
      "I am currently studying in Tamkang University, majoring in Information Management. I am a sophomore student and I am very interested in web development and programming.",
  },
  {
    place: "FanxiTech",
    chip: "On-site",
    title: "Frontend Developer",
    date: "Jan, 2024 - Jun, 2024",
    description:
      "I am currently working as a frontend developer in FanxiTech. I am responsible for developing the frontend of the website and I am very interested in web development and programming.",
  },
];
