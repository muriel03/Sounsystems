import { Link } from "react-router-dom";

export const Products = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={props.image}
          alt="Product IMG"
        />
        <div className="card-body">
          <h3>{props.title}</h3>
          <div>
            <strong>{props.name}</strong>
          </div>
          <p className="card-text">{props.description}</p>
          <div>
            <br />
            {props.discount > 0 && (
              <>
                <p>
                  <strong>
                    <del>${props.price} COP</del>
                  </strong>
                </p>
                <p>
                  <strong>%{props.discount} OFF</strong>
                </p>
              </>
            )}
            <strong>
              ${props.price - props.price * (props.discount / 100)} COP
            </strong>
          </div>
        </div>
        {!props.hideDetailLink ? (
          <div className="card-footer">
            <Link to={`/products/${props.id}`}>
              <small className="text-muted">Ver detalles</small>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
