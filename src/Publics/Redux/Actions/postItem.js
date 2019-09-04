import Axios from "axios";

export const postItem = data => {
  return {
    type: "POST_DATA",
    payload: Axios.post(`http://localhost:8080/store/item`, data)
  };
};
