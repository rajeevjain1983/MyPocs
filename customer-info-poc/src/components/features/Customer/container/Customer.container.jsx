import React from "react";
import { connect } from "react-redux";
import CustomerFormView from "../views";
import {
  saveCustomerDetails,
  fetchCustomerDetails,
  saveSuccess,
} from "./Customer.actions";
import { getCustomers, getSaveCallSuccessStatus } from "./Customer.selectors";
import Modal from "../../../common/UI/Modal";
import CustomerDetail from "../views/CustomerDetail.view";

export class Customer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.submitCustomer = this.submitCustomer.bind(this);
  }

  componentDidMount() {
    const { fetchCustomers, clearSaveCallSuccessStatus } = this.props;
    fetchCustomers();
    clearSaveCallSuccessStatus();
  }
  submitCustomer(values) {
    const customerDetail = {
      ...values,
    };

    const { saveCustomer } = this.props;
    saveCustomer(customerDetail);
  }

  render() {
    const {
      customers,
      saveCallStatus,
      clearSaveCallSuccessStatus,
    } = this.props;

    return (
      <>
        {saveCallStatus && saveCallStatus.success && (
          <Modal
            show={saveCallStatus && saveCallStatus.success}
            showModal={clearSaveCallSuccessStatus}
          >
            {customers && customers[saveCallStatus.customerId] && (
              <CustomerDetail
                showModal={clearSaveCallSuccessStatus}
                customer={customers[saveCallStatus.customerId]}
              />
            )}
          </Modal>
        )}
        <CustomerFormView submitCustomer={this.submitCustomer} />
      </>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: () => {
    dispatch(fetchCustomerDetails());
  },
  saveCustomer: (payload) => {
    dispatch(saveCustomerDetails(payload));
  },
  clearSaveCallSuccessStatus: () => {
    dispatch(saveSuccess({}));
  },
});

export const mapStateToProps = (state) => {
  return {
    customers: getCustomers(state),
    saveCallStatus: getSaveCallSuccessStatus(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
