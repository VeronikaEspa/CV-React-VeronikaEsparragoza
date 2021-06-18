import React from 'react';
import '../utils/css/hobbies.estilos.css';
import grupo from '../utils/images/Disfrutando.png'
const Hobbie = () => {
    return (
        <div className=" cuadroRojo blanco tamañoCuadro margenComponentes" id="Hobbies" name="Hobbies">
            <div className="titulo">
            HOBBIES
            </div><div className="gruposC">
                        <img src={grupo} />
                    </div>
                </div>
    )
}

export default Hobbie