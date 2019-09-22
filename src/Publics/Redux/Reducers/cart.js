const initialState = {
  cartList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Cart = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "GET_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CART_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        cartList: action.payload.data
      };

    default:
      return state;
  }
};
export default Cart;
