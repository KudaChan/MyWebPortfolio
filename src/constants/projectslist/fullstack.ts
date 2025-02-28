import { herbai, mis } from "../../assets";

const fullstack = [
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
      "Web-based platform that allows users to identify plants with there leaves photo using machine learning.Limited to 5 plant and server is down due to hardware limitations.",
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

export default fullstack;

