import React, { Component } from "react";
import { postCategory } from "../../Publics/Redux/Actions/postCategory";
class modalAdd extends Component {
  state = {
    name: "",
    img: ""
  };

  isiName = e => {
    let type = e.target.value;
    this.setState({ name: type });
  };

  isiImg = e => {
    let type = e.target.value;
    this.setState({ img: type });
  };

  input = () => {
    this.props.dispatch(postCategory(this.state));
  };

  render() {
    const kategori = this.props.dataPro.result;
    console.log(kategori);

    return (
      <div
        className="modal fade"
        id="addItem"
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
                      //   onChange={this.isiName}
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
                    <select className="form-control">
                      {kategori.map(ket => {
                        return (
                          <option value={ket.id_kategori}>{ket.name}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="img" className="col-sm-3 col-form-label">
                    Branch
                  </label>
                  <div className="col-sm-6">
                    <select className="form-control">
                      <option>Default select</option>
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
                      //   onChange={this.isiName}
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
                      //   onChange={this.isiName}
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Desciption
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      //   onChange={this.detail}
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
