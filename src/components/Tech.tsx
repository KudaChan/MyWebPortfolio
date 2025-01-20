import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { style } from "../style";
import { textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <>
    <motion.div
        variants={textVariant(0.5)}
      >
        <p className={style.sectionSubText}>What I Know ?</p>
        <h2 className={style.sectionHeadText}>
          Tech Stack.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

const WrappedTechSection = SectionWrapper(Tech, "")

export default WrappedTechSection