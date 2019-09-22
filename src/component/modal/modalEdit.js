import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import { Row, Form, Col, Modal, Button } from "react-bootstrap";
import { editItem } from "../../Publics/Redux/Actions/prodacts";
import Swal from "sweetalert2";
class modalAdd extends Component {
  state = {
    name: this.props,
    quantity: 0,
    price: 0,
    detail: "",
    img: "",
    id_branch: 0,
    id_kategori: 0
  };

  // componentDidMount = () => {
  //  this.props.dataItem.map(data => {
  //     return this.setState({
  //       name: data.name,
  //       quantity: data.quantity,
  //       price: data.price,
  //       detail: data.detail,
  //       img: data.img,
  //       id_branch: data.id_branch,
  //       id_kategori: data.id_kategori
  //     });
  //   });
  // };

  // handleForm = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   // this.setState({ user });
  // };

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

  // input = () => {
  //   const data = { ...this.props.dataItem[0] };
  //   this.setState({
  //     name: data.name,
  //     quantity: data.quantity,
  //     price: data.price,
  //     detail: data.detail,
  //     img: data.img,
  //     id_branch: data.id_branch,
  //     id_kategori: data.id_kategori
  //   });
  //   this.props.edit(data.id, this.state);
  // };

  input = () => {
    const isID = { ...this.props.dataItem };
    const id = isID[0].id;
    this.props.dispatch(editItem(id, this.state)).then(suc => {
      Swal.fire({
        title: "Success!",
        text: "Berhasil Di Edit",
        type: "success",
        confirmButtonText: "Cool"
      }).then(() => {
        window.location.reload();
      });
    });
  };
  componentDidMount = () => {
    const isdetail = { ...this.props.dataItem };
    // console.log(isdetail);
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
    // const kategori = this.props.dataEdit.kategori.result;
    // const branch = this.props.dataEdit.branch.result;

    // const isdetail = { ...this.props.dataEdit.detail.result };
    const data = { ...this.props.dataItem[0] };
    console.log(this.state);

    return (
      <Modal
        show={this.props.status}
        onHide={this.props.modalClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.input}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Prodact Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="prodact Name"
                  defaultValue={data.name}
                  name="name"
                  onChange={this.isiName}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Category
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  as="select"
                  onChange={this.isiCategory}
                  name="id_kategori"
                >
                  {this.props.categoryData.map(ket => {
                    if (ket.name == data.id_category) {
                      return (
                        <option value={ket.id_category} selected>
                          {ket.name}
                        </option>
                      );
                    } else {
                      return (
                        <option value={ket.id_kategori}>{ket.name}</option>
                      );
                    }
                  })}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Branch
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  as="select"
                  onChange={this.isiBranch}
                  name="id_branch"
                >
                  {this.props.branchData.map(ket => {
                    if (ket.name == data.id_branch) {
                      return (
                        <option value={ket.id_branch} selected>
                          {ket.name}
                        </option>
                      );
                    } else {
                      return <option value={ket.id_branch}>{ket.name}</option>;
                    }
                  })}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Qty
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Qty"
                  defaultValue={data.quantity}
                  onChange={this.isiQty}
                  name="quantity"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Price
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  defaultValue={data.price}
                  onChange={this.isiPrice}
                  name="price"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Image
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  defaultValue={data.img}
                  onChange={this.isiImg}
                  name="price"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Description
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Description"
                  defaultValue={data.detail}
                  onChange={this.isiDescription}
                  name="detail"
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ background: "#e28935" }} onClick={this.input}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      // <div
      //   className="modal fade"
      //   id="edit"
      //   tabIndex="-1"
      //   role="dialog"
      //   aria-labelledby="exampleModalLabel"
      //   aria-hidden="false"
      // >
      //   <div className="modal-dialog modal-lg" role="document">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <h5 className="modal-title">Edit Item</h5>
      //         <button
      //           type="button"
      //           className="close"
      //           data-dismiss="modal"
      //           aria-label="Close"
      //         >
      //           <span aria-hidden="true">&times;</span>
      //         </button>
      //       </div>
      //       <form onSubmit={this.input}>
      //         <div className="modal-body">
      //           <div className="form-group row">
      //             <label htmlFor="name" className="col-sm-3 col-form-label">
      //               Product Name
      //             </label>

