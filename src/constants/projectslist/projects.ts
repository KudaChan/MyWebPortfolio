import {
  herbai,
  apple,
  nike,
  mis,
} from "../../assets";

const projects = [
  {
    name: "Management Information System",
    description:
      "A comprehensive web-based MIS solution that streamlines organizational data management, reporting, and decision-making processes. Features include user management, real-time analytics, automated reporting, and role-based access control.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb.js",
        color: "green-text-gradient",
      },
      {
        name: "nest.js",
        color: "pink-text-gradient",
      },
    ],
    image: mis,
    source_code_link: "https://github.com/KudaChan/Information-Mangament-System",
    live_demo_link: " mis-client.vercel.app ",  // Add if available
  },
  {
    name: "Herb Ai",
    description:
      "Web-based platform that allows users to identify plants with there leaves photo using machine learning.Limited to 5 plant and server id down due to hardware limitations.",
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
  {
    name: "Apple Web Clone",
    description:
      "Clone of Apple's Iphone website. This project was done to improve my front-end skills in react, tailwind and threejs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "violet-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/KudaChan/web-Apple-Clone",
    live_demo_link: "https://web-apple-clone-tau.vercel.app/",
  },
  {
    name: "Nike Web Clone",
    description:
      "Clone of Nike website. This project was done to improve my front-end skills in react, tailwind and threejs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "violet-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/KudaChan/web-nike-clone",
    live_demo_link: "https://web-nike-clone-eight.vercel.app/",
  },
];

export default projects;