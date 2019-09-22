import React from "react";
import { Link } from "react-router-dom";

const item = props => {
  return (
    <div
      className="card mb-3 mr-4 shadow "
      style={{
        maxWidth: "320px",
        minWidth: "320px",
        borderRadius: "30px",
        background: "#F5D372"
      }}
    >
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-body mt-1">
            <Link to={`/item/${props.name}`}>
              <h3 className="mt-5 text-body">{props.name}</h3>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src={props.img} className="card-img" width="430" height="205" />
        </div>
      </div>
    </div>
  );
};

export default item;
