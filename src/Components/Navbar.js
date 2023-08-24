import React from "react";
// import { a } from "react-router-dom";
// import Resume from '../Document/Anand Singh-resume(in progress)'
const Navbar = () => {
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 500) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  return (
    <>
      <nav>
        <div className="navbar">
          <a href="/#home">Home</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
