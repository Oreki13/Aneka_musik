import React from "react";

import { connect } from "react-redux";
import { getName } from "../Publics/Redux/Actions/itemList";
import Content from "../component/content/itemList";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";

class search extends React.Component {
  state = {
    item: [],
    param: {
      params: {
        name: this.props.match.params.name
      }
    },
    tmpSearch: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getName(this.state.param));
    this.setState({
      item: this.props.data.dataSearch.result
    });
  };

  searchInput = e => {
    let key = e.target.value;
    this.setState({ tmpSearch: key });
  };

  searchGo = key => {
    if (key.charCode == 13 && this.state.tmpSearch.length > 0) {
      window.location.href = `http://localhost:3000/search/${this.state.tmpSearch}`;
    } else {
      window.location.href = `http://localhost:3000/`;
    }
  };

  render() {
    console.log(this.props.match);

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
        {/**************************** BEGIN CONTENT ****************************/}
        {this.state.item.length !== 0 ? (
          <div className="container mt-4 d-flex flex-wrap">
            {this.state.item.map((category, index) => {
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

export default connect(mapStateToProps)(search);
