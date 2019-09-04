import Axios from "axios";

export const postCategory = data => {
  return {
    type: "POST_DATA",
    payload: Axios.post(`http://localhost:8080/store/category`, data)
  };
};
