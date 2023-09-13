import React, { useState } from "react";
import data from "../data.json";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const Projects = () => {
  // console.log(data.projects[0]);
  // const [isHovering, setIsHovering] = useState(false);
  const [index, setIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    swipe: true,
    slidesToScroll: 1,
    centerPadding: 0,
    // autoplay: "true",
    // autoplaySpeed: 3000,
    focusOnSelect: true,
    pauseOnHover: true,
    nextArrow: <BiRightArrow className="slick-next" />,
    prevArrow: <BiLeftArrow className="slick-prev" />,
    beforeChange: (oldIndex, newIndex) => setIndex(newIndex),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="projects_section" id="projects">
      <h2 className="heading" style={{ marginBottom: "50px" }}>
        WORK
      </h2>

      <Slider className="slider" {...settings}>
        {data?.projects?.map((project, id) => (
          <div className={id === index ? "slides active " : "slides"} key={id}>
            <div className="slides_image" key={id}>
              <img src={project.imageSrc} alt="Project image" />
              <div className="overlay">
                <h2>
                  <strong>{project.title}</strong>
                </h2>

                {project.description.map((desc, idx) => (
                  <ul key={idx}>
                    <strong>{desc}</strong>
                  </ul>
                ))}

                <a href={project.url} target="_blank">
                  <button className="visit">Visit site</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
