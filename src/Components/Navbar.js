import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const chechIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", chechIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", chechIfClickedOutside);
    };
  }, [show]);

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
      <nav className="nav">
        <div
          className={show ? "navbar nav-active" : "navbar"}
          onClick={() => setShow(false)}
          ref={ref}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <MdKeyboardArrowUp
            className="arrow_up"
            onClick={() => setShow(false)}
            ref={ref}
          />
        </div>
        <div
          className="burger"
          onClick={() => setShow((prev) => !prev)}
          ref={ref}>
          <GiHamburgerMenu size={30} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
