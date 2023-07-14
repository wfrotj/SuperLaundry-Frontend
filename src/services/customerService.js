import axios from "axios";

const baseURL = "https://superlaundryapp.onrender.com/customers";

let token = null;
function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function getCustomers() {
  return axios.get(baseURL).then((res) => res.data);
}
function createCustomer(customer) {
  const config = {
    headers: { Authorization: token },
  };
  return axios.post(baseURL, customer).then((res) => res.data);
}
export default {
  getCustomers,
  createCustomer,
  setToken,
};
