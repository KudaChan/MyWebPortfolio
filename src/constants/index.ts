import {
  mobile,
  backendicon,
  creator,
  web,
  typescript,
  reactjs,
  csharp,
  nextjs,
  postgresql,
  redux,
  tailwind,
  nodejs,
  kafka,
  mongodb,
  git,
  docker,
  github,
  x,
  linkedin,
} from "../assets";

import projects from "./projectslist/projects";
import fullstack from "./projectslist/fullstack";
import frontend from "./projectslist/frontend";
import backend from "./projectslist/backend";
import ml from "./projectslist/ml";

import allexperiences from "./experiencelist/allexperience";
import experiences from "./experiencelist/experience";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backendicon,
  },
  {
    title: "Blockchain Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const footerIcon = [
  {
    name: 'Github',
    icon: github,
    link: 'https://github.com/KudaChan',
  },
  {
    name: 'Twitter',
    icon: x,
    link: 'https://x.com/@lk_kashyap05',
  },
  {
    name: 'LinkedIn',
    icon: linkedin,
    link: 'https://linkedin.com/in/chandan-kumarn-972b54224',
  }
]

export { services, technologies, experiences, projects, footerIcon, fullstack, frontend, backend, ml, allexperiences };
