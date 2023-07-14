import axios from "axios";

const baseURL = "http://localhost:8080/customers";

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
  return axios
    .post("http://localhost:8080/customers/registration", customer)
    .then((res) => res.data);
}
export default {
  getCustomers,
  createCustomer,
  setToken,
};
