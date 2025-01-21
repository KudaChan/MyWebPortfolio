import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { style } from '../../style';
import { allexperiences } from '../../constants';
import { PageWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';
import ExperienceCard from '../ui/ExperienceCard';

const Experience = () => {
  return (
    <>
      <div className={`${style.padding} mx-auto max-w-7xl flex flex-1 flex-col relative z-0`} >
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
            {allexperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

const ExperienceSection = PageWrapper(Experience, "work");
export default ExperienceSection;