import Axios from "axios";

export const getItem = types => {
  return {
    type: "GET_ITEM",
    payload: Axios.get(`http://localhost:8080/store/get/1`, types)
  };
};

export const getName = name => {
  return {
    type: "GET_SEARCH",
    payload: Axios.get(`http://localhost:8080/store/get/1`, name)
  };
};
