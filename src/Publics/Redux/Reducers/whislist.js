const initialState = {
  whislistList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const whislist = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "GET_WHISLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_WHISLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_WHISLIST_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        whislistList: action.payload.data
      };

    default:
      return state;
  }
};
export default whislist;
