import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import localStorage from "local-storage";
import jwt from "jsonwebtoken";

//Redux
import { getCategory } from "../Publics/Redux/Actions/categoryList";
import {
  getItem,
  getDetail,
  editItem
} from "../Publics/Redux/Actions/prodacts";
import { getBranch } from "../Publics/Redux/Actions/ForDropdown";
import { getTransaction } from "../Publics/Redux/Actions/transaction";

//Call Content
import Navbar from "../component/navbar/navbar";
import NavbarAdmin from "../auth/navbar";
import Home from "../path/category";
import Cart from "../path/cart";
import History from "../path/history";
import Whislist from "../path/whislist";
import Login from "../auth/login";
import Transaction from "../component/transaction/transaction";
import Registration from "../auth/registrasi";
import Item from "../path/item";
import Search from "../component/search/search";
import Detail from "../component/content/detail";
import ModalAddItem from "../component/modal/modalItem";
import ModalEditItem from "../component/modal/modalEdit";

class Aio extends Component {
  constructor() {
    super();
    this.state = {
      dataCategory: [],
      itemList: [],
      branch: [],
      detail: [],

      addItemModal: false,
      editItemModal: false
    };
  }

  componentDidMount = async () => {
    let itemName = {
      params: {
        type: this.props.match.params.name
      }
    };
    let itemId = {
      params: {
        id: this.props.match.params.id
      }
    };

    await this.props.dispatch(getCategory());
    await this.props.dispatch(getBranch());
    await this.props.dispatch(getItem(itemName));
    await this.props.dispatch(getDetail(itemId));

    this.setState({
      dataCategory: this.props.category.result,
      branch: this.props.branch.result,
      itemList: this.props.item.result,
      detail: this.props.detail.result
    });
  };

  handleAddItemShow = () => {
    this.setState({ addItemModal: true });
  };

  handelAddItemClose = () => {
    this.setState({ addItemModal: false });
  };

  render() {
    const getMatch = this.props.match.path;
    jwt.verify(localStorage.get("token"), "skuy", async (err, decode) => {
      if (err) {
        localStorage.remove("token");
        localStorage.remove("role_id");
        localStorage.remove("userId");
      }
    });
    console.log(this.props);

    return (
      <Fragment>
        {getMatch === "/" ? (
          <>
            <Navbar />
            <Search />
            <Home categoryList={this.state.dataCategory} />
          </>
        ) : null}

        {getMatch === "/login" ? (
          <>
            <NavbarAdmin /> <Login />
          </>
        ) : null}
        {getMatch === "/registration" ? (
          <>
            {" "}
            <NavbarAdmin /> <Registration />{" "}
          </>
        ) : null}
        {getMatch === "/item/:name" ? (
          <>
            <Navbar />
            <Search />
            <Item
              modalShow={this.handleAddItemShow}
              modalClose={this.handelAddItemClose}
              prodact={this.state.itemList}
            />
          </>
        ) : null}
        {getMatch === "/history" ? (
          <>
            <Navbar />
            <History />
          </>
        ) : null}
        {getMatch === "/cart" ? (
          <>
            <Navbar />

            <Cart />
          </>
        ) : null}
        {getMatch === "/whislist" ? (
          <>
            <Navbar />

            <Whislist />
          </>
        ) : null}
        <ModalAddItem
          modalShow={this.handleAddItemShow}
          modalClose={this.handelAddItemClose}
          status={this.state.addItemModal}
          categoryData={this.state.dataCategory}
          branchData={this.state.branch}
        />
        {/* {this.state.editItemModal ? (
          <ModalEditItem
            modalShow={this.handleEditItemShow}
            modalClose={this.handelEditItemClose}
            status={this.state.editItemModal}
            dataItem={this.state.detail}
            branchData={this.state.branch}
            categoryData={this.state.dataCategory}
            edit={this.editItem}
          />
        ) : null} */}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    category: state.dataList.kategoriList,
    branch: state.dropdown.branch,
    item: state.prodacts.itemList,
    detail: state.prodacts.detail
  };
};

export default connect(mapStateToProps)(Aio);
