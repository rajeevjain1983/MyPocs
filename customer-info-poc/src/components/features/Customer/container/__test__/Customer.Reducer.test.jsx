import { fromJS } from "immutable";

import CustomerReducer from "../Customer.Reducer";
import { setCustomerDetails } from "../Customer.actions";

describe("Customer Reducer", () => {
  const initialState = fromJS({
    customerDetail: null,
  });

  it("should return null with default state", () => {
    expect(CustomerReducer(initialState, {}).get("customerDetail")).toBeNull();
  });

  it("should return customerDetail", () => {
    const payload = {
      dateOfBirth: "08/08/1983",
      firstName: "Rajeev",
      lastName: "Jain",
      nameChanged: "yes",
      title: "Mr",
    };

    const updatedState = CustomerReducer(
      initialState,
      setCustomerDetails(payload)
    );

    expect(updatedState.get("customerDetail")).toEqual(payload);
  });
});