      //             <div className="col-sm-9">
      //               <input
      //                 onChange={this.isiName}
      //                 type="text"
      //                 className="form-control"
      //                 id="name"
      //                 placeholder={isdetail[0].name}
      //               />
      //             </div>
      //           </div>

      //           <div className="form-group row">
      //             <label htmlFor="img" className="col-sm-3 col-form-label">
      //               Category
      //             </label>
      //             <div className="col-sm-6">
      //               <select
      //                 className="form-control"
      //                 onChange={this.isiCategory}
      //               >
      //                 {kategori.map(ket => {
      //                   if (ket.name == isdetail[0].kategori) {
      //                     return (
      //                       <option value={ket.id_kategori} selected>
      //                         {ket.name}
      //                       </option>
      //                     );
      //                   } else {
      //                     return (
      //                       <option value={ket.id_kategori}>{ket.name}</option>
      //                     );
      //                   }
      //                 })}
      //               </select>
      //             </div>
      //           </div>

      //           <div className="form-group row">
      //             <label htmlFor="img" className="col-sm-3 col-form-label">
      //               Branch
      //             </label>
      //             <div className="col-sm-6">
      //               <select className="form-control" onChange={this.isiBranch}>
      //                 {branch.map(ket => {
      //                   if (ket.name == isdetail[0].branch) {
      //                     return (
      //                       <option value={ket.id} selected>
      //                         {ket.name}
      //                       </option>
      //                     );
      //                   } else {
      //                     return <option value={ket.id}>{ket.name}</option>;
      //                   }
      //                 })}
      //               </select>
      //             </div>
      //           </div>

      //           <div className="form-group row">
      //             <label htmlFor="name" className="col-sm-3 col-form-label">
      //               Qty
      //             </label>
      //             <div className="col-sm-9">
      //               <input
      //                 onChange={this.isiQty}
      //                 type="text"
      //                 className="form-control"
      //                 id="name"
      //                 placeholder={isdetail[0].quantity}
      //               />
      //             </div>
      //           </div>

      //           <div className="form-group row">
      //             <label htmlFor="name" className="col-sm-3 col-form-label">
      //               Price
      //             </label>
      //             <div className="col-sm-9">
      //               <input
      //                 onChange={this.isiPrice}
      //                 type="text"
      //                 className="form-control"
      //                 id="name"
      //                 placeholder={isdetail[0].price}
      //               />
      //             </div>
      //           </div>

      //           <div className="form-group row">
      //             <label htmlFor="name" className="col-sm-3 col-form-label">
      //               Image
      //             </label>
      //             <div className="col-sm-9">
      //               <input
      //                 onChange={this.isiImg}
      //                 type="text"
      //                 className="form-control"
      //                 id="name"
      //                 placeholder={isdetail[0].img}
      //               />
      //             </div>
      //           </div>

      //           <div className="form-group row">
      //             <label htmlFor="name" className="col-sm-3 col-form-label">
      //               Description
      //             </label>
      //             <div className="col-sm-9">
      //               <textarea
      //                 onChange={this.isiDescription}
      //                 className="form-control"
      //                 id="exampleFormControlTextarea1"
      //                 rows="3"
      //                 placeholder={isdetail[0].detail}
      //               ></textarea>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="modal-footer">
      //           <button
      //             style={{ background: "#e28935" }}
      //             type="submit"
      //             className="btn btn-primary"
      //           >
      //             Edit
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.prodacts.detail
  };
};

export default connect(mapStateToProps)(modalAdd);
