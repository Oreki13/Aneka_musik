const initialState = {
  itemList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const postCategory = (state = initialState, action) => {
  switch (action.type) {
    case "POST_CATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_CATEGORY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_CATEGORY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        itemList: action.payload.data
      };
    default:
      return state;
  }
};
export default postCategory;
