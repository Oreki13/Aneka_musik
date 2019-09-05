import React, { Component } from "react";
import { connect } from "react-redux";

import { getCategory } from "../Publics/Redux/Actions/categoryList";

import { getItem } from "../Publics/Redux/Actions/itemList";
import { getBranch } from "../Publics/Redux/Actions/branch";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import "../component/CSS/search.css";
import Content from "../component/content/itemList";
import Modal from "../component/modal/modalItem";

class item extends Component {
  state = {
    dataItem: [],
    kategori: [],
    branch: [],
    param: {
      params: {
        type: this.props.match.params.name
      }
    },
    modal: false
  };

  componentDidMount = async () => {
    await this.props.dispatch(getItem(this.state.param));
    this.setState({
      dataItem: this.props.data.dataList
    });
  };

  searchInput = e => {
    let key = e.target.value;
    this.setState({ tmpSearch: key });
  };

  searchGo = key => {
    if (key.charCode == 13) {
      window.location.href = `http://localhost:3000/search/${this.state.tmpSearch}`;
    }
  };

  showModal = async () => {
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getBranch());
    this.setState({
      kategori: this.props.data.kategoriList,
      branch: this.props.data.branchList,
      modal: true
    });
  };

  render() {
    const { dataItem } = this.state;

    if (this.state.modal == false) {
      return (
        <div>
          <Navbar />
          {/*********** Begin Search ************/}
          <div className="container mt-2 d-flex ">
            <div className="search-box shadow">
              <input
                className="search-txt "
                type="text"
                onChange={this.searchInput}
                onKeyPress={this.searchGo}
                placeholder="Search"
              />
              <a className="search-btn">
                <i className="fas fa-search"></i>
              </a>
            </div>
            <div className="seting shadow">
              <a className="seting-btn">
                <i className="fas fa-cog"></i>
              </a>
            </div>
          </div>
          {/************************* TOMBOL ADD *****************************/}
          <div className="container">
            <button
              style={{ background: "#e28935", borderRadius: "10px" }}
              type="button"
              className="btn mt-3 shadow"
              data-toggle="modal"
              data-target="#addItem"
              onClick={this.showModal}
            >
              Add Item
            </button>
          </div>
          {/******************* Begin Content ****************************/}

          {dataItem.length === 0 ? (
            <div className="container mt-4">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Data Not Found!!</h4>
                <p>Aww yeah, data gak ketemu!!</p>
              </div>
            </div>
          ) : (
            <div className="container mt-4 d-flex flex-wrap">
              {dataItem.result.map((category, index) => {
                return (
                  <Content
                    name={category.name}
                    img={category.img}
                    id={category.id}
                  />
                );
              })}
            </div>
          )}
          {/*********************** End Content *************************/}
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          {/*********** Begin Search ************/}
          <div className="container mt-2 d-flex ">
            <div className="search-box shadow">
              <input
                className="search-txt "
                type="text"
                name=""
                placeholder="Search"
              />
              <a className="search-btn">
                <i className="fas fa-search"></i>
              </a>
            </div>
            <div className="seting shadow">
              <a className="seting-btn">
                <i className="fas fa-cog"></i>
              </a>
            </div>
          </div>
          {/************************* TOMBOL ADD *****************************/}
          <div className="container">
            <button
              style={{ background: "#e28935", borderRadius: "10px" }}
              type="button"
              className="btn mt-3 shadow"
              data-toggle="modal"
              data-target="#addItem"
              onClick={this.showModal}
            >
              Add Item
            </button>
          </div>
          {/******************* Begin Content ****************************/}

          {dataItem.length === 0 ? (
            <div className="container mt-4">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Data Not Found!!</h4>
                <p>Aww yeah, data gak ketemu!!</p>
              </div>
            </div>
          ) : (
            <div className="container mt-4 d-flex flex-wrap">
              {dataItem.result.map((category, index) => {
                return (
                  <Content
                    name={category.name}
                    img={category.img}
                    id={category.id}
                  />
                );
              })}
            </div>
          )}
          {/*********************** End Content *************************/}
          <Footer />
          <Modal dataPro={this.state} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.dataList
  };
};

export default connect(mapStateToProps)(item);
