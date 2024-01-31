import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import INFO from "../../assets/data/brand_info.data";
import "./footer.styles.scss";

const Footer = () => {
  const { brand_data } = INFO;

  return (
    <div className="footer">
      <Logo className="brand_logo" />

      <div className="brand_links">
        {brand_data.map(({ header_name, header_support }, index) => (
          <div className="container" key={index}>
            <h4>{header_name}</h4>
            {header_support.map((support_item, index) => (
              <p key={index}>{support_item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
