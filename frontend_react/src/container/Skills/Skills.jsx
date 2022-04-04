import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import ReactTooltip from "react-tooltip";
import MotionWrapper from "../../wrapper/MotionWrapper";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={`${skill.name}-${index}`}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={`${experience.year}-${index}`}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works?.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={`${work.name}-${index}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">
                        {work.company}{" "}
                        <span>{`${work.start} - ${work.end}`}</span>
                      </p>
                      <p className="app__skills-work-description">{work.desc}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      key={index}
                    >
                      {work.tooltip}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

// export default AppWrap(Skills, "skills");
export default AppWrap(
  MotionWrapper(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
