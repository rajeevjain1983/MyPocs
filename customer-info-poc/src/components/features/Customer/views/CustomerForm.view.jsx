import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Button, Select } from "../../../common/atoms";
import withStyle from "../../../common/hoc/withStyle";
import styles from "../style/CustomerForm.style";

const checkValidation = (values) => {
  const errors = {};
  const dateformat = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  if (values.title === "Select" || !values.title) {
    errors.title = "Please choose a title.";
  }

  if (!values.firstName) {
    errors.firstName = "Please enter first name.";
  } else if (
    !/^[a-zA-Z-' ]*$/g.test(values.firstName) ||
    values.firstName.length > 15
  ) {
    errors.firstName = `Please enter your name using letters (hyphens,apostrophes and spaces are accepted)
     and check that it's 15 characters or fewer.`;
  }

  if (!values.lastName) {
    errors.lastName = "Please enter last name.";
  } else if (
    !/^[a-zA-Z-' ]*$/g.test(values.lastName) ||
    values.lastName.length > 15
  ) {
    errors.lastName = `Please enter your name using letters (hyphens,apostrophes and spaces are accepted)
     and check that it's 15 characters or fewer.`;
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Please enter Date of Birth.";
  } else if (!values.dateOfBirth.match(dateformat)) {
    errors.dateOfBirth = "Please check you've entered invalid Date.";
  }

  return errors;
};

const renderNameChanged = ({ meta: { touched, error, warning } }) => {
  return (
    <div className="radio-container">
      <label>
        <Field
          name="nameChanged"
          component={"input"}
          type="radio"
          value="yes"
        />
        Yes
      </label>
      <label>
        <Field
          name="nameChanged"
          component="input"
          checked
          type="radio"
          value="no"
        />
        No
      </label>
    </div>
  );
};

export const CustomerForm = ({
  className,
  handleSubmit,
  pristine,
  reset,
  submitting,
  submitCustomer,
  ...restProps
}) => {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit(submitCustomer)}>
        <div className="field-container">
          <label>Title</label>
          <div className="field">
            <Field name="title" component={Select}>
              <option defaultChecked>Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </Field>
          </div>
        </div>

        <div className="field-container">
          <label>First Name</label>
          <div className="field">
            <Field component={Input} type="text" name="firstName" />
          </div>
        </div>

        <div className="field-container">
          <label>Last Name</label>
          <div className="field">
            <Field component={Input} type="text" name="lastName" />
          </div>
        </div>

        <div className="field-container">
          <label>Has your name changed in the last 12 months?</label>
          <div className="field">
            <Field component={renderNameChanged} type="text" name="lastName" />
          </div>
        </div>

        <div className="field-container">
          <label>Date of Birth</label>
          <div className="field">
            <Field component={Input} type="text" name="dateOfBirth" />
          </div>
        </div>

        <div className="btn-Container">
          <Button
            type="submit"
            className="btnStyle"
            // disabled={pristine || submitting}
          >
            Save
          </Button>
          <Button
            onClick={reset}
            className="btnCancel"
            disabled={pristine || submitting}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "customerForm",
  validate: checkValidation,
})(withStyle(CustomerForm, styles));
