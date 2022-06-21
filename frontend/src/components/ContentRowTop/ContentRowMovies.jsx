import React from "react";
import { MoviesBox } from "./MoviesBox";

export const ContentRowMovies = () => {

  const rowMovies = [{
    titulo: "Movies in Data Base",
    cifra: 21,
    colorBorde: "#4e73df",
    icono: "hola"
  },
  {
    titulo: "Total awards",
    cifra: 79,
    colorBorde: "#1cc88a",
    icono: "hola"
  },
  {
    titulo: "Actors quantity",
    cifra: 49,
    colorBorde: "#f6c23e",
    icono: "hola"
  }]


  return (
    <div className="row">
      {rowMovies.map(movie => (
        <MoviesBox titulo={movie.titulo} cifra={movie.cifra} colorBorde={movie.colorBorde} icono={movie.icono} />
      ))}
    </div>
  );
};
