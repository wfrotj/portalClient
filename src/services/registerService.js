import axios from "axios";

const baseUrl = "http://localhost:5656/api/teacher";

async function register(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}
export default {
  register,
};
