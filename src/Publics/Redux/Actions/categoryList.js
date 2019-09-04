import Axios from "axios";

export const getCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: Axios.get(
      `http://localhost:8080/store/category
    `
    )
  };
};
