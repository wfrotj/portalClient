import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5656",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});
// const baseURL = "http://localhost:5656";

// async function getPersons() {
//   const response = await apiClient.get("/persons");
//   return response.data;
// }

async function createStudent(student) {
  const response = await apiClient.post("/api/student", student);
  return response.data;
}

export default {
  createStudent,
  // setToken,
};
