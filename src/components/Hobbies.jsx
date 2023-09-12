import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import GuitarCanvas from "./canvas/Guitar";
import { Tooltip } from "@material-tailwind/react";

const HobbieCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Hobbies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I do in my free time
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hobbies
        </h2>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between align-middle">
      <div className='mt-20 flex flex-col hobbies-wrapper'>
        <p className="pb-6 md:text-start text-center">
          Outside of work, I've been a guitarist for six years. Its the number one thing I love to do in my free time.
          
          </p>
      </div>
      <div className='flex flex-col justify-end h-auto guitar-wrapper'>

        <GuitarCanvas/>
        
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
