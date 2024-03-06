import axios from "axios";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}
// const baseUrl = "http://localhost:5665/api/student";

// function createStudent(student) {
//   return fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(student),
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// }

// async function createStudent(student) {
//   const token = `Bearer ${user.token}`;
//   const config = {
//     headers: { Authorization: token },
//   };

//   console.log(token);
//   return axios.post(baseUrl, user, config).then((res) => res.data);
// }
const apiClient = axios.create({
  baseURL: "http://localhost:5656/api/student",

  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});
async function createStudent(student) {
  const response = await apiClient.post("/", student);
  return response.data;
}

export default {
  setToken,
  createStudent,
};
