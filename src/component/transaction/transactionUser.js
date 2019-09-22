import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card, ListGroup, Container } from "react-bootstrap";
import { getTransactionId } from "../../Publics/Redux/Actions/transaction";
import Navbar from "../navbar/navbar";
class TransactionUser extends Component {
  state = {
    transaction: []
  };

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    await this.props.dispatch(getTransactionId(id));
    this.setState({ transaction: this.props.transaction.response });
  };

  convertTimeStamp = timeStamp => {
    timeStamp.toString();
    return timeStamp.slice(0, 10);
  };

  render() {
    return (
      <>
        <Navbar />
        <Container className="mt-5 mb-5">
          {this.state.transaction.length !== 0 ? (
            <>
              {" "}
              {this.state.transaction.map((data, index) => (
                <Accordion
                  key={index}
                  className="accordion"
                  defaultActiveKey="0"
                >
                  <Card>
                    <Accordion.Toggle
                      as={data.name}
                      eventKey={`${index}`}
                      style={{ backgroundColor: "#d3dbd5" }}
                      className="py-2"
                    >
                      <div className="d-flex ml-3">
                        <p>Name: </p>
                        <p className="ml-1">{data.name}</p>
                        <p className="ml-3">
                          {this.convertTimeStamp(data.date)}
                        </p>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey={`${index}`}
                      style={{
                        backgroundColor: "#e1f1f2",
                        border: "1px solid"
                      }}
                    >
                      <Card.Body>
                        {this.state.transaction[index].enrollment.map(
                          (lec, i) => (
                            <ListGroup key={i} variant="flush">
                              <ListGroup.Item
                                style={{ backgroundColor: "#ededf0" }}
                              >
                                {lec.name}
                                <span className="float-right">
                                  Rp.{lec.price}
                                </span>
                              </ListGroup.Item>
                            </ListGroup>
                          )
                        )}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              ))}
            </>
          ) : (
            <div className="container mt-4">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Data Not Found!!</h4>
                <p>Aww yeah, data gak ketemu!!</p>
              </div>
            </div>
          )}
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    transaction: state.transaction.transactionList
  };
};

export default connect(mapStateToProps)(TransactionUser);
