import React, { Component } from "react";
import { connect } from "react-redux";

import { getCategory } from "../Publics/Redux/Actions/categoryList";

import { getItem } from "../Publics/Redux/Actions/itemList";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import "../component/CSS/search.css";
import Content from "../component/content/itemList";
import Modal from "../component/modal/modalItem";
import { async } from "q";

class item extends Component {
  constructor(props) {
    super(props);
    this.name = props.match.params.name;
  }
  state = {
    dataItem: [],
    kategori: [],
    param: {
      params: {
        type: this.props.match.params.name
      }
    }
  };

  componentDidMount = async () => {
    await this.props.dispatch(getItem(this.state.param));
    this.setState({
      dataItem: this.props.data.dataList
    });
  };

  reGet = async () => {
    await this.props.dispatch(getCategory());
    this.setState({
      kategori: this.props.data.kategoriList
    });
  };

  render() {
    const { dataItem } = this.state;
    console.log(this.state.kategori);
    console.log(this.state.dataItem);

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
            onClick={this.reGet}
          >
            Add Item
          </button>
        </div>
        {/******************* Begin Content ****************************/}

        {dataItem.length === 0 ? (
          setTimeout(function() {
            "Data Not Found";
          }, 2000)
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
        <Modal dataPro={this.props.data.kategoriList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dataList
  };
};

export default connect(mapStateToProps)(item);
