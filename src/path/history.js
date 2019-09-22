import React, { Component } from "react";
import { Link } from "react-router-dom";
class History extends Component {
  render() {
    return (
      <div class="row justify-content-center mt-5 mb-5">
        <div class="col-md-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
              <Link to={`/transaction/${1}`} class="text-decoration-none">
                Januari
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${2}`} class="text-decoration-none">
                Februari
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${3}`} class="text-decoration-none">
                Maret
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${4}`} class="text-decoration-none">
                April
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${5}`} class="text-decoration-none">
                Mei
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${6}`} class="text-decoration-none">
                juni
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${7}`} class="text-decoration-none">
                Juli
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${8}`} class="text-decoration-none">
                Agustus
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${9}`} class="text-decoration-none">
                September
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${10}`} class="text-decoration-none">
                Oktober
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${11}`} class="text-decoration-none">
                November
              </Link>
            </li>
            <li class="list-group-item text-center">
              <Link to={`/transaction/${12}`} class="text-decoration-none">
                Desember
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default History;
