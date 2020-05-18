import React, { PureComponent } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Input.style";

class DatePickerView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const {
      className,
      input,
      meta: { touched, error },
      ...restProps
    } = this.props;
    return (
      <div className={className}>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          autocomplete="off"
          {...input}
          // {...restProps}
          dateFormat="MM/dd/yyyy"
        />
        {touched && error && (
          <div className="error-container">
            <strong>Warning: </strong>
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default withStyle(DatePickerView, styles);
