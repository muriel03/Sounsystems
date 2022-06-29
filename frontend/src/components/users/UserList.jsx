import { React, useState, useEffect } from "react";
import { getUsers } from "../../services/userApi";
import CardUser from "./CardUser";

export const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers().then((res) => setData(res.user));
  }, []);

  return (
    <div className="container-fluid">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Usuarios de la Página
        </h5>
      </div>
      <div className="card-columns">
        {data.map((item, i) => {
          return <CardUser
            key = {i}
            id = {item.id}
            avatar = {item.avatar}
            name = {item.name}
            email = {item.email}
          />;
        })}
      </div>
    </div>
  );
};
