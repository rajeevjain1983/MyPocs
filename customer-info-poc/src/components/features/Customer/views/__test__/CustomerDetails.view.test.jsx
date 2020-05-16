import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomerDetail from "../CustomerDetail.view";

configure({ adapter: new Adapter() });

describe("Customer Details View Rendered", () => {
  it("should renders correctly", () => {
    const props = {
      customer: {
        dateOfBirth: "08/08/1983",
        firstName: "Rajeev",
        lastName: "Jain",
        nameChanged: "yes",
        title: "Mr",
      },
      showModal: () => {},
    };

    const component = shallow(<CustomerDetail {...props} />);
    expect(component).toMatchSnapshot();
  });
});
