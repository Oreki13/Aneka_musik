import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { postItem } from "../../Publics/Redux/Actions/prodacts";
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
    this.props.dispatch(postItem(this.state)).then(() => {
      window.location.reload();
    });
  };

  render() {
    // const kategori = this.props.dataPro.kategori.result;
    // const branch = this.props.dataPro.branch.result;
    console.log(this.state);

    return (
      <Modal
        show={this.props.status}
        onHide={this.props.modalClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Prodact Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="prodact Name"
                  onChange={this.isiName}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Category
              </Form.Label>
              <Col sm={6}>
                <Form.Control as="select" onChange={this.isiCategory}>
                  {this.props.categoryData.map(category => (
                    <option value={category.id_kategori}>
                      {category.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Branch
              </Form.Label>
              <Col sm={6}>
                <Form.Control as="select" onChange={this.isiBranch}>
                  {this.props.branchData.map(branch => (
                    <option value={branch.id}>{branch.name}</option>
                  ))}
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
                  onChange={this.isiQty}
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
                  onChange={this.isiPrice}
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
                  placeholder="Image"
                  onChange={this.isiImg}
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
                  onChange={this.isiDescription}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ background: "#e28935" }} onClick={this.input}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
const mapStateToProps = state => {
  return {
    item: state.prodacts.itemList
  };
};

export default connect(mapStateToProps)(modalAdd);
