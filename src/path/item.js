import React, { Component } from "react";
import { connect } from "react-redux";
import localStorage from "local-storage";
import jwt from "jsonwebtoken";

import Footer from "../component/footer/footer";
import "../component/CSS/search.css";
import Content from "../component/content/itemList";
// import Modal from "../component/modal/modalItem";

class item extends Component {
  render() {
    jwt.verify(localStorage.get("token"), "skuy", async (err, decode) => {
      err ? await localStorage.remove("token") : console.log(decode);
    });
    return (
      <div>
        {/************************* TOMBOL ADD *****************************/}
        {localStorage.get("role_id") === 1 ? (
          <div className="container">
            <button
              style={{ background: "#e28935", borderRadius: "10px" }}
              type="button"
              className="btn mt-3 shadow"
              data-toggle="modal"
              data-target="#addItem"
              onClick={this.props.modalShow}
            >
              Add Item
            </button>
          </div>
        ) : null}

        {/******************* Begin Content ****************************/}

        {this.props.prodact.length !== 0 ? (
          <div className="container mt-4 d-flex flex-wrap">
            {this.props.prodact.map((category, index) => {
              return (
                <Content
                  name={category.name}
                  img={category.img}
                  id={category.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="container mt-4">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Data Not Found!!</h4>
              <p>Aww yeah, data gak ketemu!!</p>
            </div>
          </div>
        )}
        {/*********************** End Content *************************/}
        <Footer />
        {/* <Modal dataPro={this.state} /> */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     data: state.dataList
//   };
// };

export default item;
