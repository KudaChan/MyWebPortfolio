import { motion } from 'framer-motion';

import { style } from '../style';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Components: React.ComponentType, idName:string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5, 1)}
        initial="hidden"
        animate="show"
        viewport={{once: true, amount:0.25}}
        exit="hidden"
        className={`${style.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Components/>
      </motion.section>
    )
  }

export default SectionWrapper