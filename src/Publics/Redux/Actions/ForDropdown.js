import Axios from "axios";

export const getBranch = () => {
  return {
    type: "GET_BRANCH",
    payload: Axios.get(`https://musikapp13.herokuapp.com/store/branch`)
  };
};
