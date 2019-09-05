import React, { Component } from "react";
import { connect } from "react-redux";

import { getDetail, deleteDetail } from "../Publics/Redux/Actions/detail";
import { getCategory } from "../Publics/Redux/Actions/categoryList";
import { getBranch } from "../Publics/Redux/Actions/branch";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import "../component/CSS/search.css";
import Content from "../component/content/detail";
import Modal from "../component/modal/modalEdit";

class detail extends Component {
  state = {
    detail: [],
    param: {
      params: {
        id: this.props.match.params.id
      }
    },
    kategori: [],
    branch: [],
    modal: false
  };

  componentDidMount = async () => {
    await this.props.dispatch(getDetail(this.state.param));
    this.setState({
      detail: this.props.data.detailData
    });
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
    const { detail } = this.state;

    if (this.state.modal == false) {
      return (
        <div>
          <Navbar />
          <div className="container text-right mt-4">
            <button
              className="badge badge-secondary"
              type="button"
              data-toggle="modal"
              data-target="#edit"
              onClick={this.showModal}
            >
              Edit data
            </button>
          </div>

          {/******************* Begin Content ****************************/}

          {detail.length === 0 ? (
            <p>Data Not Found</p>
          ) : (
            <div className="container mt-1 mb-5 ">
              {detail.result.map((category, index) => {
                return <Content data={category} deleted={this.deleteItem} />;
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
          <div className="container text-right mt-4">
            <button
              className="badge badge-secondary"
              type="button"
              data-toggle="modal"
              data-target="#edit"
            >
              Edit data
            </button>
          </div>

          {/******************* Begin Content ****************************/}

          {detail.length === 0 ? (
            <p>Data Not Found</p>
          ) : (
            <div className="container mt-1 mb-5 ">
              {detail.result.map((category, index) => {
                return <Content data={category} deleted={this.deleteItem} />;
              })}
            </div>
          )}
          {/*********************** End Content *************************/}
          <Footer />
          <Modal dataEdit={this.state} />
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

export default connect(mapStateToProps)(detail);
