import React, { useState, useEffect } from "react";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import MotionWrapper from "../../wrapper/MotionWrapper";
import {
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import "./Testimonials.scss";

const Testimonials = () => {
  // const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentindex] = useState(0);

  useEffect(() => {
    // const brandQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"] | order(name)';

    // client.fetch(brandQuery).then((data) => setBrands(data));
    client.fetch(testimonialsQuery).then((data) => setTestimonials(data));
  }, []);

  const currentTest = testimonials[currentIndex];

  const handleClick = (index) => {
    console.log(index);
    setCurrentindex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(currentTest.imgurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{currentTest.feedback}</p>
              <div>
                <h4 className="bold-text">{currentTest.name}</h4>
                <h5 className="p-text">{currentTest.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* in future when i will work with any brand */}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand)=> (
          <motion.div
            key={brand._id}
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, type:'tween'}}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrapper(Testimonials, "app__testimonials"),
  "testimonials",
  "app__primarybg"
);
