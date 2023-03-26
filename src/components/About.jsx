import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant} from "../utilities/motion";
import { SectionWrapper } from "../hoc/index";


const About = () => {


  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>About me </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Over<span className="text-[#51f951]">view </span>
        </h2>
      </motion.div>
      
      <div className="w-full flex items-center justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white-100 text-[16px] max-w-3xl leading-[30px]"
        >
          A skilled software developer with a wealth of knowledge in JavaScript
          and various front-end frameworks such as ReactJS, AngularJS, and
          VueJS, as well as NodeJS. Also proficient in developing mobile apps
          using mobile app development frameworks such as Ionic and React
          Native. <br/>
          In addition I'm proud to say that I have valuable experience in
          product management and am well-versed in agile methodology.
        </motion.p>
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");

/* 

const ServiceCard = ({ index, title, icon }) => (
  
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


 <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

*/

/*
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, zoomIn } from "../utilities/motion";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc/index";

const About = () => {

  const ServiceCard = ({ index, title, icon }) => (
  
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={zoomIn(0.5, 0.3)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>About me </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Over<span className="text-[#51f951]">view </span>
        </h2>
      </motion.div>
      
      <div className="w-full flex items-center justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white-100 text-[16px] max-w-3xl leading-[30px]"
        >
          A skilled software developer with a wealth of knowledge in JavaScript
          and various front-end frameworks such as ReactJS, AngularJS, and
          VueJS, as well as NodeJS. Also proficient in developing mobile apps
          using mobile app development frameworks such as Ionic and React
          Native. <br/>
          In addition I'm proud to say that I have valuable experience in
          product management and am well-versed in agile methodology.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


    </>
  );
};

export default SectionWrapper(About, "about");


*/