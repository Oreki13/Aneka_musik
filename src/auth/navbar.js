import React from "react";
import img from "../component/navbar/img.png";
import { Link } from "react-router-dom";
const navbarAdmin = () => {
  // const getMatch = props.location;
  // console.log(localStorage.get("token"));

  return (
    <div>
      <nav className="navbar navbar-light " style={{ background: "#F5D372" }}>
        <Link to={"/"}>
          <span className="navbar-brand">
            <img src={img} width="100" height="45" />
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default navbarAdmin;
