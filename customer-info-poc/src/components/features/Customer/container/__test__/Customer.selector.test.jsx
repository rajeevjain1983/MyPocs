import { fromJS } from "immutable";
import { getCustomers, getSaveCallSuccessStatus } from "../Customer.selectors";
import { CustomerConstants } from "../../../../common/constants";

describe("Customer.selector", () => {
  const customerDataState = fromJS({
    customerDetail: {
      dateOfBirth: "08/08/1983",
      firstName: "Rajeev",
      lastName: "Jain",
      nameChanged: "yes",
      title: "Mr",
    },
    saveCallSuccess: {
      success: true,
    },
  });

  const state = {
    [CustomerConstants.CustomerReducerKey]: customerDataState,
  };

  it("should return Customer Details", () => {
    const customers = getCustomers(state);
    expect(customers).toEqual(customerDataState.get("customerDetail"));
  });

  it("should return SaveCustomerCall success status", () => {
    const saveCallStatus = getSaveCallSuccessStatus(state);
    expect(saveCallStatus).toEqual(customerDataState.get("saveCallSuccess"));
  });
});
