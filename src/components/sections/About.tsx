import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { style } from '../../style';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

const ServiceCard = ({index, title, icon}: {index: number; title: string; icon: string}) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{ title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant(1)}
      >
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a web developer with a passion for creating and building things. I have experience working with a variety of technologies such as React, Next.js, Node.js, Nest.js and Express and programming languages like Typescript, Javascript, C# and Solidity and also familiar with MongoDB and Postgres database.
        I am a quick learner and always looking to learn new things and improve my skills.I am also interesting in new emerging technologies and currently exploring BlockChain.
        <br />
        <br />
        <span className='font-bold text-xl text-white'>Let's work together and build something amazing!</span>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={ service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, "about")

export default WrappedAbout;