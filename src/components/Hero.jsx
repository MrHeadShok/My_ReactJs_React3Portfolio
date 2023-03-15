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
          <div className="w-3 h-3 rounded-full bg-[#ff5e71]" />
          <div className="w-1 sm:h-80 h-40 w-0.5 bg-[#ff5e71]" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText}
                    text-white`}
          >
            Hey, I'm <span className="text-[#915eff]"> Taieb 👋🏻</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, mobile applications{" "}
            <br className="sm:block hidden" /> and manage products.
          </p>
        </div>
      </div>
        <ComputersCanvas />
    </section>
  );
};

export default Hero;
