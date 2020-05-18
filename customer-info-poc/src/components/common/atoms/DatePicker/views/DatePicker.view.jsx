import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Input.style";

const DatePickerView = ({
  className,
  input,
  meta: { touched, error },
  ...restProps
}) => {
  return (
    <div className={className}>
      <DatePicker {...restProps} {...input} dateFormat="MM/dd/yyyy" />
      {touched && error && (
        <div className="error-container">
          <strong>Warning: </strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default withStyle(DatePickerView, styles);
