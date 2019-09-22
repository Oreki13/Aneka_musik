import React, { Component } from "react";
import localStorage from "local-storage";

import Footer from "../component/footer/footer";
import "../component/CSS/search.css";
import Content from "../component/content/itemCategory";
import Modal from "../component/modal/modalCategory";
import { Spinner } from "react-bootstrap";
class category extends Component {
  state = {
    tes: [],
    tmpSearch: ""
  };

  render() {
    console.log(this.props);

    return (
      <div>
        {/******************************* TOMBOL ADD ********************************/}
        {localStorage.get("role_id") === 1 ? (
          <div className="container">
            <button
              style={{ background: "#e28935", borderRadius: "10px" }}
              type="button"
              className="btn mt-3 shadow"
              data-toggle="modal"
              data-target="#add"
            >
              Add Category
            </button>
          </div>
        ) : null}

        {/******************* Begin Content ****************************/}

        {this.props.categoryList.length === 0 ? (
          // <div className="container mt-4">
          //   <div className="alert alert-danger" role="alert">
          //     <h4 className="alert-heading">Data Not Found!!</h4>
          //     <p>Aww yeah, data gak ketemu!!</p>
          //   </div>
          // </div>
          <div
            className="text-center w-100"
            style={{ margin: "27vh 0 25.5vh 0", color: "red" }}
          >
            <Spinner type="grow" color="warning" />
          </div>
        ) : (
          <div className="container mt-4 mb-5 d-flex flex-wrap">
            {this.props.categoryList.map((category, index) => {
              return <Content name={category.name} img={category.img} />;
            })}
          </div>
        )}
        {/*********************** End Content *************************/}
        <Footer />
        <Modal />
      </div>
    );
  }
}

export default category;
