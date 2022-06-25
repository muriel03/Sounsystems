import React from "react";

export const ListCategories = (props) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
          {props.category}:{props.count}
       </div>
      </div>
    </div>
  );
};
