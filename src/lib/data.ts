import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "WayGo Apps",
    description:
      "WayGo is an app that helps travelers enjoy efficient vacations with attraction recommendations and automatic travel rundowns.",
    tags: ["Kotlin", "Firebase"],
    imageUrl: "/image1.png",
    link: "https://www.google.com",
  },
  {
    title: "Sinar Abadi Properti",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image2.png",
    link: "sinar-abadi-property.vercel.app",
  },
  {
    title: "Story App",
    description:
      "Story App is an innovative platform for writers and readers to discover stories, create, and connect with a community of story lovers",
    tags: ["Kotlin"],
    imageUrl: "/image3.png",
    link: "https://www.google.com",
  },
  {
    title: "Medico",
    description:
      "Medico is a web app that streamlines EMR management with easy access, centralized storage, and secure patient data.",
    tags: ["PHP", "MySQL", "Tailwind"],
    imageUrl: "/image4.png",
    link: "https://www.google.com",
  },
  {
    title: "ShoeShop",
    description:
      "ShoeShop is an e-commerce platform providing the latest and best shoes from well-known brands. Find running shoes, sportswear, and the best styles.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/shoeshop.png",
    link: "sinar-abadi-property.vercel.app",
  },
  {
    title: "Pekalongan Tourism",
    description:
      "Pekalongan Tourism is your guide to discovering the hidden charms and popular destinations of Pekalongan.",
    tags: ["React", "TypeScript", "Vue", "Tailwind", "Laravel"],
    imageUrl: "/pkl_trsm.png",
    link: "sinar-abadi-property.vercel.app",
  },
  {
    title: "MAsset",
    description:
      "MAsset is an asset management application designed to help users track and manage assets by adding, editing, or deleting data.",
    tags: ["React", "Laravel", "Tailwind"],
    imageUrl: "/masset.png",
    link: "sinar-abadi-property.vercel.app",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Kotlin",
  "Jetpack Compose",
  "Python",
];
