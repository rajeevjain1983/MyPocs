import React from "react";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Select.style";

const Select = ({
  className,
  input,
  meta: { touched, error },
  children,
  ...restProps
}) => {
  return (
    <div className={className}>
      <select className="" {...input} {...restProps}>
        {children}
      </select>
      {touched && error && (
        <div className="error-container">
          <strong>Warning: </strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default withStyle(Select, styles);
