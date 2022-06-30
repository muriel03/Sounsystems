import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productApi";
import { Products } from "../ContentRowTop/Products";

export const DetailProduct = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [id]);
  console.log(data);

  return (
    <div className="col-lg-6 mb-4"> 
      <div className="card-body">
        <h1 className="card-title">Detalle del producto</h1> 
        {data && (
          //if(data){}
          <Products
            image={data.route + data.product.img}
            id={data.product.id}
            hideDetailLink
            name={data.product.name}
            price={data.product.price}
            discount={data.product.discount}
            description={data.product.description}
          />
        )}
        {!data && <h3>Cargando el detalle del producto</h3>}
      </div>
    </div>
  );
};
