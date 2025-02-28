// import { useState } from 'react';
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { ProjectCard } from "..";
import { arrow_right } from "../../assets";
import { style } from '../../style';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Show only first 3 projects initially
  const displayProjects = projects.slice(0, 4);

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
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          Following projects showcase my skills and experience in web development through real-world examples of my work. Each project is briefly described with a link to the live demo and the source code repository. It reflects my passion and ability to solve complex problems, work with different technologies, and deliver high-quality products.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {displayProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex items-center justify-center'
          >
            <div className="text-center">
              <div className="bg-secondary hover:bg-white w-24 h-24 mx-auto rounded-full shadow-lg shadow-secondary transition-all duration-300">
                <Link
                  to="/projects"
                  className="flex justify-center items-center w-full h-full"
                >
                  <img
                    src={arrow_right}
                    alt="View all projects"
                    className="w-16 h-16 object-contain"
                  />
                </Link>
              </div>
              <p className="text-secondary text-[16px] font-medium mt-5">View All Projects</p>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </>
  )
}

const WrappedProjects = SectionWrapper(Projects, "project");

export default WrappedProjects;
