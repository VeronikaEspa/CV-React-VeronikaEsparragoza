import React from 'react';
import {Link} from "react-router-dom";
import '../utils/css/menu.estilos.css';

const Menu = () => {
    return (
        <div className=" fondo_rojo blanco menu">
            <ul className="opcionesMenu">
                <li>Inicio</li>
                <li>Experiencia academica</li>
                <li>Cursos complementarios</li>
                <li>Hobbies</li>
                <li>Habilidades</li>
                <li>Contacto</li>
            </ul>
            <Link to = "/contact">
            <button type="button">Contacto2</button>
            </Link>
            <Link to = "/">
            <button type="button">Inicio</button>
            </Link>
        </div>
    )
}

export default Menu