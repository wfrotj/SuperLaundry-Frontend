import axios from "axios";

function login(credentials) {
  return axios
    .post("http://localhost:8080/login/customer", credentials)
    .then((res) => res.data);
}

export default {
  login,
};
