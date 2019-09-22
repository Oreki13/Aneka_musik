import React, { Component, Fragment } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Container } from "react-bootstrap";
import { getWhislist, deleteWhislist } from "../Publics/Redux/Actions/whislist";
import localStorage from "local-storage";

class whislist extends Component {
  state = {
    whislist: []
  };

  componentDidMount = async () => {
    if (!localStorage.get("token")) {
      window.location = "/login";
    }
    await this.props.dispatch(getWhislist(localStorage.get("userId")));
    this.setState({
      whislist: this.props.whislist.result
    });
  };
  hapus = (id_user, id_item) => {
    this.props.dispatch(deleteWhislist(id_user, id_item)).then(() => {
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
  render() {
    console.log(this.state.whislist);

    // const [cart] = this.state;

    if (localStorage.get("userId")) {
      return (
        <Fragment>
          <Container className="text-center mt-3">
            <div>
              <h3>My Whislist</h3>
            </div>
          </Container>
          <div className="my-5 mx-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name Prodact</th>
                  <th>img</th>
                  <th>Price</th>
                  <th>Ket</th>
                </tr>
              </thead>

              {this.state.whislist === undefined ? (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center">
                      whislist Kosong
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {this.state.whislist.map((car, key) => (
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
                      <td>Rp{car.price}</td>
                      <td>
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
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Container className="text-center mt-3">
            <div>
              <h3>My cart2</h3>
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
    whislist: state.whislist.whislistList
  };
};
export default connect(mapStateToProps)(whislist);
