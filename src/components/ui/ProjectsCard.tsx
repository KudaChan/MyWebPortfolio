import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, arrow } from "../../assets";
import { fadeIn} from "../../utils/motion";

interface projectCardProps {
  key: string;
  index: number;
  project: {
    name: string;
    description: string;
    tags: { name: string; color: string; }[];
    image: string;
    source_code_link: string;
    live_demo_link: string;
  }
}

const ProjectCard: React.FC<projectCardProps> = (projectArgs) => {
  return (
    <motion.div variants={fadeIn("up", "spring", projectArgs.index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex flex-col'
      >
        {/* Image container with fixed height */}
        <div className="relative w-full h-[230px] flex-shrink-0">
          <img
            src={projectArgs.project.image}
            alt={projectArgs.project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            <div
              onClick={() => window.open(projectArgs.project.source_code_link, `_blank`)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {projectArgs.project.live_demo_link === "" ? null :
              <div
                onClick={() => window.open(projectArgs.project.live_demo_link, `_blank`)}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            }
          </div>
        </div>

        {/* Content container with flex-grow */}
        <div className="flex flex-col flex-grow">
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] line-clamp-1">{projectArgs.project.name}</h3>
            <p className="mt-2 text-secondary text-[14px] line-clamp-4 text-justify">{projectArgs.project.description}</p>
          </div>

          {/* Tags pushed to bottom with margin-top auto */}
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {projectArgs.project.tags.map((tag) => (
              <p key={`${projectArgs.project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard;
