import React from "react";
import { Link } from "react-router-dom";
import logo4 from "../assets/logo4.jpg";

const paths = [
  ["Inicio", "/"],
  ["Producto", "/producto"],
];

const Navigation = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-2 d-flex justify-content-center align-items-center">
        <img
          className="img-fluid w-100"
          alt="Logo"
          style={{ backgroundColor: "red" }}
          src={logo4}
        />
      </div>

      <div className="col-md-9 ">
        <div className="row">
          <div className="col-12 text-center display-4">NUTRIZANAC</div>
        </div>
        <hr />
        <div className="row">
          {paths.map((arr) => (
            <Link
              className="col text-center border p-2 text-decoration-none "
              style={{ color: "#00c70f", fontSize: 20 }}
              to={arr[1]}
            >
              {arr[0]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
