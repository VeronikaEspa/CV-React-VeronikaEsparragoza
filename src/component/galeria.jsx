import React from 'react';
import Imagen1 from '../utils/images/focus.svg';
import Imagen2 from '../utils/images/mensaje.svg';

const Galeria = () => {
    return (
        <div className="Galeria">
            <h1>Seccion galeria</h1>
            <a name="galeria" id="galeria"></a>
            <div className="ContainerImages">
                <div className="Imagen1">
                    <img src={Imagen1} alt="hola"/>
                </div>
                <div className="Imagen2">
                <img src={Imagen2} alt="hola"/>
                </div>
            </div>
        </div>
    )
}

export default Galeria