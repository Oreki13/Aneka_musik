const initialState = {
  dataUser: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const user = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        dataUser: action.payload.data
      };
    case "POST_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        dataUser: action.payload.data
      };

    default:
      return state;
  }
};
export default user;
