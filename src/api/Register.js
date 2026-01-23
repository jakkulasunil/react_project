import axios from "axios";

export const registerUser = async (payload) => {
  const response = await axios.post(
    "http://localhost:8082/api/register",
        payload,
  );
  return response.data; // return only data
};
export default registerUser;
