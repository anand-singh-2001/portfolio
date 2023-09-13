import React from "react";

import { FaReact, FaCss3, FaPython, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMui,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <h4 className="heading" id="skills">
        TOOLS
      </h4>
      <div className="skills-section">
        <div className="boxes">
          <IoLogoJavascript size={70} className="box" />
          <div className="box_overlay">JavaScript</div>
        </div>
        <div className="boxes">
          <FaReact size={70} className="box" />
          <div className="box_overlay">React</div>
        </div>
        <div className="boxes">
          <FaCss3 size={70} className="box" />
          <div className="box_overlay">CSS</div>
        </div>
        <div className="boxes">
          <AiFillHtml5 size={70} className="box" />
          <div className="box_overlay">HTML</div>
        </div>
        <div className="boxes">
          <FaPython size={70} className="box" />
          <div className="box_overlay">Python</div>
        </div>
        <div className="boxes">
          <FaNodeJs size={70} className="box" />
          <div className="box_overlay">NodeJS</div>
        </div>
        <div className="boxes">
          <TbBrandRedux size={70} className="box" />
          <div className="box_overlay">Redux</div>
        </div>
        <div className="boxes">
          <SiExpress size={70} className="box" />
          <div className="box_overlay">Express</div>
        </div>
        <div className="boxes">
          <SiFirebase size={70} className="box" />
          <div className="box_overlay">Firebase</div>
        </div>
        <div className="boxes">
          <SiMongodb size={70} className="box" />
          <div className="box_overlay">MongoDb</div>
        </div>
        <div className="boxes">
          <SiMui size={70} className="box" />
          <div className="box_overlay">Material UI</div>
        </div>
        <div className="boxes">
          <SiTailwindcss size={70} className="box" />
          <div className="box_overlay">Tailwind</div>
        </div>
      </div>
    </>
  );
};

export default Skills;
