import axios from "axios";

const BASE_URL = "http://localhost:8082/";

export const getHelloMessage = async () => {
  const response = await axios.get(`${BASE_URL}hello`);
  return response.data;
};
