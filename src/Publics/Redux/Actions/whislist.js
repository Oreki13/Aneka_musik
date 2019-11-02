import Axios from "axios";
Axios.defaults.headers.common["authorization"] = "soul";

export const getWhislist = id => {
  return {
    type: "GET_WHISLIST",
    payload: Axios.get(
      `https://musikapp13.herokuapp.com/whislist/${id}
    `
    )
  };
};

export const postWhislist = (id, id_item) => {
  return {
    type: "POST_WHISLIST",
    payload: Axios.post(
      `https://musikapp13.herokuapp.com/whislist/${id}/${id_item}
      `
    )
  };
};

export const deleteWhislist = (id, id_item) => {
  return {
    type: "DELETE_WHISLIST",
    payload: Axios.delete(
      `https://musikapp13.herokuapp.com/whislist/${id}/${id_item}
      `
    )
  };
};
