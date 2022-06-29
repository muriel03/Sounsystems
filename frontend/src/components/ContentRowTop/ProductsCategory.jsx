import { useEffect, useState } from "react";
import { getProducts } from "../../services/productApi";
import { Products } from "./Products";

export const ProductsCategory = ({ discount = false }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getProducts().then((res) => setData(res));
  }, []);

  return (
    <div className="container-fluid">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Productos con descuento
        </h5>
      </div>
      <div className="card-columns">
        {discount
          ? data.product?.map((product, index) => {
              if (product.discount > 0) {
                return (
                  <Products
                    id={product.id}
                    title={product.name}
                    image={data.route + product.img}
                    price={product.price}
                    discount={product.discount}
                    description={product.description}
                    key={index}
                  />
                );
              }
            })
          : data.product?.map((product, index) => {
              return (
                <Products
                  id={product.id}
                  title={product.name}
                  image={data.route + product.img}
                  price={product.price}
                  discount={product.discount}
                  description={product.description}
                  key={index}
                />
              );
            })}
      </div>
    </div>
  );
};
