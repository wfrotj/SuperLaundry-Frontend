import axios from "axios";

function login(credentials) {
  return axios
    .post("https://superlaundryapp.onrender.com/login/customer", credentials)
    .then((res) => res.data);
}

export default {
  login,
};
