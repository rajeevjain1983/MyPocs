import { takeLatest, put } from "redux-saga/effects";
import axios from "../../../../service/axios_customer";
import { CustomerConstants } from "../../../common/constants";
import {
  setCustomerDetails,
  fetchCustomerDetails,
  saveSuccess,
} from "../../Customer/container/Customer.actions";

export function* getCustomerDetail() {
  try {
    const response = yield axios.get("/customerDetail.json");
    yield put(setCustomerDetails(response.data));
  } catch (ex) {
    console.log("Error", ex);
  }
}

export function* saveCustomerDetail({ payload }) {
  try {
    const response = yield axios.post("/customerDetail.json", payload);
    if (response.status === 200) {
      console.log(response);
      yield put(saveSuccess({ success: true, customerId: response.data.name }));
      yield put(fetchCustomerDetails());
    }
  } catch (ex) {
    console.log("Error", ex);
  }
}

export function* GetCustomerDetail() {
  yield takeLatest(CustomerConstants.FetchCustomerDetails, getCustomerDetail);
}

export function* SaveCustomerDetail() {
  yield takeLatest(CustomerConstants.SaveCustomerDetails, saveCustomerDetail);
}
