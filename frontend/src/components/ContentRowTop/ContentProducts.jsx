import React, { useEffect, useState } from "react";
import { MoviesBox } from "./MoviesBox";
import { getProducts } from "../../services/productApi";
import { getUsers } from "../../services/userApi";

export const ContentRowMovies = () => {
  const [products, setProducts] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(
        {
          titulo: "Productos en la página",
          cifra: data.count,
          colorBorde: "#4e73df",
        }
      );
    });
    getUsers().then((data) => {
      setUsers(
            {
          titulo: "Usuarios registrados",
          cifra: data.count,
          colorBorde: "#60FF47",
        }
      );
    });
  }, []);

  return (
    <div className="row">
      <MoviesBox {...products} />
      <MoviesBox {...users} />
    </div>
  );
};
