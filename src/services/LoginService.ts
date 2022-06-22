import { httpClient } from "../http/client";
import LoginModel, { LoginResponse } from "../models/LoginModel";

const getLogin = (username: string, password: string) => {
  const request: LoginModel = {
    username: username,
    password: password,
  };
  return httpClient
    .post<LoginResponse>("/login", request)
    .then((res) => res.data);
};

const LoginServices = {
  getLogin,
};
export default LoginServices;
