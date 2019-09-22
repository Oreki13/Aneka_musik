import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../Publics/Redux/Actions/user";

class registration extends Component {
  state = {
    user: {
      fullname: "",
      email: "",
      password: "",
      image: "default",
      role_id: 2
    },
    error: false
  };
  handleForm = event => {
    let user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  submit = async () => {
    await this.props.dispatch(register(this.state.user));
    if (this.props.dataUser.error !== null) {
      this.setState({ error: true });
    } else {
      window.location = "/login";
    }
    // console.log(this.props.dataUser.dataUser);
  };

  render() {
    console.log(this.state.user);

    return (
      <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5 col-lg-7 mx-auto">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    {this.state.error ? (
                      <p className="text-center text-danger">
                        Email Has Registered
                      </p>
                    ) : null}
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="name"
                      name="fullname"
                      placeholder="Full Name"
                      onChange={this.handleForm}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={this.handleForm}
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
                    class="btn btn-primary btn-user btn-block"
                    onClick={this.submit}
                  >
                    Register Account
                  </button>

                  <hr />
                  <div class="text-center">
                    <a class="small" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <div class="text-center">
                    <Link to={"/login"}>
                      <span>Already have an account? Login!</span>
                    </Link>
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
export default connect(mapStateToProps)(registration);
