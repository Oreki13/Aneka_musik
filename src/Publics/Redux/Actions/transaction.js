import Axios from "axios";

export const getTransaction = month => {
  return {
    type: "GET_TRANSACTION",
    payload: Axios.get(
      `https://musikapp13.herokuapp.com/transaction/month/${month}`
    )
  };
};

export const getTransactionId = month => {
  return {
    type: "GET_TRANSACTIONID",
    payload: Axios.get(`https://musikapp13.herokuapp.com/transaction/${month}`)
  };
};

export const postTransaction = (id, body) => {
  return {
    type: "POST_TRANSACTION",
    payload: Axios.get(
      `https://musikapp13.herokuapp.com/transaction/${id}`,
      body
    )
  };
};
