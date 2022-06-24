import React from "react";
import { ContentRowMovies } from "./ContentRowTop/ContentProducts";
import { Categories } from "./ContentRowTop/Categories";
import { ProductsCategory } from "./ContentRowTop/ProductsCategory";

export const ContentRowTop = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard SoundSytem</h1>
      </div>
      <ContentRowMovies />
      {/* Content Row Last Movie in Data Base */}
      <div className="row">
        <ProductsCategory />
        {/* End content row last movie in Data Base */}
        {/* Genres in DB */}
        <Categories />
      </div>
    </div>
  );
};
