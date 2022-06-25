import { useEffect, useState } from "react";
import { getProducts } from "../../services/productApi";
import { ListCategories } from "./ListCategories"; 

export const Categories = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getProducts().then(res => setData(res));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías de la página
          </h5>
        </div>
          {
            data.countByCategory?.map((category, index) => { 
              return(
                <div className="card-body">
                    <div className="row">
                      <ListCategories category={category.name} count={category.cuantity} key={index} />
                    </div>
                </div>
              )
            })
          }
      </div>
    </div>
  );
};
