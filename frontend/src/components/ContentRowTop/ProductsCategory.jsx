import { useEffect, useState } from "react";
import { getProducts } from "../../services/productApi";
import { Products } from "./Products";

export const ProductsCategory = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getProducts().then(res => setData(res))
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                  Productos
              </h5>
        </div>
          {
            data.product?.map((product, index)=>{
              return(
                <Products title={product.name} image={product.image} description={product.description}/>
              )
            })
          }
      </div>
    </div>
  );
};
