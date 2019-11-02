import Axios from "axios";

export const postCategory = data => {
  return {
    type: "POST_DATA",
    payload: Axios.post(`https://musikapp13.herokuapp.com/store/category`, data)
  };
};
