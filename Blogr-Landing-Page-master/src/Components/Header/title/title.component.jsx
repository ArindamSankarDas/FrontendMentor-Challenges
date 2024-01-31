import React from "react";
import HEADER_DATA from "../../../assets/data/header.data.js";
import MediumButton from "../../Buttons/medium-Button/md-button.component.jsx";
import "./title.styles.scss";

const Title = () => {
  const { title_buttons } = HEADER_DATA;

  return (
    <div className="title">
      <div className="title_heading">
        <h1> A modern publishing platform</h1>
        <h2>Grow your audience and build your online brand</h2>
      </div>

      <div className="title_btn">
        {title_buttons.map((button, index) => (
          <MediumButton key={index}>{button}</MediumButton>
        ))}
      </div>
    </div>
  );
};

export default Title;
