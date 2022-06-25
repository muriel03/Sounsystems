import {Link} from 'react-router-dom';

export const Products = (props) => {
  return (
    
    <div class="col">
      <div class="card h-100">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={props.image}
          alt="Product IMG"
        />
        <div class="card-body">
          <h3>{props.title}</h3>
          <p class="card-text">{props.description}</p>
        </div>
        <div class="card-footer">
         <Link to={`/products/${props.id}`}>
         <small class="text-muted">Ver detalle</small>
         </Link>
          
        </div>
      </div>
    </div>
  );
};
