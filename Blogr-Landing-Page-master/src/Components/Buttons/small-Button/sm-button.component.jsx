import React from "react";
import "./sm-button.styles.scss";

const SmallButton = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default SmallButton;
