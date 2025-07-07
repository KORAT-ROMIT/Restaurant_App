import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p> </p>
            </div>
            <p className="mid">
              Food is a basic necessity of life that provides the energy and
              nutrients required for the body to function, grow, and repair
              itself. It is more than just sustenance—it is also deeply tied to
              culture, tradition, economy, and identity. From simple home-cooked
              meals to elaborate international cuisines, food reflects the
              history and values of communities around the world. There are
              three main macronutrients in food: carbohydrates, proteins, and
              fats. Carbohydrates provide a quick source of energy and are found
              in grains, fruits, and vegetables. Proteins, found in meat, dairy,
              legumes, and nuts, are essential for building and repairing body
              tissues.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
