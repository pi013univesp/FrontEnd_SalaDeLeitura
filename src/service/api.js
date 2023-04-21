import axios from "axios";

const api = axios.create({
  baseURL: "https://pi013univesp.pythonanywhere.com/",
});

export default api;
