import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CustomerForm } from "../CustomerForm.view";

configure({ adapter: new Adapter() });

describe("Customer Details View Rendered", () => {
  it("should renders correctly", () => {
    const props = {
      handleSubmit: () => {},
    };

    const component = shallow(<CustomerForm {...props} />);
    expect(component).toMatchSnapshot();
  });
});
