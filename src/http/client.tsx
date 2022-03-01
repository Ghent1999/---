import axios from "axios";

axios.interceptors.request.use(async (config) => {
  config.baseURL = process.env.REACT_APP_API_BASE_URL;
  config.headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  return config;
});
export const httpClient = axios;
