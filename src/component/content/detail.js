import React from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Axios from "axios";

class detail extends React.Component {
  state = {
    itemEdit: []
  };

  deleteItem = () => {
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
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
        Axios.delete(`http://localhost:8080/store/${this.props.data.id}`);
        window.location.href = `http://localhost:3000/`;
      }
    });
  };

  render() {
    console.log(this.props.data);

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
                {/* <Link to={`/`}> */}
                <button
                  class="badge badge-danger ml-2"
                  onClick={this.deleteItem}
                >
                  Delete
                </button>
                {/* </Link> */}
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
      </>
    );
  }
}

export default detail;
