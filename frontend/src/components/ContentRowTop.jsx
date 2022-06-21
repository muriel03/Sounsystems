import React from "react";
import { ContentRowMovies } from "./ContentRowTop/ContentRowMovies";
import { GenresInDb } from "./ContentRowTop/GenresInDb";
import { LastMovieInDb } from "./ContentRowTop/LastMovieInDb";

export const ContentRowTop = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
      <ContentRowMovies />
      {/* Content Row Last Movie in Data Base */}
      <div className="row">
        <LastMovieInDb />
        {/* End content row last movie in Data Base */}
        {/* Genres in DB */}
        <GenresInDb />
      </div>
    </div>
  );
};
