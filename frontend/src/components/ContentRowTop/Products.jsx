import React from "react";

export const Products = (props) => {
  return (
    <div className="card-body">
      <h1>{props.title}</h1>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={props.image}
          alt="Product IMG"
        />
      </div>
      <p>{props.description}</p>
      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
        Vista detallada de producto
      </a>
    </div>
  );
};
