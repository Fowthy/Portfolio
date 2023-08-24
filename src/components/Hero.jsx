import { motion } from "framer-motion";

import { styles } from "../styles";
import { Tooltip } from "@material-tailwind/react";
import { useEffect } from "react";

// import { ComputersCanvas } from "./canvas";


const Hero = ({onComponentLoad}) => {
  useEffect(() => {
    onComponentLoad("hero");
  }, [onComponentLoad]);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Alex</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop and design web applications, <br className='sm:block hidden' />
            and I'm open for challenging opportunities.
          </p>
          <div className="flex flex-row mt-4">
            <Tooltip content="See my LinkedIn profile" placement="bottom" className="mt-2">
              <a href="https://www.linkedin.com/in/aleksandar-svetoslavov-484a96177/">
             <img src='./linkedin.png' className="w-11 h-11 rounded-full mr-4"/>
              </a>
            </Tooltip>
            <Tooltip content="See my GitHub profile" placement="right" className="ml-3">
              <a href="https://github.com/Fowthy">
             <img src='./github.png' className="w-11 h-11 bg-white rounded-full"/>
              </a>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <Tooltip content="See more">

        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
    </Tooltip>
      </div>
    </section>
  );
  
};

export default Hero;
