const initialState = {
  deleteItem: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const deleteItem = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_DETAIL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_DETAIL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        deleteItem: action.payload.data
      };
    default:
      return state;
  }
};

export default deleteItem;
