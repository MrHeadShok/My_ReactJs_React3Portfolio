import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative h-screen mx-auto w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start
            gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full bg-[#51f951]" />
          <div className="w-1 sm:h-80 h-40 w-0.5 bg-[#51f951]" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText}
                    text-white`}
          >
            Hey, I'm <span className="text-[#51f951]"> Taieb 👋🏻</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, mobile applications{" "}
            <br className="sm:block hidden" /> and manage products.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute xs:bottom-10 bottom-32
    w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#51f95177]
        flex justify-center items-start p-2"
          >
<motion.div 
animate={{y:[0, 24, 0]}}
transition={{duration:1.5,
repeat: Infinity,
repeatType:'loop'
}}
className="w-3 h-3 rounded-full bg-[#51f951e2] mb-1"
/>

          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
