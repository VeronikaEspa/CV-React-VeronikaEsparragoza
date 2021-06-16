import React from 'react';
import '../utils/css/contacto.estilos.css';
import mensaje from '../utils/images/mensaje.svg';

const Contactame = () => {
    return (
        <div className="contacto_contenido">
        <div className="cuadroNaranja2 blanco tamañoCuadro2">
            <div className="titulo">
            Contactame
            </div>
            <div className="parrafo">
            *Ea non amet laboris proident sunt.

*Ullamco occaecat tempor mollit esse elit qui non voluptate tempor. 

*Voluptate ipsum aute enim id. 

*Occaecat enim sint nulla sint in elit consequat tempor enim ex id consequat elit.

*Cupidatat ut laboris veniam sint do quis sit sunt dolor deserunt.
            </div>
        </div>
        <div className="imagen1">
        <img src={mensaje} />
        </div></div>
    )
}

export default Contactame