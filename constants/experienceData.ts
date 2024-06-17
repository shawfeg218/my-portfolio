type Experience = {
  place: string;
  chip?: string;
  title: string;
  date: string;
  description: string[];
};

export const experienceData: Experience[] = [
  {
    place: "Tamkang University",
    title: "Bachelor of Business Administration in Information Management",
    date: "Sep, 2020 - Jun, 2024",
    description: [
      "Graduated with a Bachelor of Business Administration in Information Management from Tamkang University, where I honed my skills in web development and software engineering.",
      "My studies focused on blending technical knowledge with my passion for web development and programming, preparing me for a dynamic career in technology.",
    ],
  },
  {
    place: "FanxiTech",
    chip: "On-site",
    title: "Frontend Developer",
    date: "Jan, 2024 - Jun, 2024",
    description: [
      "Frontend Developer at FanxiTech, responsible for architecting the frontend framework of a web3-integrated e-commerce webapp.",
      "My role concentrated on utilizing Next.js for robust data fetching and creating intuitive, user-friendly interfaces, ensuring a seamless online shopping experience.",
    ],
  },
];
