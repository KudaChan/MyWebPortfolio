import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import 'react-vertical-timeline-component/style.min.css';

import { style } from '../../style';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { ExperienceCard } from '..';
import { arrow_right } from '../../assets';

const Experience = () => {
  // Show only latest 2 experiences initially
  const displayExperiences = experiences.slice(0, 2);

  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={style.sectionSubText}>What I Contributed so far ?</p>
        <h2 className={style.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {displayExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
        {/* View All Experience Button */}
        <motion.div
          className="flex justify-center items-center mt-10"
          variants={fadeIn("up", "spring", 0.5, 0.75)}
        >
          <Link
            to="/experience"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="bg-secondary hover:bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg shadow-secondary transition-all duration-300 group-hover:scale-110">
              <img
                src={arrow_right}
                alt="View all experience"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-secondary text-[18px] font-medium">
              View Full Journey
            </span>
          </Link>
        </motion.div>
      </div>
    </>
  );
}

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
