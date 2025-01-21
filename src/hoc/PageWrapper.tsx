import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';

const PageWrapper = (Components: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5, 1)}
        initial="hidden"
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto relative z-0"
      >
        <span className='hash-span' id={idName}>
        </span>
        <Components />
      </motion.section>
    )
  }

export default PageWrapper