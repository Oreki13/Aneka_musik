const initialState = {
  branch: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const dropdown = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "GET_BRANCH_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_BRANCH_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_BRANCH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        branch: action.payload.data
      };

    default:
      return state;
  }
};
export default dropdown;
