import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import localStorage from "local-storage";
import { login } from "../Publics/Redux/Actions/user";

class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    error: false
  };

  componentDidMount = async () => {
    const token = localStorage.get("token");
    if (token) {
      jwt.verify(token, "skuy", (err, decoded) => {
        if (!err) {
          window.location = "/";
        } else {
          localStorage.remove("token");
          localStorage.remove("role_id");
          localStorage.remove("userId");
        }
      });
    }
  };

  handleForm = event => {
    let user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };
  submit = async () => {
    await this.props.dispatch(login(this.state.user));
    if (this.props.dataUser.error == null) {
      localStorage.set("token", this.props.dataUser.result.token);
      localStorage.set("role_id", this.props.dataUser.result.role_id);
      localStorage.set("userId", this.props.dataUser.result.userId);
    } else {
      this.setState({ error: true });
    }
    // console.log(this.props.dataUser.dataUser);
    if (localStorage.get("token")) window.location = "/";
  };
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Login Page</h1>
                      </div>
                      {this.state.error ? (
                        <p className="text-center text-danger">
                          Email Atau Password salah
                        </p>
                      ) : null}
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="email"
                          name="email"
                          placeholder="Enter Email Address..."
                          onChange={this.handleForm}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.handleForm}
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-user btn-block"
                        style={{ background: "#F5D372" }}
                        onClick={this.submit}
                      >
                        Login
                      </button>

                      <hr />
                      <div class="text-center">
                        <a class="small" href="#">
                          Forgot Password?
                        </a>
                      </div>
                      <div class="text-center">
                        <Link to={"/registration"}>
                          <span>Create an Account!</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dataUser: state.user.dataUser
  };
};

export default connect(mapStateToProps)(Login);
