import { createSelector } from "reselect";
import { CustomerConstants } from "../../../common/constants";

const getState = (state) => state[CustomerConstants.CustomerReducerKey];

export const getCustomers = createSelector(
  getState,
  (state) => state && state.get("customerDetail")
);

export const getSaveCallSuccessStatus = createSelector(
  getState,
  (state) => state && state.get("saveCallSuccess")
);
