import axios from "axios";
const baseURL = "/api/student";
let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function createStudent(job) {
  const config = {
    headers: { Authorization: token },
  };
  return axios.post(baseURL, job, config).then((res) => res.data);
}

export default {
  setToken,
  createStudent,
};
