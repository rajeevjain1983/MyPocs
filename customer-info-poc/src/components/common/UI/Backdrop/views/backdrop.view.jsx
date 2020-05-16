import React from "react";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Backdrop.style";

const Backdrop = ({ className, show, backdropHandler }) => {
  return show ? (
    <div onClick={() => backdropHandler({})} className={className}></div>
  ) : (
    ""
  );
};

export default withStyle(Backdrop, styles);
