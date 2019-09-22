import React from "react";
import "./App.css";
// import { DataProvider } from "./dataContext";

import { Provider } from "react-redux";
import Wraper from "./view/aio";
import Detail from "./component/content/detail";
import Footer from "./component/footer/footer";
import Transaction from "./component/transaction/transaction";
import TransactionUser from "./component/transaction/transactionUser";

// import category from "./path/category";
// import item from "./path/item";
import store from "./Publics/Redux/store";
// import detail from "./path/detail";
import search from "./path/search";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Route path="/" render={props => <Navbar {...props} />} /> */}
        <Route exact path="/" render={props => <Wraper {...props} />} />
        <Route path="/login" render={props => <Wraper {...props} />} />
        <Route path="/registration" render={props => <Wraper {...props} />} />
        <Route path="/item/:name" render={props => <Wraper {...props} />} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/cart" render={props => <Wraper {...props} />} />
        <Route path="/whislist" render={props => <Wraper {...props} />} />
        <Route path="/history" render={props => <Wraper {...props} />} />
        <Route path="/transaction/:month" component={Transaction} />
        <Route path="/transactionUser/:id" component={TransactionUser} />
        <Route path="/" component={Footer} />
        <Route path="/search/:name" component={search} />
        {/* 
        <Route path="/item/:name" component={item} />
        <Route path="/detail/:id" component={detail} /> */}
      </Router>
    </Provider>
  );
}

export default App;
