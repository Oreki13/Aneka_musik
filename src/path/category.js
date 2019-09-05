import React, { Component } from "react";
import { connect } from "react-redux";

import { getCategory } from "../Publics/Redux/Actions/categoryList";

import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import "../component/CSS/search.css";
import Content from "../component/content/itemCategory";
import Modal from "../component/modal/modalCategory";

class category extends Component {
  state = {
    dataCategory: [],
    tes: [],
    tmpSearch: ""
  };
  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    this.setState({
      dataCategory: this.props.data.dataList
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

  render() {
    const { dataCategory } = this.state;
    
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
        {/******************************* TOMBOL ADD ********************************/}
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
        {/******************* Begin Content ****************************/}

        {dataCategory.length === 0 ? (
          <div className="container mt-4">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Data Not Found!!</h4>
              <p>Aww yeah, data gak ketemu!!</p>
            </div>
          </div>
        ) : (
          <div className="container mt-4 mb-5 d-flex flex-wrap">
            {dataCategory.result.map((category, index) => {
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

const mapStateToProps = state => {
  return {
    data: state.dataList
  };
};

export default connect(mapStateToProps)(category);
