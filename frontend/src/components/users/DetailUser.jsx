import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/userApi";
import CardUser from "./CardUser";

export default function DetailUser() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUserById(id).then((res) => {
      setData(res);
    });
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="card-header py-3">
        <h1 className="m-0 font-weight-bold text-gray-800">
          Detalle del usuario
        </h1>
      </div>
      <div className="card-columns">
        {data &&(
             <CardUser 
                avatar = {data.user.avatar}
                name = {data.user.name}
                email = {data.user.email}
                hideDetailLink
             />
        )}</div>
    </div>
  );
}
