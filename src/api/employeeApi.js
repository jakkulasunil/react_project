import axios from "axios";

const BASE_URL = "http://localhost:8082/emp";

export const getAllEmployees = () => {
  return axios.get(`${BASE_URL}/allEmp`);
};
