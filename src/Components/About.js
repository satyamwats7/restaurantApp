import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          A balanced diet includes a variety of foods from different food groups, ensuring the intake of a broad spectrum of essential nutrients.
          Nutrients such as carbohydrates, proteins, fats, vitamins, and minerals are crucial for various bodily functions.
          Energy Source:

          Food serves as the primary source of energy for the body.
          Carbohydrates, in particular, provide the energy needed for daily activities and bodily functions.
          Health Maintenance:

          A balanced diet contributes to overall health and well-being.
          Proper nutrition supports the immune system, helps maintain healthy body weight, and reduces the risk of chronic diseases.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
         
        </div>
      </div>
    </div>
  );
};

export default About;
