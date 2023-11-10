import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import { AiOutlineDown } from "react-icons/ai";

import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contacts from "./Contacts";

const Home = () => {
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
                href="https://drive.google.com/file/d/1gGAibHYCDNy4kt-vQ2mqKISoNfc0_R_o/view?usp=sharing"
                target="_blank"
                rel="noreferrer">
                <button className="CV"> RESUME</button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
