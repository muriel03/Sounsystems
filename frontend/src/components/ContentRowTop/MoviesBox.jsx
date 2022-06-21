import React from "react";
import PropTypes from 'prop-types';

export const MoviesBox = ({titulo="Peliculas en base de datos", cifra=100, colorBorde = "#000000", icono="Hola"}) => {
  
    return (
    <div className="col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2" style={{borderLeftColor: colorBorde}}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{color: colorBorde}}>
                {titulo}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-film fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MoviesBox.propTypes = {
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
    colorBorde: PropTypes.string.isRequired,
    icono: PropTypes.string.isRequired
}