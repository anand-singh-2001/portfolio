import React from "react";
import animations from "../Assets/animation.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="about">
      <Lottie animationData={animations} loop={true} className="lottie" />
      <div className="about_desc">
        <h4 className="heading">ABOUT</h4>

        <p style={{ letterSpacing: "2px" }}>
          <strong>Creative Frontend Developer</strong> with a proven track
          record of crafting visually appealing, user-centric web interfaces.
          Proficient in a range of frontend technologies including{" "}
          <strong>HTML</strong> ,<strong>CSS</strong> ,{" "}
          <strong>Javascript</strong>, and modern frameworks like{" "}
          <strong>React</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
