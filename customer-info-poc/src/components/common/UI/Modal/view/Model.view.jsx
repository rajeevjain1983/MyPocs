import React from "react";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Modal.style";
import Backdrop from "../../Backdrop";

const Modal = ({ className, children, show, showModal }) => {
  return (
    <>
      <div className={className}>{children}</div>
      <Backdrop show={show} backdropHandler={showModal} />
    </>
  );
};

export default withStyle(Modal, styles);
