import React from "react";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/RadioButtons.style";

const RadioButtons = ({
  options,
  className,
  label,
  type,
  input,
  meta: { touched, error },
  ...restProps
}) => {
  return (
    <div className={className}>
      <div className="radioContainer">
        {options.map((o) => (
          <label className="radioLabel" key={o.value}>
            {o.title}
            <input
              type="radio"
              {...input}
              value={o.value}
              checked={o.value === input.value}
            />
            <span class="checkmark"></span>
          </label>
        ))}
      </div>
      {touched && error && (
        <div className="error-container">
          <strong>Warning: </strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default withStyle(RadioButtons, styles);
