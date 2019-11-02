import Axios from "axios";
Axios.defaults.headers.common["authorization"] = "soul";

export const getCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: Axios.get(
      `https://musikapp13.herokuapp.com/store/category
    `
    )
  };
};
