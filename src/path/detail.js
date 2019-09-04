import React, { Component } from "react";
import { connect } from "react-redux";

import { getDetail, deleteDetail } from "../Publics/Redux/Actions/detail";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import "../component/CSS/search.css";
import Content from "../component/content/detail";

class detail extends Component {
  state = {
    detail: [],
    param: {
      params: {
        id: this.props.match.params.id
      }
    }
  };

  componentDidMount = async () => {
    await this.props.dispatch(getDetail(this.state.param));
    this.setState({
      detail: this.props.data.detailData
    });
  };
  render() {
    const { detail } = this.state;
    console.log(this.props.data);

    return (
      <div>
        <Navbar />

        {/******************* Begin Content ****************************/}

        {detail.length === 0 ? (
          <p>Welcome</p>
        ) : (
          <div className="container my-5 ">
            {detail.result.map((category, index) => {
              return <Content data={category} deleted={this.deleteItem} />;
            })}
          </div>
        )}
        {/*********************** End Content *************************/}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dataList
  };
};

export default connect(mapStateToProps)(detail);
