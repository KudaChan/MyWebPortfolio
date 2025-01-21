import { motion } from "framer-motion";

import { style } from "../../style";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

import ProjectCard from "../ui/ProjectsCard";

const Projects = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0)}
      >
        <p className={style.sectionSubText}>My Work</p>
        <h2 className={style.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience in web development through real-world examples of my work. Each project is briefly described with a link to the live demo and the source code repository. It reflects my passion and ability to solve complex problems, work with different technologies, and deliver high-quality products.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
      <motion.div
        className="mt-20 flex justify-center items-center"
        variants={fadeIn("", "", 0.5, 1)}
      >
        <a
          href="/projects"
          target="_self"
          rel="noopener noreferrer"
          className="text-white text-[18px] font-medium bg-secondary/15 shadow-md shadow-secondary px-4 py-2 rounded-md hover:bg-secondary/50"
        >
          See My Other Projects
        </a>
      </motion.div>
    </>
  )
}

const WrappedProjects = SectionWrapper(Projects, "project");

export default WrappedProjects;