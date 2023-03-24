import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { newtab } from "../assets";
import { SectionWrapper } from "../hoc";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utilities/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="inset-0 flex justify-end m-3 card-img_hover">
          <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() => window.open(website_link, "_blank")}
              className="black border-style:double w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={newtab}
                alt="Open in a new page"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My <span className="text-[#51f951]">Projects </span>
        </h2>
        <h3 className={`${styles.warning} text-center text-[#de3737]`}>Section is underwork</h3>
      </motion.div>

      <div className="w-full flex items-center justify-center  ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white-100  text-[16px] max-w-3xl leading-[30px]"
        >
          This section is still underwork. Here you will find some of the
          projects I worked on. If you have any question, inquiry or
          recomendation, feel free to reach out to me using{" "}
          <span className="text-[#51f951] no-underline hover:underline">
            {" "}
           <a href="#contact"> the contact form down below.
           </a>
          </span>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
