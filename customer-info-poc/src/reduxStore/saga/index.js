import {
  GetCustomerDetail,
  SaveCustomerDetail,
} from "../../components/features/Customer/container/Customer.saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([GetCustomerDetail(), SaveCustomerDetail()]);
}
