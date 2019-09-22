const initialState = {
  itemList: [],
  detail: [],
  resultSearch: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const products = (state = initialState, action) => {
  console.log(action);

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
    case "POST_ITEM_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_ITEM_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_ITEM_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true
      };
    case "GET_SEARCH_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_SEARCH_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_SEARCH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfielled: true,
        itemList: action.payload.data
      };
    case "POST_ITEM_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_ITEM_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        resultSearch: action.payload.data
      };
    case "PATCH_ITEM_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "PATCH_ITEM_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "PATCH_ITEM_FULFILLED":
      // const dataAfterEdit = state.itemList.map(data => {
      //   if (data.id == action.payload.data.result.id) {
      //     return action.payload.data.result;
      //   }
      //   return data;
      // });
      const dataNya = action.payload.data.result;

      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        detail: dataNya
      };

    default:
      return state;
  }
};
export default products;
// const dataAfterEdit = state.pokeDex.map (pokemon => {
//   if (pokemon.id == action.payload.data.data.id) {
//     return action.payload.data.data;
//   }
//   return pokemon;
// });
