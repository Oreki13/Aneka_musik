import React, { Component } from "react";
import { postItem } from "../../Publics/Redux/Actions/postItem";
class modalAdd extends Component {
  state = {
    name: "",
    quantity: "",
    price: "",
    detail: "",
    img: "",
    id_branch: "",
    id_kategori: ""
  };

  isiName = e => {
    let type = e.target.value;
    this.setState({ name: type });
  };

  isiCategory = e => {
    let type = e.target.value;
    this.setState({ id_kategori: type });
  };

  isiBranch = e => {
    let type = e.target.value;
    this.setState({ id_branch: type });
  };

  isiQty = e => {
    let type = e.target.value;
    this.setState({ quantity: type });
  };

  isiPrice = e => {
    let type = e.target.value;
    this.setState({ price: type });
  };

  isiImg = e => {
    let type = e.target.value;
    this.setState({ img: type });
  };

  isiDescription = e => {
    let type = e.target.value;
    this.setState({ detail: type });
  };
  input = () => {
    this.props.dispatch(postItem(this.state));
  };

  render() {
    // const kategori = this.props.dataPro.kategori.result;
    // const branch = this.props.dataPro.branch.result;
    // console.log(kategori);
    // console.log(branch);
    // console.log(this.state);

    return (
      <div
        className="modal fade"
        id="edit"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Item</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.input}>
              <div className="modal-body">
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Product Name
                  </label>

                  <div className="col-sm-9">
                    <input
                      required={true}
                      onChange={this.isiName}
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="img" className="col-sm-3 col-form-label">
                    Category
                  </label>
                  <div className="col-sm-6">
                    <select
                      className="form-control"
                      onChange={this.isiCategory}
                    >
                      {/* {kategori.map(ket => {
                        return (
                          <option value={ket.id_kategori}>{ket.name}</option>
                        );
                      })} */}
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="img" className="col-sm-3 col-form-label">
                    Branch
                  </label>
                  <div className="col-sm-6">
                    <select className="form-control" onChange={this.isiBranch}>
                      {/* {branch.map(ket => {
                        return <option value={ket.id}>{ket.name}</option>;
                      })} */}
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Qty
                  </label>
                  <div className="col-sm-9">
                    <input
                      required={true}
                      onChange={this.isiQty}
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Price
                  </label>
                  <div className="col-sm-9">
                    <input
                      required={true}
                      onChange={this.isiPrice}
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-9">
                    <input
                      required={true}
                      onChange={this.isiImg}
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Description
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      onChange={this.isiDescription}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  style={{ background: "#e28935" }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default modalAdd;
