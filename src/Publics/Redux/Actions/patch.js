import Axios from "axios";

export const editItem = (id, data) => {
  return {
    type: "PATCH_ITEM",
    payload: Axios.patch(`http://localhost:8080/store/${id}`, data)
  };
};
