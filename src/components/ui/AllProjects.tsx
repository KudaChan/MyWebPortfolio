import { motion } from "framer-motion";

import { style } from "../../style";
import { PageWrapper } from "../../hoc";
import { fullstack, frontend, backend, ml } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

import ProjectCard from "./ProjectsCard";

const AllProjects = () => {
  return (
    <>
      <div className={`${style.padding} mx-auto max-w-7xl flex flex-1 flex-col relative z-0`}>
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
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
          >
            Following projects showcase my skills and experience in web development through real-world examples of my work. Each project is briefly described with a link to the live demo and the source code repository. It reflects my passion and ability to solve complex problems, work with different technologies, and deliver high-quality products.
          </motion.p>
        </div>
          <motion.div
            variants={textVariant(0)}
          >
            <h3 className="text-white font-semibold md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] mt-10 border-b-2 border-secondary pt-5">
              Fullstack Projects.
            </h3>
          </motion.div>
          <div className="mt-5 flex flex-wrap gap-7">
            {fullstack.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                project={project}
              />
            ))}
          </div>
          <motion.div
            variants={textVariant(0)}
          >
            <h3 className="text-white font-semibold md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] mt-10 border-b-2 border-secondary pt-5">
              Fontend Projects.
            </h3>
          </motion.div>
          <div className="mt-5 flex flex-wrap gap-7">
            {frontend.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                project={project}
              />
            ))}
          </div>
          <motion.div
            variants={textVariant(0)}
          >
            <h3 className="text-white font-semibold md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] mt-10 border-b-2 border-secondary pt-5">
              Backend Projects.
            </h3>
          </motion.div>
          <div className="mt-5 flex flex-wrap gap-7">
            {backend.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                project={project}
              />
            ))}
        </div>
        <motion.div
          variants={textVariant(0)}
        >
          <h3 className="text-white font-semibold md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] mt-10 border-b-2 border-secondary pt-5">
            Machine Learning Projects.
          </h3>
        </motion.div>
        <div className="mt-5 flex flex-wrap gap-7">
          {ml.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const WrappedAllProjects = PageWrapper(AllProjects, "");

export default WrappedAllProjects;