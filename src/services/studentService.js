import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5656/api",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}
async function createStudent(student) {
  const response = await apiClient.post("/student", student);
  return response.data;
}
async function getStudents() {
  const response = await apiClient.get("/student");
  return response.data;
}
async function deleteStudent(id) {
  return apiClient.delete(`/student/${id}`).then((res) => res.status);
}
export default {
  setToken,
  createStudent,
  getStudents,
  deleteStudent,
};
