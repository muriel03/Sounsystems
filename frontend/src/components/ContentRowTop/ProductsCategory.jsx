import { useEffect, useState } from "react";
import { getProducts } from "../../services/productApi";
import { Products } from "./Products";

export const ProductsCategory = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getProducts().then((res) => setData(res));
  }, []);

  return (
    <div className="container-fluid">     
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Productos</h5>
        </div>
        <div  class="card-columns">
          {data?.product?.map((product, index) => {
            return (
              <Products
                id={product.id}
                title={product.name}
                image={data.route + product.img}
                description={product.description} 
              />
            );
          })}
        </div>
      
    </div>
  );
};
