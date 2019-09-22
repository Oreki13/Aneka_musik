const initialState = {
  kategoriList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const categoryList = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "GET_CATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_CATEGORY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CATEGORY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        kategoriList: action.payload.data
      };

    default:
      return state;
  }
};
export default categoryList;
