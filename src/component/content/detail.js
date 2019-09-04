import React from "react";
import { deleteDetail } from "../../Publics/Redux/Actions/detail";
import { Redirect, Link } from "react-router-dom";
import { async } from "q";
import Axios from "axios";
import Modal from "../modal/modalEdit";

class detail extends React.Component {
  deleteItem = () => {
    // await this.props.dispatch(deleteDetail(this.props.data.id));
    Axios.delete(`http://localhost:8080/store/${this.props.data.id}`);
    // console.log("ASJDKAJSHDKJAHSDKJAD");

    // console.log(window.history.back(-1));
  };
  render() {
    return (
      <>
        <div className="row">
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
            <img src={this.props.data.img} height="300" width="300" />
          </div>
          {/******************* BAGIAN KONTEN SEBELAH KANAN ***************************************/}
          <div className="col-md-8">
            {/********************************* BAGIAN JUDUL DAN TOMBOL *************************/}
            <div className="row">
              <div className="col-md-6 text-left">
                <h2>{this.props.data.name}</h2>
              </div>
              <div className="col-md-6 text-right mt-2">
                <button
                  className="badge badge-secondary"
                  type="button"
                  data-toggle="modal"
                  data-target="#edit"
                >
                  Edit data
                </button>
                <Link to={`/`}>
                  <button
                    class="badge badge-danger ml-2"
                    onClick={this.deleteItem}
                  >
                    Danger
                  </button>
                </Link>
              </div>
            </div>
            {/**************************************** BAGIAN DETAIL ***********************************/}
            <div className="row">
              <div className="col-md-12">
                <p className="text-justify">{this.props.data.detail}</p>
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
                  <p className="my-2 ml-3">{this.props.data.branch}</p>
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
                  <p className="my-2 ml-3">{this.props.data.quantity}</p>
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
                  <p className="my-2 ml-3">{this.props.data.price}</p>
                </div>
              </div>
            </div>

            {/****************** END STATUS ************************/}
          </div>
        </div>
        <Modal />
      </>
    );
  }
}

export default detail;
