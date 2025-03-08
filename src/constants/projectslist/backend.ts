import { herbai_server, polling } from "../../assets";

const backend = [
  {
    name: "Polling System",
    description:
      "A high-concurrency polling system built with Node.js, TypeScript, Kafka, and PostgreSQL. The system supports real-time updates via WebSocket and includes a leaderboard feature.",
    tags: [
      {
        name: "Node.js",
        color: "violet-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Kafka",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: polling,
    source_code_link: "https://github.com/KudaChan/Polling_Party",
    live_demo_link: "",
  },
  {
    name: "Herb Ai Server",
    description:
      "server for herb ai project that allows users to identify plants with there leaves photo using machine learning. Limited to 5 plant and server is down due to hardware constraints.",
    tags: [
      {
        name: "python",
        color: "violet-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "orange-text-gradient",
      },
    ],
    image: herbai_server,
    source_code_link: "https://github.com/KudaChan/herb_ai/tree/main/herb_server",
    live_demo_link: "",
  },
];

export default backend;