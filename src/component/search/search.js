import React, { Component } from "react";
import "../CSS/search.css";

class Search extends Component {
  state = {
    tmpSearch: ""
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
    return (
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
    );
  }
}

export default Search;
