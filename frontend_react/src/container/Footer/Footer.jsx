import React, { useState } from "react";
import AppWrap from "../../wrapper/AppWrap";
import { client } from "../../client";
import MotionWrapper from "../../wrapper/MotionWrapper";
import { email, mobile } from "../../constant/images";
import "./Footer.scss";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    //till now we only created our data using sanity cms(content management system) but now we are sending our application data to sanity programmatically
    client.create(contact).then(() => {
      //on success
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={email} alt="email" />
          {/* there is a special property named mailto in anchor tag */}
          <a href="mailto:aman.sahu.as96@gmail.com" className="p-text">
            aman.sahu.as96@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="mobile" />
          <a href="tel:+918602263732" className="p-text">
            +91 8602263732
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {isLoading ? "Sending" : "Send message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch with me!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrapper(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
