import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import googleCalcImg from "@/public/google-calc.png";
import jovianCareersImg from "@/public/jovian-careers.png";
import khaleelPicture from "@/public/khaleel2.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Lagos, NG",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Instructor",
    location: "Lagos, NG",
    description:
      "I worked as a front-end instructor for 4 months in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Scientific Calculator",
    description:
      "This is a replica of Google's calculator. The calculator has the same layout and design as Google's calculator.",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    imageUrl: googleCalcImg,
    href: "https://google-calculator-clone.vercel.app/",
  },
  {
    title: "Jovian Careers",
    description:
      "The website features a clean and user-friendly interface,    making job hunting an enjoyable experience for anyone interested in software engineering roles.",
    tags: ["JavaScript", "Bootstrap", "ExpressJS"],
    imageUrl: jovianCareersImg,
    href: "https://jovian-careers-express-live-ecru.vercel.app/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: googleCalcImg,
    href: "https://google-calculator-clone.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;

export const khaleelImg = khaleelPicture;