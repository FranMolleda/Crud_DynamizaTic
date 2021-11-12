import axios from "axios";

const urlAxios = axios.create({
  baseURL: "http://localhost:4000/",
});

export default urlAxios;
