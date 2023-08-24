import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contacts from "./Contacts";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  //   const [color, setColor] = useState("black");
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
      <div id="home" className="home">
        <section>
          <div>
            <motion.h1 {...animation.h1}>Hi there, I am Anand Singh</motion.h1>
            {/**provides motion effect */}
            <Typewriter
              options={{
                strings: ["A Developer", "A Designer", "A Creator"], //The strings to display in animation, one after the other(loop).
                autoStart: true,
                loop: true,
                // cursor: '',
                wrapperClassName: "typewriterpara",
              }}
            />
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/anand-singh-48024721a"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin
                  size={30}
                  // style={{ color: "black" }}
                />
              </a>

              <a
                href="https://www.github.com/anand-singh-2001?tab=repositories"
                target="_blank"
                rel="noreferrer">
                <BsGithub
                  size={30}
                  // style={{ color: "black" }}
                />
              </a>
            </div>
            <div className="info">
              <a
                href="https://drive.google.com/file/d/1ZnUNWoMRGa5TSNPWKuiqXJA-Ea1F0skc/view?usp=sharing"
                target="_blank">
                <button className="CV"> RESUME</button>
              </a>
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence initial={false}>
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </AnimatePresence>
    </>
  );
};

export default Home;
