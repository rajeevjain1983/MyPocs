import React from "react";

import withStyle from "../../../../common/hoc/withStyle";
import styles from "../styles/header.style";

const Header = (props) => {
  return (
    <div className={props.className}>
      <nav>
        <ul className="nav-container">
          <li className="nav-item">Customer Detail</li>
          <li className="nav-item">Register</li>
        </ul>
      </nav>
    </div>
  );
};

export default withStyle(Header, styles);
