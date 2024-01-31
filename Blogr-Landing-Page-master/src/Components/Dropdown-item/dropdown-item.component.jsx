import React from "react";
import "./dropdown.styles.scss";

class DropdownItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showLinks: false,
    };
  }

  toggleSubLinks = () => {
    if (this.state.showLinks === false) {
      this.setState({ showLinks: true });
    } else {
      this.setState({ showLinks: false });
    }
  };

  render() {
    const { header_name, header_support } = this.props.data;
    const { showLinks } = this.state;

    return (
      <li onClick={this.toggleSubLinks}>
        <a href="#/">{header_name}</a>
        <ul className={showLinks ? "sub-links" : "sub-links hide_sub_links"}>
          {header_support.map((subItem, index) => (
            <li key={index}>
              <a href="#/">{subItem}</a>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default DropdownItem;
