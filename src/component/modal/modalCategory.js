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
    return (
      <div
        class="modal fade"
        id="add"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Category</h5>
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
              <div class="modal-body">
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">
                    Category Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      required={true}
                      onChange={this.isiName}
                      type="text"
                      class="form-control"
                      id="name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="img" className="col-sm-3 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-6">
                    <input
                      onChange={this.isiImg}
                      type="text"
                      class="form-control"
                      id="img"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  style={{ background: "#e28935" }}
                  type="submit"
                  class="btn btn-primary"
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
