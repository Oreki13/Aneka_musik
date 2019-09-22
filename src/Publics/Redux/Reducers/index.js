import { combineReducers } from "redux";
import dataList from "./dataList";
import user from "./user";
import prodacts from "./products";
import dropdown from "./forDropdown";
import cart from "./cart";
import whislist from "./whislist";
import transaction from "./transaction";
// import detail from "./detail";
// import postCategory from "./postCAtegory";
// import deleteItem from "./delete";

const rootReducer = combineReducers({
  dataList,
  user,
  prodacts,
  dropdown,
  cart,
  whislist,
  transaction
});

export default rootReducer;
