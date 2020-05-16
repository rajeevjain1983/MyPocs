import { fromJS } from "immutable";
import { CustomerConstants } from "../../../common/constants";

const initialState = fromJS({
  customerDetail: null,
});

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CustomerConstants.SetCustomerDetails:
      return state.set("customerDetail", action.payload);
    case CustomerConstants.SaveCallSuccess:
      return state.set("saveCallSuccess", action.payload);
    default:
      if (state instanceof Object) {
        return fromJS(state);
      }
  }
};

export default CustomerReducer;
