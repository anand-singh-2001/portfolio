import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const chechIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        //setShow to false if the place clicked isn't inside the specific area.
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

    if (window.scrollY > 150) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  return (
    <>
      <nav className="nav" ref={ref}>
        <div className={show ? "navbar nav-active" : "navbar"}>
          <a href="#home" onClick={() => setShow(false)}>
            Home
          </a>
          <a href="#skills" onClick={() => setShow(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setShow(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setShow(false)}>
            Contact
          </a>

          <div className="connect">
            <p style={{ color: "grey", margin: "0 auto" }}>Connect with me.</p>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/anand-singh-48024721a"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin size={30} color="grey" />
              </a>

              <a
                href="https://www.github.com/anand-singh-2001?tab=repositories"
                target="_blank"
                rel="noreferrer">
                <BsGithub size={30} color="grey" />
              </a>
            </div>
          </div>
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
