import React, { useEffect, useState } from "react";
import { getProductById } from "../../services/productApi";
import { Products } from "../ContentRowTop/Products";

export const DetailProduct = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getProductById().then((res) => {
      console.log(res)
      setData(res)
    });

  }, []);

  //const { id } = useParams();
  return (
    <div className="col-lg-6 mb-4">
      <div class="card-body">
        <h1 class="card-title">Detalle del producto</h1>
        <img src="..." class="card-img-top" alt="..." />
        {
          data?.product?.map((product, index)=>{
            return(
              <Products
                id={product.id}
                name={product.name}
              />

            );
          })
        }
      </div>
    </div>
  );
};
