import React from "react";
import Navbar from "./navbar/navbar.component";
import Title from "./title/title.component";
import HEADER_DATA from "../../assets/data/header.data";
import "./header.styles.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      header_data: HEADER_DATA,
    };
  }

  render() {
    const { links, buttons, title_buttons } = HEADER_DATA;
    return (
      <div className="header">
        <Navbar link_item={links} buttons={buttons} />
        <Title title_btn={title_buttons} />
      </div>
    );
  }
}

export default Header;
