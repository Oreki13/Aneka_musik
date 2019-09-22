import React from "react";
import img from "./img.png";
import localStorage from "local-storage";
import { Link } from "react-router-dom";
const navbar = () => {
  // const getMatch = props.location;
  // console.log(localStorage.get("token"));
  const logout = () => {
    localStorage.remove("token");
    localStorage.remove("role_id");
    localStorage.remove("userId");
  };
  if (localStorage.get("role_id") == 2) {
    return (
      <div>
        <nav className="navbar navbar-light " style={{ background: "#F5D372" }}>
          <Link to={"/"}>
            <span className="navbar-brand">
              <img src={img} width="100" height="45" />
            </span>
          </Link>
          <div>

            {localStorage.get("token") ? (
              <>
                <Link to={`/transactionUser/${localStorage.get("userId")}`}>
                  <span className="navbar-text mx-3 ">
                    <i class="fas fa-history"></i>
                    {" History"}
                  </span>
                </Link>
                <Link to={"/whislist"}>
                  <span className="navbar-text">
                    <i class="far fa-heart"></i>
                  </span>
                </Link>
                <Link to={"/cart"}>
                  <span className="navbar-text mx-3">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <span className="navbar-text">
                    <i class="far fa-heart"></i>
                  </span>
                </Link>
                <Link to={"/login"}>
                  <span className="navbar-text mx-3">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </Link>
              </>
            )}

            {localStorage.get("token") ? (
              <Link to={"/"}>
                <span className="navbar-text " onClick={logout}>
                  <i class="fas fa-sign-in-alt"></i>
                  {" Logout"}
                </span>
              </Link>
            ) : (
              <Link to={"/login"}>
                <span className="navbar-text">
                  <i class="fas fa-sign-in-alt"></i>
                  {" Login"}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar navbar-light " style={{ background: "#F5D372" }}>
          <Link to={"/"}>
            <span className="navbar-brand">
              <img src={img} width="100" height="45" />
            </span>
          </Link>
          <div>
            {localStorage.get("token") ? (
              <>
                <Link to={"/history"}>
                  <span className="navbar-text mx-3 ">
                    <i class="fas fa-history"></i>
                    {" History"}
                  </span>
                </Link>
                <Link to={"/"}>
                  <span className="navbar-text " onClick={logout}>
                    <i class="fas fa-sign-in-alt"></i>
                    {" Logout"}
                  </span>
                </Link>
              </>
            ) : (
              <Link to={"/login"}>
                <span className="navbar-text">
                  <i class="fas fa-sign-in-alt"></i>
                  {" Login"}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    );
  }
};

export default navbar;
{
  /* {getMatch != "/login" && getMatch != "/registration" ? (
          <Link to={"/login"}>
            <span className="navbar-text">
              <i class="fas fa-sign-in-alt"></i>
              {"Login"}
            </span>
          </Link>
        ) : localStorage.get("token") ? (
          <Link to={"/login"}>
            <span className="navbar-text">
              <i class="fas fa-sign-in-alt"></i>
              {"Logout"}
            </span>
          </Link>
        ) : null} */
}
