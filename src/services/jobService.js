import axios from "axios";
const baseURL = "https://superlaundryapp.onrender.com/jobs";
let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function createJob(job) {
  const config = {
    headers: { Authorization: token },
  };
  return axios.post(baseURL, job, config).then((res) => res.data);
}
function getJob() {
  return axios.get(baseURL).then((res) => res.data);
}
export default {
  createJob,
  getJob,
  setToken,
};
