const initialState = {
  transactionList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const transaction = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "GET_TRANSACTION_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_TRANSACTION_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_TRANSACTION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        transactionList: action.payload.data
      };
    case "GET_TRANSACTIONID_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_TRANSACTIONID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_TRANSACTIONID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        transactionList: action.payload.data
      };
    case "POST_TRANSACTION_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_TRANSACTION_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_TRANSACTION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true
      };

    default:
      return state;
  }
};
export default transaction;
