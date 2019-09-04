import Axios from "axios";

export const getDetail = id => {
  return {
    type: "GET_DETAIL",
    payload: Axios.get(`http://localhost:8080/store/get/1`, id)
  };
};
