import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utilities/motion";

import { textVariant } from "../utilities/motion";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
 // To check in Email JS - to be fixed
  //template ID:  template_29xzj06
  //service ID:  service_lacgbyn
  //Public key : L5Erz_ioYWHL5w_Bc
  //Private key : 0Sc5g3lHh1xLEYBCjWJVl

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lacgbyn",
        "template_29xzj06",
        {
          from_name: form.name,
          to_name: "Taieb",
          from_email: form.email,
          to_email: "tbelkahla3@gmail.com",
          message: form.message,
        },
        "L5Erz_ioYWHL5w_Bc"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you for reaching out 😉, I will get back to you soon");

        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong");
          };
      });
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Send me <span className="text-[#51f951]">a message</span>
        </h2>
      </motion.div>

    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}></p>
        <h3 className={styles.sectionHeadText}></h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="How can I call you ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              name="message"
              rows="9"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you have in mind ?"
              className="py-4 px-6 bg-tertiary placeholder:text-secondary
                    text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#348834] py-3 px-8 outline-none
                text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
