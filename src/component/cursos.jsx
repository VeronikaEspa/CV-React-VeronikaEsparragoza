import React from 'react';
import '../utils/css/cursos.estilos.css';
import focus from '../utils/images/focus.svg'

const Cursos = () => {
    return (
        <div className="cursos margen_izquierdo" id="Cursos" name="Cursos">
            <div>
                <div className="titulo">
                    Cursos Complementarios
                </div>
                <div className="parrafo">
            *Ea non amet laboris proident sunt.

*Ullamco occaecat tempor mollit esse elit qui non voluptate tempor. 

*Voluptate ipsum aute enim id. 

*Occaecat enim sint nulla sint in elit consequat tempor enim ex id consequat elit.

*Cupidatat ut laboris veniam sint do quis sit sunt dolor deserunt.
            </div></div>
            <div className="imagen1">
            <img src={focus} />
            </div>
        </div>
    )
}

export default Cursos