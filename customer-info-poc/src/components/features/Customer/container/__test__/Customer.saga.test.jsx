import { put, takeLatest } from "redux-saga/effects";
import {
  getCustomerDetail,
  saveCustomerDetail,
  GetCustomerDetail,
  SaveCustomerDetail,
} from "../Customer.saga";
import { setCustomerDetails, saveSuccess } from "../Customer.actions";
// import { setOrderDetails } from '../OrderDetails.actions';
import { CustomerConstants } from "../../../../common/constants";

describe("getCustomerDetail saga", () => {
  describe("getCustomerDetailSaga", () => {
    let gen;
    it("should dispatch setCustomerDetails action for response", () => {
      gen = getCustomerDetail();
      gen.next();
      const response = {
        data: {
          customer: {
            dateOfBirth: "08/08/1983",
            firstName: "Rajeev",
            lastName: "Jain",
            nameChanged: "yes",
            title: "Mr",
          },
        },
      };

      const putDescriptor = gen.next(response).value;
      const expectedPut = put(setCustomerDetails(response.data));
      expect(putDescriptor).toEqual(expectedPut);
    });

    it("should dispatch saveSuccess action for response", () => {
      const payload = {
        dateOfBirth: "08/08/1983",
        firstName: "Rajeev",
        lastName: "Jain",
        nameChanged: "yes",
        title: "Mr",
      };
      gen = saveCustomerDetail(payload);
      gen.next();
      const response = {
        data: {
          name: "12345",
        },
        status: 200,
      };

      const putDescriptor = gen.next(response).value;
      const expectedPut = put(
        saveSuccess({ success: true, customerId: response.data.name })
      );
      expect(putDescriptor).toEqual(expectedPut);
    });
  });

  describe("GetCustomerDetail", () => {
    it("should return correct takeLatest effect for GetCustomerDetail", () => {
      const generator = GetCustomerDetail();
      const takeLatestDescriptor = generator.next().value;
      const expected = takeLatest(
        CustomerConstants.FetchCustomerDetails,
        getCustomerDetail
      );
      expect(takeLatestDescriptor.toString()).toMatch(expected.toString());
    });

    it("should return correct takeLatest effect for SaveCustomerDetail", () => {
      const generator = SaveCustomerDetail();
      const takeLatestDescriptor = generator.next().value;
      const expected = takeLatest(
        CustomerConstants.SaveCustomerDetails,
        saveCustomerDetail
      );
      expect(takeLatestDescriptor.toString()).toMatch(expected.toString());
    });
  });
});
