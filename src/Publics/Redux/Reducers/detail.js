const initialState = {
  detail: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const detail = (state = initialState, action) => {
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
        detail: action.payload.data
      };
    default:
      return state;
  }
};

export default detail;
