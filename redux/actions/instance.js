import axios from "axios";

export const instance = axios.create({
  baseURL: "https://lazga-api.herokuapp.com/",
});

export default instance;
