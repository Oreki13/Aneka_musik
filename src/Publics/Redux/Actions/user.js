import Axios from "axios";
Axios.defaults.headers.common["authorization"] = "soul";

export const login = body => {
  return {
    type: "POST_LOGIN",
    payload: Axios.post(
      `http://localhost:8080/auth/login
    `,
      body
    )
  };
};

export const register = body => {
  return {
    type: "POST_REGISTER",
    payload: Axios.post(
      `http://localhost:8080/auth/register
    `,
      body
    )
  };
};
