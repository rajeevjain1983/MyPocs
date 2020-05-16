import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { CustomerConstants } from "../../components/common/constants";

import CustomerReducer from "../../components/features/Customer/container/Customer.Reducer";

export default combineReducers({
  [CustomerConstants.CustomerReducerKey]: CustomerReducer,
  form: formReducer,
});
