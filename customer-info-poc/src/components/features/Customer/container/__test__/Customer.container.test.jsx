import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Customer } from "../Customer.container";
import CustomerFormView from "../../views";
import Modal from "../../../../common/UI/Modal";

configure({ adapter: new Adapter() });

describe("<Customer Container />", () => {
  let wrapper;

  it("should render with CustomerForm View", () => {
    wrapper = shallow(
      <Customer
        fetchCustomers={() => {}}
        clearSaveCallSuccessStatus={() => {}}
        submitCustomer={() => {}}
      />
    );
    expect(wrapper.find(CustomerFormView)).toHaveLength(1);
  });

  it("should render Modal if Customer detail saved successfully", () => {
    const saveCallStatus = {
      success: true,
    };
    wrapper = shallow(
      <Customer
        saveCallStatus={saveCallStatus}
        fetchCustomers={() => {}}
        clearSaveCallSuccessStatus={() => {}}
        submitCustomer={() => {}}
      />
    );
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
