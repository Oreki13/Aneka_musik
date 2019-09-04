const initialState = {
  categoryList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const itemList = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEM_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_ITEM_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ITEM_FULFILLED":
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
export default itemList;
