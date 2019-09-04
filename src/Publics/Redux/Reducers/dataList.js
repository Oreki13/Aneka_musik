const initialState = {
  dataList: [],
  kategoriList: [],
  branchList: [],
  detailData: [],
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
        dataList: action.payload.data,
        kategoriList: action.payload.data
      };
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
        dataList: action.payload.data
      };
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
        branchList: action.payload.data
      };
    case "POST_DATA_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_DATA_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_DATA_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        dataList: action.payload.data
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
        detailData: action.payload.data
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
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        dataList: action.payload.data
      };

    default:
      return state;
  }
};
export default categoryList;
