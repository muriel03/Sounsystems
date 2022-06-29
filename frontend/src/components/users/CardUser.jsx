import React from "react";
import { Link } from "react-router-dom";

export default function CardUser(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={props.avatar}
          alt="Product IMG"
        />
        <div className="card-body">
          <h3>{props.name}</h3>
          <p className="card-text">{props.email}</p>
        </div>
        <div className="card-footer">
          <Link to={`/users/${props.id}`}>
            <small className="text-muted">Ver detalles</small>
          </Link>
        </div>
      </div>
    </div>
  );
}
