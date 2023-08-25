import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import arrow_animation from "../Assets/arrow_animation.json";
import Lottie from "lottie-react";
import { HiOutlineMail } from "react-icons/hi";
import Popup from "reactjs-popup";

const Contacts = () => {
  const form = useRef();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c63r02o",
        "template_4yuemnu",
        form.current,
        "AbppCD3Ii7CW9jSgd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClick = () => {
    setShow(!show);
    const interval = setTimeout(() => {
      setShow(false);
      setName("");
      setEmail("");
    }, 12000);
  };

  return (
    <div className="message_section" id="contact">
      <div className="form">
        {show ? (
          <Lottie
            animationData={arrow_animation}
            loop={false}
            className="lottie_message"
          />
        ) : (
          <form className="message_form" ref={form} onSubmit={sendEmail}>
            <label>NAME </label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name here"
            />
            {!name && (
              <p style={{ fontSize: "12px", color: "red", marginTop: "-5px" }}>
                * Required
              </p>
            )}
            <label>EMAIL </label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
            />
            {!email && (
              <p style={{ fontSize: "12px", color: "red", marginTop: "-5px" }}>
                * Required
              </p>
            )}
            <label>MESSAGE </label>
            <textarea name="message" required placeholder="Your message" />

            <button
              className="submit_button"
              onClick={handleClick}
              type="submit"
              value="Send"
              disabled={!email || !name}>
              Let's connect <BsFillArrowRightCircleFill />
            </button>
          </form>
        )}
      </div>
      <div className="contact_description">
        <h4 className="heading">CONTACT</h4>
        <strong style={{ fontSize: "50px" }}>
          Feel we could work together?
        </strong>
        <p style={{ color: "grey" }}>
          Let's connect to see if I'm the guy for your work.
        </p>
        <strong style={{ marginTop: "20px" }}>
          <a
            href="mailto:as504919@gmail.com"
            target="_blank"
            style={{ color: "whitesmoke" }}>
            <HiOutlineMail size={35} /> <span>as504919@gmail.com</span>
          </a>
        </strong>
      </div>
    </div>
  );
};

export default Contacts;
