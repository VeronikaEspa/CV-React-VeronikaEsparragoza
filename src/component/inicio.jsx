import React from 'react';
import '../utils/css/inicio.estilos.css';
import chicaDocumentos from '../utils/images/chicaDocumentos.svg'
const Inicio = () => {
    return (
        <div className="todoInicio margen_izquierdo">
        <div className="rojo">
            <div className="nombre">
            Veronika Alexandra Esparragoza Molina
            </div>
            <div className="profesion">
                Desarrollador Front-End
            </div>
        </div>
        <div className="imagen1">
            <img src={chicaDocumentos} />
        </div>
        </div>
    )
}

export default Inicio