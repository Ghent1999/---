import axios from "axios";

axios.interceptors.request.use(async (config) => {
  config.baseURL = process.env.REACT_APP_API_BASE_URL;
  return config;
});
export const httpClient = axios;
