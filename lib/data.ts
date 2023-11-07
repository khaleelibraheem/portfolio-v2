import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import googleCalcImg from "@/public/google-calc.png";
import jovianCareersImg from "@/public/jovian-careers.png";
import khaleelPicture from "@/public/khaleel2.png";
import soleSavvy from "@/public/solesavvy.png";
import todoApp from "@/public/todoapp.png";
import youtube from "@/public/youtube.png";
import movieland from "@/public/movieland.png";
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
      "I graduated after 9 months of studying. I immediately found a job as a front-end developer.",
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
    title: "Front-End Developer",
    location: "Bhopal, IN",
    description:
      "I'm now a front developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time and part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
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
    title: "Youtube Clone",
    description:
      "A YouTube clone app using React, offering users a familiar and user-friendly platform for watching videos",
    tags: ["React", "Bootstrap", "React Router"],
    imageUrl: youtube,
    href: "https://magical-kitsune-fbf68e.netlify.app/",
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
    title: "SoleSavvy",
    description:
      "A user-friendly e-commerce website that serves as an online platform for showcasing a variety of shoe products.It intentionally excludes the ordering feature to simplify the project's scope",
    tags: ["React", "Tailwind"],
    imageUrl: soleSavvy,
    href: "https://darling-rolypoly-fd6a47.netlify.app/",
  },
  {
    title: "To do List",
    description:
      "Created a minimalist To-Do App using React that implements the CRUD (Create, Read, Update, Delete) operations. This app allows users to effortlessly manage their tasks.",
    tags: ["React", "Tailwind"],
    imageUrl: todoApp,
    href: "https://coruscating-palmier-7fe8be.netlify.app",
  },
  {
    title: "MovieLand",
    description:
      "Designed and built 'MovieLand' app using React, empowering users to easily search for movies and access release year information",
    tags: ["React", "Tailwind"],
    imageUrl: movieland,
    href: "https://movie-land-eta.vercel.app/",
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
  "Express",
  "Framer Motion",
] as const;

export const khaleelImg = khaleelPicture;
