import React, { Component } from "react";
import Axios from "axios";
import { editItem } from "../../Publics/Redux/Actions/patch";
class modalAdd extends Component {
  state = {
    name: "",
    quantity: 0,
    price: 0,
    detail: "",
    img: "",
    id_branch: 0,
    id_kategori: 0
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
    const isID = { ...this.props.dataEdit.detail.result };
    const id = isID[0].id;
    this.props.dispatch(editItem(id, this.state));
  };
  componentDidMount = () => {
    const isdetail = { ...this.props.dataEdit.detail.result };

    this.setState({
      name: isdetail[0].name,
      quantity: isdetail[0].quantity,
      price: isdetail[0].price,
      detail: isdetail[0].detail,
      img: isdetail[0].img,
      id_branch: isdetail[0].id_branch,
      id_kategori: isdetail[0].id_kategori
    });
  };

  render() {
    const kategori = this.props.dataEdit.kategori.result;
    const branch = this.props.dataEdit.branch.result;

    const isdetail = { ...this.props.dataEdit.detail.result };

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
              <h5 className="modal-title">Edit Item</h5>
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
                      onChange={this.isiName}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={isdetail[0].name}
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
                      {kategori.map(ket => {
                        if (ket.name == isdetail[0].kategori) {
                          return (
                            <option value={ket.id_kategori} selected>
                              {ket.name}
                            </option>
                          );
                        } else {
                          return (
                            <option value={ket.id_kategori}>{ket.name}</option>
                          );
                        }
                      })}
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="img" className="col-sm-3 col-form-label">
                    Branch
                  </label>
                  <div className="col-sm-6">
                    <select className="form-control" onChange={this.isiBranch}>
                      {branch.map(ket => {
                        if (ket.name == isdetail[0].branch) {
                          return (
                            <option value={ket.id} selected>
                              {ket.name}
                            </option>
                          );
                        } else {
                          return <option value={ket.id}>{ket.name}</option>;
                        }
                      })}
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Qty
                  </label>
                  <div className="col-sm-9">
                    <input
                      onChange={this.isiQty}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={isdetail[0].quantity}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Price
                  </label>
                  <div className="col-sm-9">
                    <input
                      onChange={this.isiPrice}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={isdetail[0].price}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-9">
                    <input
                      onChange={this.isiImg}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={isdetail[0].img}
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
                      placeholder={isdetail[0].detail}
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
                  Edit
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
