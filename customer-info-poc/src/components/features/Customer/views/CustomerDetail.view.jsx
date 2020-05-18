import React from "react";
import { Button } from "../../../common/atoms";

const CustomerDetail = ({ customer, showModal }) => {
  const dateOfBirth = new Date(customer.dateOfBirth);
  return (
    <div>
      <h3>Below Customer detail saved successfully!</h3>
      <p>
        Name :{`${customer.title} ${customer.firstName} ${customer.lastName}`}
      </p>
      <p>Date of Birth: {dateOfBirth.toLocaleDateString()}</p>
      <p>
        Has your name changed in the last 12 months? : {customer.nameChanged}
      </p>

      <Button onClick={() => showModal({})}>Ok</Button>
    </div>
  );
};

export default CustomerDetail;
