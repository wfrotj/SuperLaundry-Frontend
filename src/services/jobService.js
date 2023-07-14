import axios from "axios";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function createJob(job) {
  const config = {
    headers: { Authorization: token },
  };
  return axios
    .post("http://localhost:8080/jobs/create", job, config)
    .then((res) => res.data);
}
function getJob() {
  return axios.get("http://localhost:8080/jobs").then((res) => res.data);
}
export default {
  createJob,
  getJob,
  setToken,
};
