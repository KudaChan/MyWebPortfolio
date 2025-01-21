import {
  mobile,
  backendicon,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  csharp,
  nextjs,
  postgresql,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // docker,
  aatvish,
  jaypee,
  herbai,
  threejs,
  github,
  x,
  linkedin
} from "../assets";

import fullstack from "./projectslist/frontend";
import frontend from "./projectslist/frontend";
import backend  from "./projectslist/backend";

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

// Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// Experiences
const experiences = [
  {
    title: "Full stack Developer",
    position: "Intern",
    company_name: "Aatvis Systems",
    icon: aatvish,
    iconBg: "#E6DEDD",
    date: "July 2024 - October 2024",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    position: "Freelancer | Student",
    company_name: "Jaypee University of Information Technology",
    icon: jaypee,
    iconBg: "#E6DEDD",
    date: "November 2024 - present",
    points: [
      "Developing and maintaining application using Next.js, React.js and related technology",
      "Design and develop responsive application with cross-browser compatibility",
      "Train machine learning model and build web application for the same",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Explore blockchain technology.",
    ],
  }
];

// Projects Details
const projects = [
  {
    name: "Herb Ai",
    description:
      "Web-based platform that allows users to identify plants with there leaves photo using machine learning.(Number of plant limited to 5.)",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: herbai,
    source_code_link: "https://github.com/KudaChan/herb_ai",
    live_demo_link: "https://herb-ai.vercel.app/",
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

export { services, technologies, experiences, projects, footerIcon, fullstack, frontend, backend };
