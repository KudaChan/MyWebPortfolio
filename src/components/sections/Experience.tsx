import { VerticalTimeline} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { style } from '../../style';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import ExperienceCard from '../ui/ExperienceCard';

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.5)}
      >
        <p className={style.sectionSubText}>What I Contributed so far ?</p>
        <h2 className={style.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience = {experience} />
          ))}
        </VerticalTimeline>
      </div>
      <motion.div
        className="mt-20 flex justify-center items-center"
        variants={fadeIn("", "", 0.5, 1)}
      >
        <a
          href="/home/experience"
          target="_self"
          rel="noopener noreferrer"
          className="text-white text-[18px] font-medium bg-secondary/15 shadow-md shadow-secondary px-4 py-2 rounded-md hover:bg-secondary/50"
        >
          Look at My Professional Journey
        </a>
      </motion.div>
    </>
  )
}

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;