// IMPORTS
// axios
import axios from "axios";
const baseURL = "https://apidevnow.com";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
