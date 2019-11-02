import Axios from "axios";

export const getItem = types => {
  return {
    type: "GET_ITEM",
    payload: Axios.get(`https://musikapp13.herokuapp.com/store/get/1`, types)
  };
};

export const getDetail = id => {
  return {
    type: "GET_DETAIL",
    payload: Axios.get(`https://musikapp13.herokuapp.com/store/get/1`, id)
  };
};

export const editItem = (id, data) => {
  return {
    type: "PATCH_ITEM",
    payload: Axios.patch(`https://musikapp13.herokuapp.com/store/${id}`, data)
  };
};

export const postItem = data => {
  return {
    type: "POST_DATA",
    payload: Axios.post(`https://musikapp13.herokuapp.com/store/item`, data)
  };
};

export const getName = name => {
  return {
    type: "GET_SEARCH",
    payload: Axios.get(`https://musikapp13.herokuapp.com/store/get/1`, name)
  };
};
