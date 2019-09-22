import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Table, Container, Button } from "react-bootstrap";
import { getCart, deleteCart, postCart } from "../Publics/Redux/Actions/cart";
import { postTransaction } from "../Publics/Redux/Actions/transaction";
import localStorage from "local-storage";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReactToPrint from "react-to-print";

class cart extends Component {
  state = {
    cart: [],
    tmps: ""
  };

  componentDidMount = async () => {
    if (!localStorage.get("token")) {
      window.location = "/login";
    }
    await this.props.dispatch(getCart(localStorage.get("userId")));
    this.setState({
      cart: this.props.cart.result
    });
  };
  hapus = (id_user, id_item) => {
    this.props.dispatch(deleteCart(id_user, id_item)).then(() => {
      Swal.fire({
        title: "Success!",
        text: "Remove from wishlist",
        type: "success",
        confirmButtonText: "Cool"
      }).then(() => {
        window.location.reload();
      });
    });
  };

  checkout = () => {
    let tmp = [];
    this.state.cart.map(car => {
      tmp.push(car.id_item);
      return null;
    });
    // this.setState({ tmps: tmp });
    const data = {
      id_items: [...tmp]
    };

    console.log(data);
    this.props.dispatch(postTransaction(localStorage.get("userId"), data));
  };

  render() {
    // const [cart] = this.state;
    console.log(this.state);

    if (localStorage.get("userId")) {
      return (
        <Fragment>
          <Container className="text-center mt-3">
            <div>
              <h3>My cart</h3>
            </div>
          </Container>
          <div className="my-5 mx-5">
            <Table striped bordered ref={el => (this.componentRef = el)}>
              <thead>
                <tr>
                  <th>Name Prodact</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Ket</th>
                </tr>
              </thead>

              {this.state.cart === undefined ? (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center">
                      Cart Kosong
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {this.state.cart.map((car, key) => (
                    <tr>
                      <td>{car.name}</td>
                      <td style={{ maxWidth: "50px", maxHeight: "70px" }}>
                        <img
                          src={car.img}
                          className="card-img"
                          width="1"
                          height="100"
                        />
                      </td>
                      <td>Rp.{car.price}</td>
                      <td>
                        {" "}
                        <Link
                          to={`/detail/${car.id_item}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Detail
                        </Link>
                        <span
                          className="mx-3"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            this.hapus(localStorage.get("userId"), car.id_item);
                          }}
                        >
                          Hapus
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </Table>
            <ReactToPrint
              trigger={() => (
                <Button variant="secondary" onClick={this.checkout}>
                  Checkout
                </Button>
              )}
              content={() => this.componentRef}
            />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Container className="text-center mt-3">
            <div>
              <h3>My cart</h3>
            </div>
          </Container>
          <div className="my-5 mx-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name Prodact</th>
                  <th>img</th>
                  <th>Jumlah</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.state.cart.map((car, index) => {
                  return (
                    <tr>
                      <td>key={index}</td>
                      <td>{car.name}</td>
                      <td>{car.img}</td>
                      <td>@mdo</td>
                      <td>{map.price}</td>
                    </tr>
                  );
                })} */}
              </tbody>
            </Table>
          </div>
        </Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cartList
  };
};
export default connect(mapStateToProps)(cart);
