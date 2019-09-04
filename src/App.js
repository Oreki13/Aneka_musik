import React from "react";
import "./App.css";
// import { DataProvider } from "./dataContext";

import { Provider } from "react-redux";
import category from "./path/category";
import item from "./path/item";
import store from "./Publics/Redux/store";
import detail from "./path/detail";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={category} />
        <Route path="/item/:name" component={item} />
        <Route path="/detail/:id" component={detail} />
      </Router>
    </Provider>
  );
}

export default App;
