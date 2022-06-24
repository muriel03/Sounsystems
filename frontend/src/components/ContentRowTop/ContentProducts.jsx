import React from "react";
import { MoviesBox } from "./MoviesBox";

export const ContentRowMovies = () => {

  const rowMovies = [{
    titulo: "Productos en stock",
    cifra: 21,
    colorBorde: "#4e73df",
    icono: "hola"
  },
  {
    titulo: "Total categrías por productos",
    cifra: 79,
    colorBorde: "#1cc88a",
    icono: "hola"
  },
  {
    titulo: "Total de usuarios en la página",
    cifra: 49,
    colorBorde: "#f6c23e",
    icono: "hola"
  }]


  return (
    <div className="row">
      {rowMovies.map((movie, index) => (
        <MoviesBox titulo={movie.titulo} cifra={movie.cifra} colorBorde={movie.colorBorde} icono={movie.icono} key={index}/>
      ))}
    </div>
  );
};
