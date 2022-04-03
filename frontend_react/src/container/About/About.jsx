import React from "react";
import "./About.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { about01, about02, about03, about04 } from "../../constant/images";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";

// const abouts = [
//   {
//     title: "MERN stack Development",
//     description: "I am a good MERN stack developer.",
//     imgURL: about03,
//   },
//   {
//     title: "Frontend Development",
//     description: "I am a good frontend developer.",
//     imgURL: about01,
//   },

//   {
//     title: "Backend Development",
//     description: "I am a good backend developer.",
//     imgURL: about02,
//   },

//   {
//     title: "Native App Development",
//     description: "I am a good native app developer.",
//     imgURL: about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(title)';

    client
      .fetch(query) //it will return promise
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span> Good App</span>
        <br />
        Means <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title - `${index}`}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
