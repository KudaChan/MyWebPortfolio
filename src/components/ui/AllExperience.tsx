import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import 'react-vertical-timeline-component/style.min.css';

import { style } from '../../style';
import { allexperiences } from '../../constants';
import { PageWrapper } from '../../hoc';
import { textVariant, fadeIn } from '../../utils/motion';
import ExperienceCard from '../ui/ExperienceCard';

const AllExperience = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${style.padding} mx-auto max-w-7xl flex flex-1 flex-col relative z-0`}>
        {/* Back button */}
        <motion.button
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 bg-secondary hover:bg-white text-primary px-4 py-2 rounded-full transition-all duration-300"
          variants={fadeIn("right", "spring", 0.1, 1)}
        >
          ← Back
        </motion.button>

        <motion.div
          variants={textVariant(0.5)}
          className="mt-10"
        >
          <p className={style.sectionSubText}>My Professional Journey</p>
          <h2 className={style.sectionHeadText}>
            Complete Experience Timeline.
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
          >
            A comprehensive timeline of my professional journey, showcasing my growth
            and contributions across different roles and organizations. Each position
            reflects my commitment to learning and delivering impactful solutions.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {allexperiences.map((experience, index) => (
              <ExperienceCard 
                key={`experience-${index}`} 
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

const ExperienceSection = PageWrapper(AllExperience, "work");
export default ExperienceSection;
