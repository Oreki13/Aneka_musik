import Axios from "axios";

export const getTransaction = month => {
  return {
    type: "GET_TRANSACTION",
    payload: Axios.get(`http://localhost:8080/transaction/month/${month}`)
  };
};

export const getTransactionId = month => {
  return {
    type: "GET_TRANSACTIONID",
    payload: Axios.get(`http://localhost:8080/transaction/${month}`)
  };
};

export const postTransaction = (id, body) => {
  return {
    type: "POST_TRANSACTION",
    payload: Axios.get(`http://localhost:8080/transaction/${id}`, body)
  };
};
