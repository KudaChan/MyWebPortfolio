import { motion } from 'framer-motion';

import { style } from '../../style';
import { ComputerCanvas } from '../canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4e1c75ee]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${style.heroHeadText} text-white`}>Hi, I'm <span className='text-[#8758acee] '>Chandan</span></h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            I'm a web developer and Tech Enthusiasts.
            <br className='sm:block hidden'/>
            I specialize in creating modern and user-friendly interfaces and backends.
            <br />
            <br />
            I'm currently looking for opportunities to collaborate with talented individuals and help clients build their businesses.
            <br />
            <br />
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;