import React from "react";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Input.style";

const Input = ({
  className,
  label,
  type,
  input,
  meta: { touched, error },
  ...restProps
}) => {
  return (
    <div className={className}>
      <input type={type} {...input} {...restProps}></input>
      {touched && error && (
        <div className="error-container">
          <strong>Warning: </strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default withStyle(Input, styles);
