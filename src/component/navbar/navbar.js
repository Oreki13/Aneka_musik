import React from "react";
import img from "./img.png";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light " style={{ background: "#F5D372" }}>
        <a className="navbar-brand" href="http://localhost:3000/">
          <img src={img} width="100" height="45" />
        </a>
        <span className="navbar-text">Login </span>
      </nav>
    </div>
  );
};

export default navbar;
