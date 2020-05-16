import axios from "axios";

const axiosCustomer = axios.create({
  baseURL: "https://customerdetail-92299.firebaseio.com",
});

export default axiosCustomer;
