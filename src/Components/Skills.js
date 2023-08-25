import React from "react";

import { FaReact, FaCss3, FaPython, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <h4 className="heading" id="skills">
        TOOLS
      </h4>
      <div className="skills-section">
        <div className="boxes">
          <IoLogoJavascript size={50} />
        </div>
        <div className="boxes">
          <FaReact size={50} />
        </div>
        <div className="boxes">
          <FaCss3 size={50} />
        </div>
        <div className="boxes">
          <AiFillHtml5 size={50} />
        </div>
        <div className="boxes">
          <FaPython size={50} />
        </div>
        <div className="boxes">
          <FaNodeJs size={50} />
        </div>
        <div className="boxes">
          <TbBrandRedux size={50} />
        </div>
        <div className="boxes">
          <SiExpress size={50} />
        </div>
        <div className="boxes">
          <SiFirebase size={50} />
        </div>
        <div className="boxes">
          <SiMongodb size={50} />
        </div>
      </div>
    </>
  );
};

export default Skills;
