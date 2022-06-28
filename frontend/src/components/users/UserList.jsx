import { React, useState, useEffect } from "react";
import { getUsers } from "../../services/userApi";

export const UserList = () => {
  const [valores, setValores] = useState([]);
  useEffect(() => {
    getUsers().then((res) => setValores(res.user));
    console.log("usuarios", valores);
  }, []);

  return (
    <div class="card-body" >
      <h1 class="card-title">Usuario de la página</h1>
      <div class="card">
        {valores.map((valor) => {
          return (
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-body">{valor.name}</h1>
                  <h3 >{valor.email}</h3>
                  <picture>
                    <img
                      class="card-img-top"
                      src={`http://localhost:3030/images/avatar/${valor.avatar}`}
                      alt=""
                    />
                  </picture>
                  <div class="card-footer">
                    <small class="text-muted">Ver detalles</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
