import React from "react";
import { connect } from "react-redux";
import localStorage from "local-storage";
import { postCart, deleteCart } from "../../Publics/Redux/Actions/cart";
import { getCategory } from "../../Publics/Redux/Actions/categoryList";
import { getBranch } from "../../Publics/Redux/Actions/ForDropdown";
import { getDetail } from "../../Publics/Redux/Actions/prodacts";
import {
  postWhislist,
  deleteWhislist,
  getWhislist
} from "../../Publics/Redux/Actions/whislist";
import jwt from "jsonwebtoken";
import Modal from "../modal/modalEdit";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Axios from "axios";
import { Container } from "react-bootstrap";

class detail extends React.Component {
  state = {
    itemEdit: [],
    wisList: [],
    detail: [],
    branch: [],
    category: [],
    dataWhislist: [],
    addwis: false,
    addcart: false,
    editItemModal: false
  };

  componentDidMount = async () => {
    let itemId = {
      params: {
        id: this.props.match.params.id
      }
    };
    // if (localStorage.get("userId") !== undefined) {
    //   this.props.dispatch(getWhislist(localStorage.get("userId")));
    //   this.setState({ wisList: this.props.whislist.result });
    // }
    // if (localStorage.get("userId") !== undefined) {
    //   await this.props.dispatch(getWhislist(localStorage.get("userId")));

    //   this.setState({
    //     wisList: this.props.whislist.result
    //   });
    // }
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getBranch());
    await this.props.dispatch(getDetail(itemId));
    this.setState({
      detail: this.props.detail.result,
      branch: this.props.branch.result,
      category: this.props.category.result
    });
  };

  deleteItem = id_item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success")
          .then(() => {
            Axios.delete(`http://localhost:8080/store/${id_item}`);
          })
          .then(() => {
            window.location.href = `http://localhost:3000/`;
          });
      }
    });
  };

  handleCart = (id_user, id_item) => {
    if (this.state.addcart === false) {
      this.props.dispatch(postCart(id_user, id_item)).then(suc => {
        Swal.fire({
          title: "Success!",
          text: "Add to cart",
          type: "success",
          confirmButtonText: "Cool"
        }).then(() => {
          this.setState({ addcart: true });
        });
      });
    } else {
      this.props.dispatch(deleteCart(id_user, id_item)).then(() => {
        Swal.fire({
          title: "Success!",
          text: "Remove from Cart",
          type: "success",
          confirmButtonText: "Cool"
        });
      });
    }
  };

  handleWish = (id_user, id_item) => {
    if (this.state.addwis === false) {
      this.props.dispatch(postWhislist(id_user, id_item)).then(() => {
        Swal.fire({
          title: "Success!",
          text: "Add to wishlist",
          type: "success",
          confirmButtonText: "Cool"
        }).then(() => {
          this.setState({ addwis: true });
        });
      });
    } else {
      this.props.dispatch(deleteWhislist(id_user, id_item)).then(() => {
        Swal.fire({
          title: "Success!",
          text: "Remove from wishlist",
          type: "success",
          confirmButtonText: "Cool"
        });
      });
    }
  };
  modalShow = () => {
    this.setState({ editItemModal: true });
  };
  modalClose = () => {
    this.setState({ editItemModal: false });
  };

  render() {
    const detail1 = { ...this.state.detail[0] };
    jwt.verify(localStorage.get("token"), "skuy", async (err, decode) => {
      if (err) {
        localStorage.remove("token");
        localStorage.remove("role_id");
        localStorage.remove("userId");
      }
    });
    console.log(this.state);

    return (
      <>
        <Navbar />
        <Container>
          <div className="row mt-5">
            {/******************************** BAGIAN FOTO *************************************/}
            <div
              className="col-md-4 border"
              style={{
                background: "#F5D372",
                borderRadius: "30px",
                height: "300px",
                width: "300px"
              }}
            >
              <img src={detail1.img} height="300" width="300" />
            </div>
            {/******************* BAGIAN KONTEN SEBELAH KANAN ***************************************/}
            <div className="col-md-8">
              {/********************************* BAGIAN JUDUL DAN TOMBOL *************************/}
              <div className="row">
                <div className="col-md-6 text-left">
                  <h2>{detail1.name}</h2>
                </div>
                <div className="col-md-6 text-right mt-2">
                  {/* <Link to={`/`}> */}

                  {localStorage.get("role_id") === 2 &&
                  localStorage.get("token") ? (
                    <>
                      <span
                        className="navbar-text mx-2"
                        style={{ color: "gray", cursor: "pointer" }}
                        onClick={() =>
                          this.handleWish(
                            localStorage.get("userId"),
                            detail1.id
                          )
                        }
                      >
                        <i class="far fa-heart"></i>
                      </span>

                      <span
                        className="navbar-text mx-2"
                        style={{ color: "gray", cursor: "pointer" }}
                        onClick={() =>
                          this.handleCart(
                            localStorage.get("userId"),
                            detail1.id
                          )
                        }
                      >
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </>
                  ) : null}
                  {localStorage.get("role_id") == 1 ? (
                    <>
                      <button
                        className="badge badge-secondary"
                        type="button"
                        data-toggle="modal"
                        data-target="#edit"
                        onClick={this.modalShow}
                      >
                        Edit
                      </button>
                      <button
                        class="badge badge-danger ml-2"
                        onClick={() => this.deleteItem(detail1.id)}
                      >
                        Delete
                      </button>
                    </>
                  ) : null}

                  {/* </Link> */}
                </div>
              </div>
              {/**************************************** BAGIAN DETAIL ***********************************/}
              <div className="row">
                <div className="col-md-12">
                  <p className="text-justify">{detail1.detail}</p>
                </div>
              </div>

              {/****************************** STATUS BARANG ********************************************/}

              <div className="row mt-3">
                <div className="col-md-3">
                  <h5>Available in</h5>
                </div>
                <div className="col-md-8">
                  <div
                    className="border shadow-sm"
                    style={{ borderRadius: "30px" }}
                  >
                    <p className="my-2 ml-3">{detail1.branch}</p>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-3">
                  <h5>Quantity</h5>
                </div>
                <div className="col-md-8">
                  <div
                    className="border shadow-sm"
                    style={{ borderRadius: "30px" }}
                  >
                    <p className="my-2 ml-3">{detail1.quantity}</p>
                  </div>
                </div>
                <div className="col-md-8"></div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <h5>Price</h5>
                </div>
                <div className="col-md-8">
                  <div
                    className="border shadow-sm"
                    style={{ borderRadius: "30px" }}
                  >
                    <p className="my-2 ml-3">{detail1.price}</p>
                  </div>
                </div>
              </div>

              {/****************** END STATUS ************************/}
            </div>
          </div>
        </Container>
        {this.state.editItemModal ? (
          <Modal
            modalShow={this.modalShow}
            modalClose={this.modalClose}
            status={this.state.editItemModal}
            dataItem={this.state.detail}
            branchData={this.state.branch}
            categoryData={this.state.category}
            edit={this.editItem}
          />
        ) : null}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    category: state.dataList.kategoriList,
    branch: state.dropdown.branch,
    cart: state.cart.cartList,
    whislist: state.whislist.whislistList,
    detail: state.prodacts.detail
  };
};

export default connect(mapStateToProps)(detail);
