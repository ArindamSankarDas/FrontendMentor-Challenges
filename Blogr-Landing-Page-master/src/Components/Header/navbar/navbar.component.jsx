import React from "react";
import INFO from "../../../assets/data/brand_info.data";
import HEADER_DATA from "../../.../../../assets/data/header.data";
import SmallButton from "../../Buttons/small-Button/sm-button.component";
import DropdownItem from "../../Dropdown-item/dropdown-item.component";
import "./navbar.styles.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showItems: false,
      showLinks: false,
    };
  }

  toggleNavMenu = () => {
    if (this.state.showItems === false) {
      this.setState({ showItems: true });
    } else {
      this.setState({ showItems: false });
    }
  };

  render() {
    let { showItems } = this.state;
    let { buttons } = HEADER_DATA;

    // let { sub_header1, sub_header2, sub_header3 } = BRAND_DATA;

    let { brand_data } = INFO;

    return (
      <div className="navbar">
        <div className="logo" />
        <div className={showItems ? "nav-items" : "nav-items hide-menu-items"}>
          <ul className="links">
            {brand_data.map((subHeader, index) => (
              <DropdownItem key={index} data={subHeader} />
            ))}
          </ul>
          <div className="authentication">
            {buttons.map((button, index) => (
              <SmallButton key={index}>{button}</SmallButton>
            ))}
          </div>
        </div>

        <div
          className={showItems ? "toggler_close" : "nav_toggler"}
          onClick={this.toggleNavMenu}
        />
      </div>
    );
  }
}

export default Navbar;
