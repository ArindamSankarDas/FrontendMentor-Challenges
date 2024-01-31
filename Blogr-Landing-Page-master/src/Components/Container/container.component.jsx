import React from "react";
import DETAILS_DATA from "../../assets/data/details.data";
import FEATURES_DATA from "../../assets/data/features.data";
import "./container.styles.scss";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classChange: this.props.className,
    };
  }

  render() {
    const { className } = this.props;
    const { classChange } = this.state;

    return (
      <div className={className}>
        <div className="container_flex">
          {classChange === "container"
            ? DETAILS_DATA.map(({ title, paragraph }, index) => (
                <div className="sub_container" key={index}>
                  <h2>{title}</h2>
                  <p>{paragraph}</p>
                </div>
              ))
            : FEATURES_DATA.map(({ title, paragraph }, index) => (
                <div className="sub_container" key={index}>
                  <h2>{title}</h2>
                  <p>{paragraph}</p>
                </div>
              ))}
        </div>
        <div className="editor_logo"></div>
      </div>
    );
  }
}

export default Container;
