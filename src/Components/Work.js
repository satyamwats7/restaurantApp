import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Grilled salmon with quinoa and roasted vegetables.Chickpea curry with brown rice.Caesar salad with grilled chicken.Vegetable stir- fry with tofu.Lentil soup with whole - grain bread.Margherita pizza with a side salad",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Select frequency for a personalized experience with flexible delivery schedules."
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Swift deliveries, ensuring rapid and timely service for your convenience.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our process is simple: Browse, select, and order. Our team ensures efficient handling, timely preparation, and swift delivery. Experience seamless service from start to finish with "How It Works."
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
