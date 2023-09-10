import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import DrumsCanvas from "./canvas/Drums";
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

const Hobbies2 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between align-middle">
        <div className='flex flex-col justify-start h-auto guitar-wrapper order-2 md:order-1'>

        {/* <GuitarCanvas/> */}
        {/* <DrumsCanvas/> */}
        
        </div>
      <div className='mt-28 flex flex-col  order-1 md:order-2'>
        <p className="pb-6 pl-0 md:pl-20 text-center md:text-end">
          Besides guitar, I started playing drums a year ago for my band. We pour our shared passion into our music, creating something truly special. 
          If you share a love for music, consider joining us on Instagram. 
                   </p>
          <Tooltip content="See our work" placement='right' className="ml-3">
            <a  href='https://www.instagram.com/omrazofficial/' className="md:w-full flex justify-center md:justify-end">
              <img src='./instagram.png' alt='instagram' className='w-10 h-10 object-contain'/>
            </a>
          </Tooltip>
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies2, "hobbies2");
